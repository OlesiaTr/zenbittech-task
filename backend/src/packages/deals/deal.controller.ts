import { APIPath } from '#libs/enums/enums.js';
import {
  type APIHandlerResponse,
  BaseController,
} from '#libs/packages/controller/controller.js';
import { HTTPCode } from '#libs/packages/http/http.js';
import { type Logger } from '#libs/packages/logger/logger.js';

import { type DealService } from './deal.service.js';
import { DealsApiPath } from './libs/enums/enums.js';

class DealController extends BaseController {
  private dealService: DealService;

  public constructor(logger: Logger, dealService: DealService) {
    super(logger, APIPath.DEALS);

    this.dealService = dealService;

    this.addRoute({
      path: DealsApiPath.ROOT,
      method: 'GET',
      handler: () => this.findAll(),
    });
  }

  private async findAll(): Promise<APIHandlerResponse> {
    return {
      status: HTTPCode.OK,
      payload: await this.dealService.findAll(),
    };
  }
}

export { DealController };
