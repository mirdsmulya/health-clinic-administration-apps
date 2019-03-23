import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';


const Header = () => {
	return(

<div className="topnav" id="myTopnav">
	<IndexLink to="/" activeClassName="active">Beranda</IndexLink>
	<Link to="/data" activeClassName="active">Data Pasien</Link>
	<Link to="/antrian" activeClassName="active">Antrian</Link>
	<Link to="/stats" activeClassName="active">Statistik</Link>
  <a href="javascript:void(0);" className="icon" onClick="myFunction()">
    <i className="fa fa-bars"></i>
  </a>
</div>





		);
};

export default Header;
