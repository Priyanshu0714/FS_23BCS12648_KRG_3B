import { logs } from "../data/logs"

function HighLowcarbon() {
    const high = logs.filter(log => log.carbon >= 4);
    const low = logs.filter(log => log.carbon <= 3 && log.carbon != 0);
    return (
        <>
            <h2>High Carbon Daily Logs</h2>
            <ul style={{ color: "black",backgroundColor:"#F2003C" }}>
                {high.map(log =>
                    <li key={log.id} style={{ color: "black" }}>{log.activity}={log.carbon}Kg</li>
                )}
            </ul>

            <h2>Low Carbon Daily Logs</h2>
            <ul style={{ color: "black" ,backgroundColor:"#ADFF2F"}}>
                {low.map(log =>
                    <li key={log.id} style={{ color: "black" }}>{log.activity}={log.carbon}Kg</li>
                )}
            </ul>
        </>
    );
}

export default HighLowcarbon;