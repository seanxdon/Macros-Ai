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
            className="modal"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
          <p>{recipeResult}</p>
          <button className="rounded-md bg-yellow-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600" onClick={props.handleClose}>Close</button>
      </motion.div>
    </RecipeResultBackdrop>
  )
}

export default RecipeResultModal;