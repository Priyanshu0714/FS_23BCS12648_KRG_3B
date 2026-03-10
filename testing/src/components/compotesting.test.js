import { render } from "@testing-library/react";
import Time from "./compotesting";

test("testing component2" ,()=>{
    const {container}=render(<Time name="priyanshu" time="10:09" />)
    expect(container).toMatchSnapshot();
})

// to re-render the snapshot use npm test -- -u