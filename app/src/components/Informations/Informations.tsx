import React from 'react';
import { Text } from '@ui-kitten/components';
import { View } from 'react-native';

function Informations() {
	return (
		<>
			<View style={{ alignItems: 'center' }}>
				<View style={{ padding: 10 }}>
					<Text style={{ fontSize: 20, fontWeight: 'bold' }}>Heimalestur</Text>
					<Text style={{ fontSize: 16, paddingTop: 10 }}>
						Nemendur lesa í 15 mínútur í senn. Þau lesa eins margar blaðsíður og
						þau komast yfir á þessum 15 mínútum. Nauðsynlegt er að þau lesi
						hverja blaðsíðu 2x, sérstaklega ef þau þurfa að æfa lesskilning,
						orðaforða eða hraða.
					</Text>
				</View>
			</View>
			<View style={{ padding: 10 }}>
				<Text style={{ fontSize: 20, fontWeight: 'bold' }}>
					Námsmat heimalesturs
				</Text>
				<Text style={{ fontSize: 16, paddingTop: 10 }}>
					Námsmat fer eftir þeim skiptum sem nemendur lesa heima í hverjum
					mánuði.
				</Text>
				<View style={{ alignItems: 'center' }}>
					<Text style={{ color: '#3399FF', paddingTop: 10 }}>
						21-28x: Framúrskarandi
					</Text>
					<Text style={{ color: '#00ff0d' }}>16-20x: Hæfni náð</Text>
					<Text style={{ color: '#FFCC00' }}>12-15x: Á góðri leið</Text>
					<Text style={{ color: '#ff9200' }}>7-11x: Þarfnast þjálfunar</Text>
					<Text style={{ color: '#ff0000' }}>0-6x: Hæfni ekki náð</Text>
				</View>
				<Text style={{ fontSize: 20, fontWeight: 'bold', paddingTop: 10 }}>
					Mikilvægi heimalesturs
				</Text>
				<View style={{}}>
					<Text style={{ paddingTop: 10, alignItems: 'center' }}>
						Mjög mikilvægt er að nemendur þjálfi sig heima í lestri. Lestur er
						undirstaða af öllu námi og því er mikilvægt að nemendur fái sem
						mestu æfingu í lestri. Nemendur þurfa því að æfa sig heima og í
						skólanum, nemendur þurfa mismikla æfingu til þess að ná
						lestrarmarkmiðum og því er best að hafa samband við kennara ef
						áhyggjur kunna að vakna varðandi lestrargetu nemenda.
					</Text>
				</View>
			</View>
		</>
	);
}

export default Informations;
