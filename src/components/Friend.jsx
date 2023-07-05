import { useState } from 'react';

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
                            ? <p className='owe'>{name} owes you {balance * -1}$</p>
                            : (balance == 0 || balance == null)
                                ? <p className='owe'>You and {name} are even</p>
                                : <p className='owe'>You owe {name} {balance}$</p>
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

export default Friend;