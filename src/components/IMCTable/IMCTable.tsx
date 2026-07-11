import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { colors } from "../../styles/colors";
import { borderRadius } from "../../styles/borderRadius";

export interface Column<T> {
  id: keyof T;
  label: string;
  align?: "left" | "right" | "center";
}

interface BasicTableProps<T extends object> {
  columns: Column<T>[];
  rows: T[];
}

const IMCTable = <T extends object>({ columns, rows }: BasicTableProps<T>) => {
  const cellBorder = `1px solid ${colors.lightGray}`;

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: borderRadius.lg,
        overflow: "hidden",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell
                key={String(col.id)}
                align={col.align || "left"}
                sx={{
                  fontWeight: "bold",
                  border: cellBorder,
                }}
              >
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((col) => (
                <TableCell
                  key={String(col.id)}
                  align={col.align || "left"}
                  sx={{
                    border: cellBorder,
                  }}
                >
                  {String(row[col.id])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IMCTable;
