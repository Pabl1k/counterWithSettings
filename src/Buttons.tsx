import React from "react";

type ButtonType = {
    num: any
    text: string
    minValue: number
    maxValue: number
    onChangeNum: (newDigit: number) => void
    onResetHandler: (reset: number) => void
}
type ButtonSetType = {
    buttonClassName: string
    disableData: boolean
    onClick: any // ???
}

export const Buttons = (props: ButtonType) => {
    const onIncHandler = () => {
        props.onChangeNum(props.num + 1)
    }
    const onResetHandler = () => {
        props.onResetHandler(props.minValue)
    }

    return (
        //counter
        <div className='buttons'>
            <button onClick={onIncHandler}
                    disabled={props.minValue >= props.maxValue
                    || props.minValue <= -1
                    || props.num >= props.maxValue
                    || props.num === props.text}
                    className={props.num === props.maxValue
                    || props.maxValue <= props.minValue
                    || props.minValue <= -1
                    || props.num === props.text
                        ? 'button_disabled_inc' : 'button_inc'}
            >inc
            </button>
            <button onClick={onResetHandler}
                    disabled={props.num === props.minValue
                    || props.minValue <= -1
                    || props.minValue >= props.maxValue
                    || props.num === props.text}
                    className={props.minValue <= -1
                    || props.minValue >= props.maxValue
                    || props.num === props.minValue
                    || props.num === props.text
                        ? 'button_reset_disabled' : 'button_reset'}
            >reset
            </button>
        </div>
    )
}

export const ButtonSet = (props: ButtonSetType) => {
    return (
        <button
            className={props.buttonClassName}
            disabled={props.disableData}
            onClick={props.onClick}
        >set
        </button>

    )
}