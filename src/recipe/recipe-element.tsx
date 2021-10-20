import { RecipeContent } from "./recipe-content"
import { RecipeTitle } from "./recipe-title"
import { Recipe } from "./recipe-types"
import "./recipe.scss"

interface RecipeProps {
    recipe: Recipe;
}

export const RecipeElement: React.FC<RecipeProps> = ({ recipe }) => {
    return (
        <div className='recipe-element'>
            <RecipeTitle recipe={recipe} />
            <RecipeContent recipe={recipe} />
        </div >
    )
}