import { EnvironmentVariables } from '../../infra/config/env';
import { NodeEnvType } from '../types/node-env';

export function isDev(): boolean {
	return EnvironmentVariables.NODE_ENV === NodeEnvType.DEV;
}

export function isTest(): boolean {
	return EnvironmentVariables.NODE_ENV === NodeEnvType.TEST;
}

export function isProd(): boolean {
	return EnvironmentVariables.NODE_ENV === NodeEnvType.PROD;
}
