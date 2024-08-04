import express from 'express';
import { initDB } from './infra/config/db';
import { EnvironmentVariables } from './infra/config/env';
import { initRoutes } from './infra/config/routes';

async function main() {
	await initDB();
	const app = express();
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	await initRoutes(app);
	app.listen(EnvironmentVariables.PORT, () => {
		console.log(
			`Server started at http://127.0.0.1:${EnvironmentVariables.PORT}`,
		);
	});
}

main();
