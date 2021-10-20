import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addRecipe } from "../recipe/recipe-actions";
import { RecipeElement } from "../recipe/recipe-element";
import { RootState } from "../redux/store";
import "./recipe-list.scss"


export const RecipeListContainer: React.FC = () => {
    const recipes = useSelector((state: RootState) => state.recipeReducer.recipes || []);
    const dispatch = useDispatch();

    useEffect(() => {
        const test = [{
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
            id: 'editedRecipeId'
        }]

        dispatch(addRecipe(test[0]));
    }, [])

    return (
        <div className='recipe-list-container'>
            {recipes.map(recipe => <RecipeElement recipe={recipe} />)}
        </div>
    )
}