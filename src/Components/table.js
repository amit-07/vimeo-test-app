import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { useFetch } from "../Hooks/hooks";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
const columns = [
  {
    dataField: "accNum",
    text: 'Account No"'
  },
  {
    dataField: "date",
    text: "Date"
  },
  {
    dataField: "transactionDet",
    text: "Transaction Details"
  },
  {
    dataField: "valDate",
    text: "Value Date"
  },
  {
    dataField: "withdrawalAmt",
    text: "Withdrawal AMT"
  },
  {
    dataField: "depositAmt",
    text: "Deposit AMT"
  },
  {
    dataField: "balAmt",
    text: 'Balance AMT"'
  }
];

export default function Table() {
  const [data, loading] = useFetch(
    "https://starlord.hackerearth.com/bankAccount"
  );
  return (
    <>
      <h1>Bank Details</h1>
      {loading ? (
        "Loading..."
      ) : (
        <BootstrapTable keyField="id" data={data} columns={columns} />
      )}
    </>
  );
}
