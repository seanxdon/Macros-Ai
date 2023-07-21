import { motion } from "framer-motion";
import RecipeResultBackdrop from "./RecipeResultBackdrop"
import "../styles/recipe-result-modal.css";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const RecipeResultModal = (props) => {
  const recipeResult = props.recipeResult;
  return (
    <RecipeResultBackdrop onClick={props.handleClose}>
      <motion.div
            onClick={(e) => e.stopPropagation()}  
            className="modal orange-gradient"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
          <p>{recipeResult}</p>
          <button onClick={props.handleClose}>Close</button>
      </motion.div>
      {/* <div className="recipe-result-modal px-5">
        <p className="recipe-result">{recipeResult}</p>
      </div> */}
    </RecipeResultBackdrop>
  )
}

export default RecipeResultModal;