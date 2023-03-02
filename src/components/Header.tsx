import * as React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router'
import {AppBar, Divider,
  Box,
  List,
  Drawer,
  ListItem,
  IconButton,
  CssBaseline,
  ListItemText,
  ListItemButton,
  Link as MuiLink,
  } from '@mui/material';
import {FaBars}  from "react-icons/fa";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [{title: 'Beginner', route: 'beg'},
// {title: 'Intermediate', route: 'inter'},
{title: 'Add Exercise', route: 'add-exer'}, 
{title: 'All Exercises', route: 'all-exer'}];

export default function Header(props: Props) {
  const { window } = props;
  const {push} = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      
      <Link
                key='main'
                href={`/`}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontSize: 20,
                  padding:'10px 15px',
                }}
              >
                Acro Lesson Generator

              </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => {
          return (
          <ListItem key={item.title} disablePadding>
              <Link
                key={item.title}
                href={`/${item.route}`}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  fontSize: 16,
                  padding:'10px 15px',
                }}
              >{item.title}</Link>
          </ListItem>
        )})}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position='sticky'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <FaBars />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <Link
              key='main'
              href={`/`}
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: 20,
              }}
            >Acro Lesson Generator
            </Link>
          </Typography>
            
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => {
              return (
                <Link
                key={item.title}
                href={`/${item.route}`}
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: 16,
                  padding:'0px 15px',
                }}
              >{item.title}</Link>
            )})}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}