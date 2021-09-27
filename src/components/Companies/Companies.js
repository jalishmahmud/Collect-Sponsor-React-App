import React, { useEffect, useState } from 'react';
import Amount from '../Amount/Amount';
import Company from '../Company/Company';
import './Companies.css'
const Companies = () => {
    const [companies, setCompanies] = useState([]);
    const [amount, setAmount] = useState([]);
    useEffect(() => {
        fetch('./companies.JSON')
            .then(res => res.json())
            .then(data => setCompanies(data))
    }, []);
    const handleSingleCompany = company => {
        const newAmount = [...amount, company];
        setAmount(newAmount);
    }
    return (
        <div className="companies-aria">
            <div className="selected-company">
                <Amount amount={amount}></Amount>
            </div>
            <div className="company-details">
                {
                    companies.map(company => <Company
                        key={company.id}
                        company={company}
                        handleSingleCompany={handleSingleCompany}
                    ></Company>)
                }
            </div>
        </div>
    );
};

export default Companies;