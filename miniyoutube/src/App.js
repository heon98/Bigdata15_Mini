import Hovering from "./components/Hovering";
import Play from "./components/Play";
import Cat from "./components/Cat";
import requests from "./requests";


function App() {
    return (
        <div className="App">
            {/* <Play /> */}
            <Cat title="BasicTrending Now" fetchUrl={requests.BasicTrending} />
            <Cat title="FilmTrending" fetchUrl={requests.FilmTrending} />
            <Cat title="MusicTrending" fetchUrl={requests.MusicTrending} />
            <Cat title="PetTrending" fetchUrl={requests.PetTrending} />
            <Cat title="GamingTrending" fetchUrl={requests.GamingTrending} />
            {/* <Hovering /> */}
        </div>
    );
}

export default App;
