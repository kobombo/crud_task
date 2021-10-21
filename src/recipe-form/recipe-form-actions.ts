import { ActionCreator } from "redux";
import { CloseFormAction, OpenAddFormAction, OpenEditFormAction, RecipeFormActionType, SelectRecipeAction } from "./recipe-form-types";

export const selectRecipe: ActionCreator<SelectRecipeAction> = (id) => ({
    type: RecipeFormActionType.SELECT,
    data: id
});

export const openAddForm: ActionCreator<OpenAddFormAction> = () => ({
    type: RecipeFormActionType.ADD,
});

export const openEditForm: ActionCreator<OpenEditFormAction> = (recipe) => ({
    type: RecipeFormActionType.EDIT,
    data: recipe
});

export const closeForm: ActionCreator<CloseFormAction> = () => ({
    type: RecipeFormActionType.CLOSE_FORM,
});