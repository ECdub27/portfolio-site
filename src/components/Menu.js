import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Home } from '@mui/icons-material';

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{alignItems: 'center',
        color: 'black', backgroundColor:'#424242'
      }}
        >
          Dashboard
        </Button>
        
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          
          }}
          sx={{alignContent:'flex-end'}}
        >
          <Link to="https://github.com/ECdub27/portfolio-site/blob/master/src/Jr%20dev%20resume%20EC%20Wiegand.pdf" exact component={MenuItem}>
          
          <MenuItem onClick={handleClose} sx={{display:'inline-block' , backgroundColor:'primary'}}>Resume</MenuItem>
          </Link>
          <Link  to="https://github.com/ECdub27" exact component={MenuItem}>
          <MenuItem onClick={handleClose} sx={{display:'inline-block', backgroundColor:'primary'}}>Projects </MenuItem>
          </Link>
          <Link to="https://www.linkedin.com/in/elijah-christian-wiegand-2b59a898/" exact component={MenuItem}>
          <MenuItem onClick={handleClose} sx={{display:'inline-block' , backgroundColor:'primary'}}>Contact</MenuItem>
          </Link>
          <Link to="/" exact component={Home}>
          <MenuItem onClick={handleClose} sx={{display:'inline-block' , backgroundColor:'primary'}}>Home</MenuItem>
          </Link>
        </Menu>
        
      </div>
    );
  }
  