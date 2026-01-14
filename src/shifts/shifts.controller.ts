import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('shifts')
export class ShiftsController {
    // this line protected by JWT - requires a valid token to access
    @UseGuards(AuthGuard('jwt'))
    @Get()
    getAllShifts() {
        return [
            {id: 1, name: 'Morning Guard', time: '08:00 - 12:00'}, 
            {id: 2, name: 'Night Guard', time: '20:00 - 00:00'}
        ];
    }

    createShift() {
        return { message: 'Shift created succssefully'}
    }
}
