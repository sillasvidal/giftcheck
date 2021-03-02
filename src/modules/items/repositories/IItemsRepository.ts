import ICreateItemDTO from '../dtos/ICreateItemDTO';
import Item from '../infra/typeorm/entities/Item';

export default interface IItemsRepository {
  create(data: ICreateItemDTO): Promise<Item>;
  findById(id: string): Promise<Item | undefined>;
  listAll(): Promise<Item[]>;
  save(item: Item): Promise<Item>;
}
