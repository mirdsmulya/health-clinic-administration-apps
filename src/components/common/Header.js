import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';


const Header = () => {
	return(
		<nav>
		<IndexLink to="/" activeClassName="active">Home</IndexLink>
		{" | "}
		<Link to="/about" activeClassName="active">About</Link>
		{" | "}
		<Link to="/data" activeClassName="active">Data Pasien</Link>
		</nav>

		);
};

export default Header;