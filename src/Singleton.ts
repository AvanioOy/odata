import {EdmComplexType} from './ComplexType';
import {EdmEntityType} from './EntityType';
import {AbstractEdmClass} from './interfaces';
import {EdmNamespace} from './Namespace';

type SingletonElement<T extends Record<string, unknown> = Record<string, unknown>> = EdmComplexType<T> | EdmEntityType<T>;

export class EdmSingleton<T extends Record<string, unknown> = Record<string, unknown>> extends AbstractEdmClass {
	public element: SingletonElement<T>;
	public stype = 'Edm.Singleton';
	public namespace: EdmNamespace;
	constructor(name: string, element: SingletonElement<T>, namespace: EdmNamespace) {
		super(name, namespace);
		this.element = element;
		this.namespace = namespace;
		this.namespace.addType(this);
	}
	public toXMLSchema(doc: XMLDocument): Element {
		const singleton = doc.createElement('Singleton');
		singleton.setAttribute('Name', this.name);
		singleton.setAttribute('Type', `${this.element.namespace.namespace}.${this.element.name}`);
		return singleton;
	}
}
