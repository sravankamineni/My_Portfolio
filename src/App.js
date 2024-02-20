import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'


import './App.css'

// eslint-disable-next-line
// eslint-disable-next-line

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
)

export default App
