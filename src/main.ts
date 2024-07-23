import express from 'express';
import { EnvironmentVariables } from './config/env';
import { buildRoutes } from './config/routes';

(async () => {
	const app = express();
	await buildRoutes(app);
	app.listen(EnvironmentVariables.PORT, () => {
		console.log(`Server started at ${EnvironmentVariables.PORT}`);
	});
})();
