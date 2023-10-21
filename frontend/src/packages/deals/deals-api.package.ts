import { APIPath, ContentType } from '#libs/enums/enums.js';
import { BaseHttpApi } from '#libs/packages/api/api.js';
import { type HTTP } from '#libs/packages/http/http.js';
import { type Storage } from '#libs/packages/storage/storage.js';

import { DealsApiPath } from './libs/enums/enums.js';
import { type DealEntryGetAllItemResponseDto } from './libs/types/types.js';

type Constructor = {
  baseUrl: string;
  http: HTTP;
  storage: Storage;
};

class DealsApi extends BaseHttpApi {
  public constructor({ baseUrl, http, storage }: Constructor) {
    super({ path: APIPath.DEALS, baseUrl, http, storage });
  }

  public async getAll(): Promise<{ items: DealEntryGetAllItemResponseDto[] }> {
    const response = await this.load(
      this.getFullEndpoint(DealsApiPath.ROOT, {}),
      {
        method: 'GET',
        contentType: ContentType.JSON,
        hasAuth: true,
      },
    );

    return await response.json<{ items: DealEntryGetAllItemResponseDto[] }>();
  }
}

export { DealsApi };
