import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../styles.css';

const EditTraining = () => {
	const { trainingId } = useParams();
	const [training, setTraining] = useState({
		title: '',
		description: '',
		startDate: '',
		duration: '',
		trainer: '',
		location: '',
		userId: '',
	});
	const navigate = useNavigate();

	useEffect(() => {
		const fetchTraining = async () => {
			try {
				const response = await fetch(
					`http://localhost:3001/trainings/${trainingId}`, // Cambiado a plural
				);

				if (!response.ok) {
					throw new Error('No se pudo cargar el curso');
				}

				const trainingData = await response.json();
				if (trainingData) {
					setTraining({
						title: trainingData.title || '',
						description: trainingData.description || '',
						startDate: trainingData.startDate || '',
						duration: trainingData.duration || '',
						trainer: trainingData.trainer || '',
						location: trainingData.location || '',
						userId: trainingData.userId || '',
					});
				}
			} catch (error) {
				console.error('Error al cargar el curso:', error);
				Swal.fire({
					icon: 'error',
					title: 'Error al cargar el curso',
					text: error.message,
				});
			}
		};

		fetchTraining();
	}, [trainingId]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setTraining((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(
				`http://localhost:3001/trainings/${trainingId}`, // Cambiado a plural
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						...training,
						updated_at: new Date().toISOString(),
					}),
				},
			);

			if (!response.ok) {
				throw new Error('Error al actualizar el curso');
			}

			Swal.fire({
				icon: 'success',
				title: '¡Curso editado con éxito!',
				showConfirmButton: false,
				timer: 2000,
			}).then(() => {
				navigate(`/view-trainings/${training.userId}`);
			});
		} catch (error) {
			console.error('Error al actualizar el curso:', error);
			Swal.fire({
				icon: 'error',
				title: 'Error al guardar cambios',
				text: error.message,
			});
		}
	};

	return (
		<div className="training-background-img">
			<div className="container mt-5">
				<div className="card editTraining mx-auto">
					<div className="card-header">
						<h3>Editar Curso</h3>
					</div>
					<div className="card-body">
						<form onSubmit={handleSubmit}>
							<div className="mb-3">
								<label htmlFor="title" className="form-label">
									Título
								</label>
								<input
									type="text"
									className="form-control"
									id="title"
									name="title"
									value={training.title}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="description" className="form-label">
									Descripción
								</label>
								<textarea
									className="form-control"
									id="description"
									name="description"
									value={training.description}
									onChange={handleChange}
									required
									rows="5"
								></textarea>
							</div>
							<div className="mb-3">
								<label htmlFor="startDate" className="form-label">
									Fecha de Inicio
								</label>
								<input
									type="date"
									className="form-control"
									id="startDate"
									name="startDate"
									value={training.startDate}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="duration" className="form-label">
									Duración
								</label>
								<input
									type="text"
									className="form-control"
									id="duration"
									name="duration"
									value={training.duration}
									onChange={handleChange}
									required
									placeholder="Ej: 4 semanas, 2 meses"
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="trainer" className="form-label">
									Instructor
								</label>
								<input
									type="text"
									className="form-control"
									id="trainer"
									name="trainer"
									value={training.trainer}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="location" className="form-label">
									Ubicación
								</label>
								<input
									type="text"
									className="form-control"
									id="location"
									name="location"
									value={training.location}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="d-flex justify-content-between">
								<button type="submit" className="btn btn-primary">
									Guardar Cambios
								</button>
								<Link
									className="btn btn-danger"
									to={`/view-trainings/${training.userId}`}
								>
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

export default EditTraining;
