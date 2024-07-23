import { readdir } from 'node:fs/promises';
import { Sequelize } from 'sequelize';
import { isTest } from 'src/shared/helpers/env.helper';
import { getGlobal } from '../../shared/helpers/global.helper';
import { EnvironmentVariables } from './env';

const global = getGlobal();

export async function initDB() {
	let dbUrl = EnvironmentVariables.DB_URL;
	if (isTest()) {
		dbUrl = EnvironmentVariables.DB_URL_TEST;
	}
	global.sequelize = new Sequelize(dbUrl, { logging: false });

	const models = await readdir('./src/models');
	for (const model of models) {
		const contextFile = await import(`../../models/${model}`);
		const exportDefault = contextFile.default;
		exportDefault(global.sequelize);
	}
}
