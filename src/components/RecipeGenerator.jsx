import { useState } from "react";

const RecipeGenerator = () => {

  const [recipe, setRecipe] = useState('')
  const [calories, setCalories] = useState();
  const [protein, setProtein] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Generating recipe for a ${recipe} with ${calories} calories and ${protein}g of protein`)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col h-screen justify-center items-center">
          <div className="py-5">
            <label className="text-lg font-medium text-gray-100">
              Enter Recipe:
            </label>
            <input
                className="w-full rounded-md py-2 pl-1 text-gray-100 placeholder:text-gray-100"
                type="text"
                value={recipe}
                maxLength={30}
                placeholder="Cookies, Pizza?"
                onChange={(e) => setRecipe(e.target.value)} />
          </div>
          <div className="py-5">
          <label className="text-lg font-medium text-gray-100">
              Calorie Limit:
            </label>
            <input
                className="w-full rounded-md py-2 pl-1 text-gray-100 placeholder:text-gray-100"
                type="text"
                value={calories}
                maxLength={4}
                placeholder="Enter Calorie Limit"
                onChange={(e) => setCalories(e.target.value)} />
          </div>
          <div className="py-5">
          <label className="text-lg font-medium text-gray-100">
              Protein Goal:
            </label>
            <input
                className="w-full rounded-md py-2 pl-1 text-gray-100 placeholder:text-gray-100"
                type="text"
                value={protein}
                maxLength={3}
                placeholder="Enter Protein Goal"
                onChange={(e) => setProtein(e.target.value)} />
          </div>
          <div className="py-5">
            <input className="rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit" />
          </div>
      </div>
    </form>
  )
}

export default RecipeGenerator;