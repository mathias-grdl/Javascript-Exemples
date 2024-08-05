// Exemple 1: Remplir tout le tableau avec une valeur
function RemplirTout() {
	const numbers = new Array(5).fill(0);

	return (
		<ul className="bg-base-200">
			{numbers.map((num, index) => (
				<li key={index}>{num}</li>
			))}
		</ul>
	);
}

// Exemple 2: Remplir une partie du tableau
function RemplirPartie() {
	const numbers = [1, 2, 3, 4, 5];
	numbers.fill(0, 1, 3);

	return (
		<ul className="bg-base-200">
			{numbers.map((num, index) => (
				<li key={index}>{num}</li>
			))}
		</ul>
	);
}

export default function Fill() {
	return (
		<div className="flex flex-col">
			{/* Exemple 1: Remplir tout le tableau avec une valeur */}
			<div>
				<h2>Exemple 1: Remplir tout le tableau avec une valeur</h2>
				<RemplirTout />
			</div>
			<aside>=======================</aside>

			{/* Exemple 2: Remplir une partie du tableau */}
			<div>
				<h2>Exemple 2: Remplir une partie du tableau</h2>
				<RemplirPartie />
			</div>
		</div>
	);
}
