import {Route} from 'wouter'
import Main from './pages/Main'
import Frame from './pages/Frame'
import SecondFrame from './pages/SecondFrame'


function App() {
  return (
   <>
    <Route path='/' component={Main} />
    <Route path='/frame1' component={Frame} />
    <Route path='/frame2' component={SecondFrame} />
   </>
  )
}

export default App
