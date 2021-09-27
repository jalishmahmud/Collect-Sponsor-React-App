import React from 'react';
import './Amount.css'
const Amount = (props) => {
    console.log(props.amount);
    const { amount } = props;

    let totalAmount = 0;
    for (const manageAmount of amount) {
        totalAmount = totalAmount + manageAmount.amountOfSponsor;
    }

    return (
        <div className="amount-aria">
            <div className="fund-collections">
                <h3>Total Selected : <span className="total-selected">{props.amount.length} </span></h3>
                <h3>Amount : <span className="total-selected"> ${totalAmount}</span></h3>
            </div>
            <div className="company-name">
                <h3>Selected Company</h3>
                <div className="selected-company-name">
                    {
                        amount.map(companyName => <p>{companyName.name}</p>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Amount;