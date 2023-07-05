import { useEffect, useState } from 'react';
import Friends from "./components/Friends";
import Split from "./components/Split";
import axios from 'axios';
import './App.css'
import friends from "./data/data.json";

function App() {

    const [open, setOpen] = useState(true)
    // const [post, setPost] = useState(null);

    useEffect(() => {
        const url = "https://randomuser.me/api/";
        axios.get(`${url}`).then(res => console.log(res.data.results)).catch(err => console.error(err))
    }, [])

    const addNew = () => {
        setOpen(!open)
    }

    return (
        <>
            <main>

                <Friends friends={friends} addNew={addNew} />

                <Split open={open} />

            </main>
        </>
    )
}

export default App
