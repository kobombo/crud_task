import { ActionCreator } from "redux";
import { AddRecipeAction, DeleteRecipeAction, RecipeActionType } from "./recipe-types";

export const addRecipe: ActionCreator<AddRecipeAction> = (recipe) => ({
    type: RecipeActionType.ADD,
    data: recipe
});

export const deleteRecipe: ActionCreator<DeleteRecipeAction> = (id) => ({
    type: RecipeActionType.DELETE,
    data: id
});