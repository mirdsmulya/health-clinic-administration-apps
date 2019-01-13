import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import ButtonEnhance from '../common/ButtonEnhance';

const DataListRow = ({data, onEntry, logicButton}) => {
  return(
    <tr>
      <td><Link to={'/datas/' + data.id}>{data.name}</Link></td>
      <td>{data.gender}</td>
      <td>{data.age}</td>
      <td>{data.address}</td>
      <td><Link to={'/data/' + data.id} className="btn btn-info">Masukan Antrian</Link></td>
      <td><ButtonEnhance logicButton={logicButton} onClick={onEntry}/></td>

    </tr>
  );
};


DataListRow.propTypes = {
  data: PropTypes.object.isRequired,
  onEntry: PropTypes.function,
  logicButton: PropTypes.function
};

export default DataListRow;
