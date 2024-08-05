// .includes() sert à déterminer si un tableau contient une valeur et retourne true ou false selon le cas.

// Exemple 1: Vérifier si un tableau contient un certain nombre
function ContientNombre() {
	const numbers = [1, 2, 3, 4, 5];
	const containsNumber = numbers.includes(3);

	return (
		<p className="bg-base-200">
			Le tableau contient le nombre 3: {containsNumber ? "Oui" : "Non"}
		</p>
	);
}

// Exemple 2: Vérifier si un tableau de chaînes contient un mot
function ContientMot() {
	const words = ["pomme", "banane", "orange"];
	const containsWord = words.includes("banane");

	return (
		<p className="bg-base-200">
			Le tableau contient le mot 'banane': {containsWord ? "Oui" : "Non"}
		</p>
	);
}

// Exemple 3: Vérifier si un tableau de caractères contient un certain caractère
function ContientCaractère() {
	const characters = ["a", "b", "c", "d"];
	const containsCharacter = characters.includes("c");

	return (
		<p className="bg-base-200">
			Le tableau contient le caractère 'c':{" "}
			{containsCharacter ? "Oui" : "Non"}
		</p>
	);
}

export default function Includes() {
	return (
		<div className="flex flex-col">
			{/* Exemple 1: Vérifier si un tableau contient un certain nombre */}
			<div>
				<h2>
					Exemple 1: Vérifier si un tableau contient un certain nombre
				</h2>
				<ContientNombre />
			</div>
			<aside>=======================</aside>

			{/* Exemple 2: Vérifier si un tableau de chaînes contient un mot */}
			<div>
				<h2>
					Exemple 2: Vérifier si un tableau de chaînes contient un mot
				</h2>
				<ContientMot />
			</div>
			<aside>=======================</aside>

			{/* Exemple 3: Vérifier si un tableau de caractères contient un certain caractère */}
			<div>
				<h2>
					Exemple 3: Vérifier si un tableau de caractères contient un
					certain caractère
				</h2>
				<ContientCaractère />
			</div>
		</div>
	);
}
