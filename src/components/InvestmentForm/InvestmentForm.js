import { useState } from 'react';
import classes from '../InvestmentForm/InvestmentForm.module.css'

const initialUserInput = {
    savings: '', yearlyCont: '', returns: '', duration: ''
}

const InvestmentForm = (props) => {

    const [userInput, setUserInput] = useState(initialUserInput)

    const inputValueHandler = (input, value) => {

        setUserInput({ ...userInput, [input]: +value })

    }

    const submitHandler = (event) => {

        event.preventDefault();
        props.onCalculateData(userInput)

    }

    const resetData = () => {
        setUserInput(initialUserInput)
        props.onCalculateData(initialUserInput)
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes["input-group"]}>
                <p>
                    <label htmlFor="current-savings">Current Savings (&#8377;)</label>
                    <input value={userInput.savings} type="number" id="current-savings" onChange={(event) => inputValueHandler('savings', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings (&#8377;)</label>
                    <input value={userInput.yearlyCont} type="number" id="yearly-contribution" onChange={(event) => inputValueHandler('yearlyCont', event.target.value)} />
                </p>
            </div>
            <div className={classes["input-group"]}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input value={userInput.returns} type="number" id="expected-return" onChange={(event) => inputValueHandler('returns', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input value={userInput.duration} type="number" id="duration" onChange={(event) => inputValueHandler('duration', event.target.value)} />
                </p>
            </div>
            <p className={classes["actions"]}>
                <button type="reset" className={classes.buttonAlt} onClick={resetData}>
                    Reset
                </button>
                <button type="submit" className={classes.button}>
                    Calculate
                </button>
            </p>
        </form>
    )
}

export default InvestmentForm