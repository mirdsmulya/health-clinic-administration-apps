import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';


const Header = () => {
	return(
		<nav>
		<IndexLink to="/" activeClassName="active">Beranda</IndexLink>
		{" | "}
		<Link to="/about" activeClassName="active">Tentang</Link>
		{" | "}
		<Link to="/data" activeClassName="active">Data Pasien</Link>
		{" | "}
		<Link to="/antrian" activeClassName="active">Antrian</Link>
		</nav>

		);
};

export default Header;
