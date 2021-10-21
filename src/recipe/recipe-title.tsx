import { useDispatch } from "react-redux"
import { selectRecipe } from "../recipe-form/recipe-form-actions";
import { Recipe } from "./recipe-types"
import "./recipe.scss"

interface RecipeTitleProps {
    recipe: Recipe;
    isSelected?: boolean,
}

export const RecipeTitle: React.FC<RecipeTitleProps> = ({ recipe, isSelected }) => {
    const dispatch = useDispatch();
    const className = `recipe-title ${isSelected && 'selected'}`
    return (
        <div className={className}
            onClick={() => dispatch(selectRecipe(recipe.id))}>
            {recipe.name}
        </div>
    )
}