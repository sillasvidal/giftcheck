import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Item from '../infra/typeorm/entities/Item';
import IItemsRepository from '../repositories/IItemsRepository';

interface IRequest {
  id: string;
}

@injectable()
class ReserveItemService {
  constructor(
    @inject('ItemsRepository')
    private itemsRepository: IItemsRepository,
  ) { }

  public async execute({ id }: IRequest): Promise<Item> {
    const findItem = await this.itemsRepository.findById(id);

    if (!findItem) {
      throw new AppError('Item does not exists');
    }

    const itemReserved = {
      id: findItem.id,
      name: findItem.name,
      description: findItem.description,
      reserved: !findItem.reserved,
      created_at: findItem.created_at,
      updated_at: findItem.updated_at,
    };

    const item = await this.itemsRepository.save(itemReserved);

    return item;
  }
}

export default ReserveItemService;
