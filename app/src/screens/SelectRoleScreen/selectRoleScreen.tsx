import React from 'react';
import { Layout } from '@ui-kitten/components';
import { RoleCard } from '../../components/Cards';

function SelectRoleScreen({}) {
	return (
		<Layout>
			<RoleCard role="Teacher" />
			<RoleCard role="Foreldri" />
		</Layout>
	);
}

export default SelectRoleScreen;
