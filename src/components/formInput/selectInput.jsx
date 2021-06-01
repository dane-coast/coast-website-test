import React from 'react';

import './formInput.scss';


const SelectInput = ({ handleChange, label, formHelper, ...props }) => {
  return (
    <div className="form-row">
      {label && (
        <label>
          {label}
        </label>
      )}
      <select className="form-input" onChange={handleChange} {...props}>
        {props.options.map(option => {
          return (
            <option key={option} value={option} >{option}</option>
          )
        })}
      </select>
      {formHelper && (
        <div className="form-btn form-helper" onClick={formHelper}>{props.helpertext}</div>
      )}
    </div>
  )
};

export default SelectInput