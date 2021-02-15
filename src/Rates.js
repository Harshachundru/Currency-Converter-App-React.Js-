import React, {  useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';



const Rates = () => {

    const BASE_URL = "https://api.exchangeratesapi.io/latest?base=USD";
    const CURRENCYNAME_URL = "https://openexchangerates.org/api/currencies.json";

    const[currencyRates , setCurrencyRates] = useState({});
    const[currencyNames, setCurrencyNames] = useState({});


    useEffect( async () => {
        getRates();
        getCurrencyName();

    }); 

    const getRates = async () => {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setCurrencyRates(data.rates);    
    };

    const getCurrencyName = async () => {
        const response = await fetch(CURRENCYNAME_URL);
        const data = await response.json();
        setCurrencyNames(data);
    
    };
    
    return (
        
        <div className = "container">
            <section id="title">
            <h3>US Dollar(USD) Exchange Rates</h3>
            </section>
            <div>
                <table className="table1">
                                <thead>
                                    <tr>
                                        <th>Currency</th>
                                        <th>Currency Name</th>
                                        <th>Exchange Rate = 1 USD</th>
                                    </tr>
                                </thead>
                                <tbody>
                                 {Object.keys(currencyRates).map((item) => {
                                       return ( 
                                    <tr>
                                        <td>{item}</td>
                                        <td>{currencyNames[item]}</td>
                                        <td>{currencyRates[item]}</td>
                                    </tr>
                                );
                                })}
                    </tbody> 
                </table>
            </div>
            

        </div>

    );

};

export default Rates;