import {  CheckBox, IndexPath, Select, SelectGroup, SelectItem } from "@ui-kitten/components";
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


	const onCheck = (key: number, status:boolean) => {
		if (key < 0) {
			field.onChange(new Array(7).fill(status))
		} else {
			field.value[key] = status
			field.onChange([...field.value])
		}

	}

	const displayValue = field.value.map((index: IndexPath) => {
		return DAYS[index.row]
	})

		return (
			<>
			{/* <Select
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
			<CheckBox key={1} checked={false} onChange={(checked) => onCheck(1, checked)}>Miðvikduagur</CheckBox> */}
				<CheckBox
					indeterminate={true}
					checked={!field.value.some((v :boolean) => v === false)}
					onChange={(checked) => onCheck(-1, checked)}
				>Alla daga
				</CheckBox>
				{
					DAYS.map((day, i) => (
						<CheckBox
							key={i}
							checked={field.value[i]}
							onChange={(checked) => onCheck(i, checked)}
						>
							{day}
						</CheckBox>
					))
				}
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
