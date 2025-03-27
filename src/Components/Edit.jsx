import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../styles.css';

const Edit = () => {
	const [userName, setNameUser] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [country, setCountry] = useState('');
	const [phone, setPhone] = useState('');

	const navigate = useNavigate();
	const { id } = useParams();

	// Función para actualizar un usuario
	const updateUser = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(`http://localhost:3001/users/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					userName,
					lastName,
					email,
					country,
					phone,
					updated_at: new Date().toISOString(),
				}),
			});

			if (!response.ok) {
				throw new Error('Error al actualizar usuario');
			}

			Swal.fire({
				icon: 'success',
				title: 'Usuario actualizado exitosamente',
				showConfirmButton: false,
				timer: 1500,
			}).then(() => {
				navigate('/users');
			});
		} catch (error) {
			console.error('Error:', error);
			Swal.fire({
				icon: 'error',
				title: 'Error al actualizar usuario',
				text: 'Por favor intenta nuevamente',
			});
		}
	};

	// Función para obtener los datos del usuario
	const getUserById = async (id) => {
		try {
			const response = await fetch(`http://localhost:3001/users/${id}`);

			if (!response.ok) {
				throw new Error('Usuario no encontrado');
			}

			const user = await response.json();

			setNameUser(user.userName || '');
			setLastName(user.lastName || '');
			setEmail(user.email || '');
			setCountry(user.country || '');
			setPhone(user.phone || '');
		} catch (error) {
			console.error('Error al obtener usuario:', error);
			Swal.fire({
				icon: 'error',
				title: 'Error al cargar usuario',
				text: error.message,
			});
		}
	};

	useEffect(() => {
		getUserById(id);
	}, [id]);

	return (
		<div className="admin-background">
			<div className="container mt-5">
				<div className="card editUser mx-auto">
					<div className="card-header">
						<h3>Edición de Usuario</h3>
					</div>
					<div className="card-body">
						<form onSubmit={updateUser}>
							<div className="mb-3">
								<label className="form-label">Nombre</label>
								<input
									type="text"
									className="form-control"
									value={userName}
									onChange={(e) => setNameUser(e.target.value)}
									required
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">Apellido</label>
								<input
									type="text"
									className="form-control"
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
									required
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">Email</label>
								<input
									type="email"
									className="form-control"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">País</label>
								<input
									type="text"
									className="form-control"
									value={country}
									onChange={(e) => setCountry(e.target.value)}
									required
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">Teléfono</label>
								<input
									type="text"
									className="form-control"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
									required
								/>
							</div>
							<div className="d-flex justify-content-between">
								<button type="submit" className="btn btn-primary">
									Actualizar Usuario
								</button>
								<Link className="btn btn-danger" to="/users">
									Volver
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Edit;
