import logo from './logo.svg';
import './App.css';
import { Counter } from './counter';
import { Jokes } from './jokeman';

function App() {
  return (
    <div>
    

      <h1>Our own counter</h1>
      <Counter value={5} increment={5}/>

      <h1>Here is some jokes for you</h1>
      <Jokes/>
    

    </div>
  );
}

export default App;
