import {OfficeActions, OfficeActionsTypes} from "./office.actions";
import {officeInitialState, OfficeState} from "./office.state";

export function OfficeReducers(
  state = officeInitialState,
  action: OfficeActions
): OfficeState {
  switch (action.type) {
    case OfficeActionsTypes.getList: {
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
          success: false,
          error: null,
        }
      }
    }
    case OfficeActionsTypes.getListSuccess: {
      return {
        ...state,
        list: {
          items: action.payload,
          loading: false,
          success: true,
          error: null,
        }
      }
    }
    case OfficeActionsTypes.getListFail: {
      return {
        ...state,
        list: {
          ...state.list,
          loading: false,
          success: false,
          error: action.payload.error,
        }
      }
    }
    case OfficeActionsTypes.getListClear: {
      return {
        ...state,
        list: {
          items: [],
          loading: false,
          success: false,
          error: null,
        }
      }
    }
    case OfficeActionsTypes.getListClearError: {
      return {
        ...state,
        list: {
          ...state.list,
          error: null,
        }
      }
    }
    case OfficeActionsTypes.add: {
      return {
        ...state,
        add: {
          loading: true,
          success: false,
          error: null
        }
      }
    }
    case OfficeActionsTypes.addSuccess: {
      return {
        ...state,
        add: {
          loading: false,
          success: true,
          error: null
        }
      }
    }
    case OfficeActionsTypes.addFail: {
      return {
        ...state,
        add: {
          loading: false,
          success: false,
          error: action.payload.error
        }
      }
    }
    case OfficeActionsTypes.addClear: {
      return {
        ...state,
        add: {
          loading: false,
          success: false,
          error: null
        }
      }
    }
    case OfficeActionsTypes.addClearError: {
      return {
        ...state,
        add: {
          ...state.add,
          error: null,
        }
      }
    }
    case OfficeActionsTypes.delete: {
      return {
        ...state,
        delete: {
          loading: false,
          success: false,
          error: null
        }
      }
    }
    case OfficeActionsTypes.deleteSuccess: {
      return {
        ...state,
        delete: {
          loading: false,
          success: true,
          error: null
        }
      }
    }
    case OfficeActionsTypes.deleteFail: {
      return {
        ...state,
        delete: {
          loading: false,
          success: false,
          error: action.payload.error
        }
      }
    }
    case OfficeActionsTypes.deleteClear: {
      return {
        ...state,
        add: {
          loading: false,
          success: false,
          error: null
        }
      }
    }
    case OfficeActionsTypes.deleteClearError: {
      return {
        ...state,
        add: {
          ...state.delete,
          error: null,
        }
      }
    }
    case OfficeActionsTypes.update: {
      return {
        ...state,
        delete: {
          loading: false,
          success: false,
          error: null
        }
      }
    }
    case OfficeActionsTypes.updateSuccess: {
      return {
        ...state,
        delete: {
          loading: false,
          success: true,
          error: null
        }
      }
    }
    case OfficeActionsTypes.updateFail: {
      return {
        ...state,
        delete: {
          loading: false,
          success: false,
          error: action.payload.error
        }
      }
    }
    case OfficeActionsTypes.updateClear: {
      return {
        ...state,
        add: {
          loading: false,
          success: false,
          error: null
        }
      }
    }
    case OfficeActionsTypes.updateClearError: {
      return {
        ...state,
        add: {
          ...state.update,
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
