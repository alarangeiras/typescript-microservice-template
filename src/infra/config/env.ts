import z from 'zod';
import { NodeEnvType } from '../../shared/types/node-env';

const envSchema = z.object({
	PORT: z.string().default('3000'),
	NODE_ENV: z.nativeEnum(NodeEnvType).default(NodeEnvType.DEV),
	DB_URL: z
		.string({ required_error: 'DB_URL is required' })
		.url()
		.refine((val) => val.startsWith('postgres://'), 'invalid DB_URL value'),
	DB_URL_TEST: z
		.string()
		.url()
		.refine(
			(val) => val?.startsWith('postgres://'),
			'invalid DB_URL_TEST value',
		),
});
export const EnvironmentVariables = envSchema.parse(process.env);
