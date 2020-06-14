import React from "react";
import { connect } from "react-redux";
import ResultTable from "../MatrixTable/ResultTable";

const InputValues = (props) => {

  const drawTable = () => {
    let table = [];

    for (let i = 0; i < props.row; i++) {
      let children = [];
      let foot = [];
      const total = [];
      for (let j = 0; j < props.column; j++) {
        const random = Math.floor(Math.random() * (999 - 100 + 1) + 100);
        children.push(
          <>
            <td key={j}>{random}</td>
          </>
        );
        total.push(random);
        console.log(total[0]);
      }
      table.push(
        <tr key={i}>
          {children}
          <td>Total : {total.reduce((a, b) => a + b, 0)}</td>
        </tr>
      );
    }
    table.forEach((arr) => arr);

    return table;
  };

  return (
    <div className="container">
      <h3>Enter values</h3>
      <form
        autoComplete="off"
        className="d-flex"
        style={{ minWidth: 500, justifyContent: "space-between" }}
      >
        <div className="form-group" style={{ width: 100 }}>
          <label htmlFor="row">Enter number of rows</label>
          <input
            type="number"
            className="form-control"
            value={props.row}
            id="row"
            onChange={props.rowChanged}
          />
        </div>
        <div className="form-group" style={{ width: 100 }}>
          <label htmlFor="column">Enter number of columns</label>
          <input
            type="number"
            className="form-control"
            id="column"
            value={props.column}
            onChange={props.columnChange}
          />
        </div>
        <div className="form-group" style={{ width: 100 }}>
          <label htmlFor="show">Enter value to show</label>
          <input
            type="number"
            className="form-control"
            id="show"
            value={props.show}
            onChange={props.showChanged}
          />
        </div>
      </form>

      <ResultTable tab={drawTable()} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}><button className="btn btn-primary" onClick={props.handleAdd}>ADD ROW</button><button className="btn btn-danger" onClick={props.handleDelete}>DELETE ROW</button></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    row: state.handleRow,
    column: state.handleColumn,
    show: state.handleShow,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    columnChange: (e) => {
      const action = { type: "ENTER_COLUMN", val: e.target.value };
      dispatch(action);
    },
    rowChanged: (e) => {
      const action = { type: "ENTER_ROW", val: e.target.value };
      dispatch(action);
    },
    showChanged: (e) => {
      const action = { type: "ENTER_SHOW", val: e.target.value };
      dispatch(action);
    },
    handleDelete: () => {
      const action = { type: "DELETE_ROW", val: 1 };
      dispatch(action);
    },
    handleAdd: () => {
      const action = { type: "ADD_ROW", val: 1 };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputValues);
