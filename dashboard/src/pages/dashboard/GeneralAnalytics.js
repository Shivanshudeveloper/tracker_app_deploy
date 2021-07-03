import React from 'react';
// material
import { Box, Grid, Container, Typography } from '@material-ui/core';
// components
import Page from '../../components/Page';

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

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
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#000',
    height: '150px',
    padding: '20px'
  },
}));

// ----------------------------------------------------------------------

export default function GeneralAnalytics() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <Page title="Tracker App - Reports">
      <Container maxWidth="xl">
        <h2 className="fontchange">Reports</h2>
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
            <Tab label="Timesheets" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <section>
              <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
                  <Paper elevation={3} className={classes.paper}>
                    <h4>Monthly Project Report</h4>
                    <small>
                      Logged hours and money for specefic project.
                    </small>
                    <br />
                    <br />
                    <Button href="/dashboard/detailreport" fullWidth>View More</Button>
                  </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Paper elevation={3} className={classes.paper}>
                    <h4>Full Workspace Report</h4>
                    <small>
                      All Workspace data displayed using every reporting module
                    </small>
                    <Button href="/dashboard/detailreport" fullWidth>View More</Button>
                  </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Paper elevation={3} className={classes.paper}>
                    <h4>Ubilled Hours</h4>
                    <small>
                      Unbilled hours only for all projects
                    </small>
                    <br />
                    <br />
                    <Button href="/dashboard/detailreport" fullWidth>View More</Button>
                  </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Paper elevation={3} className={classes.paper}>
                    <h4>Employee Hours</h4>
                    <small>
                      Logged and plan hours for all users
                    </small>
                    <br />
                    <br />
                    <Button href="/dashboard/detailreport" fullWidth>View More</Button>
                  </Paper>
                </Grid>
              </Grid>
            </section>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <section>
              <Grid container spacing={3}>
                  <Grid item xs={4} sm={3}>
                    <Autocomplete
                          id="combo-box-demo"
                          options={time}
                          getOptionLabel={(option) => option.title}
                          style={{ width: 300 }}
                          renderInput={(params) => <TextField {...params} label="Time" variant="outlined" />}
                      />
                  </Grid>
                  <Grid item xs={4} sm={3}>
                      <Autocomplete
                          id="combo-box-demo"
                          options={top100Films}
                          getOptionLabel={(option) => option.title}
                          style={{ width: 300 }}
                          renderInput={(params) => <TextField {...params} label="People" variant="outlined" />}
                      />
                  </Grid>
                  <Grid item xs={4} sm={3}>
                      <Autocomplete
                          id="combo-box-demo"
                          options={projectsall}
                          getOptionLabel={(option) => option.title}
                          style={{ width: 300 }}
                          renderInput={(params) => <TextField {...params} label="Any Project" variant="outlined" />}
                      />
                  </Grid>
                  <Grid item xs={4} sm={3}>
                      <Autocomplete
                          id="combo-box-demo"
                          options={tagsall}
                          getOptionLabel={(option) => option.title}
                          style={{ width: 300 }}
                          renderInput={(params) => <TextField {...params} label="Tags" variant="outlined" />}
                      />
                  </Grid>
              </Grid>

              <center style={{ marginTop: '10px' }}>
                  <img style={{ width: '25%' }} src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1625284273/tracker/Time_management-rafiki_wtesdj.svg" />
                  <br />
                  <h4>No hours found</h4>
              </center>
              
            </section>
          </TabPanel>
        </SwipeableViews>
      </Container>
    </Page>
  );
}


const time = [
  { title: 'Month' },
  { title: 'Day' },
  { title: 'Week' },
  { title: 'Year'}
];

const top100Films = [
  { title: 'Anyone' },
  { title: 'Daksh Tyagi' },
  { title: 'Danil Clark' },
  { title: 'Fusion OS'}
];


const projectsall = [
  { title: 'All' },
  { title: 'Project 1' },
  { title: 'Project 2' },
  { title: 'Project 3'},
  { title: 'Project 4'}
];


const tagsall = [
  { title: 'All' },
  { title: 'Tag 1' },
  { title: 'Tag 2' },
  { title: 'Tag 3'},
  { title: 'Tag 4'}
];