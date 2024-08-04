// .every() sert à tester si tous les éléments du tableau passent le test implémenté par la fonction fournie.

// Exemple 1: Vérifier si tous les éléments sont des nombres positifs avec every
function TousPositifs() {
	const numbers = [1, 2, 3, 4, 5];

	const allPositive = numbers.every((num) => num > 0);

	return (
		<p className="bg-base-200">
			Tous les nombres sont positifs: {allPositive ? "Oui" : "Non"}
		</p>
	);
}

// Exemple 2: Vérifier si toutes les chaînes sont en majuscules avec every
function ToutesMajuscules() {
	const strings = ["HELLO", "WORLD", "REACT"];

	const allUppercase = strings.every((str) => str === str.toUpperCase());

	return (
		<p className="bg-base-200">
			Toutes les chaînes sont en majuscules:{" "}
			{allUppercase ? "Oui" : "Non"}
		</p>
	);
}

// Exemple 3: Vérifier si tous les utilisateurs sont actifs avec every
function TousActifs() {
	const users = [
		{ id: 1, name: "Alice", isActive: true },
		{ id: 2, name: "Bob", isActive: true },
	];

	const allActive = users.every((user) => user.isActive);

	return (
		<p className="bg-base-200">
			Tous les utilisateurs sont actifs: {allActive ? "Oui" : "Non"}
		</p>
	);
}

export default function Every() {
	return (
		<div className="flex flex-col">
			{/* Exemple 1: Vérifier si tous les éléments sont des nombres positifs avec every */}
			<div>
				<h2>
					Exemple 1: Vérifier si tous les éléments sont des nombres
					positifs avec every
				</h2>
				<TousPositifs />
			</div>
			<aside>=======================</aside>

			{/* Exemple 2: Vérifier si toutes les chaînes sont en majuscules avec every */}
			<div>
				<h2>
					Exemple 2: Vérifier si toutes les chaînes sont en majuscules
					avec every
				</h2>
				<ToutesMajuscules />
			</div>
			<aside>=======================</aside>

			{/* Exemple 3: Vérifier si tous les utilisateurs sont actifs avec every */}
			<div>
				<h2>
					Exemple 3: Vérifier si tous les utilisateurs sont actifs
					avec every
				</h2>
				<TousActifs />
			</div>
		</div>
	);
}
