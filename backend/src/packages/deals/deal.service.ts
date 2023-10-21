import { type Service } from '#libs/types/types.js';

import { type DealRepository } from './deal.repository.js';
import { type DealEntryGetAllItemResponseDto } from './libs/types/types.js';

class DealService implements Service {
  private dealRepository: DealRepository;

  public constructor(dealRepository: DealRepository) {
    this.dealRepository = dealRepository;
  }

  public find(): ReturnType<Service['find']> {
    return Promise.resolve(null);
  }

  public async findAll(): Promise<{ items: DealEntryGetAllItemResponseDto[] }> {
    const items = await this.dealRepository.findAll();

    return {
      items: items.map((it) => it.toObject()),
    };
  }

  public create(): ReturnType<Service['create']> {
    return Promise.resolve(null);
  }

  public update(): ReturnType<Service['update']> {
    return Promise.resolve(null);
  }

  public delete(): ReturnType<Service['delete']> {
    return Promise.resolve(true);
  }
}

export { DealService };
