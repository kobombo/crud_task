import { RecipeContent } from "./recipe-content"
import { RecipeTitle } from "./recipe-title"
import { Recipe } from "./recipe-types"
import "./recipe.scss"

interface RecipeProps {
    recipe: Recipe;
    isSelected?: boolean
}

export const RecipeElement: React.FC<RecipeProps> = ({ recipe, isSelected }) => {
    return (
        <div className='recipe-element'>
            <RecipeTitle recipe={recipe} isSelected={isSelected} />
            {isSelected && <RecipeContent recipe={recipe} />}
        </div >
    )
}