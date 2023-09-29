import '../InvestmentTable/InvestmentTable.css'
import InvestmentRow from './InvestmentRow'

const InvestmentTable = (props) => {

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(d => (
          <InvestmentRow
            key={d.year}
            year={d.year}
            yearlyInterest={d.yearlyInterest}
            savingsEndOfYear={d.savingsEndOfYear}
            interestGained={d.savingsEndOfYear - props.initial - d.yearlyContribution * d.year}
            yearlyContribution={props.initial + d.yearlyContribution * d.year}
          />
        ))}
      </tbody>

    </table>
  )
}

export default InvestmentTable