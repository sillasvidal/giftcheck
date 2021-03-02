import ICreateItemDTO from '@modules/items/dtos/ICreateItemDTO';
import IItemsRepository from '@modules/items/repositories/IItemsRepository';
import { getRepository, Repository } from 'typeorm';
import Item from '../entities/Item';

class ItemsRepository implements IItemsRepository {
  private ormRepository: Repository<Item>;

  constructor() {
    this.ormRepository = getRepository(Item);
  }

  public async create(data: ICreateItemDTO): Promise<Item> {
    const item = this.ormRepository.create(data);

    await this.ormRepository.save(item);

    return item;
  }

  public async findById(id: string): Promise<Item | undefined> {
    const item = await this.ormRepository.findOne(id);

    return item;
  }

  public async listAll(): Promise<Item[]> {
    const items = await this.ormRepository.find();

    return items;
  }

  public async save(item: Item): Promise<Item> {
    const itemSaved = await this.ormRepository.save(item);

    return itemSaved;
  }
}

export default ItemsRepository;
