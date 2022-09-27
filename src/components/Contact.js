// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import {ListItem, ListItemText, ListItemAvatar, Avatar, Typography} from '@mui/material';
import Data from "../data/contacts.json"

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (<>
    <list sx={{ width: "100%", maxWidth: 360 }}>
        <ListItem alignItems='flex-start'>
            <ListItemAvatar>
                <Avatar alt = "Remy Sharp" src={data.photo}/>
            </ListItemAvatar>
            <ListItemText primary = {data.name}
            secondary = {
                <React.Fragment>
                    <Typography sx = {{display:"inline"}}
                    component = "span"
                    variant = "body2"
                    color = "text.primary">
                    </Typography>
                    <p>{data.phone}</p>
                    <p>{data.email}</p>
                </React.Fragment>
            }
            />
        </ListItem>
    </list>
    </>);
};

export default Contact;
