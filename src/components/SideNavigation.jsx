import '../styles/SideNavigation.css'

const SideNavigation = () => {
  return (
    <div className="side-navigation-container">
      <div className="header-logo">
        <h1>Macros.ai</h1>
      </div>
      <div className="navigation-link">
        <ul>
          <li>Dashboard</li>
          <li>Diary</li>
          <li>Find a Recipe</li>
          <li>Nutrition Calculator</li>
        </ul>
      </div>
      <div className="free-recipe-container">
        <h2>X/X Free Recipes Left</h2>
        <button>Upgrade</button>
      </div>
    </div>
  )
}

export default SideNavigation;