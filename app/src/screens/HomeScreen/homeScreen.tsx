import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';

function HomeScreen() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<TopNavigation title="MyApp" alignment="center" />
			<Divider />
			<Layout
				style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
			/>
		</SafeAreaView>
	);
}

export default HomeScreen;
