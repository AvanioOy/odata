import {EdmEntrySet} from '../EntrySet';
import {EdmSingleton} from '../Singleton';

export interface EntityContainer {
	name: string;
	set: Record<string, EdmEntrySet | EdmSingleton>;
}
