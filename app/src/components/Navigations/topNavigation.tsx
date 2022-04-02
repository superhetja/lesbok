import {TopNavigation as UIKTopNavigation} from '@ui-kitten/components';

type TopNavigationProps = {
	title: string;
}

const TopNavigation = ({title}: TopNavigationProps) => (
	<UIKTopNavigation title={title} alignment='center'/>
)

export default TopNavigation;
