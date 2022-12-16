import {Route} from 'wouter'
import Main from './pages/Main'


function App() {
  return (
   <>
    <Route path='/' component={Main} />
    <Route path='/frame1' component={Main} />
   </>
  )
}

export default App
