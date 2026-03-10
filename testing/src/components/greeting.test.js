import { render } from "@testing-library/react";
import Greeting from "./greetings";

test("match request",()=>{
    const {container}=render(<Greeting name="priyanshu"/>);
    expect(container).toMatchSnapshot();
})