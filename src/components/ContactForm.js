// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from "react";
import { CardContent, TextField, Button } from "@mui/material";

const ContactForm = ({addContact}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [photo, setPhoto] = useState("")

    const submit = () => {
        if (name === "" || phone === "" || email === "" || photo === "")
        return alert ("Please fill in the blank")

        addContact({
            name: name,
            phone: phone,
            email: email,
            photo: photo,
        })
    }

    return (
        <> 
        <CardContent sx = {{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: 400,
            justifyContent: "center",
        }} 
        >
        <TextField 
        id = "name"
        label = "Name"
        variant= "outlined"
        sx = {{ width: "100%", marginBottom: "1rem"}}
        value = {name}
        onChange = {(e) => setName(e.target.value)} />

        <TextField 
        id = "phone"
        label = "Phone"
        variant= "outlined"
        sx = {{ width: "100%", marginBottom: "1rem"}}
        value = {phone}
        onChange = {(e) => setPhone(e.target.value)} />

        <TextField 
        id = "email"
        label = "Email"
        variant= "outlined"
        sx = {{ width: "100%", marginBottom: "1rem"}}
        value = {email}
        onChange = {(e) => setEmail(e.target.value)} />

        <TextField 
        id = "photo"
        label = "Photo"
        variant= "outlined"
        sx = {{ width: "100%", marginBottom: "1rem"}}
        value = {photo}
        onChange = {(e) => setPhoto(e.target.value)} /> 

        <Button 
        onClick={submit}
        color = "success"
        sc = {{ witdh: "100%", maxWidth: 100}}>
            Add new
        </Button>
        </CardContent>
        </>
    );
}

export default ContactForm;