import { Injectable } from '@nestjs/common';
import { CreateAssignmentDto } from './dto/create-assignment.dto';


@Injectable()
export class AssignmentsService {
  private assignments: any[] = [];
  private idCounter = 1;

  // שcommander sees all, Soldier sees only their own
  findAll(user: any) {
    if (user.role === 'commander') {
      return this.assignments;
    }
    return this.assignments.filter(a => a.userId === user.userId);
  }

  create(createAssignmentDto: CreateAssignmentDto) {
    const newAssignment = {
      id: this.idCounter++,
      ...createAssignmentDto,
      status: 'assigned',
    };
    this.assignments.push(newAssignment);
    return newAssignment;
  }
}