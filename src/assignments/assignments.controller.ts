import { Controller, Get, UseGuards } from '@nestjs/common';
import {AuthGuard } from '@nestjs/passport';


@Controller('assignments')
export class AssignmentsController {

    @UseGuards(AuthGuard('jwt'))
    @Get()
    getUserAssignment() {
        return {
            message: 'Here are your assiginments',
            assignments: [
                {shifted: 1, status: 'assigned'}
            ]
        }
    }
}
