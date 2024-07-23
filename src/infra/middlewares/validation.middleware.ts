import type { NextFunction, Request, Response } from 'express';
import type Joi from 'joi';
import { BadRequest } from '../../shared/exceptions/bad-request.exception';

export type ValidationProps = {
	body?: Joi.Schema;
	query?: Joi.Schema;
};

export function validateRequest(props: ValidationProps) {
	return (req: Request, _res: Response, next: NextFunction) => {
		if (props.body) {
			const body = req.body;
			const { error } = props.body.validate(body);
			if (error) {
				throw new BadRequest(error.message);
			}
		}
		if (props.query) {
			const body = req.query;
			const { error } = props.query.validate(body);
			if (error) {
				throw new BadRequest(error.message);
			}
		}
		next();
	};
}
