import { useRef, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import RecipeResultModal from "./RecipeResultModal";

const RecipeGenerator = () => {

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [recipeResult, setRecipeResult] = useState('');

  const [recipe, setRecipe] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const formEl = useRef(null);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const data = new FormData(formEl.current);

    const response = await fetch('http://localhost:8080/recipe', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        recipe: data.get('recipe'),
        calories: data.get('calories'),
        protein: data.get('protein'),
        prompt: `Create me a ${recipe} recipe under ${calories} calories with ${protein} grams of protein. Only give me the macro nutirents for each ingredient`,
      }),
    }).catch(() => {
      setIsLoading(false);  
      setErrorMessage("Unable to");
    });

    const output = await response.json();
    setRecipeResult(output.aiRecipe);
    setIsLoading(false);
    setShowModal(true);
  }
  
  return (
    <form ref={formEl} onSubmit={handleSubmit}>
      <div className="flex flex-col h-screen justify-center items-center">
          <div className="py-5">
            <label className="text-lg font-medium text-gray-100">
              Enter Recipe:
            </label>
            <input
                className="w-full rounded-md py-2 pl-1 text-gray-100 placeholder:text-gray-100"
                type="text"
                name="recipe"
                value={recipe}
                maxLength={100}
                placeholder="What are you craving today?"
                onChange={(e) => setRecipe(e.target.value)} />
          </div>
          <div className="py-5">
          <label className="text-lg font-medium text-gray-100">
              Calorie Limit:
            </label>
            <input
                className="w-full rounded-md py-2 pl-1 text-gray-100 placeholder:text-gray-100"
                type="number"
                name="calories"
                value={calories}
                max={9999}
                placeholder="Enter Calorie Limit"
                onChange={(e) => setCalories(e.target.value)} />
          </div>
          <div className="py-5">
          <label className="text-lg font-medium text-gray-100">
              Protein Goal:
            </label>
            <input
                className="w-full rounded-md py-2 pl-1 text-gray-100 placeholder:text-gray-100"
                type="number"
                name="protein"
                value={protein}
                max={999}
                placeholder="Enter Protein Goal"
                onChange={(e) => setProtein(e.target.value)} />
          </div>
          <div className="py-5">
            <button className="rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit" disabled={isLoading}>
              {errorMessage && <div className="error">{errorMessage}</div>}
              {isLoading ? <LoadingSpinner/> : "Generate Recipe"}
            </button>
          </div>
        <RecipeResultModal recipeResult={recipeResult}/>
      </div>
    </form>
  )
}

export default RecipeGenerator;