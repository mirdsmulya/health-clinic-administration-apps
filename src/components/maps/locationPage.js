import React from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';
const google = window.google;

const mapStyles = {
  width: '98%',
  height: '100%'
};

export class LocationPage extends React.Component {
  render(){
    return(
      <div>
      <Map
         google={window.google}
         zoom={8}
         style={mapStyles}
         initialCenter={{ lat:-6.8770001, lng:107.5588852}}
       />
       <Marker
        position={{lat:-6.873964, lang:107.555634}}
       />
      </div>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDaapbNdc__UM0laVX80qiF9jdqzeqLu9w'
})(LocationPage);
