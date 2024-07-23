import { BaseHttpException } from '../common/base-http-exception';
import { HttpStatus } from '../types/http-status';

export class BadRequest extends BaseHttpException {
	constructor(message: string) {
		super({
			message,
			statusCode: HttpStatus.BAD_REQUEST,
		});
	}
}
