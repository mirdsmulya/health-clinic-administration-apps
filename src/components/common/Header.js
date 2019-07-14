import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';


const Header = () => {
	return(
<div>
<div className="topnav" id="myTopnav">

	<IndexLink to="/" activeClassName="active">Beranda</IndexLink>
	<Link to="/data" activeClassName="active">Data Pasien</Link>
	<Link to="/antrian" activeClassName="active">Antrian</Link>
	<Link to="/stats" activeClassName="active">Statistik</Link>
	<Link to="/location" activeClassName="active">Location</Link>
  <a href="javascript:void(0);" className="icon" onClick="myFunction()">
    <i className="fa fa-bars"></i>
  </a>
</div>
</div>





		);
};

export default Header;
