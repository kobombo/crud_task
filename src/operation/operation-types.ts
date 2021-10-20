import { Action } from "redux";
import { Recipe } from "../recipe/recipe-types";

export interface OperationsState {
    operationType: OperationType;
    editedRecipe?: Recipe;
    selectedRecipeId?: string;
}

export type OperationAction = SelectRecipeAction | OpenAddModalAction | OpenEditModalAction | CloseModalAction;

export interface SelectRecipeAction extends Action {
    type: OperationActionType.SELECT;
    data: string;
}

export interface OpenAddModalAction extends Action {
    type: OperationActionType.ADD;
}

export interface OpenEditModalAction extends Action {
    type: OperationActionType.EDIT;
    data: Recipe;
}

export interface CloseModalAction extends Action {
    type: OperationActionType.CLOSE_MODAL;
}

export enum OperationType {
    NONE = 'NONE',
    ADD = 'ADD',
    EDIT = 'EDIT',
}

export enum OperationActionType {
    SELECT = 'SELECT_RECIPE',
    ADD = 'ADD_MODAL',
    EDIT = 'EDIT_MODAL',
    CLOSE_MODAL = 'CLOSE_MODAL'
}