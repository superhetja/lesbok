import {  IndexPath, Select, SelectGroup, SelectItem } from "@ui-kitten/components";
import React from "react";
import { useController, UseControllerProps, useFormContext } from "react-hook-form";
import { StyleSheet } from "react-native";
import { DAYS } from "../../utils/constants";
import { NotificationData } from "../../utils/types";

interface DateCheckerProps extends UseControllerProps {
}

const DateChecker = ({
	name,
	rules
}: DateCheckerProps) => {
	const formContext = useFormContext();

	const { field } = useController({name, rules})

	const displayValue = field.value.map((index: IndexPath) => {
		return DAYS[index.row]
	})

		return (
			<>
			<Select
				multiSelect={true}
				selectedIndex={field.value}
				onSelect={index => field.onChange(index as IndexPath[])}
				value={displayValue.join(', ')}
			>
				<SelectGroup title='Endurtaka alla daga'>
					{DAYS.map(day => (
						<SelectItem title={day} key={day}/>
					))}

				</SelectGroup>
			</Select>
			</>
	)
}

export default DateChecker;
export const styles = StyleSheet.create({
  group: {
    marginVertical: 4,
  },
  option: {
    marginVertical: 4,
    marginHorizontal: 12,
  },
});
