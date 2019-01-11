import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const DataListRow = ({data, onEntry}) => {
  return(
    <tr>
      <td><Link to={'/datas/' + data.id}>{data.name}</Link></td>
      <td>{data.gender}</td>
      <td>{data.age}</td>
      <td>{data.address}</td>
      <td><Link to={'/data/' + data.id} className="btn btn-primary">Masukan Antrian</Link></td>


    </tr>
  );
};


DataListRow.propTypes = {
  data: PropTypes.object.isRequired,
  onEntry: PropTypes.function
};

export default DataListRow;
