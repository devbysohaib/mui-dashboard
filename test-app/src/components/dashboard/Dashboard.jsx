// import { styled } from "@mui/system";
// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     IconButton,
//     Drawer,
//     List,
//     ListItem,
//     ListItemText,
//     ListItemIcon,
//     TextField,
//     Checkbox,
//     Divider,
//     Avatar,
//     InputBase,
// } from "@mui/material";
// import clsx from "clsx";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import AssignmentIcon from "@mui/icons-material/Assignment";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import React from "react";
// import GithubIcon from "@mui/icons-material/GitHub";
// import MessageIcon from "@mui/icons-material/Message";
// import AccessibilityIcon from "@mui/icons-material/Accessibility";
// import Favorite from "@mui/icons-material/Favorite";
// import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
// import { useNavigate } from "react-router-dom";

// const drawerWidth = 240;

// const styles = styled("div")(({ theme }) => ({
//     root: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         flex: 1,
//         display: "none",
//         [theme.breakpoints.up("sm")]: {
//             display: "block",
//         },
//     },
//     search: {
//         position: "relative",
//         borderRadius: theme.shape.borderRadius,
//         backgroundColor: theme.palette.common.white,
//         "&:hover": {
//             backgroundColor: theme.palette.common.white,
//         },
//         marginLeft: 0,
//         width: "100%",
//         [theme.breakpoints.up("sm")]: {
//             marginLeft: theme.spacing(1),
//             width: "auto",
//         },
//     },
//     searchIcon: {
//         padding: theme.spacing(0, 2),
//         height: "100%",
//         position: "absolute",
//         pointerEvents: "none",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     inputRoot: {
//         color: "inherit",
//     },
//     inputInput: {
//         padding: theme.spacing(1, 1, 1, 0),
//         paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//         transition: theme.transitions.create("width"),
//         width: "100%",
//         [theme.breakpoints.up("sm")]: {
//             width: "12ch",
//             "&:focus": {
//                 width: "20ch",
//             },
//         },
//     },
//     appBar: {
//         transition: theme.transitions.create(["margin", "width"], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//     },
//     appBarShift: {
//         width: `calc(100% - ${drawerWidth}px)`,
//         marginLeft: drawerWidth,
//         transition: theme.transitions.create(["margin", "width"], {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     drawer: {
//         width: drawerWidth,
//         flexShrink: 0,
//     },
//     drawerPaper: {
//         width: drawerWidth,
//     },
//     drawerHeader: {
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: theme.spacing(5, 1),
//         ...theme.mixins.toolbar,
//         justifyContent: "flex-end",
//     },
//     contentHeader: {
//         display: "flex",
//         alignItems: "center",
//         padding: theme.spacing(0, 1),
//         ...theme.mixins.toolbar,
//         justifyContent: "flex-end",
//     },
//     content: {
//         flexGrow: 1,
//         padding: theme.spacing(3),
//         transition: theme.transitions.create("margin", {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         marginLeft: -drawerWidth,
//     },
//     contentShift: {
//         transition: theme.transitions.create("margin", {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//         marginLeft: 0,
//     },
//     upperMargin: {
//         marginTop: "80px",
//     },
// }));

// export const Navbar = (props) => {
//     const navigate = useNavigate();
//     const [open, setOpen] = React.useState(false);
//     const [like, setLike] = React.useState(false);
//     const classes = styles();

//     return (
//         <div className={classes.root}>
//             <AppBar
//                 position="fixed"
//                 className={clsx(classes.appBar, {
//                     [classes.appBarShift]: open,
//                 })}
//             >
//                 <Toolbar>
//                     <IconButton
//                         edge="start"
//                         onClick={() => setOpen(!open)}
//                         className={classes.menuButton}
//                         color="inherit"
//                         aria-label="open drawer"
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography className={classes.title} variant="h6" noWrap>
//                         Material-UI
//                     </Typography>
//                     <IconButton color="inherit" onClick={() => history.push("/")}>
//                         <DashboardIcon />
//                         <Typography
//                             className={classes.buttonNavbar}
//                             variant="h6"
//                             color="inherit"
//                         >
//                             Dashboard
//                         </Typography>
//                     </IconButton>
//                     <IconButton
//                         color="inherit"
//                         onClick={() => history.push("/graphs")}
//                     >
//                         <AssignmentIcon />
//                         <Typography
//                             className={classes.buttonNavbar}
//                             variant="h6"
//                             color="inherit"
//                         >
//                             Analysis
//                         </Typography>
//                     </IconButton>
//                     <IconButton color="inherit" onClick={() => history.push(`/orders`)}>
//                         <AssignmentIcon />
//                         <Typography
//                             className={classes.buttonNavbar}
//                             variant="h6"
//                             color="inherit"
//                         >
//                             Orders
//                         </Typography>
//                     </IconButton>
//                     <div className={classes.search}>
//                         <div className={classes.searchIcon}>
//                             <SearchIcon />
//                         </div>
//                         <InputBase
//                             placeholder="Search…"
//                             classes={{
//                                 root: classes.inputRoot,
//                                 input: classes.inputInput,
//                             }}
//                             inputProps={{ "aria-label": "search" }}
//                         />
//                     </div>
//                 </Toolbar>
//             </AppBar>

//             <Drawer
//                 className={classes.drawer}
//                 variant="persistent"
//                 anchor="left"
//                 open={open}
//                 classes={{
//                     paper: classes.drawerPaper,
//                 }}
//             >
//                 <div className={classes.drawerHeader}>
//                     <Avatar>MS</Avatar>
//                     <Typography variant="h6"> Masai School </Typography>
//                     <Typography variant="subtitle1"> Batch Name </Typography>
//                 </div>
//                 <Divider />
//                 <List>
//                     {[
//                         {
//                             text: "Dashboard",
//                             icon: <DashboardIcon />,
//                             to: "/",
//                         },
//                         {
//                             text: "Orders",
//                             icon: <AssignmentIcon />,
//                             to: "/orders",
//                         },
//                         {
//                             text: "Analysis",
//                             icon: <AssignmentIcon />,
//                             to: "/graphs",
//                         },
//                     ].map((item) => (
//                         <ListItem
//                             button
//                             key={item.text}
//                             onClick={() => history.push(item.to)}
//                         >
//                             <ListItemIcon> {item.icon} </ListItemIcon>
//                             <ListItemText primary={item.text} />
//                         </ListItem>
//                     ))}
//                 </List>
//             </Drawer>
//             <main
//                 className={clsx(classes.content, {
//                     [classes.contentShift]: open,
//                 })}
//             >
//                 <div className={classes.contentHeader} />
//                 {props.children}
//             </main>
//         </div>
//     );
// };


import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Navbar from '../Navbar'

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <TableContainer sx={{ width: '94%', margin: '90px auto' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Dashboard