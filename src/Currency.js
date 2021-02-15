import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const Currency = ({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  onChangeAmount,
  amount,
  curr,
  toAmount,
  onChangeToCurrency,
}) => {
  return (
    <div className="container"> 
    <form>
        <div className="form-row">
            <div className="form-group col-md-3">
            <label htmlFor="input-currency">Currency</label>
            <select id="input-currency" className="form-control" value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map((option) => (
                    <option key={option} value={option}>
                    {option}
                    </option>
                ))}
            </select>
            </div>
            <div className="form-group col-md-3">
                <label htmlFor="output-currency">Currency</label>
                <select id="output-currency" className="form-control" value={curr} onChange={onChangeToCurrency}>
                    {currencyOptions.map((option) => (
                    <option key={option} value={option}>
                    {option}
                    </option>
                ))}
                </select>
            </div>
            </div>
            <div className="form-row">
            <div className="form-group col-md-3">
                <label htmlFor="input-amount">Enter amount</label>
                <input type="number" className="form-control" id="input-amount" value={amount} onChange={onChangeAmount}/>
            </div>
            <div className="form-group col-md-3">
                <label htmlFor="output-amount">Converted amount</label>
                <p style={{ color: "black", background: "white", border: "1px",}} className="rounded">{toAmount}</p>
            </div>
            </div>
    </form>
    </div>
    
  );
};
export default Currency;
