import {EdmOnDelete} from './OnDelete';
import {EdmPropertyBase} from '.';
import {EdmReferentialConstraint} from './ReferentialConstraint';

export interface EdmNavigationProperty extends EdmPropertyBase {
	stype: 'Edm.NavigationProperty';
	partner?: string;
	containsTarget?: boolean;
	onDelete?: EdmOnDelete;
	referentialConstraint?: EdmReferentialConstraint[];
}
