import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const DataListRow = ({data}) => {
  return(
    <tr>
      <td><Link to={'/datas/' + data.id}>{data.name}</Link></td>
      <td>{data.age}</td>
      <td>{data.address}</td>
      <td>{data.lastArrived}</td>
      <td>{data.medicalHistory}</td>
    </tr>
  );
};


DataListRow.propTypes = {
  data: PropTypes.object.isRequired
};

export default DataListRow;
