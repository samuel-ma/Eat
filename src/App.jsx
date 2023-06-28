import { useState } from 'react';
import './App.css'
import a from "./assets/a.jpg";
import b from "./assets/b.jpg";
import c from "./assets/c.png";
import d from "./assets/d.jpg";
import e from "./assets/e.png";

function App() {

    const [open, setOpen] = useState(true)

    const addNew = () => {
        setOpen(!open)
    }

    const friends = [
        {
            id: 1,
            balance: 10,
            name: "Henry Rim",
            img: b
        },
        {
            id: 2,
            balance: -33,
            name: "Iron Mickey",
            img: c
        },
        {
            id: 3,
            balance: 11,
            name: "Pamela Pinket",
            img: e
        },
        {
            id: 4,
            balance: -20,
            name: "Maria Betty",
            img: a
        },

    ]

    return (
        <>
            <main>

                <Friends friends={friends} addNew={addNew} />

                <Split open={open} />

            </main>
        </>
    )
}

const Friends = ({ friends }) => {
    const [open, setOpen] = useState(false);

    const addNew = () => {
        setOpen(!open)
    }

    return (
        <section className='container1'>
            {
                friends.map(data => <Friend key={data.id} name={data.name} img={data.img} balance={data.balance} addNew={addNew} />)
            }

            {
                (open)
                    ? <Add />
                    : null
            }

            <section className='new'>
                <button onClick={addNew}>
                    {
                        (open)
                            ? <p>Close</p>
                            : <p>Add New</p>
                    }
                </button>
            </section>

        </section>
    )
}

const Friend = ({ name, img, balance }) => {
    const [open, setOpen] = useState(false);

    const addNew = () => {
        setOpen(!open)
    }

    return (
        <section className='profile'>
            <div className='person'>
                <div>
                    <img className='pic' src={img} alt="pic" />
                </div>

                <div>
                    <h3>{name}</h3>
                    {
                        (balance < 0)
                            ? <p>{name} owes you {balance * -1}</p>
                            : <p>You owe {name} {balance}$</p>
                    }
                </div>
            </div>

            <div>
                <button onClick={addNew}>
                    {
                        (open)
                            ? <p>Close</p>
                            : <p>Select</p>
                    }
                </button>
            </div>

        </section>
    )
}

const Add = () => {
    return (
        <section className='profile profile2'>
            <div className='add1'>
                <div className='addnew'>
                    <p>👥 Friend Name: </p>
                    <input type="text" placeholder='John Adams...' />
                </div>

                <div className='addnew'>
                    <p>🎨 Image URL: </p>
                    <input type="text" placeholder='https://www.pexels.com...' />
                </div>
            </div>

            <div>
                <button>Add</button>
            </div>
        </section>
    )
}

const Split = () => {
    return (
        < section className='container2' >
            <section className='two1'>
                <h1>SPLIT A BILL WITH ANTHONY</h1>
            </section>

            <section className='two2'>
                <div className='inputs'>
                    <p>💰 Bill Value:</p>
                    <input type="number" placeholder='Amount...' />
                </div>

                <div className='inputs'>
                    <p>🎁 Your Expense:</p>
                    <input type="number" placeholder='Amount...' />
                </div>

                <div className='inputs'>
                    <p>💎 Anthonys expense:</p>
                    <input type="number" placeholder='Amount...' />
                </div>

                <div className='inputs'>
                    <p>📝 Whose paying:</p>
                    <select name="" id="">
                        <option value="">You</option>
                        <option value="">Anthony</option>
                        <option value="">Both</option>
                    </select>
                </div>
            </section>

            <section className='two3'>
                <button>Split Bill</button>
            </section>
        </ section>
    )
}

export default App
