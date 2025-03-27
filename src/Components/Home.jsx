import React from 'react';
import Swal from 'sweetalert2';
import epp from '../assets/epp.png';
import acc from '../assets/investigacioACC1.webp';
import miper from '../assets/miper1.png';
import docu from '../assets/login.jpg';

const Home = () => {
	const handleMoreInfoClick = () => {
		Swal.fire({
			icon: 'info',
			title: 'Próximamente disponible',
			text: 'Este servicio estará disponible pronto en nuestro sitio web.',
			confirmButtonText: 'Cerrar',
		});
	};

	return (
		<div className="container home-container">
			<header className="jumbotron my-4 home-header text-shadow text-white">
				<h1 className="display-3 home-title text-black">
					BIENVENIDO A 💻Develop School📔
				</h1>
				<h2 className="lead mt-4 mb-4 home-subtitle text-black">
					Tu aventura en el mundo del código comienza ahora. ¡Aprende, crea y
					conquista la web!
				</h2>
			</header>

			<div className="row text-center mt-5">
				<div className="col-lg-3 col-md-6 mb-4">
					<div className="card home-card h-100">
						<img
							className="card-img-top home-card-img"
							src={epp}
							alt="Introduccion mundo HTML"
						/>
						<div className="card-body">
							<h4 className="card-title text-white mt-2">
								Introduccion mundo HTML
							</h4>
							<p className="card-text text-black mt-4">
								HTML: el lenguaje esencial de la web, donde estructura,
								contenido y creatividad se entrelazan. Define la base de cada
								página, dando forma a la experiencia del usuario. ¡Construye la
								web, etiqueta a etiqueta!
							</p>
						</div>
						<div className="card-footer">
							<button
								onClick={handleMoreInfoClick}
								className="btn btn-info text-white"
							>
								Más Información
							</button>
						</div>
					</div>
				</div>

				<div className="col-lg-3 col-md-6 mb-4 text-white">
					<div className="card home-card h-100">
						<img
							className="card-img-top home-card-img"
							src={docu}
							alt="Introduccion mundo CSS"
						/>
						<div className="card-body">
							<h4 className="card-title text-white">Introduccion mundo CSS</h4>
							<p className="card-text text-black">
								CSS: el arte de vestir la web. Define estilos, colores y
								diseños, dando vida a la estética digital. Transforma páginas
								simples en obras maestras visuales, controlando cada detalle con
								precisión. ¡Da rienda suelta a tu creatividad y diseña la web a
								tu gusto!
							</p>
						</div>
						<div className="card-footer">
							<button
								onClick={handleMoreInfoClick}
								className="btn btn-info text-white"
							>
								Más Información
							</button>
						</div>
					</div>
				</div>

				<div className="col-lg-3 col-md-6 mb-4">
					<div className="card home-card h-100">
						<img
							className="card-img-top home-card-img"
							src={acc}
							alt="Introduccion mundo JavaScript"
						/>
						<div className="card-body">
							<h4 className="card-title text-white">
								Introduccion mundo JavaScript
							</h4>
							<p className="card-text text-black">
								JavaScript: el motor dinámico de la web. Agrega interactividad,
								lógica y funcionalidad, transformando páginas estáticas en
								experiencias inmersivas. Desde animaciones fluidas hasta
								aplicaciones complejas, JavaScript te permite controlar el
								comportamiento de la web. ¡Da vida a tus ideas y haz que la web
								cobre vida!
							</p>
						</div>
						<div className="card-footer">
							<button
								onClick={handleMoreInfoClick}
								className="btn btn-info text-white"
							>
								Más Información
							</button>
						</div>
					</div>
				</div>

				<div className="col-lg-3 col-md-6 mb-4">
					<div className="card home-card h-100">
						<img
							className="card-img-top home-card-img"
							src={miper}
							alt="Introduccion mundo REACT"
						/>
						<div className="card-body">
							<h4 className="card-title text-white">
								Introduccion mundo REACT
							</h4>
							<p className="card-text text-black">
								Coding partner React: la biblioteca que revoluciona la web. Crea
								interfaces dinámicas y componentes reutilizables, transformando
								la experiencia del usuario. Desde aplicaciones complejas hasta
								interfaces simples, React te permite construir la web con
								eficiencia y elegancia. ¡Da vida a tus ideas y construye la web
								del futuro con React!
							</p>
						</div>
						<div className="card-footer">
							<button
								onClick={handleMoreInfoClick}
								className="btn btn-info text-white"
							>
								Más Información
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
