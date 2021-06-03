import React, { Fragment } from 'react';

import './formInput.scss';
import SearchInput from './searchInput'


const FormInput = ({ handleChange, label, formHelper, searchbox, ...props }) => {

  return (
    <div>
      <div className="form-row">
        {label && (
          <label>
            {label}
          </label>
        )}
        <input type="text" className="form-input" onChange={handleChange} {...props} />
        {formHelper && searchbox && (
          <div className="form-btn form-helper" onClick={formHelper}>{props.helpertext}</div>
        )}
      </div>
    </div>
  )
};

export default FormInput

// <div className="groupContainer">
// <div className="formInputContainer" onChange={handleChange} {...props}>
// </div>
// {label ? (
//   <div className="formInputLabel" className={props.value.length ? 'shrink' : ''}>
//     {label}
//   </div>
// ) : null}
// </div>