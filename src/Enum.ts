import {EdmNamespace} from './Namespace';
import {AbstractEdmClass} from './interfaces';

export class EdmEnum extends AbstractEdmClass {
	public readonly name: string;
	public readonly enumValues: Record<number, string>;
	constructor(name: string, namespace: EdmNamespace, enumValues: Record<number, string>) {
		super(name, namespace);
		this.name = name;
		this.enumValues = enumValues;
		namespace.addType(this);
	}
	toXMLSchema(doc: XMLDocument): Element {
		const enumType = doc.createElement('EnumType');
		enumType.setAttribute('Name', this.name);
		// store enum names and values to Members
		Object.entries(this.enumValues)
			.map(([value, name]) => {
				const member = doc.createElement('Member');
				member.setAttribute('Name', name);
				member.setAttribute('Value', value);
				return member;
			})
			.forEach((children) => enumType.appendChild(children));
		return enumType;
	}
}
