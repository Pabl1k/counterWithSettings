import React from "react";
import './App.css';
import {Buttons} from "./Buttons";

type PropsType = {
    num: any
    text: string
    minValue: number
    maxValue: number
    onChangeNum: (newDigit: number) => void
    onResetHandler: (reset: number) => void
}

export const Display = (props: PropsType) => {

    return (
        <div className='container'>
            <div
                className={props.num === props.maxValue ? 'num5' : 'num'
                && props.minValue <= -1
                || props.minValue >= props.maxValue ? 'numText' : 'num'
                && props.num === props.text ? 'settings_text' : 'num'}>
                {props.minValue <= -1
                || props.minValue >= props.maxValue ? 'Incorrect value!' : props.num}
            </div>
            <Buttons num={props.num}
                     text={props.text}
                     minValue={props.minValue}
                     maxValue={props.maxValue}
                     onChangeNum={props.onChangeNum}
                     onResetHandler={props.onResetHandler}/>
        </div>
    )
}