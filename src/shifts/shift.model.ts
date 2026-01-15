import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { Assignment } from '../assignments/assignments.model.js';

@Table
export class Shift extends Model {
  @Column
  name: string;

  @Column
  time: string;

  // shift can have many assignments
  @HasMany(() => Assignment)
  assignments: Assignment[];
}