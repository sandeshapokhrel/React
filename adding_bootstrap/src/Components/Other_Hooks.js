//Context in react is use to store data
//to access data without passing through props
// in other words
//Context in React provides a way to pass data through a component tree without the need to prop-drill (i.e., pass props down manually at every level).
//useful for unnecessary re-rendering
import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

// createcontext creates new context object

//useContext accesss the value of a content within a functional component
// useContext(AuthContext) is used in the LoginForm and Dashboard components to access the authentication context and its values (authenticated, login, logout)

//useState is a react hook that allows functional component to manage state

//useCallBack is a React Hook that memorize function
// It returns a memoized version of the callback function that only changes if one of the dependencies has changed.
// In the example, useCallback is used to memoize the login and logout functions in the AuthProvider component to prevent them from being recreated on each render.

//useMemo memorize the result of a function.
//useMemo is used to memoize the context value in the AuthProvider component to prevent it from being recalculated on every render.
const createApp = () => {
  const AuthContext = createContext();

  const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);

    const login = useCallback(() => {
      setAuthenticated(true);
    }, []);

    const logout = useCallback(() => {
      setAuthenticated(false);
    }, []);

    const authContextValue = useMemo(() => ({
      authenticated,
      login,
      logout,
    }), [authenticated]);

    return (
      <AuthContext.Provider value={authContextValue}>
        {children}
      </AuthContext.Provider>
    );
  };

  const useAuth = () => {
    return useContext(AuthContext);
  };

  const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleLogin = () => {
      // Simulate authentication
      if (username === 'user' && password === 'password') {
        login();
      } else {
        alert('Invalid credentials');
      }
    };

    return (
      <div>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  };

  const Dashboard = () => {
    const { authenticated, logout } = useAuth();

    return (
      <div>
        {authenticated ? (
          <div>
            <h1>Welcome to the Dashboard!</h1>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <h1>Please login to access the Dashboard</h1>
        )}
      </div>
    );
  };

  const App = () => {
    return (
      <AuthProvider>
        <div className="App">
          <LoginForm />
          <Dashboard />
        </div>
      </AuthProvider>
    );
  };

  return App;
};

export default createApp;
