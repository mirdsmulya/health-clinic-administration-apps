import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import ButtonEnhance from '../common/ButtonEnhance';

const DataListRow = ({data, logicButton, className}) => {
  return(
    <tr>
      <td><Link to={'/datas/' + data.id}>{data.name}</Link></td>
      <td>{data.gender}</td>
      <td>{data.age}</td>
      <td>{data.address}</td>
      <td><Link to={'/datas-preload/'+ data.id}
                className={data.status ? 'btn btn-info' : 'btn btn-danger'}
                >{data.status ? 'Masukan Antrian' : 'Dalam Antrian'}</Link></td>
    </tr>
  );
};


DataListRow.propTypes = {
  data: React.PropTypes.object,
  logicButton: React.PropTypes.function,
  className:  React.PropTypes.function
};

export default DataListRow;


/*

<td><ButtonEnhance logicButton={logicButton} onClick={onEntry}/></td>


*/
