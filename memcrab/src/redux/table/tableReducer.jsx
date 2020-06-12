import { ENTER_ROW, ENTER_COLUMN, ENTER_SHOW } from "./tableTypes";
import { handleRow } from "./tableAction";

const initialState = {
  handleRow: "",
  handleColumn: "",
  handleShow: "",
};

const tableReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case "ENTER_ROW":
      return {
        ...state,
        handleRow: action.val,
      };

    case "ENTER_COLUMN":
      return {
        ...state,
        handleColumn: action.val,
      };

    case "ENTER_SHOW":
      return {
        ...state,
        handleShow: action.val,
      };
    default:
      return state;
  }
};
export default tableReducer;
