import React from 'react';
import './App.scss';
import { RecipeListContainer } from './recipe-list/recipe-list-container';
import { AddRecipeButton } from './recipe-form/button';
import { AddForm, EditForm } from './recipe-form/add-edit-form';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { RecipeFormType } from './recipe-form/recipe-form-types';

function App() {
  const recipeFormType = useSelector((state: RootState) => state.recipeFormReducer.recipeFormType);
  
  return (
    <>
      <div className="app">
        <RecipeListContainer />
        <AddRecipeButton />
      </div>
      {recipeFormType === RecipeFormType.ADD && <AddForm />}
      {recipeFormType === RecipeFormType.EDIT && <EditForm />}
    </>
  );
}

export default App;
