import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../styles.css';

const CreateUser = () => {
	const [userName, setNameUser] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [country, setCountry] = useState('');
	const [phone, setPhone] = useState('');

	const navigate = useNavigate();

	const createUser = async (event) => {
		event.preventDefault();

		try {
			const newUser = {
				userName,
				lastName,
				email,
				password,
				role: 'user', // Rol por defecto
				country,
				phone,
				created_at: new Date().toISOString(),
				updated_at: new Date().toISOString(),
			};

			const response = await fetch('http://localhost:3001/users', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newUser),
			});

			if (!response.ok) {
				throw new Error('Error al crear usuario');
			}

			const data = await response.json();

			// Guardar usuario en localStorage para "autenticación"
			localStorage.setItem(
				'user',
				JSON.stringify({
					id: data.id,
					email: data.email,
					role: data.role,
				}),
			);

			// Limpiar formulario
			setNameUser('');
			setLastName('');
			setEmail('');
			setPassword('');
			setCountry('');
			setPhone('');

			// Mostrar alerta y redirigir
			Swal.fire({
				icon: 'success',
				title: 'Usuario creado exitosamente',
				showConfirmButton: false,
				timer: 1500,
			}).then(() => {
				navigate(`/training/${data.id}`);
			});
		} catch (error) {
			Swal.fire({
				icon: 'error',
				title: 'Error al crear el usuario',
				text: error.message,
			});
			console.error('Error:', error);
		}
	};

	return (
		<>
			<div className="create-user-bg">
				<div className="title-create-user text-center text-white p-3 mt-3">
					<h1>Registro Nuevo Usuario</h1>
				</div>
				<div>
					<form
						onSubmit={createUser}
						className="container mt-4 create-user-form col-sm-12 col-md-10 col-lg-8 col-xl-6"
					>
						<div className="input-group mb-3">
							<span className="input-group-text" id="inputGroup-sizing-default">
								Nombre
							</span>
							<input
								type="text"
								className="form-control"
								aria-label="Sizing example input"
								data-testid="userName-input"
								aria-describedby="inputGroup-sizing-default"
								value={userName}
								onChange={(e) => setNameUser(e.target.value)}
								required
							/>
						</div>
						<div className="input-group mb-3">
							<span className="input-group-text" id="inputGroup-sizing-default">
								Apellido
							</span>
							<input
								type="text"
								className="form-control"
								aria-label="Sizing example input"
								data-testid="lastName-input"
								aria-describedby="inputGroup-sizing-default"
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
								required
							/>
						</div>
						<div className="input-group mb-3">
							<span className="input-group-text" id="inputGroup-sizing-default">
								Mail
							</span>
							<input
								type="email"
								className="form-control"
								aria-label="Sizing example input"
								data-testid="email-input"
								aria-describedby="inputGroup-sizing-default"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className="input-group mb-3">
							<span className="input-group-text" id="inputGroup-sizing-default">
								Contraseña
							</span>
							<input
								type="password"
								className="form-control"
								aria-label="Sizing example input"
								data-testid="password-input"
								aria-describedby="inputGroup-sizing-default"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								minLength="6"
							/>
						</div>
						<div className="input-group mb-3">
							<span className="input-group-text" id="inputGroup-sizing-default">
								País
							</span>
							<input
								type="text"
								className="form-control"
								aria-label="Sizing example input"
								data-testid="country-input"
								aria-describedby="inputGroup-sizing-default"
								value={country}
								onChange={(e) => setCountry(e.target.value)}
								required
							/>
						</div>
						<div className="input-group mb-3">
							<span className="input-group-text" id="inputGroup-sizing-default">
								Teléfono
							</span>
							<input
								type="text"
								className="form-control"
								aria-label="Sizing example input"
								data-testid="phone-input"
								aria-describedby="inputGroup-sizing-default"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								required
							/>
						</div>
						<div className="">
							<button type="submit" className="btn btn-primary">
								Crear Usuario
							</button>
							<Link className="btn btn-danger ms-2" to={`/login`}>
								Volver
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default CreateUser;
