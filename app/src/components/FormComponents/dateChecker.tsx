import { CheckBox, DatepickerProps } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { UseControllerProps } from "react-hook-form";
import { StyleSheet } from "react-native";
import { Bool } from "reselect/es/types";

interface DateCheckerProps extends UseControllerProps {
	monday: boolean;
	tuesday: boolean;
	wednsday: boolean;
	thursday: boolean;
	friday: boolean;
	saturday: boolean;
	sunday: boolean;
	setMonday: (arg: boolean) => void;
	setTuesday: (arg: boolean) => void;
	setWednsday: (arg: boolean)=> void;
	setThursday: (arg: boolean)=> void;
	setFriday: (arg: boolean)=> void;
	setSaturday: (arg: boolean)=> void;
	setSunday: (arg: boolean)=> void;
}

const DateChecker = ({
	monday,
	tuesday,
	wednsday,
	thursday,
	friday,
	saturday,
	sunday,
	setMonday,
	setTuesday,
	setWednsday,
	setThursday,
	setFriday,
	setSaturday,
	setSunday,
}: DateCheckerProps) => {
	const [allChecked, setAllChecked] = useState(true);
	const [indeterminate, setIndeterminate] = useState(false);
  // const [monday, setMonday] = useState(true);
  // const [tuesday, setTuesday] = useState(true);
	// const [wednsday, setWednsday] = useState(true);
	// const [thursday, setThursday] = useState(true);
	// const [friday, setFriday] = useState(true);
	// const [saturday, setSaturday] = useState(true);
	// const [sunday, setSunday] = useState(true);

	const onGroupCheckedChange = (checked: boolean) => {
    setMonday(checked);
    setTuesday(checked);
    setWednsday(checked);
		setThursday(checked);
    setFriday(checked);
    setSaturday(checked);
		setSunday(checked);
		setAllChecked(checked)
  };

	useEffect(() => {
		const someChecked = (sunday || monday ||tuesday || wednsday ||thursday ||friday ||saturday)
			// const everyChecked = states.every((item: any) => item === true);
			const everyChecked = (sunday && monday && tuesday && wednsday && thursday && friday && saturday)
			if (someChecked && !everyChecked) {
				setAllChecked(true);
				setIndeterminate(true);
			} else if (!someChecked && !everyChecked) {
				setAllChecked(false);
				setIndeterminate(false);
			} else if (everyChecked) {
				setAllChecked(true);
				setIndeterminate(false);
			}
	}, [monday, tuesday, wednsday, thursday, friday, saturday, sunday])
		return (
			<>
		  <CheckBox
        style={styles.group}
        checked={allChecked}
        indeterminate={indeterminate}
        onChange={onGroupCheckedChange}>
        Dagar
      </CheckBox>
      <CheckBox
        style={styles.option}
        checked={monday}
        onChange={setMonday}>
        Mánudagur
      </CheckBox>
			<CheckBox
        style={styles.option}
        checked={tuesday}
        onChange={setTuesday}>
        Þriðjudagur
      </CheckBox>
			<CheckBox
        style={styles.option}
        checked={wednsday}
        onChange={setWednsday}>
        Miðvikudagur
      </CheckBox>
			<CheckBox
        style={styles.option}
        checked={thursday}
        onChange={setThursday}>
        Fimmtudagur
      </CheckBox>
			<CheckBox
        style={styles.option}
        checked={friday}
        onChange={setFriday}>
        Föstudagur
      </CheckBox>
			<CheckBox
        style={styles.option}
        checked={saturday}
        onChange={setSaturday}>
        Laugardagur
      </CheckBox>
			<CheckBox
        style={styles.option}
        checked={sunday}
        onChange={setSunday}>
        Sunnudagur
      </CheckBox>
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
