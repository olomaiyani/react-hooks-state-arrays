import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
	const [foods, setFoods] = useState(spicyFoods);

	const [newFilter, setNewFilter] = useState("All");

	function handleAddFood() {
		const newFood = getNewRandomSpicyFood();
		const newFoodArray = [...foods, newFood];
		setFoods(newFoodArray);
	}
	const handleClick = (id) => {
		const newFoodArray = foods.map((food) => {
			if (food.id === id) {
				return { ...food, heatLevel: food.heatLevel + 1 };
			}
			return food;
		});
		setFoods(newFoodArray);
	};
	const foodsToDisplay = foods.filter((food) => {
		if (newFilter === "All") return true;
		return food.cuisine === newFilter;
	});
	const handleFilterChange = (event) => {
		const newFilter = event.target.value;
		SetNewFilter(newFilter);
		setNewFilter(newFilter);
	};
	const foodList = foodsToDisplay.map((food) => (
		<li key={food.id} onClick={() => handleClick(food.id)}>
			{food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
		</li>
	));
	return (
		<div>
			<select name="filter" onChange={handleFilterChange}>
				<option value="All">All</option>
				<option value="American">American</option>
				<option value="Sichuan">Sichuan</option>
				<option value="Thai">Thai</option>
				<option value="Mexican">Mexican</option>
			</select>
			<button onClick={handleAddFood}>Add New Food</button>
			<ul>{foodList}</ul>
		</div>
	);
}
export default SpicyFoodList;