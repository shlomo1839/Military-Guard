import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Roles, Role } from '../auth/roles.decorator';
import { AssignmentsService } from './assignments.service';
import { CreateAssignmentDto } from './dto/create-assignments.tdo';


@Controller('assignments')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class AssignmentsController {

    constructor(private readonly assignmentsService: AssignmentsService) {}

    @Get()
    getUserAssignment(@Request() req) {
        // The service handles filtering based on user role/ID
        return this.assignmentsService.findAll(req.user);
    }

    // Only Commander can assign soldiers to shifts
    @Roles(Role.Commander)
    @Post()
    createAssignment(@Body() createAssignmentDto: CreateAssignmentDto) {
        return this.assignmentsService.create(createAssignmentDto);
    }
}
