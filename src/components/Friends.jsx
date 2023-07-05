import Friend from "../components/Friend";
import Add from "../components/Add";
import { useState } from 'react';

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

export default Friends