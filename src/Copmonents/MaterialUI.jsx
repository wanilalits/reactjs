import React from 'react';
import {Grid, Button, Radio} from '@mui/material';

function MaterialUI() {
    return (
        <div>
        <p1>npm install @mui/material @emotion/react @emotion/styled</p1>
        <p1>xs : mobile Screen</p1>
        <p1>sm : big mobile tab</p1>
        <p1>md : laptop monitor</p1>
        <p1>lg : large screen</p1>
<Grid item  container lg={12} xs={12} sm={12}  continner spacing={0} style={{backgroundColor:'green'}}>

<Grid item lg={3} md={6} sm={9}  xs={12}> <h1 style={{backgroundColor:'black'}}> 1 </h1> </Grid>
<Grid item lg={3} md={6} sm={9}  xs={12}> <h1 style={{backgroundColor:'red'}}> 2 </h1> </Grid>
<Grid item lg={3} md={6} sm={9}  xs={12}> <h1 style={{backgroundColor:'yellow'}}> 3 </h1> </Grid>
<Grid item lg={3} md={6} sm={9}  xs={12}> <h1 style={{backgroundColor:'pink'}}> 4 </h1> </Grid>
        </Grid>
            
        <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<Button>Primary</Button>
<Button disabled>Disabled</Button>
<Button href="#text-buttons">Link</Button>
<Button variant="contained">Contained</Button>
<Button variant="contained" disabled>
  Disabled
</Button>
<Button variant="contained" href="#contained-buttons">
  Link
</Button>
<Button variant="contained" disableElevation>
  Disable elevation
</Button>

<br/>
<Radio
  checked= 'true'

  value="a"
  name="radio-buttons"
  inputProps={{ 'aria-label': 'A' }}
  
/>
        </div>
    );
}

export default MaterialUI;