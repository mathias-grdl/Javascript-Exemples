import React from "react";

const ArrayMethodsExample = () => {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	// .map() sert à créer un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
	const doubled = numbers.map((num) => num);
	console.log("Doubled Numbers (using .map()):", doubled);

	// .filter() sert à créer un nouveau tableau avec tous les éléments du tableau appelant qui passent le test implémenté par la fonction fournie.
	const evenNumbers = numbers.filter((num) => num !== 2);
	console.log("Even Numbers (using .filter()):", evenNumbers);

	// .reduce() sert à appliquer une fonction à un accumulateur et à chaque valeur du tableau (de gauche à droite) pour le réduire à une seule valeur.
	const sum = numbers.reduce((acc, num) => acc + num, 0);
	console.log("Sum of Numbers (using .reduce()):", sum);

	// .sort() sert à trier les éléments d'un tableau en place et retourne le tableau.
	const sortedNumbers = [...numbers].sort((a, b) => b - a); // Tri décroissant
	console.log("Numbers Sorted Descending (using .sort()):", sortedNumbers);

	// .find() sert à retourner la première valeur trouvée dans le tableau qui satisfait la fonction de test fournie.
	const firstEven = numbers.find((num) => num % 2 === 0);
	console.log("First Even Number (using .find()):", firstEven);

	// .every() sert à tester si tous les éléments du tableau passent le test implémenté par la fonction fournie.
	const allPositive = numbers.every((num) => num > 0);
	console.log("All Numbers Positive (using .every()):", allPositive);

	// .some() sert à tester si au moins un des éléments du tableau passe le test implémenté par la fonction fournie.
	const someGreaterThanFive = numbers.some((num) => num > 5);
	console.log(
		"Some Numbers Greater Than Five (using .some()):",
		someGreaterThanFive
	);

	// .includes() sert à déterminer si un tableau contient une valeur et retourne true ou false selon le cas.
	const includesThree = numbers.includes(3);
	console.log("Includes Number 3 (using .includes()):", includesThree);

	// .forEach() sert à exécuter une fonction donnée sur chaque élément du tableau.
	const logNumbers = [];
	numbers.forEach((num) => logNumbers.push(num));
	console.log("Logged Numbers (using .forEach()):", logNumbers);

	// .slice() sert à retourner une copie superficielle d'une portion du tableau dans un nouveau tableau objet sélectionné depuis début jusqu'à fin (fin non inclus).
	const slicedNumbers = numbers.slice(2, 5);
	console.log("Sliced Numbers (using .slice()):", slicedNumbers);

	// .splice() sert à changer le contenu d'un tableau en retirant, remplaçant ou ajoutant des éléments.
	const splicedNumbers = [...numbers];
	splicedNumbers.splice(5, 2, 99, 100); // Enlève 2 éléments à partir de l'index 5 et ajoute 99 et 100
	console.log("Spliced Numbers (using .splice()):", splicedNumbers);

	// .concat() sert à fusionner deux ou plusieurs tableaux.
	const concatenatedNumbers = numbers.concat([11, 12, 13]);
	console.log("Concatenated Numbers (using .concat()):", concatenatedNumbers);

	// .indexOf() sert à retourner le premier index où un élément donné peut être trouvé dans le tableau.
	const indexOfFour = numbers.indexOf(4);
	console.log("Index of 4 (using .indexOf()):", indexOfFour);

	// .lastIndexOf() sert à retourner le dernier index où un élément donné peut être trouvé dans le tableau.
	const lastIndexOfFour = [1, 2, 3, 4, 3, 2, 1].lastIndexOf(2);
	console.log("Last Index of 2 (using .lastIndexOf()):", lastIndexOfFour);

	// .join() sert à joindre tous les éléments d'un tableau en une seule chaîne de caractères.
	const joinedNumbers = numbers.join(", ");
	console.log("Joined Numbers (using .join()):", joinedNumbers);

	// .reverse() sert à inverser l'ordre des éléments d'un tableau en place.
	const reversedNumbers = [...numbers].reverse();
	console.log("Reversed Numbers (using .reverse()):", reversedNumbers);

	// .flat() sert à créer un nouveau tableau avec tous les éléments de sous-tableaux concaténés récursivement jusqu'à une profondeur spécifiée.
	const nestedNumbers = [1, [2, 3], [4, [5, 6]]];
	const flatNumbers = nestedNumbers.flat(2);
	console.log("Flat Numbers (using .flat()):", flatNumbers);

	//
	const results = [
		{ method: ".map", description: "Doubled Numbers", result: doubled },
		{ method: ".filter", description: "Even Numbers", result: evenNumbers },
		{ method: ".reduce", description: "Sum of Numbers", result: sum },
		{
			method: ".sort",
			description: "Numbers Sorted Descending",
			result: sortedNumbers,
		},
		{
			method: ".find",
			description: "First Even Number",
			result: firstEven,
		},
		{
			method: ".every",
			description: "All Numbers Positive",
			result: allPositive,
		},
		{
			method: ".some",
			description: "Some Numbers Greater Than Five",
			result: someGreaterThanFive,
		},
		{
			method: ".includes",
			description: "Includes Number 3",
			result: includesThree,
		},
		{
			method: ".forEach",
			description: "Logged Numbers",
			result: logNumbers,
		},
		{
			method: ".slice",
			description: "Sliced Numbers",
			result: slicedNumbers,
		},
		{
			method: ".splice",
			description: "Spliced Numbers",
			result: splicedNumbers,
		},
		{
			method: ".concat",
			description: "Concatenated Numbers",
			result: concatenatedNumbers,
		},
		{ method: ".indexOf", description: "Index of 4", result: indexOfFour },
		{
			method: ".lastIndexOf",
			description: "Last Index of 2",
			result: lastIndexOfFour,
		},
		{
			method: ".join",
			description: "Joined Numbers",
			result: joinedNumbers,
		},
		{
			method: ".reverse",
			description: "Reversed Numbers",
			result: reversedNumbers,
		},
		{ method: ".flat", description: "Flat Numbers", result: flatNumbers },
	];

	return (
		<div>
			<h1>Array Methods Example</h1>
			<p>Original Numbers: {numbers.join(", ")}</p>
			<ul>
				{results.map((item, index) => (
					<li key={index}>
						{item.method}: {item.description} -{" "}
						{Array.isArray(item.result)
							? item.result.join(", ")
							: item.result}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ArrayMethodsExample;
