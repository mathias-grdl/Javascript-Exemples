// Exemple 1: Doubler les valeurs puis aplatir
function DoubleEtAplatir() {
	const numbers = [1, 2, 3, 4];
	const doubledAndFlat = numbers.flatMap((num) => [num, num * 2]);

	return (
		<ul className="bg-base-200">
			{doubledAndFlat.map((num, index) => (
				<li key={index}>{num}</li>
			))}
		</ul>
	);
}

// Exemple 2: Transformer et aplatir des chaînes
function TransformerChaînes() {
	const words = ["Hello", "world"];
	const transformedAndFlat = words.flatMap((word) => word.split(""));

	return <p className="bg-base-200">{transformedAndFlat.join(", ")}</p>;
}

export default function FlatMap() {
	return (
		<div className="flex flex-col">
			{/* Exemple 1: Doubler les valeurs puis aplatir */}
			<div>
				<h2>Exemple 1: Doubler les valeurs puis aplatir</h2>
				<DoubleEtAplatir />
			</div>
			<aside>=======================</aside>

			{/* Exemple 2: Transformer et aplatir des chaînes */}
			<div>
				<h2>Exemple 2: Transformer et aplatir des chaînes</h2>
				<TransformerChaînes />
			</div>
		</div>
	);
}
