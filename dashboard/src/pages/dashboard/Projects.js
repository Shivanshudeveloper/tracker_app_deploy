import React, { useState } from "react";
// material
import { Container } from '@material-ui/core';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// hooks
import useAuth from '../../hooks/useAuth';
// components
import Page from '../../components/Page';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
}))(LinearProgress);


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
  
function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
}
  
const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
    },
    table: {
        minWidth: 650,
    },
}));



function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
  
const rows = [
    createData('Daksh Tyagi', 'daksh tyagi logged hours for the first time on this project', '11:00'),
    createData('Daksh Tyagi', 'daksh tyagi created a client', '12:00'),
    createData('Daksh Tyagi', 'daksh tyagi created a project', '13:01'),
    createData('Daksh Tyagi', 'daksh tyagi created a project', '14:40'),
];




// import { useParams } from 'react-router';

// ----------------------------------------------------------------------

export default function GeneralApp(props) {
    const { user } = useAuth();

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
  

  // let { userid } = useParams();
  // console.log(userid);

  return (
    <Page title="Tracker App - Projects">
      <Container maxWidth="xl">
        <h2 className="fontchange">Projects</h2>
        <br />
        <AppBar position="static" color="default">
            <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
            >
            <Tab label="Dashboard" {...a11yProps(0)} />
            <Tab label="All Projects" {...a11yProps(1)} />
            </Tabs>
        </AppBar>
        <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
        >
            <TabPanel value={value} index={0} dir={theme.direction}>
                <section>
                    <h4>
                        Recent and pinned projects
                    </h4>
                    <Grid style={{ marginTop: '2px' }} container spacing={3}>
                        <Grid item xs={6} sm={3}>
                            <Paper style={{ padding: '10px', height: 'auto' }} elevation={3}>
                                <img style={{ float: 'right' }} src="https://img.icons8.com/fluent/48/000000/work-authorisation.png"/>
                                <h3>Communication</h3>
                                <small>Daksh Tyagi</small>
                                <br />
                                <br />
                                <BorderLinearProgress variant="determinate" value={50} />
                                <i>30:00 left</i>
                                <br />
                                <Button style={{ float: 'right' }} aria-controls="simple-menu" aria-haspopup="true">
                                    More
                                </Button>
                                <br />
                                <br />
                            </Paper>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Paper style={{ padding: '10px', height: 'auto' }} elevation={3}>
                                <img style={{ float: 'right' }} src="https://img.icons8.com/fluent/48/000000/work-authorisation.png"/>
                                <h3>Work Cluture</h3>
                                <small>Daksh Tyagi</small>
                                <br />
                                <br />
                                <BorderLinearProgress variant="determinate" value={28} />
                                <i>10:20 left</i>
                                <br />
                                <Button style={{ float: 'right' }} aria-controls="simple-menu" aria-haspopup="true">
                                    More
                                </Button>
                                <br />
                                <br />
                            </Paper>
                        </Grid>
                    </Grid>

                    <h4 style={{ marginTop: '20px' }}>
                        Latest Activities (24th June 2021)
                    </h4>

                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Work</TableCell>
                                <TableCell>Comments</TableCell>
                                <TableCell>Time</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell>{row.calories}</TableCell>
                                    <TableCell>{row.fat}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </section>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                <section>
                    <h4>
                        All Projects
                    </h4>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Logged Hours</TableCell>
                                <TableCell>Budget</TableCell>
                                <TableCell>Budget Spent</TableCell>
                                <TableCell>Budget Left</TableCell>
                                <TableCell>

                                </TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow key="d">
                                    <TableCell component="th" scope="row">
                                        Communication
                                    </TableCell>
                                    <TableCell>
                                        10h 10m    
                                    </TableCell>
                                    <TableCell>
                                        30h 00m
                                    </TableCell>
                                    <TableCell>
                                        <BorderLinearProgress variant="determinate" value={10} /> 34%
                                    </TableCell>
                                    <TableCell>
                                        19h 15m
                                    </TableCell>
                                    <TableCell>
                                        <Button aria-controls="simple-menu" aria-haspopup="true">
                                            More
                                        </Button>
                                    </TableCell>
                                </TableRow>

                                <TableRow key="d">
                                    <TableCell component="th" scope="row">
                                        Work Culture
                                    </TableCell>
                                    <TableCell>
                                        10h 10m    
                                    </TableCell>
                                    <TableCell>
                                        30h 00m
                                    </TableCell>
                                    <TableCell>
                                        <BorderLinearProgress variant="determinate" value={65} /> 64%
                                    </TableCell>
                                    <TableCell>
                                        19h 15m
                                    </TableCell>
                                    <TableCell>
                                        <Button aria-controls="simple-menu" aria-haspopup="true">
                                            More
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </section>
            </TabPanel>
        </SwipeableViews>


      </Container>
    </Page>
  );
}
