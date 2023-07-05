
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

export default Split;