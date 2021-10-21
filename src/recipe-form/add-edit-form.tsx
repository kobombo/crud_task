import { SetStateAction, useState } from "react"
import { useSelector } from "react-redux"
import { Recipe } from "../recipe/recipe-types"
import { RootState } from "../redux/store"
import { CloseModalButton, SaveRecipeButton } from "./button"
import "./recipe-form.scss"

interface AddEditFormProps {
    title: string;
    recipe?: Recipe
}

export const AddForm: React.FC = () => {
    return (
        <AddEditForm title={"Add a Recipe"} />
    )
}

export const EditForm: React.FC = () => {
    const editedRecipe = useSelector((state: RootState) => state.recipeFormReducer.editedRecipe);
    return (
        <AddEditForm title={"Edit Recipe"} recipe={editedRecipe} />
    )
}

const AddEditForm: React.FC<AddEditFormProps> = ({ title, recipe }) => {
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
            <div className='add-edit-form'>
                <div className="add-edit-form-header">
                    {title}
                </div>
                <div className="add-edit-form-content">
                    Recipe
                    <div>
                        <textarea className="add-edit-form-input recipe-name"
                            value={recipeName}
                            placeholder={'Recipe Name'}
                            onChange={handleNameChange}
                        />
                    </div>
                    Ingredients
                    <div>
                        <textarea className="add-edit-form-input ingredients"
                            value={ingredients}
                            placeholder={'Enter ingredients,separated,by commas'}
                            onChange={handleIngredientsChange}
                        />
                    </div>
                </div>
                <div className="form-button-section">
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