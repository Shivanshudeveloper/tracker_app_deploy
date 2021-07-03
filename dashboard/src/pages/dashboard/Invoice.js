import React, { useState } from "react";
// material
import { Container } from '@material-ui/core';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// hooks
import useAuth from '../../hooks/useAuth';
// components
import Page from '../../components/Page';
import ReceiptIcon from '@material-ui/icons/Receipt';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
}));

// import { useParams } from 'react-router';

// ----------------------------------------------------------------------

export default function Invoice(props) {
  const { user } = useAuth();
  const classes = useStyles();


  // let { userid } = useParams();
  // console.log(userid);

  return (
    <Page title="Tracker App - Invoice">
      <Container maxWidth="xl">
        <Button variant="contained" style={{ float: 'right' }} color="primary">
            Create New Invoice
        </Button>
        <h2>
            Invoices
        </h2>

        <Alert style={{ marginTop: '20px' }} severity="info">
            <AlertTitle>Streamline client invoicing</AlertTitle>
            Connect your favourite accounting apps to create accurate invoices with minimal effort. Timely will send invoices for all unbilled project hours to your chosen platform in a click.
            <br />
            <br />
            <a href="#!">Learn more about our invoicing integrations</a>
            <br />
            <br />
            <Button startIcon={<ReceiptIcon />} variant="outlined">Connect to QuickBooks</Button>

        </Alert>

        <TableContainer style={{ marginTop: '20px' }} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Issued On</TableCell>
                    <TableCell>

                    </TableCell>
                    <TableCell>
                        
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key="d">
                        <TableCell component="th" scope="row">
                            Daksh Tyagi
                        </TableCell>
                        <TableCell>
                            12/05/2021    
                        </TableCell>
                        <TableCell>
                            <Button color="secondary" aria-controls="simple-menu" aria-haspopup="true">
                                Edit
                            </Button>
                        </TableCell>
                        <TableCell>
                            <Button href="/dashboard/invoiceview" aria-controls="simple-menu" aria-haspopup="true">
                                View
                            </Button>
                        </TableCell>
                    </TableRow>

                    <TableRow key="d">
                        <TableCell component="th" scope="row">
                            Danil Clark
                        </TableCell>
                        <TableCell>
                            12/05/2021    
                        </TableCell>
                        <TableCell>
                            <Button color="secondary" aria-controls="simple-menu" aria-haspopup="true">
                                Edit
                            </Button>
                        </TableCell>
                        <TableCell>
                            <Button href="/dashboard/invoiceview" aria-controls="simple-menu" aria-haspopup="true">
                                View
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>


      </Container>
    </Page>
  );
}
