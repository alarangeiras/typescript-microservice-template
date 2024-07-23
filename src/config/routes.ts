import { readdir } from 'node:fs/promises';
import type { Express } from 'express';

export async function buildRoutes(app: Express) {
	const contexts = await readdir('./src/contexts');
	for (const context of contexts) {
		const contextFile = await import(`../contexts/${context}/controller.js`);
		const controllerFactory = contextFile.default;
		const controller = controllerFactory();
		app.use(`/${controller.getPrefix()}`, controller.initRoutes());
	}
}
