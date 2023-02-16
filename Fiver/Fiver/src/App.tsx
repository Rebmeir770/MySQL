import { useState } from 'react'

import NavBar from './components/NavBar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      {/* <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste enim facere modi recusandae ullam sunt quos harum, quis tempore. Expedita odio consequuntur commodi quibusdam mollitia amet consectetur dolores neque optio.</h1>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sapiente fuga dolorum odit quam ipsum voluptas? Magnam libero voluptates quidem omnis quasi ea. Odit perspiciatis voluptatibus sed totam deleniti mollitia!</h1>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fuga fugit labore voluptatibus quos incidunt doloribus magni, consequuntur libero ex dignissimos, amet nam ipsum animi itaque minus illo accusantium maiores.</h1>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro hic a reprehenderit iure quas maxime. Accusantium alias, minus quisquam illo adipisci non asperiores laborum rem consectetur. Ipsum quasi debitis soluta!</h1> */}
    </div>
  )
}

export default App
