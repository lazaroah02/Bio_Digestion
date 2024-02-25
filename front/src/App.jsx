import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { AuthenticationContextProvider } from "./contexts/authenticationContext";

function App() {
  return (
    <Router>
      <AuthenticationContextProvider>
        <Routes>
          <Route path='/' element={<Navigate to="/dashboard/projects"/>}/>
          <Route path="/dashboard/projects" element={<>Dashboard</>} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthenticationContextProvider>
    </Router>
  );
}

export default App;
