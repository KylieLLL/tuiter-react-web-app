
import './App.css';
import {Route, Navigate} from  "react-router-dom";

function App() {
  return (
      <Route exact path="/">
        <Navigate to={"../public/tuiter/navigation.html"} />
      </Route>
  );
}

export default App;
