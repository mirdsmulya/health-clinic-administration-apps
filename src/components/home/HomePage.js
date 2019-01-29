import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
	render() {
		return (

			<div className="jumbotron">
				<h1>Data Pasien dan Rekam Medis Dokter Pudji</h1>
				<p>Data pribadi pasien, rekam medis pasien </p>
				<Link to="data" className="btn btn-primary btn-lg">Lebih Lanjut</Link>
			</div>

		);
	}
}
export default HomePage;


/*
<div className="jumbotron">
	<h1>Pusat Data Administrasi Pasien dan Rekam Medik Dokter Pudji</h1>
	<p>Data pribadi pasien, rekam medis pasien </p>
	<Link to="about" className="btn btn-primary btn-lg">Lebih Lanjut</Link>
</div>


<div>
<div className="bg-image img1"></div>
<div className="bg-image img2"></div>
<div className="bg-image img3"></div>
<div className="bg-image img4"></div>
<div className="bg-image img5"></div>
<div className="bg-image img6"></div>
<div className="bg-text">TEXT</div>
</div>





*/
