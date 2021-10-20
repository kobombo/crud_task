import { ActionCreator } from "redux";
import { CloseModalAction, OpenAddModalAction, OpenEditModalAction, OperationActionType, SelectRecipeAction } from "./operation-types";

export const selectRecipe: ActionCreator<SelectRecipeAction> = (id) => ({
    type: OperationActionType.SELECT,
    data: id
});

export const openAddModal: ActionCreator<OpenAddModalAction> = () => ({
    type: OperationActionType.ADD,
});

export const openEditModal: ActionCreator<OpenEditModalAction> = (recipe) => ({
    type: OperationActionType.EDIT,
    data: recipe
});

export const closeModal: ActionCreator<CloseModalAction> = () => ({
    type: OperationActionType.CLOSE_MODAL,
});