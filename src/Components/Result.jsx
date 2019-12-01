import React from "react";

import Table from "@material-ui/core/Table";
import TableFooter from "@material-ui/core/TableFooter";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import MenuItem from "@material-ui/core/MenuItem";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import SendIcon from "@material-ui/icons/Send";

// function Result({ duration, cost, criticalPath, budget, adminExpenses }) {
function Result(timeUnit) {
  //   const { timeUnit } = props;
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12}>
        <Table className="table">
          <TableHead className="tr">
            <TableRow>
              <TableCell className="tr">Duracion Total</TableCell>
              <TableCell className="tr">Costo Total</TableCell>
              <TableCell className="tr">Ruta Critica</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>
                {/* {criticalPath.map(element => (
                  <span>{`(${element[0].name})` + " "}</span>
                ))} */}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
}

export default Result;