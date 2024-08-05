// Exemple 1: Extraire une partie d'un tableau
function ExtrairePartie() {
	const numbers = [1, 2, 3, 4, 5];
	const sliced = numbers.slice(1, 3); // Extraire les éléments 2 et 3

	return (
		<ul className="bg-base-200">
			{sliced.map((num, index) => (
				<li key={index}>{num}</li>
			))}
		</ul>
	);
}

// Exemple 2: Copier un tableau complet
function CopierTableau() {
	const numbers = [1, 2, 3, 4, 5];
	const copied = numbers.slice(); // Copier le tableau complet

	return (
		<ul className="bg-base-200">
			{copied.map((num, index) => (
				<li key={index}>{num}</li>
			))}
		</ul>
	);
}

export default function Slice() {
	return (
		<div className="flex flex-col">
			{/* Exemple 1: Extraire une partie d'un tableau */}
			<div>
				<h2>Exemple 1: Extraire une partie d'un tableau</h2>
				<ExtrairePartie />
			</div>
			<aside>=======================</aside>

			{/* Exemple 2: Copier un tableau complet */}
			<div>
				<h2>Exemple 2: Copier un tableau complet</h2>
				<CopierTableau />
			</div>
		</div>
	);
}
