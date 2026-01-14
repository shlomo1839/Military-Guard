import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';

export type User = any;

@Module({
  providers: [UsersService],
  exports: [UsersService],// Exports the service to the Auth module
})
export class UsersModule {
  private users = [
    {
      userId: 1,
      username: 'Ben',
      // hashed 'password123'
      password: '$2b$10$S9G/..SOME_HASH_VALUE..', 
      role: 'commander',
    },
    {
      userId: 2,
      username: 'Shlomo',
      password: '$2b$10$S9G/..SOME_HASH_VALUE..',
      role: 'soldier',
    },
  ];

  constructor() {

  }
}
