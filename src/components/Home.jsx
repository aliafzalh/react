import { useState } from "react"

 function Home() {
//     let name = 'Mario'
 const [name, setName] = useState('Mario')
 const [age, setAge] = useState(25)


const handleClink = () => {
  setName('Luigi')
  setAge(30)
}

const handleClickAgain = (name, e) => {
    console.log(`Hello ${name}`, e.target)
}
    return (
        <div className="home">
            <h2>HomePage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClink}>Click me</button>
            {/* //Creating custon handler */}
            <button onClick={(e) =>handleClickAgain('Mario',e)}>Click me again</button>
        </div>
    )
}
export default Home;


/* How to use handleClink ??

function Home() {
const handleClink = (e) => {
    name = 'Luigi'
    console.log(`Hello, ninjas`, e)
}

const handleClickAgain = (name, e) => {
    console.log(`Hello ${name}`, e.target)
}
    return (
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClink}>Click me</button>
            {/* //Creating custon handler */
         /*   <button onClick={(e) =>handleClickAgain('Mario',e)}>Click me again</button>
        </div>
    )
}
export default Home;   */