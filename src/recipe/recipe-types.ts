import { Action } from "redux";

export interface RecipesState {
    recipes: Recipe[];
}

export interface Recipe {
    id?: string;
    name: string;
    ingredients?: string[];
}

export type RecipeAction = AddRecipeAction | EditRecipeAction | DeleteRecipeAction;

export interface AddRecipeAction extends Action {
    type: RecipeActionType.ADD;
    data: Recipe;
}

export interface EditRecipeAction extends Action {
    type: RecipeActionType.EDIT;
    data: Recipe;
}

export interface DeleteRecipeAction extends Action {
    type: RecipeActionType.DELETE;
    data: string;
}

export enum RecipeActionType {
    ADD = 'ADD',
    EDIT = 'EDIT',
    DELETE = 'DELETE',
}