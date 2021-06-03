import React, { useState, Fragment } from 'react';

import './formInput.scss';


const SearchInput = ({ handleChange, label, formHelper, searchbox, search, ...props }) => {

  const [searchname, setThing] = useState(search)
  const searchThing = (e) => {
    console.log(props)
    console.log(props.search)
    setThing(props.search);
  }
  return (
    <Fragment>
      <div className="form-btn form-helper" onClick={formHelper}>{props.helpertext}</div>
      <input
        className='form-search'
        type="text" placeholder={searchbox}
        onChange={(searchThing)}
        name={searchname}
        value={props.search}
      ></input>
    </Fragment>
  )

};

export default SearchInput