import {Link} from 'react-router';
import React, {PropTypes} from 'react';

const HistoryListRow = ({data, onClick}) => {
  return(
    <tr>
      <td>{data.date}</td>
      <td>{data.diagnose}</td>
      <td>{data.therapy}</td>
      <td><button className="btn" onClick={onClick}>Hapus</button></td>

    </tr>
  );
};


HistoryListRow.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func
};

export default HistoryListRow;


/*
<td>{data.medicalHistory.date}</td>
<td>{data.medicalHistory.diagnose}</td>
<td>{data.medicalHistory.therapy}</td>
*/
