// .sort() sert à trier les éléments d'un tableau en place et retourne le tableau.

// Exemple 1: Trier les nombres en ordre croissant
function TrierNombresCroissant() {
	const numbers = [3, 1, 4, 1, 5, 9];
	const sortedNumbers = [...numbers].sort((a, b) => a - b);

	return (
		<ul className="bg-base-200">
			{sortedNumbers.map((num, index) => (
				<li key={index}>{num}</li>
			))}
		</ul>
	);
}

// Exemple 2: Trier les chaînes par ordre alphabétique
function TrierChaînesAlphabetiquement() {
	const strings = ["pomme", "banane", "orange"];
	const sortedStrings = [...strings].sort();

	return (
		<ul className="bg-base-200">
			{sortedStrings.map((str, index) => (
				<li key={index}>{str}</li>
			))}
		</ul>
	);
}

// Exemple 3: Trier les objets par une propriété
function TrierObjetsParÂge() {
	const users = [
		{ id: 1, name: "Alice", age: 30 },
		{ id: 2, name: "Bob", age: 25 },
		{ id: 3, name: "Charlie", age: 35 },
	];
	const sortedUsers = [...users].sort((a, b) => a.age - b.age);

	return (
		<ul className="bg-base-200">
			{sortedUsers.map((user) => (
				<li key={user.id}>
					{user.name} - {user.age} ans
				</li>
			))}
		</ul>
	);
}

export default function Sort() {
	return (
		<div className="flex flex-col">
			{/* Exemple 1: Trier les nombres en ordre croissant */}
			<div>
				<h2>Exemple 1: Trier les nombres en ordre croissant</h2>
				<TrierNombresCroissant />
			</div>
			<aside>=======================</aside>

			{/* Exemple 2: Trier les chaînes par ordre alphabétique */}
			<div>
				<h2>Exemple 2: Trier les chaînes par ordre alphabétique</h2>
				<TrierChaînesAlphabetiquement />
			</div>
			<aside>=======================</aside>

			{/* Exemple 3: Trier les objets par une propriété */}
			<div>
				<h2>Exemple 3: Trier les objets par une propriété</h2>
				<TrierObjetsParÂge />
			</div>
		</div>
	);
}
