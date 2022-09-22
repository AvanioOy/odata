import {ToXmlSchema} from './interfaces/xmlFunction';

export class EdmNamespace implements ToXmlSchema {
	public readonly namespace: string;
	public readonly alias: string;
	public readonly elements: ToXmlSchema[] = [];

	constructor(namespace: string, alias: string) {
		this.namespace = namespace;
		this.alias = alias;
	}
	public addType(type: ToXmlSchema) {
		this.elements.push(type);
	}
	public toXMLSchema(doc: XMLDocument): Element {
		const edmXml = doc.createElementNS('http://docs.oasis-open.org/odata/ns/edmx', 'edmx:Edmx');
		edmXml.setAttribute('Version', '4.0');
		const edmDataServices = doc.createElement('edmx:DataServices');
		edmXml.appendChild(edmDataServices);

		const schema = doc.createElementNS('http://docs.oasis-open.org/odata/ns/edm', 'Schema');
		schema.setAttribute('Namespace', this.namespace);
		schema.setAttribute('Alias', this.alias);
		this.elements.forEach((e) => schema.appendChild(e.toXMLSchema(doc)));
		edmDataServices.appendChild(schema);
		return edmXml;
	}
}
