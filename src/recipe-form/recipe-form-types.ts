import { Action } from "redux";
import { Recipe } from "../recipe/recipe-types";

export interface RecipeFormState {
    recipeFormType: RecipeFormType;
    editedRecipe?: Recipe;
    selectedRecipeId?: string;
}

export type RecipeFormAction = SelectRecipeAction | OpenAddFormAction | OpenEditFormAction | CloseFormAction;

export interface SelectRecipeAction extends Action {
    type: RecipeFormActionType.SELECT;
    data: string;
}

export interface OpenAddFormAction extends Action {
    type: RecipeFormActionType.ADD;
}

export interface OpenEditFormAction extends Action {
    type: RecipeFormActionType.EDIT;
    data: Recipe;
}

export interface CloseFormAction extends Action {
    type: RecipeFormActionType.CLOSE_FORM;
}

export enum RecipeFormType {
    NONE = 'NONE',
    ADD = 'ADD',
    EDIT = 'EDIT',
}

export enum RecipeFormActionType {
    SELECT = 'SELECT_RECIPE',
    ADD = 'ADD_MODAL',
    EDIT = 'EDIT_MODAL',
    CLOSE_FORM = 'CLOSE_FORM'
}