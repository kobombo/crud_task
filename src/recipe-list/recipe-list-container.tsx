import { useSelector } from "react-redux"
import { RecipeElement } from "../recipe/recipe-element";
import { RootState } from "../redux/store";
import "./recipe-list.scss"

export const RecipeListContainer: React.FC = () => {
    const recipes = useSelector((state: RootState) => state.recipeReducer.recipes || []);
    const selectedRecipeId = useSelector((state: RootState) => state.operationReducer.selectedRecipeId);

    return (
        <div className='recipe-list-container'>
            {recipes.map(recipe => <RecipeElement recipe={recipe}
                isSelected={selectedRecipeId === recipe.id} />)}
        </div>
    )
}