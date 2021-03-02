import { inject, injectable } from 'tsyringe';
import Item from '../infra/typeorm/entities/Item';
import IItemsRepository from '../repositories/IItemsRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateItemService {
  constructor(
    @inject('ItemsRepository')
    private itemsRepository: IItemsRepository,
  ) { }

  public async execute({ name, description }: IRequest): Promise<Item> {
    const item = await this.itemsRepository.create({
      name,
      description,
      reserved: false,
    });

    return item;
  }
}

export default CreateItemService;
