import {Link} from 'react-router';
import React, {PropTypes} from 'react';

const AntrianListRow = ({data}) => {
  return(
    <tr>
      <td>--</td>
      <td><Link to={'/datas/' + data.id}>{data.name}</Link></td>
      <td>{data.address}</td>
      <td><button className="btn">Selesai</button></td>

    </tr>
  );
};


AntrianListRow.propTypes = {
  data: PropTypes.object.isRequired
};

export default AntrianListRow;






//<td><Link to={'/datas/' + data.id}>{data.name}</Link></td>
