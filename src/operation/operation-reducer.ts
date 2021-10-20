import { Reducer } from "redux";
import { OperationAction, OperationActionType, OperationsState as OperationState, OperationType } from "./operation-types";

const defaultOperationState = { operationType: OperationType.NONE }

export const operationReducer: Reducer<OperationState, OperationAction> = (
    state = defaultOperationState,
    action = {} as OperationAction
) => {
    switch (action.type) {
        case OperationActionType.SELECT:
            const newState = { ...state };
            if (newState.selectedRecipeId === action.data) {
                delete newState.selectedRecipeId;
            } else {
                newState.selectedRecipeId = action.data;
            }
            return newState;
        case OperationActionType.ADD:
            return {
                ...state,
                operationType: OperationType.ADD,
            }
        case OperationActionType.EDIT:
            return {
                ...state,
                operationType: OperationType.EDIT,
                editedRecipe: action.data,
            }
        case OperationActionType.CLOSE_MODAL:
            return {
                selectedRecipeId: state.selectedRecipeId,
                operationType: OperationType.NONE,
            }
        default:
            return state;
    }
}