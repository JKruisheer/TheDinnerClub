import "./App.css";
import Login from "./components/login";
import dashBoard from "./components/dashboard";
import ProtectedRoute from "./ProtectedRoute";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const user_key = localStorage.getItem("USER_KEY");

  return (
    <ChakraProvider>
      <Router>
        <Route
          path="/auth/login"
          exact
          render={(props) => <Login {...props} />}
        />
        <ProtectedRoute path="/dashboard" component={dashBoard}/>
        {user_key == null? <Redirect to="/auth/login"/> : <Redirect to="/dashboard"/>}
      </Router>
    </ChakraProvider>
  );
}

export default App;
