import logo from './logo.svg';
import './App.css';
import jokeData from './jokeData';
import Joke from './Joke';
import Form from './form';
function App() {
  const jokeElements = jokeData.map(joke=>{
    return(
      <Joke 
        key={joke.id}
        setup={joke.setup}
        punchline={joke.punchline}
      />
    )
  })
  return (
    <div>
      <Form />
      {jokeElements}
    </div>
  );
}

export default App;
