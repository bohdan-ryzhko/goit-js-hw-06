const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

ingredients.map(ingredient => {
	let createElementLi = document.createElement('li');
	ingredientsList.prepend(createElementLi)
	createElementLi.textContent = ingredient
});