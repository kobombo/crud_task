import { ActionCreator } from "redux";
import { AddRecipeAction, DeleteRecipeAction, EditRecipeAction, RecipeActionType } from "./recipe-types";

export const addRecipe: ActionCreator<AddRecipeAction> = (recipe) => ({
    type: RecipeActionType.ADD,
    data: recipe
});

export const editRecipe: ActionCreator<EditRecipeAction> = (recipe) => ({
    type: RecipeActionType.EDIT,
    data: recipe
});

export const deleteRecipe: ActionCreator<DeleteRecipeAction> = (id) => ({
    type: RecipeActionType.DELETE,
    data: id
});