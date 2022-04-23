import {TopNavigation as UIKTopNavigation} from '@ui-kitten/components';
import { Settings } from "react-native-feather"

type TopNavigationProps = {
	title: string;
}

const TopNavigation = ({title}: TopNavigationProps) => (
	<UIKTopNavigation
		title={title} alignment='center'
		accessoryLeft={<Settings/>}

	/>

)

export default TopNavigation;
