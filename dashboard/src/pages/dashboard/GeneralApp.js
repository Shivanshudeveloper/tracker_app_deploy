import React, { useState } from "react";
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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
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
      <br />
      <div style={{ display: "flex", justifyContent: 'center', height: "100%", width: '100%' }}>
        <DragDropContext
          onDragEnd={result => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
                key={columnId}
              >
                <h2>{column.name}</h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <Paper
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightgray"
                              : "whitesmoke",
                            padding: 5,
                            width: "510px",
                            height: "auto"
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <Paper
                                    ref={provided.innerRef}
                                    elevation={3}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      minHeight: "auto",
                                      width: "500px",
                                      backgroundColor: snapshot.isDragging
                                        ? "ghostwhite"
                                        : "white",
                                      color: "black",
                                      ...provided.draggableProps.style
                                    }}
                                    >
                                      <p>
                                        <img style={{ float: 'right' }} src={item.icon} /> 
                                        {item.content}
                                        <br />
                                        <h5>
                                          2:00 PM, 28th June 2021
                                        </h5>
                                        <br />
                                        <small style={{ color: 'gray' }}>
                                          app.trackerapp.com
                                        </small>
                                        <Button style={{ float: 'right' }} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                          More
                                        </Button>
                                      </p>
                                    </Paper>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                          {
                            column.name !== "Memories" ? (
                              <Button onClick={handleClickOpenDialog} color="secondary" size="large" fullWidth variant="contained">Add Task</Button>
                            ) : null
                          }
                        </Paper>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>
      </div>
      </Container>
    </Page>
  );
}
