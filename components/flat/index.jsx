// Exemple 1: Aplatir un tableau de profondeur 1
function AplatirProfondeur1() {
	const arr = [1, [2, 3], [4, [5, 6]]];
	const flatArr = arr.flat();

	return (
		<ul className="bg-base-200">
			{flatArr.map((num, index) => (
				<li key={index}>{num}</li>
			))}
		</ul>
	);
}

// Exemple 2: Aplatir un tableau de profondeur 2
function AplatirProfondeur2() {
	const arr = [1, [2, 3], [4, [5, 6]]];
	const flatArr = arr.flat(2);

	return (
		<ul className="bg-base-200">
			{flatArr.map((num, index) => (
				<li key={index}>{num}</li>
			))}
		</ul>
	);
}

export default function Flat() {
	return (
		<div className="flex flex-col">
			{/* Exemple 1: Aplatir un tableau de profondeur 1 */}
			<div>
				<h2>Exemple 1: Aplatir un tableau de profondeur 1</h2>
				<AplatirProfondeur1 />
			</div>
			<aside>=======================</aside>

			{/* Exemple 2: Aplatir un tableau de profondeur 2 */}
			<div>
				<h2>Exemple 2: Aplatir un tableau de profondeur 2</h2>
				<AplatirProfondeur2 />
			</div>
		</div>
	);
}
