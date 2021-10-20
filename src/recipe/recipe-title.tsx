import { Recipe } from "./recipe-types"
import "./recipe.scss"

interface RecipeTitleProps {
    recipe: Recipe;
}

export const RecipeTitle: React.FC<RecipeTitleProps> = ({ recipe }) => {
    return (
        <div className='recipe-title'
            onClick={() => console.warn('testtttt')}>
            {recipe.name}
        </div>
    )
}