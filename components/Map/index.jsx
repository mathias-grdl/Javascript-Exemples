// Exemple 1: Simple Mapping
function Nombres() {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<table className="table">
			<thead>
				<tr>
					<th>Résultat</th>
				</tr>
			</thead>
			<tbody>
				{numbers.map((num) => (
					<tr key={num} className="bg-base-200">
						<td>{num}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

// Exemple 2: Mapping avec Console Log
function NombresAvecLog() {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<table className="table">
			<thead>
				<tr>
					<th>Résultat</th>
				</tr>
			</thead>
			<tbody>
				{numbers.map((num) => {
					console.log("num map 1", num);
					return (
						<tr key={num} className="bg-base-200">
							<td>{num}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

// Exemple 3: Mapping après Filtrage
function NombresPairs() {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<table className="table">
			<thead>
				<tr>
					<th>Résultat</th>
				</tr>
			</thead>
			<tbody>
				{numbers
					.filter((num) => num % 2 === 0) // Filtrer les nombres pairs
					.map((num) => (
						<tr key={num} className="bg-base-200">
							<td>{num}</td>
						</tr>
					))}
			</tbody>
		</table>
	);
}

// Exemple 4: Mapping d'Objets
function Personnes() {
	const people = [
		{ id: 1, name: "Alice", age: 30 },
		{ id: 2, name: "Bob", age: 25 },
		{ id: 3, name: "Charlie", age: 35 },
		{ id: 4, name: "David", age: 40 },
	];

	return (
		<table className="table">
			<thead>
				<tr>
					<th>Nom</th>
					<th>Âge</th>
				</tr>
			</thead>
			<tbody>
				{people.map((person) => (
					<tr key={person.id} className="bg-base-200">
						<td>Name: {person.name}</td>
						<td>Age: {person.age}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default function Map() {
	return (
		<div className="flex flex-col">
			{/* Exemple 1: Simple Mapping */}
			<div>
				<h2>Exemple 1: Simple Mapping</h2>
				<Nombres />
			</div>
			<aside>=======================</aside>

			{/* Exemple 2: Mapping avec Console Log */}
			<div>
				<h2>Exemple 2: Mapping avec Console Log</h2>
				<NombresAvecLog />
			</div>
			<aside>=======================</aside>

			{/* Exemple 3: Mapping après Filtrage */}
			<div>
				<h2>Exemple 3: Mapping après Filtrage</h2>
				<NombresPairs />
			</div>
			<aside>=======================</aside>

			{/* Exemple 4: Mapping d'Objets */}
			<div>
				<h2>Exemple 4: Mapping Objets</h2>
				<Personnes />
			</div>
		</div>
	);
}
