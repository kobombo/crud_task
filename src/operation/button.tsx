import { useDispatch } from "react-redux"
import { deleteRecipe } from "../recipe/recipe-actions"
import { Recipe } from "../recipe/recipe-types"
import "./button.scss"

interface RecipeButtonProps {
    recipe: Recipe;
}

export const AddRecipeButton: React.FC = () => {
    return (
        <div className="add-recipe">
            Add Recipe
        </div>
    )
}

export const EditRecipeButton: React.FC<RecipeButtonProps> = ({recipe}) => {
    return (
        <div className="common-recipe edit-recipe">
            Edit
        </div>
    )
}

export const DeleteRecipeButton: React.FC<RecipeButtonProps> = ({recipe}) => {
    const dispatch = useDispatch();

    return (
        <div 
        className="common-recipe delete-recipe"
        onClick={() => dispatch(deleteRecipe(recipe.id))}>
            Delete
        </div>
    )
}