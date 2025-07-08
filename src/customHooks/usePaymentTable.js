import { useState } from 'react';
import {
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

//const columns for the payment table
const columns = [
      columnHelper.accessor("class", {
    header: "Class",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("academicYear", {
    header: "Academic Year",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("paymentHead", {
    header: "Payment Head",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("payMode", {
    header: "Pay Mode",
    cell: (info) => info.getValue(),
  }),
   columnHelper.accessor("payHead", {
    header: "Pay Head",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("amount", {
    header: "Amount",
    cell: (info) => `₹${info.getValue().toLocaleString()}`,
  }),
  columnHelper.accessor("paymentcampus", {
    header: "Payment Campus",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("date", {
    header: "Date",
    cell: (info) => new Date(info.getValue()).toLocaleDateString(),
  }),
  columnHelper.accessor("installments", {
    header: "Installments",
    cell: (info) => info.getValue(),
  }),
];

// Custom hook to manage payment table logic
export function usePaymentTable({ initialData }) {
  const [data, setData] = useState(() => [...initialData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: { pageSize: 5 },
    },
  });

  return {
    table,
    data,
    setData,
  };
}