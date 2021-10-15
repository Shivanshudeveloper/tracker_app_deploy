import React, { useEffect, useState } from "react";
// material
import { Container } from '@material-ui/core';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// hooks
import useAuth from '../../hooks/useAuth';
// components
import Page from '../../components/Page';
import { v4 as uuid } from 'uuid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { database } from '../../Firebase/index';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';

var prevData = [];

const itemsFromBackend = [
  { id: uuid(), content: "Signed Up for tracker app", icon: "https://img.icons8.com/color/28/000000/circled-up-2--v1.png" },
  { id: uuid(), content: "Second task", icon: "https://img.icons8.com/color/28/000000/circled-up-2--v1.png" },
  { id: uuid(), content: "Third task", icon: "https://img.icons8.com/color/28/000000/circled-up-2--v1.png" },
  { id: uuid(), content: "Fourth task", icon: "https://img.icons8.com/color/28/000000/circled-up-2--v1.png" },
  { id: uuid(), content: "Fifth task", icon: "https://img.icons8.com/color/28/000000/circled-up-2--v1.png" }
];

const columnsFromBackend = {
  [uuid()]: {
    name: "Thursday 24th",
    items: []
  },
  [uuid()]: {
    name: "Memories",
    items: itemsFromBackend
  }
};


const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};



// import { useParams } from 'react-router';

// ----------------------------------------------------------------------

const AllData = ({
  data
}) => {
  return (
    <>
      <Paper style={{ padding: '16px', marginTop: '4px' }} elevation={3}>

        <p>
          <img style={{ float: 'right' }} src={data.icon} /> 
          {data.apptitle}
          <br />
          <h5>
            {data.owner}
          </h5>
          <br />
          <h5>
            {data.time} Sec
          </h5>
          <br />
          <small style={{ color: 'gray' }}>
            {data.platform} Operating System
          </small>
          <Button style={{ float: 'right' }} aria-controls="simple-menu" aria-haspopup="true" >
            View Images
          </Button>
        </p>

      </Paper>      
    </>
  );
};

const AllDataPrev = ({
  data
}) => {
  return (
    <>
      <Paper style={{ padding: '16px', marginTop: '10px' }} elevation={3}>

        <p>
          <img style={{ float: 'right' }} src={data.icon} /> 
          {data.apptitle}
          <br />
          <h5>
            {data.owner}
          </h5>
          <br />
          <h5>
            {data.time} Sec
          </h5>
          <br />
          <small style={{ color: 'gray' }}>
            {data.platform} Operating System
          </small>
          <Button style={{ float: 'right' }} aria-controls="simple-menu" aria-haspopup="true" >
            View Images
          </Button>
        </p>

      </Paper>      
    </>
  );
};

export default function GeneralApp(props) {
  const [columns, setColumns] = useState(columnsFromBackend);
  const [project, setproject] = useState('Select Project');
  const { user } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openDialog, setOpenDialog] = React.useState(false);
  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const [alldata, setalldata] = useState([]);

  useEffect(() => {
    var starCountRef = database.ref('tracker/testuser1234');
      starCountRef.on('value', (snapshot) => {
        const data = snapshot.val();
        setalldata([data.work]);
        prevData.push(data.work);
    });
  }, []);

  const showAllData = () => {
    return alldata.map((data) => {
      return (
        <AllData
          data={data}
          key={data.apptitle}
        />
      );
    });
  };

  const showAllDataPrev = () => {
    return prevData.map((data) => {
      return (
        <AllDataPrev
          data={data}
          key={data.apptitle}
        />
      );
    });
  };
  
  // let { userid } = useParams();
  // console.log(userid);

  return (
    <Page title="Tracker App - Dashboard">
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>View More</MenuItem>
        <MenuItem onClick={handleClose}>Ignore</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>


      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">New Entry</DialogTitle>
        <DialogContent>

          <TextField fullWidth id="standard-basic" label="What did you work on ?" />

          <Select
            labelId="demo-simple-select-label"
            fullWidth
            style={{ marginTop: '20px' }}
            value={project}
            onChange={(e) => setproject(e.target.value)}
            id="demo-simple-select"
          >
            <MenuItem value="Select Project">Select Project</MenuItem>
            <MenuItem value={10}>Project 1</MenuItem>
            <MenuItem value={20}>Project 2</MenuItem>
            <MenuItem value={30}>Project 3</MenuItem>
            <MenuItem value={40}>Project 4</MenuItem>
          </Select>



          <TextField style={{ marginTop: '20px' }} type="time" fullWidth id="standard-basic" label="Log the Time" />


        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
          <Button onClick={handleCloseDialog} color="primary" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      <Container maxWidth="xl">
        <h2 className="fontchange">Hours</h2>
      </Container>

      <Container maxWidth="md">
      <center>
          <img src="https://img.icons8.com/color/68/000000/circled-user-male-skin-type-3--v1.png" /> <br />
          <h4>Shivanshu Gupta</h4>
      </center>
      <br />
      <>
        <h4>
        🔴 Live
        </h4>
        {showAllData()}
      </>

      {
        <>
          <h4>History</h4>
          {showAllDataPrev()
        }</>
      }

      </Container>
    </Page>
  );
}
