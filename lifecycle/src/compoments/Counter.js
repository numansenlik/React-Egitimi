import { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => console.log("Count state Edildi"), [count]);
    useEffect(() => {
        console.log("Copoment mount edildi");
        const interval = setInterval(() => {
            setCount((n)=>n+1);
        }, 1000);
        return ()=>clearInterval(interval)
    }, []);

    return (<>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Click</button>
        <hr />
    </>);
}

export default Counter;
