import { DataTypes, type QueryInterface, type Sequelize } from 'sequelize';

export default {
	async up(queryInterface: QueryInterface, _Sequelize: Sequelize) {
		await queryInterface.createTable('orders', {
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			user_email: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			amount: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			created_at: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			updated_at: {
				type: DataTypes.DATE,
				allowNull: false,
			},
		});
	},

	async down(queryInterface: QueryInterface, _Sequelize: Sequelize) {
		await queryInterface.dropTable('orders');
	},
};
