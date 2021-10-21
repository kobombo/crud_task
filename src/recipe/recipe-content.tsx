import { DeleteRecipeButton, EditRecipeButton } from "../recipe-form/button"
import { Recipe } from "./recipe-types"
import "./recipe.scss"

interface RecipeContentProps {
    recipe: Recipe;
}

export const RecipeContent: React.FC<RecipeContentProps> = ({ recipe }) => {
    return (
        <div className='recipe-content'>
            <div className="ingredients-header">Ingredients</div>
            <div className="ingredients-table">
                {recipe.ingredients?.map(ingredient => <div className="ingredient">{ingredient}</div>)}
            </div>
            <div className="recipe-buttons">
                <DeleteRecipeButton recipe={recipe} />
                <EditRecipeButton recipe={recipe} />
            </div>
        </div>
    )
}