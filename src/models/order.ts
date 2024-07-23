import {
	type CreationOptional,
	DataTypes,
	type InferAttributes,
	type InferCreationAttributes,
	Model,
	type Sequelize,
} from 'sequelize';
import type { BaseModel } from 'src/shared/common/base-model';

export type OrderAttributes = {
	id: number;
	userEmail?: string;
	amount: number;
};

export class OrderModel
	extends Model<
		InferAttributes<OrderModel>,
		InferCreationAttributes<OrderModel>
	>
	implements BaseModel<OrderAttributes>
{
	declare id: CreationOptional<number>;
	declare userEmail: CreationOptional<string>;
	declare amount: number;

	public toJSON(): OrderAttributes {
		return {
			id: this.id,
			userEmail: this.userEmail,
			amount: this.amount,
		};
	}
}

export default (sequelize: Sequelize) => {
	OrderModel.init(
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			userEmail: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			amount: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			sequelize,
			underscored: true,
			timestamps: true,
			tableName: 'orders',
		},
	);
	return OrderModel;
};
