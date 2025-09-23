import React from "react";

type Props = {};

function Table({ children }) {
  return (
    <div className="">
      <table className="table">{children}</table>
    </div>
  );
}

export default Table;

function TableHeader({ children }) {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  );
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}
function TableRow({ children }) {
  return <tr>{children}</tr>;
}

Table.Body = TableBody;
Table.Header = TableHeader;
Table.Row = TableRow;
