
import React, {PropTypes} from 'react';
import AntrianListRow from './AntrianListRow';


const AntrianList = (antrian) => {
  return(
    <table className="table">
      <thead>
        <tr>
          <th>No Urut</th>
          <th>Nama</th>
          <th>Alamat</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {antrian.map(data =>
          <AntrianListRow key={data.id} data={data}  />)}
      </tbody>
    </table>

  );
};
AntrianList.propTypes = {
  antrian: PropTypes.array.isRequired

};
export default AntrianList;
