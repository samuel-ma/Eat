import { useState } from "react"

const Add = ({ friends }) => {

    const [name, setName] = useState("John Adams...");

    const addNewPerson = (e) => {

        e.preventDefault()
        setName(e.target.value)

        friends.push({
            id: Math.random() * 10,
            balance: 0,
            name: "random",
            img: "random"
        })
    }

    return (
        <section className='profile profile2'>
            <div className='add1'>
                <div className='addnew'>
                    <p>👥 Friend Name: </p>
                    <input type="text" placeholder={name} onChange={name} />
                </div>

                <div className='addnew'>
                    <p>🎨 Image URL: </p>
                    <input type="text" onSubmit={() => { }} placeholder='https://www.pexels.com...' />
                </div>
            </div>

            <div>
                <button onClick={addNewPerson}>Add</button>
            </div>
        </section>
    )
}

export default Add;