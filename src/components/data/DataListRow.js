import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const DataListRow = ({data, onEntry}) => {
  return(
    <tr>
      <td><Link to={'/datas/' + data.id}>{data.name}</Link></td>
      <td>{data.gender}</td>
      <td>{data.age}</td>
      <td>{data.address}</td>
      <td><button onClick={onEntry} data={data} className="btn">Masukan Antrian</button></td>


    </tr>
  );
};


DataListRow.propTypes = {
  data: PropTypes.object.isRequired,
  onEntry: PropTypes.function
};

export default DataListRow;
//{'/datas/' + data.id}


//<td>{data.lastArrived}</td>
//<td>{data.medicalHistory}</td>
