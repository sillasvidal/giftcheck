import { container } from 'tsyringe';

import IItemsRepository from '@modules/items/repositories/IItemsRepository';
import ItemsRepository from '@modules/items/infra/typeorm/repositories/ItemsRepository';

container.registerSingleton<IItemsRepository>(
  'ItemsRepository',
  ItemsRepository,
);
