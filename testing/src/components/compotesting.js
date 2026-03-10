const Time=(props)=>{
    return (
        <div>
            <h2>Hello, {props.name}</h2>
            <h2>The current time is {props.time}</h2>
            <div>
                <img src="./clock.png" alt="clock image"></img>
            </div>
            <p>welcome to the page</p>
        </div>
    )
}

export default Time;