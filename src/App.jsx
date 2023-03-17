import Fonk from "./fonk";
import PostFonk from "./postFonk";
function App() {
  return (
    <>
      <div className="App">
        <Fonk userID={1} />
        <PostFonk userID={1} />
      </div>
    </>
  );
}

export default App;
