import { Reducer } from "redux";
import { AddRecipeAction, DeleteRecipeAction, EditRecipeAction, Recipe, RecipeAction, RecipeActionType, RecipesState } from "./recipe-types";

const defaultRecipeState = { recipes: [] };

export const recipeReducer: Reducer<RecipesState, RecipeAction> = (
    state = defaultRecipeState,
    action = {} as RecipeAction
) => {
    switch (action.type) {
        case RecipeActionType.ADD:
            return addRecipe(action, state);
        case RecipeActionType.EDIT:
            return editRecipe(state, action);
        case RecipeActionType.DELETE:
            return deleteRecipe(state, action);
        default:
            return state;
    }
}

const addRecipe = (action: AddRecipeAction, state: RecipesState) => {
    const newRecipe = {
        ...action.data,
        id: Math.random().toString(16).slice(2),
    };
    return {
        recipes: [
            ...state.recipes,
            newRecipe,
        ]
    };
}

const editRecipe = (state: RecipesState, action: EditRecipeAction) => {
    const recipesUpdated = state.recipes
        .map(recipe => recipe.id === action.data.id
            ? { ...recipe, ...action.data }
            : recipe

        );
    return {
        recipes: recipesUpdated,
    };
}

const deleteRecipe = (state: RecipesState, action: DeleteRecipeAction) => {
    const recipesLeft = state.recipes
        .filter(recipe => recipe.id !== action.data);
    return {
        recipes: recipesLeft,
    };
}
