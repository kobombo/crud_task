import React from 'react';
import './App.scss';
import { RecipeListContainer } from './recipe-list/recipe-list-container';
import { AddRecipeButton } from './operation/button';
import { AddModal, EditModal } from './operation/add-edit-modal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { OperationType } from './operation/operation-types';
import { openAddModal } from './operation/operation-actions';

function App() {
  const operationType = useSelector((state: RootState) => state.operationReducer.operationType);
  
  return (
    <>
      <div className="app">
        <RecipeListContainer />
        <AddRecipeButton />
      </div>
      {operationType === OperationType.ADD && <AddModal />}
      {operationType === OperationType.EDIT && <EditModal />}
    </>
  );
}

export default App;
