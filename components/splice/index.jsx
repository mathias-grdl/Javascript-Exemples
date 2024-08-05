// Exemple 1: Supprimer des éléments
function SupprimerÉléments() {
	const numbers = [1, 2, 3, 4, 5];
	const removed = numbers.splice(2, 2); // Supprimer 2 éléments à partir de l'index 2

	return (
		<div className="bg-base-200">
			<p>Tableau après suppression: {numbers.join(", ")}</p>
			<p>Éléments supprimés: {removed.join(", ")}</p>
		</div>
	);
}

// Exemple 2: Ajouter des éléments
function AjouterÉléments() {
	const numbers = [1, 2, 3, 4, 5];
	numbers.splice(2, 0, 6, 7); // Ajouter 6 et 7 à l'index 2

	return (
		<p className="bg-base-200">Tableau après ajout: {numbers.join(", ")}</p>
	);
}

export default function Splice() {
	return (
		<div className="flex flex-col">
			{/* Exemple 1: Supprimer des éléments */}
			<div>
				<h2>Exemple 1: Supprimer des éléments</h2>
				<SupprimerÉléments />
			</div>
			<aside>=======================</aside>

			{/* Exemple 2: Ajouter des éléments */}
			<div>
				<h2>Exemple 2: Ajouter des éléments</h2>
				<AjouterÉléments />
			</div>
		</div>
	);
}
