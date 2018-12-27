import React, {PropTypes} from 'react';
import DataList from '../data/DataList';
import AntrianList from './AntrianList'

class ListAntrian extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return(
      <div>
        <h1> </h1>
        <h2>Daftar Antrian Pasien</h2>
        <AntrianList />
      </div>

    );
  }
}
export default ListAntrian;
