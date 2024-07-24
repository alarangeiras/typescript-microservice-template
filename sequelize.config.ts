import { EnvironmentVariables } from './src/infra/config/env';

module.exports = {
	dialect: 'postgres',
	url: EnvironmentVariables.DB_URL,
};
