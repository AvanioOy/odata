interface ParameterSchema {
	type: string;
	nullable?: boolean;
	maxLength?: number;
	precision?: number;
	scale?: number;
	SRID?: number;
	unicode?: boolean;
	defaultValue?: string;
}

export type EdmParameter = Record<string, ParameterSchema>;
