import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import imagePerfil from '../assets/perfil.png';

const Training = () => {
	const { id: userId } = useParams();
	const [user, setUser] = useState(null);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const response = await fetch(`http://localhost:3001/users/${userId}`);
				if (!response.ok) throw new Error('Usuario no encontrado');
				const userData = await response.json();
				setUser(userData);
			} catch (error) {
				console.error('Error fetching user:', error);
			}
		};

		if (userId) fetchUser();
	}, [userId]);

	const capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
	};

	if (!user) return <div>Loading...</div>;

	return (
		<div className="training-background">
			<div className="training-content">
				<div className="card text-center training-card">
					<img src={imagePerfil} alt="Perfil" className="card-img-perfil" />
					<div className="card-body">
						<h5 className="card-title">
							{capitalizeFirstLetter(user.userName)}{' '}
							{capitalizeFirstLetter(user.lastName)}
						</h5>
						<p className="card-text">Email: {user.email}</p>
						<p className="card-text">
							Country: {capitalizeFirstLetter(user.country)}
						</p>
						<p className="card-text">Phone: {user.phone}</p>
						<Link to={`/create-training/${userId}`} className="btn btn-primary">
							Crear Curso
						</Link>
						<Link
							to={`/view-trainings/${userId}`}
							className="btn btn-secondary ms-2"
						>
							Mis Cursos
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Training;
