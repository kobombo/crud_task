import { RecipeActionType } from "./recipe-types";
import { recipeReducer } from "./recipe-reducer";

describe('recipe reducer', () => {
    it('should return the initial state', () => {
        expect(recipeReducer(undefined, {} as never)).toEqual({
            recipes: [],
        });
    });

    it('adds a recipe to empty state', () => {
        // given
        const name = 'recipe1';
        const ingredients = [
            'ing1', 'ing2'
        ];
        const addAction = {
            type: RecipeActionType.ADD,
            data: { name, ingredients },
        }
        // when
        const newState = recipeReducer(undefined, addAction);
        // then
        expect(newState.recipes.length).toBe(1);
        expect(newState.recipes[0].name).toBe(name);
        expect(newState.recipes[0].ingredients).toEqual(ingredients);
        expect(newState.recipes[0].id).toBeTruthy();
    });

    it('adds a recipe to not empty state', () => {
        // given
        const oldState = {
            recipes: [{
                name: 'recipeOLD',
                ingredients: [
                    'ing0', 'ing23'
                ],
                timestamp: (new Date()).getTime()
            }]
        };
        const name = 'recipe1';
        const ingredients = [
            'ing1', 'ing2'
        ];
        const addAction = {
            type: RecipeActionType.ADD,
            data: { name, ingredients },
        }
        // when
        const newState = recipeReducer(oldState, addAction);
        // then
        expect(newState.recipes.length).toBe(2);
        expect(newState.recipes[1].name).toBe(name);
        expect(newState.recipes[1].ingredients).toEqual(ingredients);
        expect(newState.recipes[1].id).toBeTruthy();
    });

    it('edits a recipe', () => {
        // given
        const editedRecipeId = Math.random().toString(16).slice(2);
        const oldState = {
            recipes: [{
                name: 'recipeOLD',
                ingredients: [
                    'ing0', 'ing23'
                ],
                id: Math.random().toString(16).slice(2),
            },
            {
                name: 'recipe2',
                ingredients: [
                    'ing0', 'ing23'
                ],
                id: editedRecipeId
            }]
        };
        const name = 'recipeNEW';
        const ingredients = [
            'ingMSDDSA', 'ingSADDSA'
        ];
        const editAction = {
            type: RecipeActionType.EDIT,
            data: { id: editedRecipeId, name, ingredients },
        }
        // when
        const newState = recipeReducer(oldState, editAction);
        // then
        expect(newState.recipes.length).toBe(2);
        expect(newState.recipes[0]).toEqual(oldState.recipes[0]);
        expect(newState.recipes[1].name).toBe(name);
        expect(newState.recipes[1].ingredients).toEqual(ingredients);
        expect(newState.recipes[1].id).toEqual(editedRecipeId);
    });

    it('deletes a recipe', () => {
        // given
        const deletedRecipeId = Math.random().toString(16).slice(2);
        const oldState = {
            recipes: [{
                name: 'recipeOLD',
                ingredients: [
                    'ing0', 'ing23'
                ],
                id: Math.random().toString(16).slice(2),
            },
            {
                name: 'recipe2',
                ingredients: [
                    'ing0', 'ing23'
                ],
                id: deletedRecipeId
            }]
        };
        const name = 'recipeNEW';
        const ingredients = [
            'ingMSDDSA', 'ingSADDSA'
        ];
        const deleteAction = {
            type: RecipeActionType.DELETE,
            data: deletedRecipeId,
        }
        // when
        const newState = recipeReducer(oldState, deleteAction);
        // then
        expect(newState.recipes.length).toBe(1);
        expect(newState.recipes[0]).toEqual(oldState.recipes[0]);
    });
});
