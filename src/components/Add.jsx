
const Add = () => {

    const addNewPerson = () => {
        friends.push({
            id: Math.random() * 10,
            balance: 0,
            name: 'random',
            img: "random"
        })
    }

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
                <button onClick={addNewPerson}>Add</button>
            </div>
        </section>
    )
}

export default Add;