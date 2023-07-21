import { motion } from "framer-motion";

const RecipeResultBackdrop = (props) => {
 
  return (
    <motion.div
      onClick={props.onClick}
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