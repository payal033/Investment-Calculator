import { useState } from 'react';
import '../InvestmentForm/InvestmentForm.css'

const InvestmentForm = (props) => {

    const [userInput, setUserInput] = useState({
        savings: '', yearlyCont: '', returns: '', durationYear: ''
    })

    const inputValueHandler = (identifier, value) => {
        if (identifier === 'savings') {
            setUserInput({ ...userInput, savings: value })
        } else if (identifier === 'yearlyCont') {
            setUserInput({ ...userInput, yearlyCont: value })
        } else if (identifier === 'returns') {
            setUserInput({ ...userInput, returns: value })
        } else {
            setUserInput({ ...userInput, durationYear: value })
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const data = {
            "current-savings": userInput.savings,
            "yearly-contribution": userInput.yearlyCont,
            "expected-return": userInput.returns,
            "duration": userInput.durationYear
        }
        props.onCalculateData(data)

    }

    const resetData = () => {
        setUserInput({ savings: '', yearlyCont: '', returns: '', durationYear: '' })
        props.onCalculateData(userInput)
    }

    return (
        <form className="form" onSubmit={submitHandler}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" onChange={(event) => inputValueHandler('savings', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" onChange={(event) => inputValueHandler('yearlyCont', event.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" onChange={(event) => inputValueHandler('returns', event.target.value)} />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" onChange={(event) => inputValueHandler('duration', event.target.value)} />
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt" onClick={resetData}>
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    )
}

export default InvestmentForm