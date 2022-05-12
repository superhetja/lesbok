import { EvaProp, styled, StyledComponentProps } from "@ui-kitten/components"
import React from "react"
import { Pressable, PressableProps } from "react-native"
import * as Icon from "react-native-feather";

type icons = "settings" | "edit" | "remove" | "close";

interface IconButtonProps extends StyledComponentProps, PressableProps{
	status?: string;
	icon: icons;
}

@styled('IconButton')
export class IconButton extends React.Component<IconButtonProps> {

	render() {
		const { eva, style, icon, ...restProps} = this.props;

		return (
			<Pressable style={[eva?.style, style]} {...restProps}>
				{
					{
						'settings': <Icon.Settings color={eva?.style?.color}/>,
						'edit':  <Icon.Edit2 color={eva?.style?.color}/>,
						'remove':  <Icon.Trash color={eva?.style?.color}/>,
						'close': <Icon.X color={eva?.style?.color} />
					}[icon] || <Icon.Settings color={eva?.style?.color}/>
				}
			</Pressable>
		)
	}
}
