import React from 'react';

import './formInput.sccs';

const FormInput = ({ handleChange, label, ...props }) => (
  <div className="groupContainer">
    <div className="formInputContainer" onChange={handleChange} {...props}>
    </div>
    {label ? (
      <div className="formInputLabel" className={props.value.length ? 'shrink' : ''}>
        {label}
      </div>
    ) : null}
  </div>
);

export default FormInput