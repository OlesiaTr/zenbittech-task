import { type Modifiers, type QueryBuilder } from 'objection';

import {
  AbstractModel,
  DatabaseTableName,
} from '#libs/packages/database/database.js';

class UserModel extends AbstractModel {
  public email!: string;

  public passwordHash!: string;

  public passwordSalt!: string;

  public name!: string;

  public static override get tableName(): string {
    return DatabaseTableName.USERS;
  }

  public static override get modifiers(): Modifiers<QueryBuilder<UserModel>> {
    return {
      withoutPassword(builder): QueryBuilder<UserModel> {
        return builder.select(
          'id',
          'email',
          'name',
          'created_at',
          'updated_at',
        );
      },
    };
  }
}

export { UserModel };
