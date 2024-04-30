import React, { useState } from 'react'
import './Stylenic.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';
import lankaNic from 'lanka-nic';
export default function Nicgenerator() {

    const [nic, setNic] = useState('');
    const [nicdisplay, setNicdisplay] = useState('');
    const [bday, setBday] = useState('');
    const [gen, setGen] = useState('');
    const [age, setAge] = useState('');

    function Genarate() {
        let { dateOfBirth, gender } = lankaNic.getInfoFromNIC(nic);
        setGen(gender)
        setNicdisplay(nic)
        setBday(convert(dateOfBirth))
        setAge(calculateAge(dateOfBirth));
    }

    function clearAll() {
        setNic('');
        setNicdisplay('');
        setBday('');
        setGen('');
        setAge('');
    }


    function convert(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }


    function calculateAge(dateOfBirth) {
        var dob = new Date(dateOfBirth);
        var now = new Date();

        var age = now.getFullYear() - dob.getFullYear();
        var monthDiff = now.getMonth() - dob.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dob.getDate())) {
            age--;
        }

        return age;
    }



    return (
        <div>

            <Box sx={{
                border: 2, justifyContent: 'center', borderRadius: 5, padding: 5, width: 400,
                background: '#f2f2f2', borderColor: '#8c8c8c', boxShadow: 20, marginTop: 8
            }}>

                <Box>
                    <h1 className='topic'>NIC Genarator</h1>

                </Box>

                <Box>
                    <TextField sx={{ display: 'flex', backgroundColor: '#e6f2ff', boxShadow: 6 }} id="outlined-basic" label=" Enter NIC" variant="outlined"
                        value={nic}
                        onChange={(val) => setNic(val.target.value)} />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button sx={{ marginTop: 3, boxShadow: 10, backgroundColor: '#29a3a3', fontWeight: 600, '&:hover': { backgroundColor: '#1f7a7a' } }} variant="contained" className='btn-genarate'
                        onClick={() => Genarate()}
                    >Genearate</Button>
                </Box>


                <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 3, padding: 2, borderRadius: 2, gap: 4, boxShadow: 10, }}>
                    <Box>
                        <h3>NIC NO</h3>
                        <h3>Gender</h3>
                        <h3>Birthday</h3>
                        <h3>Age</h3>
                    </Box>

                    <Box>
                        <h3>:</h3>
                        <h3>:</h3>
                        <h3>:</h3>
                        <h3>:</h3>
                    </Box>

                    <Box sx={{ width: '100%',opacity:.8 }}>
                        <h3>{nicdisplay}</h3>
                        <h3>{gen}</h3>
                        <h3>{bday}</h3>
                        <h3>{age}</h3>
                    </Box>
                </Box>


                <Box sx={{ display: "flex", justifyContent: 'flex-end' }}>
                    <Button className='btn-clear'
                        onClick={() => clearAll()}

                        sx={{ marginTop: 3, marginRight: 0, boxShadow: 10, backgroundColor: '#bf0d0d', color: 'white', fontWeight: 600 }}
                        startIcon={<ClearIcon />}>

                        Clear
                    </Button>
                </Box>

                <Box className='disiner'>
                    <p >Design & Development by Nirmal.</p>
                </Box>
            </Box>

        </div>
    )
}

