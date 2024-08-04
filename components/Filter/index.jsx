// .filter() sert à créer un nouveau tableau avec tous les éléments du tableau appelant qui passent le test implémenté par la fonction fournie.
import { useState } from "react";

// Exemple 1: Filtrage de Nombres Impairs
function NombresImpairs() {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const oddNumbers = numbers.filter((num) => num % 2 !== 0);

	return (
		<ul>
			{oddNumbers.map((num) => (
				<li key={num}>{num}</li>
			))}
		</ul>
	);
}

// Exemple 2: Filtrage de Nombres Supérieurs à une Valeur
function NombresSupérieursÀDix() {
	const numbers = [5, 12, 8, 3, 19, 1, 7];
	const numbersGreaterThanTen = numbers.filter((num) => num > 10);

	return (
		<>
			<ul>
				{numbersGreaterThanTen.map((num) => (
					<li key={num}>{num}</li>
				))}
			</ul>

			{/* autre possibilité */}
			<ul>
				<span>===</span>
				{numbers
					.filter((num) => num > 10)
					.map((num) => (
						<li key={num}>{num}</li>
					))}
			</ul>
		</>
	);
}

// Exemple 3: Filtrage de Données d'Utilisateurs
function UtilisateursActifs() {
	const users = [
		{ id: 1, name: "Alice", isActive: true },
		{ id: 2, name: "Bob", isActive: false },
		{ id: 3, name: "Charlie", isActive: true },
		{ id: 4, name: "David", isActive: false },
	];

	const activeUsers = users.filter((user) => user.isActive);

	return (
		<ul>
			{activeUsers.map((user) => (
				<li key={user.id}>{user.name}</li>
			))}
		</ul>
	);
}

// Exemple 4: Filtrage avec Recherche Dynamique
function RechercheDynamique() {
	const [searchTerm, setSearchTerm] = useState("");

	const items = [
		"Apple",
		"Banana",
		"Cherry",
		"Date",
		"Elderberry",
		"Fig",
		"Grape",
	];

	const filteredItems = items.filter((item) =>
		item.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div>
			<input
				type="text"
				placeholder="Rechercher..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<ul>
				{filteredItems.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
}

// Exemple 5: Filtrage avec Date
function ÉvénementsÀVenir() {
	const events = [
		{ id: 1, name: "Event 1", date: new Date(2024, 6, 1) },
		{ id: 2, name: "Event 2", date: new Date(2024, 7, 1) },
		{ id: 3, name: "Event 3", date: new Date(2024, 8, 1) },
	];

	const today = new Date();
	const upcomingEvents = events.filter((event) => event.date > today);

	return (
		<ul>
			{upcomingEvents.map((event) => (
				<li key={event.id}>
					{event.name} - {event.date.toDateString()}
				</li>
			))}
		</ul>
	);
}

export default function Filter() {
	return (
		<div className="flex flex-col">
			{/* Exemple 1: Filtrage de Nombres Impairs */}
			<div>
				<h2>Filtrage des Nombres Impairs</h2>
				<NombresImpairs />
			</div>
			<aside>=======================</aside>

			{/* Exemple 2: Filtrage de Nombres Supérieurs à une Valeur */}
			<div>
				<h2>Filtrage des Nombres Supérieurs à 10</h2>
				<NombresSupérieursÀDix />
			</div>
			<aside>=======================</aside>

			{/* Exemple 3: Filtrage de Données d'Utilisateurs */}
			<div>
				<h2>Utilisateurs Actifs</h2>
				<UtilisateursActifs />
			</div>
			<aside>=======================</aside>

			{/* Exemple 4: Filtrage avec Recherche Dynamique */}
			<div>
				<h2>Filtrage par Recherche</h2>
				<RechercheDynamique />
			</div>
			<aside>=======================</aside>

			{/* Exemple 5: Filtrage avec Date */}
			<div>
				<h2>Événements à Venir</h2>
				<ÉvénementsÀVenir />
			</div>
		</div>
	);
}
