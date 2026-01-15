import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Assignment } from './assignments.model'
import { CreateAssignmentDto } from './dto/create-assignments.tdo'

@Injectable()
export class AssignmentsService {
  constructor(
    @InjectModel(Assignment)
    private assignmentModel: typeof Assignment,
  ) {}

  async findAll(user: any) {
    if (user.role === 'commander') {
      // Commander sees all assignments
      return this.assignmentModel.findAll();
    }
    // soldier sees only their own
    return this.assignmentModel.findAll({ where: { userId: user.userId } });
  }

  async create(createAssignmentDto: CreateAssignmentDto) {
    return this.assignmentModel.create({
      ...createAssignmentDto,
      status: 'assigned',
    });
  }
}