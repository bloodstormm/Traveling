import "./App.css";

import { BrowserRouter } from "react-router-dom";
import RoutesContainer from "./components/RoutesContainer";
import { onAuthStateChanged } from "firebase/auth";

import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

import { AuthProvider } from "./context/AuthContext";


function App() {
  
  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p className="flex justify-center mt-6 text-xl font-medium">Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
        <BrowserRouter>
          <RoutesContainer user={user} />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
