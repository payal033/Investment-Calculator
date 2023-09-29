const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});


const InvestmentRow = (props) => {
    return (
        <tr>
            <td>{props.year}</td>
            <td>{formatter.format(props.savingsEndOfYear)}</td>
            <td>{formatter.format(props.yearlyInterest)}</td>
            <td>{formatter.format(props.interestGained)}</td>
            <td>{formatter.format(props.yearlyContribution)}</td>
        </tr>
    )
}

export default InvestmentRow