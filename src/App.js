import { useState } from "react";
import Header from "./components/Header/Header";
import InvestmentForm from "./components/InvestmentForm/InvestmentForm";
import InvestmentTable from "./components/InvestmentTable/InvestmentTable";

function App() {


  const [yearlyData, setYearlyData] = useState([])

  const calculateHandler = (userInput) => {


    // console.log(userInput["current-savings"], userInput["yearly-contribution"], userInput["expected-return"], userInput["duration"])

    const yearlyData = [];

    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setYearlyData(yearlyData)
  };


  return (
    <div>
      <Header />
      <InvestmentForm onCalculateData={calculateHandler} />
      {
        yearlyData.length === 0 ? <p>No investment calculated yet!</p> :
          <InvestmentTable data={yearlyData} />
      }
    </div>
  );
}

export default App;
