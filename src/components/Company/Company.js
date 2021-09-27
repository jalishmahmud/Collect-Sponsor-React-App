import React from 'react';
import './Company.css'
const Company = (props) => {
    const { name, location, ReadyToSponsor, amountOfSponsor, lastSponsoredDate, img } = props.company;
    return (
        <div className="single-company">
            <div className="company-image">
                <img src={img} alt="" />
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>Name:  </td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td>Location: </td>
                        <td>{location}</td>
                    </tr>
                    <tr>
                        <td>Last Sponsored: </td>
                        <td>{lastSponsoredDate}</td>
                    </tr>
                    <tr>
                        <td>Ready To Sponsor: </td>
                        <td>{ReadyToSponsor}</td>
                    </tr>
                    <tr>
                        <td>Amount: </td>
                        <td><span>$</span>{amountOfSponsor}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => props.handleSingleCompany(props.company)}>Select</button>

        </div>
    );
};

export default Company;
