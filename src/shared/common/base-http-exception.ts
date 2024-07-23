import type { HttpStatus } from '../types/http-status';

export type BaseExceptionProps = {
	message: string;
	statusCode: HttpStatus;
};

export class BaseHttpException extends Error {
	declare statusCode: number;
	constructor(props: BaseExceptionProps) {
		super(props.message);
		this.statusCode = props.statusCode;
		this.name = this.constructor.name;
	}

	toJson() {
		return {
			name: this.name,
			message: this.message,
			statusCode: this.statusCode,
		};
	}
}
