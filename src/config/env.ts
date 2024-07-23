import { NodeEnvType } from 'src/enums/node-env';
import z from 'zod';

const envSchema = z.object({
	PORT: z.string().default('3000'),
	NODE_ENV: z.nativeEnum(NodeEnvType).default(NodeEnvType.DEV),
});

export const EnvironmentVariables = envSchema.parse(process.env);
