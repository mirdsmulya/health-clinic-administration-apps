import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
	render() {
		return (

			<div className="jumbotron">
				<h1>Pusat Data Administrasi Pasien dan Rekam Medik Dokter Pudji</h1>
				<p>Data pribadi pasien, rekam medis pasien </p>
				<Link to="about" className="btn btn-primary btn-lg">Lebih Lanjut</Link> 

			</div>
		);
	}
}
export default HomePage;