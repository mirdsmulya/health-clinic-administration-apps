import React, {PropTypes} from 'react';
import { Link } from 'react-router';



const ButtonEnhance = ({logicButton, onClick}) => {
  return(

    <button
      onClick = {onClick}
      className={logicButton == false ?  "btn btn-danger" : "btn btn-info"}

      >{logicButton == false ? "Dalam Antrian" : "Masukan Atrian"}
    </button>

  );
};


ButtonEnhance.propTypes = {

  logicButton: PropTypes.func,
  onClick: PropTypes.func
};

export default ButtonEnhance;
