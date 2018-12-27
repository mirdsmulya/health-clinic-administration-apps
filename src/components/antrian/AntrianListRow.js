import {Link} from 'react-router';
import React, {PropTypes} from 'react';

const AntrianListRow = ({data}) => {
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


AntrianListRow.propTypes = {
  data: PropTypes.object.isRequired
};

export default AntrianListRow;






//<td><Link to={'/datas/' + data.id}>{data.name}</Link></td>
