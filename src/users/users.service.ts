import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export type User = any;

@Injectable()
export class UsersService {
    // Mock data for Phase 1 only
  private readonly users = [
    // all users have the sam basic hash
    {
      userId: 1,
      username: 'Ben',
      password: 'this-text-will-be-replaces',
      role: 'commander',
    },
    {
      userId: 2,
      username: 'Shlomo',
      password: 'this-text-will-be-replaces',
      role: 'soldier',
    },
  ];

  constructor() {
    // func that remove fake password
    this.hashMockPasswords();
  }

  private async hashMockPasswords() {
    // here create hash created
    const hash = await bcrypt.hash('password123', 10);
    this.users.forEach(u => u.password = hash)
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username)
  }

  async findById(id: number) : Promise<User | undefined> {
    return this.users.find((user) => user.userId === id);
  }
};