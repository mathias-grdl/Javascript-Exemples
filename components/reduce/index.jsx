// .reduce() sert à appliquer une fonction à un accumulateur et à chaque valeur du tableau (de gauche à droite) pour le réduire à une seule valeur.

// Exemple 1: Somme des nombres avec reduce
function SommeDesNombres() {
	const numbers = [1, 2, 3, 4, 5];
	const sum = numbers.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0
	);

	return <p>La somme des nombres est: {sum}</p>;
}

// Exemple 2: Concaténer des chaînes avec reduce
function ConcaténationDesChaînes() {
	const strings = ["Bonjour", "tout", "le", "monde"];
	const concatenatedString = strings.reduce(
		(acc, str) => acc + " " + str,
		""
	);

	return <p>Chaîne concaténée: {concatenatedString}</p>;
}

// Exemple 3: Calcul du produit de tous les éléments
function ProduitDesNombres() {
	const numbers = [1, 2, 3, 4, 5];
	const product = numbers.reduce((acc, num) => acc * num, 1);

	return <p>Le produit des nombres est: {product}</p>;
}

// Exemple 4: Compter les occurrences d'éléments
function CompterOccurrences() {
	const items = ["pomme", "orange", "pomme", "banane", "orange", "pomme"];
	const itemCounts = items.reduce((acc, item) => {
		acc[item] = (acc[item] || 0) + 1;
		return acc;
	}, {});

	return (
		<ul>
			{Object.entries(itemCounts).map(([item, count]) => (
				<li key={item}>
					{item}: {count}
				</li>
			))}
		</ul>
	);
}

export default function Reduce() {
	return (
		<div className="flex flex-col">
			{/* Exemple 1: Somme des nombres avec reduce */}
			<div>
				<h2>Exemple 1: Somme des nombres avec reduce</h2>
				<SommeDesNombres />
			</div>
			<aside>=======================</aside>

			{/* Exemple 2: Concaténer des chaînes avec reduce */}
			<div>
				<h2>Exemple 2: Concaténer des chaînes avec reduce</h2>
				<ConcaténationDesChaînes />
			</div>
			<aside>=======================</aside>

			{/* Exemple 3: Calcul du produit de tous les éléments */}
			<div>
				<h2>Exemple 3: Calcul du produit de tous les éléments</h2>
				<ProduitDesNombres />
			</div>
			<aside>=======================</aside>

			{/* Exemple 4: Compter les occurrences d'éléments */}
			<div>
				<h2>Exemple 4: Compter les occurrences d éléments</h2>
				<CompterOccurrences />
			</div>
		</div>
	);
}
