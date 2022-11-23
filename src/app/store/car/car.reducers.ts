import {CarActions, CarActionsTypes} from "./car.actions";
import {CarInitialState, CarState} from "./car.state";

export function CarReducers(
  state = CarInitialState,
  action: CarActions
): CarState {
  switch (action.type) {
    case CarActionsTypes.getPage: {
      return {
        ...state,
        page: {
          ...state.page,
          loading: true,
          success: false,
          error: null,
        }
      }
    }
    case CarActionsTypes.getPageSuccess: {
      return {
        ...state,
        page: {
          items: action.payload,
          loading: false,
          success: true,
          error: null,
        }
      }
    }
    case CarActionsTypes.getPageFail: {
      return {
        ...state,
        page: {
          ...state.page,
          loading: false,
          success: false,
          error: action.payload.error,
        }
      }
    }
    case CarActionsTypes.getPageClear: {
      return {
        ...state,
        page: {
          items: [],
          loading: false,
          success: false,
          error: null,
        }
      }
    }
    case CarActionsTypes.getPageClearError: {
      return {
        ...state,
        page: {
          ...state.page,
          error: null,
        }
      }
    }
    case CarActionsTypes.add: {
      return {
        ...state,
        add: {
          loading: true,
          success: false,
          error: null
        }
      }
    }
    case CarActionsTypes.addSuccess: {
      return {
        ...state,
        add: {
          loading: false,
          success: true,
          error: null
        }
      }
    }
    case CarActionsTypes.addFail: {
      return {
        ...state,
        add: {
          loading: false,
          success: false,
          error: action.payload.error
        }
      }
    }
    case CarActionsTypes.addClear: {
      return {
        ...state,
        add: {
          loading: false,
          success: false,
          error: null
        }
      }
    }
    case CarActionsTypes.addClearError: {
      return {
        ...state,
        add: {
          ...state.add,
          error: null,
        }
      }
    }
    case CarActionsTypes.delete: {
      return {
        ...state,
        delete: {
          loading: false,
          success: false,
          error: null
        }
      }
    }
    case CarActionsTypes.deleteSuccess: {
      return {
        ...state,
        delete: {
          loading: false,
          success: true,
          error: null
        }
      }
    }
    case CarActionsTypes.deleteFail: {
      return {
        ...state,
        delete: {
          loading: false,
          success: false,
          error: action.payload.error
        }
      }
    }
    case CarActionsTypes.deleteClear: {
      return {
        ...state,
        add: {
          loading: false,
          success: false,
          error: null
        }
      }
    }
    case CarActionsTypes.deleteClearError: {
      return {
        ...state,
        add: {
          ...state.delete,
          error: null,
        }
      }
    }
    default:
      return {
        ...state
      }
  }
}
