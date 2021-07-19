import "./App.css";
import Login from "./components/Login";
import dashBoard from "./components/dashboard"
import ProtectedRoute from "./ProtectedRoute";
import {useState} from "react"
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom"

function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <Router>
      <Route path="/auth/login" exact render={(props) => <Login isAuth={setIsAuth} {...props} /> } />
      <ProtectedRoute path="/dashboard" component={dashBoard} isAuth={isAuth} />
      <Redirect to="/auth/login" />
    </Router>
  );
}

export default App;
