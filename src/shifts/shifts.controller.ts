import { Controller, Get, Post, Body, UseGuards, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Roles, Role } from '../auth/roles.decorator';
import { ShiftsService } from './shifts.service';
import { CreateShiftDto } from './dto/create-shift.dto';

@Controller('shifts')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class ShiftsController {
    constructor(private readonly shiftsService: ShiftsService) {}

    @Get()
    getAllShifts() {
        return this.shiftsService.findAll();
    }

    // only commander can create shifts
    @Roles(Role.Commander)
    @Post()
    createShift(@Body() createShiftDto: CreateShiftDto) {
        return this.shiftsService.create(createShiftDto);
    }

    @Roles(Role.Commander)
    @Delete(':id')
    deleteShift(@Param('id', ParseIntPipe) id: number) {   // ParseIntPipe - vlidate the id and convert the if=d from text to number
        return this.shiftsService.remove(id);
    }
}
