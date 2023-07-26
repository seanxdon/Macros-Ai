import { motion } from "framer-motion";
import "../styles/recipe-result-backdrop.css"

const RecipeResultBackdrop = (props) => { 
  return (
    <motion.div
      onClick={props.handleClose}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  );
};

export default RecipeResultBackdrop;