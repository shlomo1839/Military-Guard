


import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Shift } from './shift.model';
import { CreateShiftDto } from './dto/create-shift.dto';


@Injectable()
export class ShiftsService {
  constructor(
    @InjectModel(Shift)
    private shiftModel: typeof Shift,
  ) {}

   async findAll() {
    return this.shiftModel.findAll();
  }

  create(createShiftDto: CreateShiftDto) {
    return this.shiftModel.create({...CreateShiftDto});
  }

  async remove(id: number) {
    const shift = await this.shiftModel.findByPk(id);
    if (!shift) throw new NotFoundException('Shift not found');
    await shift.destroy();
    return { message: 'this shift deleted' };
  }
};