import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';

export type UserType = User;

@Injectable()
export class UsersService implements OnModuleInit {
  constructor(
    @InjectModel(User)                         // Injects the specific model repository to allow database
    private userModel: typeof User,
  ) {}

  // Adds sample data to the database for testing
  async onModuleInit() {
    const count = await this.userModel.count();
    if (count === 0) {
      // bulkCreate: sequelize commant to create many kines in one time.
      const hash = await bcrypt.hash('password123', 10);
      await this.userModel.bulkCreate([
        { username: 'commander1', password: hash, role: 'commander' },
        { username: 'soldier1', password: hash, role: 'soldier' },
      ]);
      console.log(' Database created with Initial Users ');
    }
  }

  async findOne(username: string): Promise<User | null> {
    return this.userModel.findOne({ where: { username } });
  }

  async findById(id: number): Promise<User | null> {
    return this.userModel.findByPk(id);
  }
}