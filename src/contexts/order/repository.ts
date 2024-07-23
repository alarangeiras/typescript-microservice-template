import { OrderModel } from 'src/models/order';
import { BaseRepository } from 'src/shared/common/base-repository';

export class OrderRepository extends BaseRepository<OrderModel> {
	constructor() {
		super(OrderModel);
	}
}

export function buildOrderRepository() {
	return new OrderRepository();
}
