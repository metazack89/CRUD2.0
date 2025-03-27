import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		try {
			const response = await fetch('http://localhost:3001/users');
			const data = await response.json();
			setUsers(data);
		} catch (error) {
			console.error('Error fetching users:', error);
		}
	};

	const deleteUser = async (id) => {
		try {
			await fetch(`http://localhost:3001/users/${id}`, { method: 'DELETE' });
			getUsers();
		} catch (error) {
			console.error('Error deleting user:', error);
		}
	};

	const confirmDelete = (id) => {
		Swal.fire({
			title: '¿Estas seguro?',
			text: 'Precaución, esta acción borrará el registro',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, eliminar',
		}).then((result) => {
			if (result.isConfirmed) {
				deleteUser(id);
				Swal.fire('¡Borrado!', 'El usuario ha sido eliminado', 'success');
			}
		});
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-12">
					<table className="table table-dark table-striped">
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Apellido</th>
								<th>Mail</th>
								<th>Rut</th>
								<th>Pais</th>
								<th>Telefono</th>
								<th>Editar</th>
								<th>Borrar</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user) => (
								<tr key={user.id}>
									<td>{user.userName}</td>
									<td>{user.lastName}</td>
									<td>{user.email}</td>
									<td>{user.dni}</td>
									<td>{user.country}</td>
									<td>{user.phone}</td>
									<td>
										<Link to={`/edit/${user.id}`} className="btn btn-success">
											<i className="fa-solid fa-pen-to-square"></i>
										</Link>
									</td>
									<td>
										<button
											onClick={() => confirmDelete(user.id)}
											className="btn btn-danger"
											data-testid={`delete-button-${user.id}`}
										>
											<i className="fa-solid fa-trash-can"></i>
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Users;
