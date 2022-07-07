import Player from "./components/Player";
import Song from "./components/Song";
import './style/app.scss';

const App = () => {
  return(
    <div className="App">
      <Song />
      <Player />
    </div>
  )
}

export default App;
