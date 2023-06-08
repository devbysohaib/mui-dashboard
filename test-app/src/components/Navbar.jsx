import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    Avatar,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Box
} from "@mui/material";
import { styled } from '@mui/material/styles';
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import Logout from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import React from "react";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const MainAppBar = styled(AppBar)(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}));

const MainDrawer = styled(Drawer)(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    ...(theme.breakpoints.down("sm") && {
        "& .MuiDrawer-paper": {
            width: "100%"
        }
    })
}));

const Navbar = (props) => {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <MainAppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        onClick={() => setOpen(!open)}
                        sx={{ marginRight: 2 }}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            flexGrow: 1,
                        }}
                    >
                        Dashboard
                    </Typography>

                </Toolbar>
            </MainAppBar>

            <MainDrawer
                variant="persistent"
                anchor="left"
                open={open}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth
                    }
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: (theme) => theme.spacing(5, 1),
                        justifyContent: "flex-end"
                    }}
                >
                    <Avatar>MS</Avatar>
                    <Typography variant="h6"> Logo </Typography>
                </Box>
                <Divider />
                <List>

                    <ListItem
                        onClick={() => navigate("/")}
                        button
                    >
                        <ListItemIcon><DashboardIcon /></ListItemIcon>
                        <ListItemText primary='Dashboard' />
                    </ListItem>
                    <ListItem
                        onClick={() => navigate("/")}
                        button
                    >
                        <ListItemIcon><ManageAccountsIcon /></ListItemIcon>
                        <ListItemText primary='User Management' />
                    </ListItem>

                </List>
                <List sx={{ marginTop: 'auto' }}>
                    <Divider />
                    <ListItem
                        onClick={() => navigate("/")}
                        button
                        sx={{ marginTop: 'auto' }}
                    >
                        <ListItemIcon> <Logout /> </ListItemIcon>
                        <ListItemText primary='Logout' />
                    </ListItem>
                </List>
            </MainDrawer>
        </Box>
    );
};
export default Navbar