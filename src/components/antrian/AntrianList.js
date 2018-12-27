
import React, {PropTypes} from 'react';
import AntrianListRow from './AntrianListRow';


const AntrianList = () => {
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

      </tbody>
    </table>

  );
};
AntrianList.propTypes = {

};
export default AntrianList;
