import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../users/user.model';
import { Shift } from '../shifts/shift.model';

@Table
export class Assignment extends Model {
  @ForeignKey(() => User)              // stores the reference id linking to the User table
  @Column
  userId: number;

  @BelongsTo(() => User)               // defines the connection to access the full User object
  user: User;

  @ForeignKey(() => Shift)
  @Column
  shiftId: number;

  @BelongsTo(() => Shift)
  shift: Shift;

  @Column({ defaultValue: 'assigned' })
  status: string;
}