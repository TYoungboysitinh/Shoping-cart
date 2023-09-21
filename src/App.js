import './App.css';
import Cart from './components/Cart';
import ListProducts from './components/ListProducts';
import Title from './components/Title';

function App() {
  return (
    <div class="container">
      <Title />
      <div class="row">
        <ListProducts />
        <Cart />
      </div>
    </div>
  );
}

export default App;
