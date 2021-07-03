import React from 'react';
import Container from '@material-ui/core/Container';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
// components
import Page from '../components/Page';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';


// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});


// ----------------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
}));
  
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});
  

export default function LandingPage() {
    const classes = useStyles();
    const [steps, setsteps] = React.useState(1);

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };



    const [openapps, setOpenapps] = React.useState(false);
    const handleClickOpenapps = () => {
        setOpenapps(true);
    };
    const handleCloseapps = () => {
        setOpenapps(false);
    };


    const changeSteps = () => {
        var s = steps;
        s = s + 1;
        setsteps(s);
        if (s === 5) {
            handleClickOpen();
        } 
    }

    return (
        <RootStyle title="Tracker App - Getting Started" id="move_top">
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
            <Toolbar>
            </Toolbar>
            </AppBar>
            <Container maxWidth="md" style={{ marginTop: '60px' }}>
                <h1 className="fontchange heading">
                    Track App installation
                </h1>
                <small>
                With one command, our guided install will discover and recommend integrations appropriate for your system. We’ll also help you get started by adding infrastructure and log data for greater visiblity into your stack.
                </small>

                <h1 style={{ marginTop: '20px' }}>
                Choose your operating system
                </h1>

                <Grid style={{ marginTop: '10px' }} container spacing={3}>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer' }} elevation={3}>
                            <center>
                                <img src="https://img.icons8.com/color/96/000000/windows-11.png"/>
                                <small>
                                    Windows
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer' }} elevation={3}>
                            <center>
                                <img src="https://img.icons8.com/color/96/000000/mac-os.png"/>
                                <small>
                                    Mac OS
                                </small>
                            </center>
                        </Paper>
                    </Grid>

                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer' }} elevation={3}>
                            <center>
                                <img src="https://img.icons8.com/color/96/000000/linux--v1.png"/>
                                <small>
                                    Linux
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                    <Grid mt={2} item xs={12} sm={12}>
                        <Button onClick={handleClickOpenapps} size="large" variant="contained" color="primary">
                            Download Installer
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Dialog>



        <Dialog fullScreen open={openapps} onClose={handleCloseapps} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
            <Toolbar>
            </Toolbar>
            </AppBar>
            <Container maxWidth="md" style={{ marginTop: '60px' }}>
                <h1 className="fontchange heading">
                    Integrated App installation
                </h1>

                <Button href="/dashboard/app" style={{ float: 'right' }} size="large" variant="contained" color="primary">
                    Install Apps
                </Button>
                <Grid style={{ marginTop: '10px' }} container spacing={3}>
                    <Grid mt={2} item xs={12} sm={12}>
                        <h2>
                        Importing employees
                        </h2>
                    </Grid>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer', height: '125px' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '150px', height: '50px' }} src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1625116489/tracker/harvest-time-logo-blank_zc4cpw.png" />
                                <small>
                                    Harvest
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer', height: '125px' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '150px', height: '50px' }} src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1625116915/tracker/harvest-time-logo-blank_fhybsr.png" />
                                <small>
                                    Toogle
                                </small>
                            </center>
                        </Paper>
                    </Grid>

                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer', height: '125px' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '150px', height: '50px' }} src="https://azurescene.com/wp-content/uploads/2020/01/ActiveDirecotry2.png" />
                                <small>
                                    Azure AD
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                </Grid>


                
                <Grid style={{ marginTop: '10px' }} container spacing={3}>
                    <Grid mt={2} item xs={12} sm={12}>
                        <h2>
                        Invoicing
                        </h2>
                    </Grid>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer', height: '125px' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '150px', height: '50px' }} src="https://s3-us-west-2.amazonaws.com/designsystems-sbgde-096068918679-us-west-2/wp-content/uploads/2020/03/30135125/qb-logo.svg" />
                                <small>
                                Quickbooks
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer', height: '125px' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '150px', height: '50px' }} src="https://www.freshbooks.com/wp-content/uploads/2020/10/freshbooks-logo-1.png" />
                                <small>
                                Freshbooks
                                </small>
                            </center>
                        </Paper>
                    </Grid>

                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer', height: '125px' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '20%' }} src="https://img.stackshare.io/service/1610/_LiT6IcT.png" />
                                <small>
                                Xero
                                </small>
                            </center>
                        </Paper>
                    </Grid>

                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer', height: '125px' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '150px', height: '50px' }} src="https://upload.wikimedia.org/wikipedia/commons/1/15/Wave_logo_RGB.png" />
                                <small>
                                Wave
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer', height: '125px' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '150px', height: '50px' }} src="https://humanpixel.com.au/wp-content/uploads/2019/07/crm-consulting-development-sydney-melbourne-2.png" />
                                <small>
                                Zoho
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                </Grid>


                <Grid style={{ marginTop: '10px' }} container spacing={3}>
                    <Grid mt={2} item xs={12} sm={12}>
                        <h2>
                        Importing Projects
                        </h2>
                    </Grid>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer', height: '125px' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '150px', height: '50px' }} src="https://cdn.freelogovectors.net/wp-content/uploads/2015/11/asana-logo.png" />
                                <small>
                                Asana
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer', height: '125px' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '150px', height: '50px' }} src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Large-monday_black_whiteBG-left.png" />
                                <small>
                                Monday
                                </small>
                            </center>
                        </Paper>
                    </Grid>

                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer', height: '125px' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '150px' }} src="https://www.atlassian.com/dam/jcr:e33efd9e-e0b8-4d61-a24d-68a48ef99ed5/Jira%20Software@2x-blue.png" />
                                <small>
                                Jira
                                </small>
                            </center>
                        </Paper>
                    </Grid>

                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer', height: '125px' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '150px', height: '50px' }} src="https://informsuiuc.files.wordpress.com/2016/10/github-bb449e0ffbacbcb7f9c703db85b1cf0b.png" />
                                <small>
                                Github
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer', height: '125px' }} elevation={3}>
                            <center>
                                <br />
                                <br />
                                <img style={{ width: '150px' }} src="https://wac-cdn.atlassian.com/dam/jcr:e75ffb0e-b3ee-40ca-8659-ecb93675a379/Bitbucket@2x-blue.png" />
                                <small>
                                Bitbucket
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer', height: '125px' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '150px', height: '50px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/GitLab_logo.svg/1200px-GitLab_logo.svg.png" />
                                <small>
                                Gitlab
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer', height: '125px' }} elevation={3}>
                            <center>
                                <img style={{ width: '150px' }} src="https://logovectorseek.com/wp-content/uploads/2020/11/todoist-logo-vector.png" />
                                <small>
                                Todoist
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '150px', height: '50px' }} src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1280px-Trello_logo.svg.png" />
                                <small>
                                Trello
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                </Grid>


                <Grid style={{ marginTop: '10px' }} container spacing={3}>
                    <Grid mt={2} item xs={12} sm={12}>
                        <h2>
                        Meetings
                        </h2>
                    </Grid>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '150px', height: '50px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zoom_Communications_Logo.svg/1280px-Zoom_Communications_Logo.svg.png" />
                                <small>
                                Zoom
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '150px', height: '50px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Google_Meet_text_logo_dark_%282017-2020%29.svg/1200px-Google_Meet_text_logo_dark_%282017-2020%29.svg.png" />
                                <small>
                                Google Meet
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                </Grid>


                <Grid style={{ marginTop: '10px' }} container spacing={3}>
                    <Grid mt={2} item xs={12} sm={12}>
                        <h2>
                        CRM
                        </h2>
                    </Grid>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '100px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png" />
                                <small>
                                Salesforce
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '100px', height: '68px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/HubSpot_Logo.svg/2560px-HubSpot_Logo.svg.png" />
                                <small>
                                Hubspot
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '100px', height: '68px' }} src="https://iconape.com/wp-content/files/jo/21393/svg/activecampaign-1.svg" />
                                <small>
                                Active Campaign
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '100px' }} src="https://www.accuratereviews.com/wp-content/uploads/2019/04/Pipedrive_Logo..png" />
                                <small>
                                Pipedrive
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                </Grid>


                <Grid style={{ marginTop: '10px' }} container spacing={3}>
                    <Grid mt={2} item xs={12} sm={12}>
                        <h2>
                        Apps
                        </h2>
                    </Grid>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '100px', height: '68px' }} src="https://download.logo.wine/logo/Google_Calendar/Google_Calendar-Logo.wine.png" />
                                <small>
                                Google calendar
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '100px', height: '68px' }} src="https://images.idgesg.net/images/article/2018/03/microsoft_office_logo_press_image_1200x800-100751542-large.jpg" />
                                <small>
                                Office 365
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '100px', height: '60px' }} src="https://logonoid.com/images/outlook-logo.png" />
                                <small>
                                Outlook
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '100px', height: '68px' }} src="https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" />
                                <small>
                                Gmail
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                </Grid>



                <Grid style={{ marginTop: '10px' }} container spacing={3}>
                    <Grid mt={2} item xs={12} sm={12}>
                        <h2>
                        Data Export
                        </h2>
                    </Grid>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '100px', height: '68px' }} src="https://i.pcmag.com/imagery/reviews/02Q2JyM7Iq3t8rFTddlZMxa-7..1569482292.jpg" />
                                <small>
                                Microsoft Power BI
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '100px', height: '68px' }} src="https://www.tableau.com/sites/default/files/pages/tableaulogo_highres.png" />
                                <small>
                                Tableu
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                    <Grid mt={2} item xs={4} sm={4}>
                        <Paper style={{ padding: '10px', cursor: 'pointer' }} elevation={3}>
                            <center>
                                <br />
                                <img style={{ width: '100px', height: '68px' }} src="https://www.vippng.com/png/full/21-210603_ms-excel-transparent-microsoft-excel-png.png" />
                                <small>
                                CSV, XLS, PDF
                                </small>
                            </center>
                        </Paper>
                    </Grid>
                </Grid>

                <br />
                <br />
                <br />
                <br />
            </Container>
        </Dialog>




        <Container maxWidth="md" style={{ marginTop: '120px' }}>
            {
                steps === 1 ? (
                    <>
                        <h1 className="fontchange heading">
                            Getting Started
                        </h1>
                        <h2 className="fontchange">
                        Free access to all of Tracker App. No credit card require.
                        </h2>

                        <Grid style={{ marginTop: '10px' }} container spacing={3}>
                            <Grid mt={2} item xs={12} sm={6}>
                                <TextField id="standard-basic" fullWidth label="First Name*" />
                            </Grid>
                            <Grid mt={2} item xs={12} sm={6}>
                                <TextField id="standard-basic" fullWidth label="Last Name*" />
                            </Grid>
                            <Grid mt={2} item xs={12} sm={12}>
                                <TextField id="standard-basic" fullWidth label="Email Address*" />
                            </Grid>

                            <Grid mt={2} item xs={12} sm={12}>
                                <i style={{ marginBottom: '20px' }}>
                                By signing up, you're agreeing to <a href="#!">Terms of Service</a> and <a href="#!">Services Privacy Notice</a>.
                                </i>
                                <Button onClick={changeSteps} fullWidth size="large" variant="contained" color="primary">
                                    Submit
                                </Button>
                                <center style={{ marginTop: '20px' }}>
                                    Already have an account <a href="#!">login</a>
                                </center>
                            </Grid>
                        </Grid>
                    </>
                ) : (
                    steps === 2 ? (
                        <>
                            <center>
                                <h1 className="fontchange heading">
                                    Please check for verification Email
                                </h1>
                                <img style={{ width: "50%" }} src="https://res.cloudinary.com/dx9dnqzaj/image/upload/v1625032637/tracker/Email_campaign-amico_dwgvme.svg" />
                                
                                <Grid container spacing={3}>
                                    <Grid mt={2} item xs={12} sm={12}>
                                        <Button onClick={changeSteps} style={{ width: "75%" }} size="large" variant="contained" color="primary">
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </center>
                        </>
                    ) : (
                        steps === 3 ? (
                            <>
                                <h1 className="fontchange heading">
                                    Create your password
                                </h1>

                                <br />
                                
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    width="20" height="20"
                                    
                                    viewBox="0 0 172 172"
                                    ><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M157.66667,86c0,-10.42392 -5.92325,-19.522 -14.56983,-24.11583c2.36142,-8.99775 0.06092,-19.00242 -6.96242,-26.02217c-5.24242,-5.246 -12.15108,-7.85467 -19.06692,-7.85467c-2.33992,0 -4.67983,0.29742 -6.95525,0.89583c-4.59025,-8.64658 -13.68833,-14.56983 -24.11225,-14.56983c-10.42392,0 -19.522,5.92325 -24.11583,14.56983c-2.279,-0.59842 -4.61533,-0.89583 -6.95525,-0.89583c-6.91583,0 -13.82092,2.61225 -19.06692,7.85467c-7.01975,7.01975 -9.32383,17.02083 -6.96242,26.02217c-8.643,4.59383 -14.56625,13.69192 -14.56625,24.11583c0,10.42392 5.92325,19.522 14.56983,24.11583c-2.36142,8.99775 -0.06092,19.00242 6.96242,26.02217c5.24242,5.24242 12.15108,7.85467 19.06692,7.85467c2.33992,0 4.67983,-0.29742 6.95525,-0.89583c4.59025,8.64658 13.68833,14.56983 24.11225,14.56983c10.42392,0 19.522,-5.92325 24.11583,-14.56983c2.279,0.59842 4.61533,0.89583 6.95525,0.89583c6.91583,0 13.82092,-2.61225 19.06692,-7.85467c7.01975,-7.01975 9.32383,-17.02083 6.96242,-26.02217c8.643,-4.59383 14.56625,-13.69192 14.56625,-24.11583z" fill="#4caf50"></path><path d="M78.83333,117.63725l-26.56683,-26.57042l10.13367,-10.13367l16.43317,16.42958l34.34983,-34.34625l10.13367,10.13367z" fill="#ffffff"></path></g></g></svg> <span style={{ marginTop: '-60px' }}>We have successfully verified your email</span> 
                                
                                <br />
                                <br />

                                <small>Use at least 8 characters with at least 1 letter and 1 number or special character.</small>
                                <Grid style={{ marginTop: '10px' }} container spacing={3}>
                                    <Grid mt={2} item xs={12} sm={12}>
                                        <TextField id="standard-basic" fullWidth label="Email Address*" value="shivanshu@gmail.com" />
                                    </Grid>

                                    <Grid mt={2} item xs={12} sm={12}>
                                        <TextField id="standard-basic" fullWidth label="Password" />
                                    </Grid>
                                    <Grid mt={2} item xs={12} sm={12}>
                                        <TextField id="standard-basic" fullWidth label="Confirm Password" />
                                    </Grid>

                                    <Grid mt={2} item xs={12} sm={12}>
                                        <Button onClick={changeSteps} fullWidth size="large" variant="contained" color="primary">
                                            Submit
                                        </Button>
                                    </Grid>
                                </Grid>
                            </>
                        ) : (
                            steps === 4 ? (
                                <>
                                    <h1 className="fontchange heading">
                                    Tell us where to store your data
                                    </h1>
                                    <small>
                                    The data center doesn’t have to match your physical location.
                                    </small>
    
                                    <Grid style={{ marginTop: '10px' }} container spacing={3}>
                                        <Grid mt={2} item xs={4} sm={4}>
                                            <Paper style={{ padding: '10px', cursor: 'pointer' }} elevation={3}>
                                                <center>
                                                    <img src="https://img.icons8.com/color/96/000000/india.png"/>
                                                    <small>
                                                        India
                                                    </small>
                                                </center>
                                            </Paper>
                                        </Grid>

                                        <Grid mt={2} item xs={4} sm={4}>
                                            <Paper style={{ padding: '10px', cursor: 'pointer' }} elevation={3}>
                                                <center>
                                                    <img src="https://img.icons8.com/color/96/000000/usa.png"/>
                                                    <small>
                                                        United States
                                                    </small>
                                                </center>
                                            </Paper>
                                        </Grid>

                                        <Grid mt={2} item xs={4} sm={4}>
                                            <Paper style={{ padding: '10px', cursor: 'pointer' }} elevation={3}>
                                                <center>
                                                    <img src="https://img.icons8.com/color/96/000000/flag-of-europe.png"/>
                                                    <small>
                                                        Europe
                                                    </small>
                                                </center>
                                            </Paper>
                                        </Grid>
    
                                        <Grid mt={2} item xs={12} sm={12}>
                                            <Button onClick={changeSteps} fullWidth size="large" variant="contained" color="primary">
                                                Submit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </>
                            ) : null
                        )
                    )
                )
            }
        </Container>
        </RootStyle>
    );
}
