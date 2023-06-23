import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import RecipeGenerator from './components/RecipeGenerator'

function App() {
  return (
    <div>
      <Header />
      <RecipeGenerator />
    </div>
  );
}

export default App;
