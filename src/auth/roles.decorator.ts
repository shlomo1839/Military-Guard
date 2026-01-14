import { SetMetadata } from '@nestjs/common';

export enum Role {
  Commander = 'commander',
  Soldier = 'soldier',
}

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);

