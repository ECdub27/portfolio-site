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
          sx={{alignItems: 'center'}}
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
        >
          <Link to="https://github.com/ECdub27/portfolio-site/blob/master/src/Jr%20dev%20resume%20EC%20Wiegand.pdf" exact component={MenuItem}>
          
          <MenuItem onClick={handleClose}>Resume</MenuItem>
          </Link>
          <Link  to="https://github.com/ECdub27" exact component={MenuItem}>
          <MenuItem onClick={handleClose}>Projects </MenuItem>
          </Link>
          <Link to="https://www.linkedin.com/in/elijah-christian-wiegand-2b59a898/" exact component={MenuItem}>
          <MenuItem onClick={handleClose}>Contact</MenuItem>
          </Link>
          <Link to="/" exact component={Home}>
          <MenuItem onClick={handleClose}>Home</MenuItem>
          </Link>
        </Menu>
        
      </div>
    );
  }
  