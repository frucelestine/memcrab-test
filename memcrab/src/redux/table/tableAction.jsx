import { ENTER_ROW, ENTER_COLUMN, ENTER_SHOW } from "./tableTypes";

export const handleRow = () => ({
  type: ENTER_ROW,
});

export const handleColumn = () => {
  return {
    type: ENTER_COLUMN,
  };
};

export const handleShow = () => {
  return {
    type: ENTER_SHOW,
  };
};
