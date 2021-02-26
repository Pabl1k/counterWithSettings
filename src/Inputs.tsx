import React, {ChangeEvent} from "react";

type InputsPropsType = {
    nameInput: string
    type: string
    inputClassName: string
    value: number
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const InputMax = (props: InputsPropsType) => {
    return (
        <>
            <span className={'settings_span'}>{props.nameInput}: </span>
            <input type={props.type}
                   className={props.inputClassName}
                   value={props.value}
                   onChange={props.onChange}/>
        </>
    )
}

export const InputStart = (props: InputsPropsType) => {
    return (
        <>
            <span className={'settings_span'}>{props.nameInput}: </span>
            <input type={props.type}
                   className={props.inputClassName}
                   value={props.value}
                   onChange={props.onChange}/>
        </>
    )
}