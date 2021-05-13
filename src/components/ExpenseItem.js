import './ExpenseItem.css'
function ExpenseItem() {
    const expenseDate = new Date(2021,2,8);
    const expenseTitle="Car Insurance";
    const expenseAmount=256.45
    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{expenseAmount}$</div>
            </div>s
        </div>
    )
}

export default ExpenseItem