import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateItemService from '@modules/items/services/CreateItemService';
import ListAllItemService from '@modules/items/services/ListAllItemsService';
import ReserveItemService from '@modules/items/services/ReserveItemService';

export default class ItemsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createItem = container.resolve(CreateItemService);

    const item = await createItem.execute({
      name,
      description,
    });

    return response.json(item);
  }

  public async listAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const listAllItems = container.resolve(ListAllItemService);

    const items = await listAllItems.execute();

    return response.json(items);
  }

  public async reserve(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const reserveItem = container.resolve(ReserveItemService);

    const itemReserved = await reserveItem.execute({ id });

    return response.json(itemReserved);
  }
}
