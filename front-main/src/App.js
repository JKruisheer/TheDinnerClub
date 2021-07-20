import "./App.css";
import Login from "./components/login";
import dashBoard from "./components/dashboard";
import ProtectedRoute from "./ProtectedRoute";
import { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <ChakraProvider>
      <Router>
        <Route
          path="/auth/login"
          exact
          render={(props) => <Login isAuth={setIsAuth} {...props} />}
        />
        <ProtectedRoute
          path="/dashboard"
          component={dashBoard}
          isAuth={isAuth}
        />
        <Redirect to="/auth/login" />
      </Router>
    </ChakraProvider>
  );
}

export default App;
