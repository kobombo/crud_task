import React from 'react';
import './App.scss';
import { RecipeListContainer } from './recipe-list/recipe-list-container';
import { AddRecipeButton } from './operation/button';
import { AddEditModal } from './operation/add-edit-modal';

function App() {
  return (
    <>
      <div className="app">
        <RecipeListContainer />
        <AddRecipeButton />
      </div>
      <AddEditModal />
    </>
  );
}

export default App;
