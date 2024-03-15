import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DesignedButton from '../common/DesignedButton';
import FetchUserData from './FetchUserData';
import MainPage from '../MainPage';

const navItems = ['About', 'Services', 'Projects'];

const Header = () => {
  return (
    <BrowserRouter>
          <Box sx={{ display: 'flex'}}>
            <AppBar component="nav" sx={{backgroundColor:"white"}}>
              <Toolbar>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, display: { sm: 'block'}, color:'black', font:"Plus Jakarta Sans"  }}
                >
                  Digital agency
                </Typography>
                <Box sx={{ display: { sm: 'block', font:"Plus Jakarta Sans" } }}>
                  {navItems.map((item) => (
                    <Button key={item} sx={{ color:'#47536B',mr:2 }}>
                      {item}
                    </Button>
                  ))}
                </Box>
                  <Link to="/contact">
                    <DesignedButton  buttonName="Get in Touch"  />
                  </Link>
              </Toolbar>
            </AppBar>
          </Box>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/contact" element={<FetchUserData />} />
          </Routes>
    </BrowserRouter>
  );
}

export default Header;
