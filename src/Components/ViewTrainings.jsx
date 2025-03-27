import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../styles.css';

const ViewTrainings = () => {
	const { id } = useParams();
	const [userTrainings, setUserTrainings] = useState([]);
	const [selectedTraining, setSelectedTraining] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchUserTrainings = async () => {
			try {
				const response = await fetch(
					`http://localhost:3001/trainings?userId_like=${id}`,
				);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				setUserTrainings(data);
			} catch (error) {
				console.error('Error fetching trainings:', error);
				Swal.fire({
					icon: 'error',
					title: 'Error al cargar capacitaciones',
					text: error.message,
				});
			}
		};

		fetchUserTrainings();
	}, [id]);

	const handleDelete = async (trainingId) => {
		Swal.fire({
			title: '¿Desea eliminar la capacitación?',
			showCancelButton: true,
			confirmButtonText: 'Sí',
			cancelButtonText: 'No',
		}).then(async (result) => {
			if (result.isConfirmed) {
				try {
					const response = await fetch(
						`http://localhost:3001/trainings/${trainingId}`,
						{
							method: 'DELETE',
						},
					);

					if (!response.ok) {
						throw new Error('Error al eliminar la capacitación');
					}

					setUserTrainings(userTrainings.filter((t) => t.id !== trainingId));
					Swal.fire({
						icon: 'success',
						title: '¡Capacitación eliminada!',
						showConfirmButton: false,
						timer: 2000,
					});
				} catch (error) {
					console.error('Error deleting training:', error);
					Swal.fire({
						icon: 'error',
						title: 'Error al eliminar',
						text: error.message,
					});
				}
			}
		});
	};

	const handleEdit = (trainingId) => navigate(`/edit-training/${trainingId}`);
	const handleViewDetails = (training) => setSelectedTraining(training);

	return (
		<div className="training-background-img">
			<div className="container mt-5">
				{selectedTraining ? (
					<div className="card mt-4">
						<div className="card-header">
							<h4>Detalles de la Capacitación</h4>
						</div>
						<div className="card-body">
							<p>
								<strong>Título:</strong> {selectedTraining.title}
							</p>
							<p>
								<strong>Fecha de Inicio:</strong> {selectedTraining.startDate}
							</p>
							<p>
								<strong>Instructor:</strong> {selectedTraining.trainer || 'N/A'}
							</p>
							<p>
								<strong>Duración:</strong> {selectedTraining.duration}
							</p>
							<p>
								<strong>Descripción:</strong> {selectedTraining.description}
							</p>
							<button
								className="btn btn-danger mt-3"
								onClick={() => setSelectedTraining(null)}
							>
								Salir
							</button>
						</div>
					</div>
				) : (
					<table className="table table-striped">
						<thead>
							<tr>
								<th>Título</th>
								<th>Instructor</th>
								<th>Fecha de Inicio</th>
								<th>Acciones</th>
							</tr>
						</thead>
						<tbody>
							{userTrainings.map((training) => (
								<tr key={training.id}>
									<td>{training.title}</td>
									<td>{training.trainer}</td>
									<td>{training.startDate}</td>
									<td>
										<button
											className="btn btn-primary mx-1"
											onClick={() => handleEdit(training.id)}
										>
											<i className="fas fa-pencil-alt"></i>
										</button>
										<button
											className="btn btn-danger mx-1"
											onClick={() => handleDelete(training.id)}
										>
											<i className="fas fa-trash"></i>
										</button>
										<button
											className="btn btn-info mx-1"
											onClick={() => handleViewDetails(training)}
										>
											<i className="fas fa-eye"></i>
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
};

export default ViewTrainings;
