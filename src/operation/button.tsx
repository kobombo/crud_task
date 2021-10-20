import { useDispatch } from "react-redux"
import { addRecipe, deleteRecipe, editRecipe } from "../recipe/recipe-actions"
import { Recipe } from "../recipe/recipe-types"
import "./button.scss"
import { closeModal, openAddModal, openEditModal } from "./operation-actions"

interface RecipeButtonProps {
    recipe: Recipe;
}

export const AddRecipeButton: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <div className="add-recipe" onClick={() => dispatch(openAddModal())}>
            Add Recipe
        </div>
    )
}

export const EditRecipeButton: React.FC<RecipeButtonProps> = ({ recipe }) => {
    const dispatch = useDispatch();
    return (
        <div className="common-recipe edit-recipe"
            onClick={() => dispatch(openEditModal(recipe))}>
            Edit
        </div>
    )
}

export const DeleteRecipeButton: React.FC<RecipeButtonProps> = ({ recipe }) => {
    const dispatch = useDispatch();
    return (
        <div
            className="common-recipe delete-recipe"
            onClick={() => dispatch(deleteRecipe(recipe.id))}>
            Delete
        </div>
    )
}

export const CloseModalButton: React.FC = () => {
    const dispatch = useDispatch();

    return (
        <div
            className="common-recipe close-modal"
            onClick={() => dispatch(closeModal())}>
            Close
        </div>
    )
}

export const SaveRecipeButton: React.FC<RecipeButtonProps> = ({ recipe }) => {
    const dispatch = useDispatch();
    const saveRecipe = recipe.id
        ? editRecipe
        : addRecipe;

    return (
        <div
            className="common-recipe save-recipe"
            onClick={() => {
                dispatch(saveRecipe(recipe))
                dispatch(closeModal())
            }}>
            {recipe.id ? "Edit Recipe" : "Add a Recipe"}
        </div>
    )
}