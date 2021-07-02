import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

}));

export default function Employ_form() {
  const classes = useStyles();

  const [gender, setGender] = React.useState('');
  const [employmentType, setEmploymentType] = React.useState('');

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  const handleEmploymentType = (event) => {
    setEmploymentType(event.target.value);
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date('2021-07-02T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
      <>
    <h2> CreditAgency.in</h2>

    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    spacing={2}
  >

    <form className={classes.root} noValidate autoComplete="off">
      
     
<Grid item>

      <TextField id="outlined-basic" label="First Name" variant="outlined" />
      </Grid>
      <Grid item>
      <TextField id="outlined-basic" label="Middle Name" variant="outlined" />
      </Grid>
      <Grid item>
      <TextField id="outlined-basic" label="Last Name" variant="outlined" />
       </Grid>
       <Grid item>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          onChange={handleChange}
        >
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
          
        </Select>
      </FormControl>
      </Grid>

      <Grid item>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
         </Grid>
    </MuiPickersUtilsProvider>
    </Grid>
    
   
   <Grid item>
  <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Employment type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={employmentType}
          onChange={ handleEmploymentType}
        >
          <MenuItem value={"Salaried"}>Salaried</MenuItem>
          <MenuItem value={"Self-employed"}>Self-employed</MenuItem>
          
        </Select>
      </FormControl>
      </Grid>

     <Grid item>
      <TextField  type="number" label=" Monthly Income" variant="outlined" />
      </Grid>

      
    </form>
    </Grid>
    </>
  );
}
