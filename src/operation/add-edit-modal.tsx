import { SetStateAction, useState } from "react"
import { useSelector } from "react-redux"
import { Recipe } from "../recipe/recipe-types"
import { RootState } from "../redux/store"
import { CloseModalButton, SaveRecipeButton } from "./button"
import "./modal.scss"

interface AddEditModalProps {
    title: string;
    recipe?: Recipe
}

export const AddModal: React.FC = () => {
    return (
        <AddEditModal title={"Add a Recipe"} />
    )
}

export const EditModal: React.FC = () => {
    const editedRecipe = useSelector((state: RootState) => state.operationReducer.editedRecipe);
    return (
        <AddEditModal title={"Edit Recipe"} recipe={editedRecipe} />
    )
}

const AddEditModal: React.FC<AddEditModalProps> = ({ title, recipe }) => {
    const [recipeName, setRecipeName] = useState(recipe ? recipe.name : "");
    const [ingredients, setIngredients] = useState(recipe?.ingredients ? recipe.ingredients.toString() : "");

    const handleNameChange = (event: { target: { value: SetStateAction<string> } }) => {
        setRecipeName(event.target.value);
    };

    const handleIngredientsChange = (event: { target: { value: SetStateAction<string> } }) => {
        setIngredients(event.target.value);
    };

    return (
        <div className='grey-background'>
            <div className='add-edit-modal'>
                <div className="add-edit-modal-header">
                    {title}
                </div>
                <div className="add-edit-modal-content">
                    Recipe
                    <div>
                        <textarea className="add-edit-modal-input recipe-name"
                            value={recipeName}
                            placeholder={'Recipe Name'}
                            onChange={handleNameChange}
                        />
                    </div>
                    Ingredients
                    <div>
                        <textarea className="add-edit-modal-input ingredients"
                            value={ingredients}
                            placeholder={'Enter ingredients,separated,by commas'}
                            onChange={handleIngredientsChange}
                        />
                    </div>
                </div>
                <div className="modal-button-section">
                    <SaveRecipeButton recipe={{
                        id: recipe?.id,
                        name: recipeName,
                        ingredients: ingredients.split(','),
                    }} />
                    <CloseModalButton />
                </div>
            </div>
        </div>
    )
}