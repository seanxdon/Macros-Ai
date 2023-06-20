import { useState } from "react";

const RecipeGenerator = () => {

  const [recipe, setRecipe] = useState('')
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Generating recipe for a ${recipe} with ${calories} calories and ${protein}g of protein`)
  }
  
  return (
    <div className="recipeGenerator">
      <h2>What are you craving today?</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Enter Recipe:
          <input
            type="text"
            value={recipe}
            onChange={(e) => setRecipe(e.target.value)} />
        </label>
        <label>
          Enter Calorie Limit:
          <input 
            type="text"
            value={calories}
            onChange={(e) => setCalories(e.target.value)} />
        </label>
        <label>
          Enter Protein Goal:
          <input 
            type="text"
            value={protein}
            onChange={(e) => setProtein(e.target.value)} />
        </label>
        <input type="submit" />
      </form>

    </div>
  )
}

export default RecipeGenerator;