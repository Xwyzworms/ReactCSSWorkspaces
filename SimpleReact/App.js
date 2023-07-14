import  {UseState} from "react";

export default function App() 
{
    const [advice, setAdvice] = useState("Hello World");
    const [counter, setCounter] = useState(0);
    async function getAdvice() {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        setAdvice(data.slip.advice);
        setCounter((c) => c+1);
    }

    return  <div>
        <h1>{advice}</h1>
        <button onClick={
            getAdvice // Using Function Reference
        }>Get Advice</button>
        <Message counter={counter}/>
    </div>
}

function Message(props) {
    return (
        <p>You have read <strong>{props.counter}</strong> pieces of advices </p>
    )
}
