import { type Request, type Response, Router } from 'express';
import Joi from 'joi';
import {
	BaseController,
	type ControllerBuilder,
} from 'src/shared/common/base-controller';
import { validateRequest } from '../../infra/middlewares/validation.middleware';
import { HttpStatus } from '../../shared/types/http-status';
import { type OrderService, buildOrderService } from './service';
import type { CreateOrder } from './types';

export class OrderController extends BaseController {
	constructor(private readonly service: OrderService) {
		super(Router());
	}

	initRoutes(): Router {
		this.router.get('/', this.getAll.bind(this));
		this.router.post(
			'/',
			validateRequest({
				body: Joi.object({
					userEmail: Joi.string().email().optional(),
					amount: Joi.number().required(),
				}),
			}),
			this.createOrder.bind(this),
		);
		return this.router;
	}

	getPrefix(): string {
		return 'orders';
	}

	async getAll(_req: Request, res: Response) {
		const orders = await this.service.getAll();
		res.json(orders?.map((order) => order.toJSON() ?? {}));
	}

	async createOrder(req: Request, res: Response) {
		const createOrder = req.body as CreateOrder;
		await this.service.createOrder(createOrder);
		res.sendStatus(HttpStatus.CREATED);
	}
}

const builder: ControllerBuilder<OrderController> = () =>
	new OrderController(buildOrderService());

export default builder;
