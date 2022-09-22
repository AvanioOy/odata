export interface EdmPropertyRef<T extends Record<string, unknown>> {
	name: keyof T;
	alias?: string;
}
