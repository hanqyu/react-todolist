import React from 'react';
import './Form.css';

const Form = (props) => {
  return (
    <div className="form">
      <input value={props.value} onChange={props.onChange} onKeyPress={props.onKeyPress} style={{color: props.color}}/>
      <div className="create-button" onClick={props.onCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;