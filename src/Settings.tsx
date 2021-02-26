import React, {ChangeEvent, useState} from "react";
import './App.css';
import {Display} from "./Display";
import {InputMax, InputStart} from "./Inputs";
import {ButtonSet} from "./Buttons";

export const Settings = () => {

// Counter
    const [defaultStart, setDefaultStart] = useState<number>(localStorage.getItem('startValue') === null ? 0 : Number(localStorage.getItem('startValue'))) // start value
    const [defaultMax, setDefaultMax] = useState<number>(localStorage.getItem('maxValue') === null ? 3 : Number(localStorage.getItem('maxValue'))) // max value
    let Text = 'enter values and press "set"'
    const [defNum, setNum] = useState<number | string>(Number(localStorage.getItem('maxValue')));// counter

    function onChangeHandler(defaultStart: number) { // counter
        if (defaultStart <= defaultMax) {
            setNum(defaultStart++)
        }
    }

    function onResetHandler() { // counter
        setNum(defaultStart)
    }

    function onChangeStart(e: ChangeEvent<HTMLInputElement>) {
        let newDigit = e.currentTarget.value
        localStorage.setItem('startValue', newDigit)
        setDefaultStart(Number(newDigit))
        setNum(Text)
    }

    function onChangeMax(e: ChangeEvent<HTMLInputElement>) {
        let newMax = e.currentTarget.value
        localStorage.setItem('maxValue', newMax)
        setDefaultMax(Number(newMax))
        setNum(Text)
    }

    function onSetClick() {
        setNum(defaultStart)
    }

    return (
        <div className='settings'>
            <>
                <div className='settings_input_container'>
                    <InputMax
                        type={'number'}
                        nameInput={'max value'}
                        value={defaultMax}
                        onChange={onChangeMax}
                        inputClassName={defaultStart >= defaultMax ? 'settings_input_equal' : 'settings_input'}
                    />
                    <InputStart
                        type={'number'}
                        nameInput={'start value'}
                        value={defaultStart}
                        onChange={onChangeStart}
                        inputClassName={defaultStart >= defaultMax || defaultStart <= -1 ? 'settings_input_equal' : 'settings_input'}
                    />
                </div>
                <div className='settings_set'>
                    <ButtonSet
                        buttonClassName={defaultStart <= -1 || defaultMax <= defaultStart ? 'settings_set_btn_disabled' : 'settings_set_btn'}
                        disableData={defaultStart <= -1 || defaultMax <= defaultStart}
                        onClick={onSetClick}/>
                </div>
            </>
            <Display num={defNum}
                     text={Text}
                     minValue={defaultStart}
                     maxValue={defaultMax}
                     onChangeNum={onChangeHandler}
                     onResetHandler={onResetHandler}/>
        </div>
    )
}