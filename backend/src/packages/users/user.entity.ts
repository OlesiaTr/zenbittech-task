import { type Entity } from '#libs/types/types.js';

class UserEntity implements Entity {
  private id: number | null;

  private createdAt: Date | null;

  private updatedAt: Date | null;

  private email: string;

  private name: string;

  public constructor({
    id,
    email,
    name,
    createdAt,
    updatedAt,
  }: {
    id: number | null;
    email: string;
    name: string;
    createdAt: Date | null;
    updatedAt: Date | null;
  }) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public static initialize({
    id,
    email,
    name,
    createdAt,
    updatedAt,
  }: {
    id: number | null;
    email: string;
    name: string;
    createdAt: Date | null;
    updatedAt: Date | null;
  }): UserEntity {
    return new UserEntity({
      id,
      email,
      name,
      createdAt,
      updatedAt,
    });
  }

  public static initializeNew({
    email,
    name,
  }: {
    email: string;
    name: string;
  }): UserEntity {
    return new UserEntity({
      id: null,
      email,
      name,
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
  } {
    return {
      email: this.email,
      name: this.name,
    };
  }
}

export { UserEntity };
