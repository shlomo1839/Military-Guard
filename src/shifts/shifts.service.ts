import { Injectable } from '@nestjs/common';
import { CreateShiftDto } from './dto/create-shift.dto';

@Injectable()
export class ShiftsService {
  private shifts: { id: number; name: string; time: string }[] = [];
  private idCounter = 1;

  findAll() {
    return this.shifts;
  }

  create(createShiftDto: CreateShiftDto) {
    const newShift = {
      id: this.idCounter++,
      ...createShiftDto,
    };
    this.shifts.push(newShift);
    return newShift;
  }

  remove(id: number) {
    const index = this.shifts.findIndex(s => s.id === id);
    if (index === -1) throw new Error('Shift not found');
    this.shifts.splice(index, 1);
    return { message: 'Shift deleted' };
  }
};