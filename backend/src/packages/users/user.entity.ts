import { type Entity } from '#libs/types/types.js';

class UserEntity implements Entity {
  private id: number | null;

  private createdAt: Date | null;

  private updatedAt: Date | null;

  private email: string;

  private name: string;

  private passwordHash: string;

  private passwordSalt: string;

  private constructor({
    id,
    email,
    name,
    passwordHash,
    passwordSalt,
    createdAt,
    updatedAt,
  }: {
    id: number | null;
    email: string;
    name: string;
    passwordHash: string;
    passwordSalt: string;
    createdAt: Date | null;
    updatedAt: Date | null;
  }) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.passwordHash = passwordHash;
    this.passwordSalt = passwordSalt;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public static initialize({
    id,
    email,
    name,
    passwordHash,
    passwordSalt,
    createdAt,
    updatedAt,
  }: {
    id: number;
    email: string;
    name: string;
    passwordHash: string;
    passwordSalt: string;
    createdAt: Date;
    updatedAt: Date;
  }): UserEntity {
    return new UserEntity({
      id,
      email,
      name,
      passwordHash,
      passwordSalt,
      createdAt,
      updatedAt,
    });
  }

  public static initializeNew({
    email,
    name,
    passwordHash,
    passwordSalt,
  }: {
    email: string;
    name: string;
    passwordHash: string;
    passwordSalt: string;
  }): UserEntity {
    return new UserEntity({
      id: null,
      email,
      name,
      passwordHash,
      passwordSalt,
      createdAt: null,
      updatedAt: null,
    });
  }

  public toObject(): {
    id: number;
    email: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  } {
    return {
      id: this.id as number,
      email: this.email,
      name: this.name,
      createdAt: this.createdAt as Date,
      updatedAt: this.updatedAt as Date,
    };
  }

  public toNewObject(): {
    email: string;
    name: string;
    passwordHash: string;
    passwordSalt: string;
  } {
    return {
      email: this.email,
      name: this.name,
      passwordHash: this.passwordHash,
      passwordSalt: this.passwordSalt,
    };
  }
}

export { UserEntity };
