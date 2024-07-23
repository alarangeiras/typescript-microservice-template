import type {
	CreationAttributes,
	FindOptions,
	Model,
	ModelStatic,
} from 'sequelize';

export class BaseRepository<T extends Model> {
	constructor(private model: ModelStatic<T>) {}

	async findById(id: number) {
		return this.model.findByPk<T>(id);
	}

	async find(options?: FindOptions) {
		return this.model.findAll<T>(options);
	}

	async create(object: CreationAttributes<T>) {
		return this.model.create(object);
	}
}
