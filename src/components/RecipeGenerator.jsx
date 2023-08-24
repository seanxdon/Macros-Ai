import { useRef, useState } from "react";
import "../styles/RecipeGenerator.css"
import LoadingSpinner from "./LoadingSpinner";
import RecipeResultModal from "./RecipeResultModal";

const RecipeGenerator = () => {

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [recipeResult, setRecipeResult] = useState('');
  const [disabled, setDisabled] = useState(false);

  const [recipe, setRecipe] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const formEl = useRef(null);

  const close = () => setShowModal(false);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    setDisabled(!disabled);
    e.preventDefault();
    const data = new FormData(formEl.current);

    const response = await fetch('https://macros-ai-seanxdon.onrender.com/', {
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
      console.log("Request Failed");
    });

    const output = await response.json();
    console.log("Request Successful");
    setRecipeResult(output.aiRecipe);
    setIsLoading(false);
    setShowModal(true);

    //add reset form
  }
  
  return (
    <div className="recipe-form">
    <form ref={formEl} onSubmit={handleSubmit}>
      <div className="flex flex-col h-screen justify-center items-center">
          <div className="py-5">
            <label className="text-lg font-medium text-gray-100">
              Enter Recipe:
            </label>
            <input
                className="w-full rounded-md py-2 pl-1 text-gray-900 placeholder:text-gray-900"
                type="text"
                name="recipe"
                value={recipe}
                maxLength={100}
                disabled={disabled}
                placeholder="What are you craving today?"
                onChange={(e) => setRecipe(e.target.value)} />
          </div>
          <div className="py-5">
          <label className="text-lg font-medium text-gray-100">
              Calorie Limit:
            </label>
            <input
                className="w-full rounded-md py-2 pl-1 text-gray-900 placeholder:text-gray-900"
                type="number"
                name="calories"
                value={calories}
                max={9999}
                disabled={disabled}
                placeholder="Enter Calorie Limit"
                onChange={(e) => setCalories(e.target.value)} />
          </div>
          <div className="py-5">
          <label className="text-lg font-medium text-gray-100">
              Protein Goal:
            </label>
            <input
                className="w-full rounded-md py-2 pl-1 text-gray-900 placeholder:text-gray-900"
                type="number"
                name="protein"
                value={protein}
                max={999}
                disabled={disabled}
                placeholder="Enter Protein Goal"
                onChange={(e) => setProtein(e.target.value)} />
          </div>
          <div className="py-5">
            <button className="rounded-md bg-yellow-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600" type="submit" disabled={isLoading}>
              {errorMessage && <div className="error">{errorMessage}</div>}
              {isLoading ? <LoadingSpinner/> : "Generate Recipe"}
            </button>
          </div>
          {showModal ? (<RecipeResultModal handleClose={close} recipeResult={recipeResult}/>) : null}
      </div>
    </form>
  </div>
  )
}

export default RecipeGenerator;
