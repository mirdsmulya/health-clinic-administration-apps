import React, {PropTypes} from 'react';


const SubmitInput = ({buttonType, id, onClick, buttonStatus, value}) => {
  return (
    <input
      id={id}
      type="submit"
      value={value}
      className={buttonType}
      onClick={onClick}
      disabled={buttonStatus}
       />

  );

};

SubmitInput.propTypes = {
  id: React.PropTypes.string,
  onClick: React.PropTypes.func,
  buttonType: React.PropTypes.string,
  buttonStatus: React.PropTypes.boolean,
  value: React.PropTypes.string
};
export default SubmitInput;
