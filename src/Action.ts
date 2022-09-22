import {EdmParameter} from './interfaces/Parameter';
import {EdmReturnType} from './interfaces/ReturnType';

export interface EdmAction {
	name: string;
	isBound: boolean;
	entitySetPath?: string;
	parameter?: EdmParameter;
	returnType?: EdmReturnType;
}
