import React, { Fragment } from 'react';

import './formInput.scss';


const FormInput = ({ handleChange, label, formHelper, searchbox, ...props }) => {
  return (
    <div className="form-row">
      {label && (
        <label>
          {label}
        </label>
      )}
      <input type="text" className="form-input" onChange={handleChange} {...props} />
      {formHelper && searchbox && (
        <Fragment>
          <div className="form-btn form-helper" onClick={formHelper}>{props.helpertext}</div>
          <input className='form-search' type="text" placeholder={searchbox}></input>
        </Fragment>

      )}
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