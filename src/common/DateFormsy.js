import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { withFormsy } from "formsy-react";
import _ from "../@lodash";

function DateFormsy(props) {
    const importedProps = _.pick(props, [
        "className",
        "id",
        "inputRef",
        "label",
        "name",
        "required",
        "variant",
        "inputVariant",
        "disableToolbar",
        "InputLabelProps"
    ]);

    const errorMessage = props.getErrorMessage();
    const value = props.getValue() || "";

    function changeDateValue(event) {
        props.setValue(event.format("YYYY/MM/DD"));
        const newEvent = {
            target: {
                name: importedProps.name,
                value: event.format("YYYY/MM/DD"),
                type: "text"
            }
        };
        if (props.onChange) {
            props.onChange(newEvent);
        }
    }

    return (
        <KeyboardDatePicker
            {...importedProps}
            disableToolbar
            format="DD/MM/YYYY"
            onChange={changeDateValue}
            value={value}
            error={Boolean(errorMessage)}
        />
    );
}

export default React.memo(withFormsy(DateFormsy));
