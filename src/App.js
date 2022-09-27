import './App.css';
import React, {useState} from 'react';
import Header from "../src/components/Header.js"
import ContactForm from "../src/components/ContactForm.js"
import Contact from "../src/components/Contact.js"
import ScrollToBottom from 'react-scroll-to-bottom'
import {Card, List, CardContent} from "@mui/material"

// Uncomment untuk memuat daftar kontak
import contactJSON from "./data/contacts.json"
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [data, setData] = useState(contactJSON)
  const addContact = (newContact) => {
    setData([...data, newContact])
  }

  return (
    <div className="App">
      <Header />
      <div style={ 
        {display : "flex",
        justifyContent: "center" }}>
          <Card sx = {{
            width: "100%",
            maxWidth : 800,
            bgcolor : "background.paper",
            display : "flex",
            flexDirection : "row",
            marginTop : "1rem",
          }}>

            <ContactForm addContact = {addContact} />
            <CardContent sx = {{ width : 400 }}>
              <List sx = {{
                height : 350,
                width : "100%",
                bgcolor : "background.paper",
                overflow : "auto"
              }}>
                <ScrollToBottom className='scroll-to-bottom'>
                  {data.map((contacts, index) => (
                    <Contact key = {index} data = {contacts} />
                  ))}
                </ScrollToBottom>
              </List>
            </CardContent>
          </Card>
        </div>
    </div>
  );
};

export default App;
