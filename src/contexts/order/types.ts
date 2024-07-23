import type { OrderAttributes } from '../../models/order';

export type CreateOrder = Omit<OrderAttributes, 'id'>;
