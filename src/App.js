import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'
import Home from './components/Home'
import Cart from './components/Cart'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/products/:id" component={ProductDetails} />
      <Route exact path="/cart" component={Cart} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
)
export default App
