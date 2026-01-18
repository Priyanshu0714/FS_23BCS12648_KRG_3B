import { logs } from "../data/logs"

function TotalCarbon(){
    const cals=logs.reduce((sum,log)=>sum + log.carbon,0);

    return (
        <>
        <h1>Dashboard</h1>
        <h2 style={{color:"black"}}>
            Total Carbon Value: {cals}
        </h2>
        <ul style={{color:"black"}}>
            {logs.map(log=>
                <li key={log.id} style={{color:"black"}}>{log.activity}={log.carbon}Kg</li>
            )}
        </ul>
        </>
        );
}

export default TotalCarbon;