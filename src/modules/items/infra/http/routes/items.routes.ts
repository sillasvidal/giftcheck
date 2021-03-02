import { Router } from 'express';

import ItemsController from '../controller/ItemsController';

const itemsRouter = Router();
const itemsController = new ItemsController();

itemsRouter.post('/', itemsController.create);
itemsRouter.get('/', itemsController.listAll);
itemsRouter.put('/:id', itemsController.reserve);

export default itemsRouter;
