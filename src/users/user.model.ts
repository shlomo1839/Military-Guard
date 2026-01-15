import { Column, Model, Table, HasMany, DataType } from 'sequelize-typescript';
import { Assignment } from '../assignments/assignments.model.js';

@Table
export class User extends Model {
  @Column
  username: string;

  @Column
  password: string; // next: store the hashed password

  @Column({
    type: DataType.ENUM('commander', 'soldier'),
    defaultValue: 'soldier',
  })
  role: string;

  // user can have many assignments
  @HasMany(() => Assignment)
  assignments: Assignment[];
}
