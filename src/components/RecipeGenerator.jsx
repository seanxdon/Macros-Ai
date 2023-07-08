import { useRef, useState } from "react";

const RecipeGenerator = () => {

  const [recipe, setRecipe] = useState('')
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const formElement = useRef(null);
  const resultElement = useRef(null);
  const submitButton = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    showSpinner();
    const data = new FormData(formElement.current);

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
    });

    function showSpinner() {
      submitButton.disabled = true;
      submitButton.innerHTML = `Creating Recipe... <span></span>`
    }


    const output = await response.json();
    resultElement.current.innerHTML = `<p>${output.aiRecipe}</p>`
  }
  
  return (
    <form ref={formElement} onSubmit={handleSubmit}>
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
            <input ref={submitButton} className="rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit" />
          </div>
          <p ref={resultElement} className="text-white" id="result">Result will show up here</p>
      </div>
    </form>
  )
}

export default RecipeGenerator;