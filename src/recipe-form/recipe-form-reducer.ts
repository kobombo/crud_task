import { Reducer } from "redux";
import { OpenEditFormAction, RecipeFormAction, RecipeFormActionType, RecipeFormState, RecipeFormType, SelectRecipeAction } from "./recipe-form-types";

const defaultRecipeFormState = { recipeFormType: RecipeFormType.NONE }

export const recipeFormReducer: Reducer<RecipeFormState, RecipeFormAction> = (
    state = defaultRecipeFormState,
    action = {} as RecipeFormAction
) => {
    switch (action.type) {
        case RecipeFormActionType.SELECT:
            return selectRecipe(state, action);
        case RecipeFormActionType.ADD:
            return requestAddForm(state)
        case RecipeFormActionType.EDIT:
            return requestEditForm(state, action)
        case RecipeFormActionType.CLOSE_FORM:
            return closeForm(state)
        default:
            return state;
    }
}

const selectRecipe = (state: RecipeFormState, action: SelectRecipeAction) => {
    const newState = { ...state };
    if (newState.selectedRecipeId === action.data) {
        delete newState.selectedRecipeId;
    } else {
        newState.selectedRecipeId = action.data;
    }
    return newState;
}

const requestAddForm = (state: RecipeFormState): RecipeFormState => {
    return {
        ...state,
        recipeFormType: RecipeFormType.ADD,
    };
}

const requestEditForm = (state: RecipeFormState, action: OpenEditFormAction): RecipeFormState => {
    return {
        ...state,
        recipeFormType: RecipeFormType.EDIT,
        editedRecipe: action.data,
    };
}

const closeForm = (state: RecipeFormState): RecipeFormState => {
    return {
        selectedRecipeId: state.selectedRecipeId,
        recipeFormType: RecipeFormType.NONE,
    };
}
