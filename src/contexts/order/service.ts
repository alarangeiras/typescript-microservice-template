import { type OrderRepository, buildOrderRepository } from './repository';
import type { CreateOrder } from './types';

export class OrderService {
	constructor(private readonly repository: OrderRepository) {}

	async getAll(limit = 10) {
		return this.repository.find({
			limit,
		});
	}
	async createOrder(createOrder: CreateOrder) {
		this.repository.create({
			...createOrder,
		});
	}
}

export function buildOrderService() {
	return new OrderService(buildOrderRepository());
}
