import React, {useState} from 'react';

export default () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState()
    const [age, setAge] = useState(1)
    return (
        <div>
            <span>{count}</span>
            <button onClick={()=>{
                setCount(count + 1)
                setCount(count + 1)
                setCount(count + 1)
                setCount(count + 1)
                setCount(count + 1)
            }}>++</button>
        </div>
    )
}
