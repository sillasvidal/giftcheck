import { inject, injectable } from 'tsyringe';
import Item from '../infra/typeorm/entities/Item';
import IItemsRepository from '../repositories/IItemsRepository';

@injectable()
class ListAllItemService {
  constructor(
    @inject('ItemsRepository')
    private itemsRepository: IItemsRepository,
  ) { }

  public async execute(): Promise<Item[] | undefined> {
    const items = await this.itemsRepository.listAll();

    return items;
  }
}

export default ListAllItemService;
