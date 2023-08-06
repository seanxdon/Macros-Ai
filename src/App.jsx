import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import RecipeGenerator from './components/RecipeGenerator'
import SideNavigation from './components/SideNavigation';

function App() {
  return (
    <div class="app-container">
      <SideNavigation />
      <RecipeGenerator />
    </div>
  );
}

export default App;
