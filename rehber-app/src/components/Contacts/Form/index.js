import React, { useEffect, useState } from 'react'

function Form({ directory, setDirectory }) {
    const [info, setInfo] = useState({ name: "", number: "" });
    const callInfo = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }
    const addInfo = (e) => {
        e.preventDefault();
        if (!(info.name === "" || info.number === "")) {
            setDirectory([...directory, info]);
            setInfo({ name: "", number: "" })
        }
    }

    return (<React.Fragment>
        <form onSubmit={addInfo}>
            <div>
                <input name='name' type='text' placeholder='Pls Name Write' onChange={callInfo} value={info.name} />
            </div>
            <div>
                <input name='number' type='number' placeholder='Pls Number Write' onChange={callInfo} value={info.number} />
            </div>
            <div className='btn'>
                <button>Add</button>
            </div>
        </form>
    </React.Fragment>
    )
}
export default Form;