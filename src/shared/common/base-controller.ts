import type { Router } from 'express';

export abstract class BaseController {
	constructor(protected readonly router: Router) {}
	abstract initRoutes(): Router;
	abstract getPrefix(): string;
}

export type ControllerBuilder<T> = () => T;
