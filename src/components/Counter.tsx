import { useState, useEffect } from "react"
import { Button } from "./ui/button"

const Counter = () => {
    const counterStart = () =>{

        const previousCounter = localStorage.getItem('counter');
        return previousCounter? parseInt(previousCounter):0;
    }
  
    const [counter, setcounter] = useState(counterStart);

    useEffect(() => {
      localStorage.setItem('counter',counter.toString());
    }, [counter])

    const handleIncrement = () =>{
        setcounter(prev => prev + 1);
    }

    const handleDecrement = () =>{
        setcounter(prev => prev - 1);
    }
    
  return (
    <div>
      <h1 className="mb-7 mt-10 text-8xl">React Counter</h1>
      <div className="mb-9 mt-10">
        <p className="text-5xl">Counter Value : {counter}</p>
      </div>
      <Button onClick={handleIncrement} className="me-4">Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>
    </div>
  )
}

export default Counter
