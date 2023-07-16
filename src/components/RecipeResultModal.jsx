import "../styles/recipe-result-modal.css";

const RecipeResultModal = (props) => {
  const recipeResult = props.recipeResult;
  return (
    <div className="recipe-result-modal px-5">
      <p className="recipeResult">{recipeResult}</p>
    </div>
  )
}

export default RecipeResultModal;