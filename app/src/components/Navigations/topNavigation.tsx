import React from 'react';
import { TopNavigation as UIKTopNavigation } from '@ui-kitten/components';
import { Settings } from 'react-native-feather';

type TopNavigationProps = {
	title: string;
};

function TopNavigation({ title }: TopNavigationProps) {
	return (
		<UIKTopNavigation
			title={title}
			alignment="center"
			accessoryLeft={<Settings />}
		/>
	);
}

export default TopNavigation;
