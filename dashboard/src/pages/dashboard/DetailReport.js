import React from 'react';
// material
import { Box, Grid, Container, Typography } from '@material-ui/core';
// components
import Page from '../../components/Page';

import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
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
    height: 'auto',
    padding: '20px',
    marginTop: '20px'
  },
}));

// ----------------------------------------------------------------------

export default function DetailReport() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState('Anyone');
  
  return (
    <Page title="Tracker App - Monthly Project Report">
      <Container maxWidth="xl">
        <Button style={{ float: 'right' }}>Export</Button>
        <h2 className="fontchange">Monthly Project Report</h2>
        <small>Logged hours and money for a specific project</small>
        <br />
        <br />
        
        <Grid container spacing={3}>
            <Grid item xs={4} sm={3}>
                <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                    <Button>Billed</Button>
                    <Button>Unbilled</Button>
                    <Button>Total</Button>
                </ButtonGroup>
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

        
        <Grid style={{ marginTop: '20px' }} container spacing={3}>
            <Grid item xs={6} sm={3}>
                <Paper elevation={3} className={classes.paper}>
                <h2>Total logged</h2>
                <small>
                0h 00m, ₹0
                </small>
                </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Paper elevation={3} className={classes.paper}>
                <h2>Billed</h2>
                <small>
                0h 00m, ₹0
                </small>
                <br />
                </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Paper elevation={3} className={classes.paper}>
                <h2>Unbilled</h2>
                <small>
                0h 00m, ₹0
                </small>
                <br />
                </Paper>
            </Grid>
        </Grid>


        <Paper elevation={3} className={classes.paper}>
            <Autocomplete
                id="combo-box-demo"
                options={loggedby}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Logged By" variant="outlined" />}
            />

            <center style={{ marginTop: '10px' }}>
                <img style={{ width: '25%' }} src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1625283631/tracker/No_data-amico_alvaxi.svg" />
            </center>
        </Paper>


        <Paper elevation={3} className={classes.paper}>
            <Autocomplete
                id="combo-box-demo"
                options={report}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Report of" variant="outlined" />}
            />

            <center style={{ marginTop: '10px' }}>
                <img style={{ width: '30%' }} src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1625283900/tracker/No_data-pana_vf9vqu.svg" />
            </center>
        </Paper>
        

        
      </Container>
    </Page>
  );
}

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

const loggedby = [
    { title: 'Logged Money' },
    { title: 'Logged Projects' }
];


const report = [
    { title: 'Project' },
    { title: 'People' },
    { title: 'Client' },
    { title: 'Tags' },
    { title: 'Teams' },
];
