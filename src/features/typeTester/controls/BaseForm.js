import React from 'react';
import TextField from "@material-ui/core/TextField";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {CustomFormControlLabel, CustomTextField} from "./BaseForm.style";

const BaseForm = (props) => {
  return (
    <form>
      <CustomTextField
        id="baseSize" 
        label="Base Size (px)"
        type="number"
        value={props.baseSize}
        onChange={props.changeBaseSize}
        inputProps={
          {
            min: 1
          }
        }
        fullWidth={true}
        margin="normal"
      />
      <CustomFormControlLabel
        control={
          <Checkbox 
            checked={props.roundFontSizes} 
            onChange={props.toggleRounding}
          />
        }
        label="Round Font Sizes"
      />
      <TextField 
        id="typeScale" 
        label="Scale"
        fullWidth={true}
        margin="normal"
        select
        SelectProps={{
          native: true,
        }}        
        value={props.typeScaleSelected}
        onChange={props.changeTypeScale}
      >
        {props.typeScaleValues.map((value, i) => (
          <option value={i} key={value.name}>
            {value.value} – {value.name}
          </option>
        ))}
      </TextField>
      </form>
  );
};

export default BaseForm;