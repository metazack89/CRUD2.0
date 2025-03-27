import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
	const navigate = useNavigate();

	const submithandler = async (e) => {
		e.preventDefault();
		const email = e.currentTarget.elements.email.value;
		const password = e.currentTarget.elements.password.value;

		try {
			const response = await fetch(
				'http://localhost:3001/users?email=' + email,
			);
			const users = await response.json();

			if (users.length === 0 || users[0].password !== password) {
				throw new Error('Credenciales inválidas');
			}

			const user = users[0];
			localStorage.setItem('user', JSON.stringify(user));

			Swal.fire({
				icon: 'success',
				title: `¡Bienvenido, ${user.userName}!`,
				showConfirmButton: false,
				timer: 1500,
			}).then(() => {
				user.role === 'admin'
					? navigate('/users')
					: navigate(`/training/${user.id}`);
			});
		} catch (error) {
			Swal.fire({
				icon: 'error',
				title: 'Error al iniciar sesión',
				text: error.message,
			});
		}
	};

	return (
		<>
			<div className="title-login text-white mt-5 mb-3">
				<h1>INICIO DE SESION</h1>
			</div>
			<div className="login-page">
				<div className="login-background mt-5">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-sm-12 col-md-10 col-lg-8 col-xl-6">
								<div className="card login-style">
									<div className="card-body">
										<form onSubmit={submithandler} className="mx-4 px-4">
											<div className="mb-5">
												<label
													htmlFor="email"
													className="form-label text-black"
												>
													Ingresa tu Email
												</label>
												<input
													type="email"
													className="form-control"
													data-testid="email-input"
													id="email"
													required
												/>
											</div>
											<div className="mb-3">
												<label
													htmlFor="password"
													className="form-label text-black"
												>
													Ingresa tu Clave
												</label>
												<input
													type="password"
													className="form-control"
													id="password"
													data-testid="password-input"
													required
												/>
											</div>
											<button type="submit" className="btn btn-primary w-100">
												Aceptar
											</button>
										</form>
										<div className="text-center mt-3">
											<Link className="text-black" to={'/Create'}>
												¿No tienes una cuenta? Regístrate
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
