import {AbstractEdmClass} from './interfaces';
import {EdmEntrySet} from './EntrySet';
import {EdmSingleton} from './Singleton';
import {EdmNamespace} from './Namespace';

type EdmEntityContainerProperties = {
	name: string;
	namespace: EdmNamespace;
};

type ContainerItem<T extends Record<string, unknown> = Record<string, unknown>> = EdmEntrySet | EdmSingleton<T>;

export class EdmEntityContainer<T extends Record<string, unknown> = Record<string, unknown>> extends AbstractEdmClass {
	public readonly props: EdmEntityContainerProperties;
	public readonly items: ContainerItem<T>[];
	constructor(items: ContainerItem<T>[], props: EdmEntityContainerProperties) {
		super(props.name, props.namespace);
		this.props = props;
		this.items = items;
		this.props.namespace.addType(this);
	}
	public toXMLSchema(doc: XMLDocument): Element {
		const container = doc.createElement('EntityContainer');
		container.setAttribute('Name', this.props.name);
		this.items.forEach((item) => container.appendChild(item.toXMLSchema(doc)));
		return container;
	}
}
