import type { GlobalType } from 'src/shared/types/global.type';

export function getGlobal(): GlobalType {
	return global as unknown as GlobalType;
}
