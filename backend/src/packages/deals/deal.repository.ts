import { type Repository } from '#libs/types/types.js';

import { DealEntity } from './deal.entity.js';
import { type DealModel } from './deal.model.js';

class DealRepository implements Repository {
  private dealModel: typeof DealModel;

  public constructor(userModel: typeof DealModel) {
    this.dealModel = userModel;
  }

  public find(): ReturnType<Repository['find']> {
    return Promise.resolve(null);
  }

  public async findAll(): Promise<DealEntity[]> {
    const deals = await this.dealModel.query().execute();

    return deals.map((it) => DealEntity.initialize(it));
  }

  public async create(entity: DealEntity): Promise<DealEntity> {
    const item = await this.dealModel
      .query()
      .insert(entity.toNewObject())
      .returning('*')
      .execute();

    return DealEntity.initialize(item);
  }

  public update(): ReturnType<Repository['update']> {
    return Promise.resolve(null);
  }

  public delete(): ReturnType<Repository['delete']> {
    return Promise.resolve(true);
  }
}

export { DealRepository };
