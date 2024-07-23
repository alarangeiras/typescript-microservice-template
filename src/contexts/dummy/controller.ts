import { type Request, type Response, Router } from 'express';
import {
	BaseController,
	type ControllerBuilder,
} from 'src/shared/base-controller';

export class DummyController extends BaseController {
	constructor() {
		super(Router());
	}

	initRoutes(): Router {
		this.router.get('/', this.root.bind(this));
		return this.router;
	}

	getPrefix(): string {
		return 'dummy';
	}

	root(req: Request, res: Response) {
		res.json({ message: 'Hello, World!' });
	}
}

const builder: ControllerBuilder<DummyController> = () => new DummyController();

export default builder;
