import { Injectable } from '@nestjs/common';

export type User = any;
@Injectable()
export class UsersService {
    // Mock data for Phase 1 only
  private readonly users = [
    {
      userId: 1,
      username: 'Ben',
      password: '1234', // In the next phase we will encrypt this
      role: 'commander',
    },
    {
      userId: 2,
      username: 'Shlomo',
      password: '12345',
      role: 'soldier',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username)
  }
}
