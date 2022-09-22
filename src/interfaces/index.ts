import {ToXmlSchema} from './xmlFunction';
import {EdmNamespace} from '../Namespace';
import {EdmType} from './EdmTypes';

export abstract class AbstractEdmClass implements ToXmlSchema {
	public readonly name: string;
	public readonly namespace: EdmNamespace;
	constructor(name: string, namespace: EdmNamespace) {
		this.name = name;
		this.namespace = namespace;
	}
	public abstract toXMLSchema(doc: XMLDocument): Element;
}

export interface EdmPropertyBase {
	stype: 'Edm.Property' | 'Edm.NavigationProperty';
	type: EdmType | AbstractEdmClass | [AbstractEdmClass];
	nullable?: boolean;
}
