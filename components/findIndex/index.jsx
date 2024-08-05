// Exemple 1: Trouver l'index du premier nombre supérieur à 10
function IndexNombreSupérieur() {
	const numbers = [5, 8, 15, 3, 20];
	const index = numbers.findIndex((num) => num > 10);

	return (
		<p className="bg-base-200">
			Index du premier nombre supérieur à 10: {index}
		</p>
	);
}

// Exemple 2: Trouver l'index d'un utilisateur par son nom
function IndexUtilisateur() {
	const users = [
		{ id: 1, name: "Alice" },
		{ id: 2, name: "Bob" },
		{ id: 3, name: "Charlie" },
	];

	const index = users.findIndex((user) => user.name === "Charlie");

	return <p className="bg-base-200">Index de l'utilisateur: {index}</p>;
}

// Exemple 3: Trouver l'index du premier nombre pair
function IndexPremierPair() {
	const numbers = [7, 13, 10, 5, 8];
	const index = numbers.findIndex((num) => num % 2 === 0);

	return <p className="bg-base-200">Index du premier nombre pair: {index}</p>;
}

export default function FindIndex() {
	return (
		<div className="flex flex-col">
			{/* Exemple 1: Trouver l'index du premier nombre supérieur à 10 */}
			<div>
				<h2>
					Exemple 1: Trouver l'index du premier nombre supérieur à 10
				</h2>
				<IndexNombreSupérieur />
			</div>
			<aside>=======================</aside>

			{/* Exemple 2: Trouver l'index d'un utilisateur par son nom */}
			<div>
				<h2>Exemple 2: Trouver l'index d'un utilisateur par son nom</h2>
				<IndexUtilisateur />
			</div>
			<aside>=======================</aside>

			{/* Exemple 3: Trouver l'index du premier nombre pair */}
			<div>
				<h2>Exemple 3: Trouver l'index du premier nombre pair</h2>
				<IndexPremierPair />
			</div>
		</div>
	);
}
