import React from "react";
import { connect } from 'react-redux';
import { handleColumn, handleRow, handleShow } from '../../redux';

const ResultTable = (props) => {

  return (
    <>
      <table className="table table-bordered table-dark container">
        <tbody>
          {props.tab}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = state => {
    return{
        row: state.row,
        column: state.column,
        show: state.show
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createTable: () => dispatch(handleColumn(), handleRow(), handleShow())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ResultTable)
