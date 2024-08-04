// .some() sert à tester si au moins un des éléments du tableau passe le test implémenté par la fonction fournie.

// Exemple 1: Vérifier si le tableau contient un nombre supérieur à 5 avec some
function ContientNombreSupérieur() {
	const numbers = [1, 2, 3, 4, 5, 6, 7];

	const hasNumberGreaterThanFive = numbers.some((num) => num > 5);

	return (
		<p className="bg-base-200">
			Contient un nombre supérieur à 5:{" "}
			{hasNumberGreaterThanFive ? "Oui" : "Non"}
		</p>
	);
}

// Exemple 2: Vérifier si le tableau contient des éléments négatifs avec some
function ContientNégatifs() {
	const numbers = [1, -2, 3, 4, -5];

	const hasNegativeNumbers = numbers.some((num) => num < 0);

	return (
		<p className="bg-base-200">
			Contient des éléments négatifs: {hasNegativeNumbers ? "Oui" : "Non"}
		</p>
	);
}

// Exemple 3: Vérifier si un tableau d'objets a un utilisateur actif avec some
function UtilisateurActif() {
	const users = [
		{ id: 1, name: "Alice", isActive: true },
		{ id: 2, name: "Bob", isActive: false },
	];

	const hasActiveUser = users.some((user) => user.isActive);

	return (
		<p className="bg-base-200">
			Il y a un utilisateur actif: {hasActiveUser ? "Oui" : "Non"}
		</p>
	);
}

export default function Some() {
	return (
		<div className="flex flex-col">
			{/* Exemple 1: Vérifier si le tableau contient un nombre supérieur à 5 avec some */}
			<div>
				<h2>
					Exemple 1: Vérifier si le tableau contient un nombre
					supérieur à 5 avec some
				</h2>
				<ContientNombreSupérieur />
			</div>
			<aside>=======================</aside>

			{/* Exemple 2: Vérifier si le tableau contient des éléments négatifs avec some */}
			<div>
				<h2>
					Exemple 2: Vérifier si le tableau contient des éléments
					négatifs avec some
				</h2>
				<ContientNégatifs />
			</div>
			<aside>=======================</aside>

			{/* Exemple 3: Vérifier si un tableau d'objets a un utilisateur actif avec some */}
			<div>
				<h2>
					Exemple 3: Vérifier si un tableau d'objets a un utilisateur
					actif avec some
				</h2>
				<UtilisateurActif />
			</div>
		</div>
	);
}
