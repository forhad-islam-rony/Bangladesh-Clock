import BdClock from './components/BdClock'
import Text from './components/Text'
import Time from './components/Time'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'


function App() {
  return (
    <center className='container'>
      <BdClock/>
      <Text/>
      <Time/>
    </center>
  )

}

export default App
