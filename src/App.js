import { useState } from "react";
import Header from "./components/Header/Header";
import InvestmentForm from "./components/InvestmentForm/InvestmentForm";
import InvestmentTable from "./components/InvestmentTable/InvestmentTable";

function App() {

  const [yearlyData, setYearlyData] = useState([])
  const [initialInvestment, setInitialInvestment] = useState()

  const calculateHandler = (userInput) => {

    const yearlyData = [];

    let currentSavings = +userInput["savings"];
    const yearlyContribution = +userInput["yearlyCont"];
    const expectedReturn = +userInput["returns"] / 100;
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
    setInitialInvestment(+userInput['savings'])
  };


  return (
    <div>
      <Header />
      <InvestmentForm onCalculateData={calculateHandler} />
      {yearlyData.length <= 0 && <p>No investment calculated yet!</p>}
      {yearlyData.length > 0 && < InvestmentTable data={yearlyData} initial={initialInvestment} />}
    </div>
  );
}

export default App;
