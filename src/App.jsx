import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import RecipeGenerator from './components/RecipeGenerator'

function App() {
  return (
    <div className='app-layout'>
      <Header />
      <RecipeGenerator />
    </div>
  );
}

export default App;
