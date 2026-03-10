import add from "./math"
import {greet} from "./math"

test('2+2 equals 4', () => { 
    expect(add(2,2)).toBe(4);
 })

test('check username',()=>{
    expect(greet("priyanshu")).toBe("priyanshu")
    expect(greet()).toBe("Guest")
})

// test('Without Argument',()=>{
// })