import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import '../styles.css';
import axios from 'axios';

const CreateTraining = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [startDate, setStartDate] = useState('');
	const [duration, setDuration] = useState('');
	const [trainer, setTrainer] = useState('');

	const navigate = useNavigate();
	const { id } = useParams();

	const createTraining = async (e) => {
		e.preventDefault();

		// Validación adicional de campos
		if (!title || !description || !startDate || !duration || !trainer) {
			Swal.fire({
				icon: 'error',
				title: 'Error',
				text: 'Todos los campos son requeridos',
			});
			return;
		}

		try {
			const response = await axios.post(
				'http://localhost:3001/trainings',
				{
					userId: id,
					title,
					description,
					startDate,
					duration,
					trainer,
					created_at: new Date().toISOString(),
					updated_at: new Date().toISOString(),
				},
				{
					headers: {
						'Content-Type': 'application/json',
					},
				},
			);

			Swal.fire({
				icon: 'success',
				title: '¡Éxito!',
				text: 'Capacitación creada correctamente',
				timer: 1500,
				showConfirmButton: false,
			}).then(() => {
				// Limpiar formulario
				setTitle('');
				setDescription('');
				setStartDate('');
				setDuration('');
				setTrainer('');

				// Redirección mejorada
				navigate(`/user/${id}/trainings`);
			});
		} catch (error) {
			console.error('Error detallado:', error.response);
			Swal.fire({
				icon: 'error',
				title: 'Error al crear',
				text: error.response?.data?.message || 'Error en el servidor',
			});
		}
	};

	return (
		<div className="training-background-img">
			<div className="container mt-5">
				<div className="card create-training">
					<div className="card-header">
						<h3>Crear Curso</h3>
					</div>
					<div className="card-body">
						<form onSubmit={createTraining}>
							<div className="mb-3">
								<label className="form-label">Título</label>
								<input
									type="text"
									className="form-control"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
									required
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">Descripción</label>
								<textarea
									className="form-control"
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									required
									rows="4"
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">Fecha de Inicio</label>
								<input
									type="date"
									className="form-control"
									value={startDate}
									onChange={(e) => setStartDate(e.target.value)}
									required
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">Duración</label>
								<input
									type="text"
									className="form-control"
									value={duration}
									onChange={(e) => setDuration(e.target.value)}
									required
									placeholder="Ej: 4 semanas"
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">Instructor</label>
								<input
									type="text"
									className="form-control"
									value={trainer}
									onChange={(e) => setTrainer(e.target.value)}
									required
								/>
							</div>
							<div className="d-flex justify-content-between">
								<button type="submit" className="btn btn-primary">
									Crear Capacitación
								</button>
								<Link className="btn btn-danger" to={`/training/${id}`}>
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

export default CreateTraining;
