// .forEach() sert à exécuter une fonction donnée sur chaque élément du tableau.

// Exemple 1: Simple forEach
function AfficherNombres() {
	const numbers = [1, 2, 3, 4, 5];

	return (
		<ul>
			{numbers.forEach((num) => {
				return <li key={num}>{num}</li>; // Note: forEach ne retourne pas de tableau
			})}
		</ul>
	);
}

// Exemple 2: Calculer la somme avec forEach
function SommeNombres() {
	const numbers = [1, 2, 3, 4, 5];
	let sum = 0;

	numbers.forEach((num) => {
		sum += num; // Additionne chaque nombre
	});

	return <p className="bg-base-200">La somme des nombres est: {sum}</p>;
}

// Exemple 3: Affichage dans la console avec forEach
function AfficherDansConsole() {
	const numbers = [1, 2, 3, 4, 5];

	numbers.forEach((num) => {
		console.log(num); // Affiche chaque nombre dans la console
	});

	return (
		<p className="bg-base-200">
			Les nombres ont été affichés dans la console.
		</p>
	);
}

export default function ForEach() {
	return (
		<div className="flex flex-col">
			{/* Exemple 1: Simple forEach */}
			<div>
				<h2>Exemple 1: Simple forEach</h2>
				<AfficherNombres />
			</div>
			<aside>=======================</aside>

			{/* Exemple 2: Calculer la somme avec forEach */}
			<div>
				<h2>Exemple 2: Calculer la somme avec forEach</h2>
				<SommeNombres />
			</div>
			<aside>=======================</aside>

			{/* Exemple 3: Affichage dans la console avec forEach */}
			<div>
				<h2>Exemple 3: Affichage dans la console avec forEach</h2>
				<AfficherDansConsole />
			</div>
		</div>
	);
}
