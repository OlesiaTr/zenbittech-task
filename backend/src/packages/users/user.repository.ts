import { type Repository } from '#libs/types/types.js';
import { UserEntity } from '#packages/users/user.entity.js';
import { type UserModel } from '#packages/users/users.js';

import {
  type UserCommonQueryResponse,
  type UserWithPasswordQueryResponse,
} from './libs/types/types.js';
import { UserWithPasswordEntity } from './user-with-password.entity.js';

class UserRepository implements Repository {
  private userModel: typeof UserModel;

  public constructor(userModel: typeof UserModel) {
    this.userModel = userModel;
  }

  public find(): ReturnType<Repository['find']> {
    return Promise.resolve(null);
  }

  public async findAll(): Promise<UserWithPasswordEntity[]> {
    const users = await this.userModel
      .query()
      .select()
      .castTo<UserWithPasswordQueryResponse[]>()
      .execute();

    return users.map((user) => {
      return UserWithPasswordEntity.initialize({
        id: user.id,
        email: user.email,
        passwordHash: user.passwordHash,
        passwordSalt: user.passwordSalt,
        name: user.name,
        createdAt: new Date(user.createdAt),
        updatedAt: new Date(user.updatedAt),
      });
    });
  }

  public async create(
    entity: UserWithPasswordEntity,
  ): Promise<UserWithPasswordEntity> {
    const { email, passwordSalt, passwordHash, name } = entity.toNewObject();

    const user = await this.userModel
      .query()
      .insert({
        email,
        passwordSalt,
        passwordHash,
        name,
      })
      .returning('*')
      .castTo<UserWithPasswordQueryResponse>()
      .execute();

    return UserWithPasswordEntity.initialize({
      id: user.id,
      email: user.email,
      passwordHash: user.passwordHash,
      passwordSalt: user.passwordSalt,
      name: user.name,
      createdAt: new Date(user.createdAt),
      updatedAt: new Date(user.updatedAt),
    });
  }

  public update(): ReturnType<Repository['update']> {
    return Promise.resolve(null);
  }

  public delete(): ReturnType<Repository['delete']> {
    return Promise.resolve(true);
  }

  public async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await this.userModel
      .query()
      .modify('withoutPassword')
      .findOne({ email })
      .castTo<UserCommonQueryResponse | undefined>();

    if (!user) {
      return null;
    }

    return UserEntity.initialize({
      id: user.id,
      email: user.email,
      name: user.name,
      createdAt: new Date(user.createdAt),
      updatedAt: new Date(user.updatedAt),
    });
  }

  public async findByEmailWithPassword(
    email: string,
  ): Promise<UserWithPasswordEntity | null> {
    const user = await this.userModel
      .query()
      .findOne({ email })
      .castTo<UserWithPasswordQueryResponse | undefined>();
    if (!user) {
      return null;
    }

    return UserWithPasswordEntity.initialize({
      id: user.id,
      email: user.email,
      name: user.name,
      passwordHash: user.passwordHash,
      passwordSalt: user.passwordSalt,
      createdAt: new Date(user.createdAt),
      updatedAt: new Date(user.updatedAt),
    });
  }
}

export { UserRepository };
