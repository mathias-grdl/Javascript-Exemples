// .find() sert à retourner la première valeur trouvée dans le tableau qui satisfait la fonction de test fournie.

// Exemple 1: Trouver le premier nombre supérieur à 10
function TrouverNombreSupérieur() {
	const numbers = [5, 8, 15, 3, 20];
	const foundNumber = numbers.find((num) => num > 10);

	return (
		<p className="bg-base-200">
			Premier nombre supérieur à 10: {foundNumber}
		</p>
	);
}

// Exemple 2: Trouver un utilisateur par son nom
function TrouverUtilisateur() {
	const users = [
		{ id: 1, name: "Alice" },
		{ id: 2, name: "Bob" },
		{ id: 3, name: "Charlie" },
	];

	const user = users.find((user) => user.name === "Bob");

	return (
		<p className="bg-base-200">
			Utilisateur trouvé: {user ? user.name : "Non trouvé"}
		</p>
	);
}

// Exemple 3: Trouver le premier nombre pair
function TrouverPremierPair() {
	const numbers = [7, 13, 10, 5, 8];
	const firstEvenNumber = numbers.find((num) => num % 2 === 0);

	return (
		<p className="bg-base-200">Premier nombre pair: {firstEvenNumber}</p>
	);
}

export default function Find() {
	return (
		<div className="flex flex-col">
			{/* Exemple 1: Trouver le premier nombre supérieur à 10 */}
			<div>
				<h2>Exemple 1: Trouver le premier nombre supérieur à 10</h2>
				<TrouverNombreSupérieur />
			</div>
			<aside>=======================</aside>

			{/* Exemple 2: Trouver un utilisateur par son nom */}
			<div>
				<h2>Exemple 2: Trouver un utilisateur par son nom</h2>
				<TrouverUtilisateur />
			</div>
			<aside>=======================</aside>

			{/* Exemple 3: Trouver le premier nombre pair */}
			<div>
				<h2>Exemple 3: Trouver le premier nombre pair</h2>
				<TrouverPremierPair />
			</div>
		</div>
	);
}
