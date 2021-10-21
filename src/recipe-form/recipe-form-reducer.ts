import { Reducer } from "redux";
import { RecipeFormAction, RecipeFormActionType, RecipeFormState, RecipeFormType } from "./recipe-form-types";

const defaultRecipeFormState = { recipeFormType: RecipeFormType.NONE }

export const recipeFormReducer: Reducer<RecipeFormState, RecipeFormAction> = (
    state = defaultRecipeFormState,
    action = {} as RecipeFormAction
) => {
    switch (action.type) {
        case RecipeFormActionType.SELECT:
            const newState = { ...state };
            if (newState.selectedRecipeId === action.data) {
                delete newState.selectedRecipeId;
            } else {
                newState.selectedRecipeId = action.data;
            }
            return newState;
        case RecipeFormActionType.ADD:
            return {
                ...state,
                recipeFormType: RecipeFormType.ADD,
            }
        case RecipeFormActionType.EDIT:
            return {
                ...state,
                recipeFormType: RecipeFormType.EDIT,
                editedRecipe: action.data,
            }
        case RecipeFormActionType.CLOSE_FORM:
            return {
                selectedRecipeId: state.selectedRecipeId,
                recipeFormType: RecipeFormType.NONE,
            }
        default:
            return state;
    }
}