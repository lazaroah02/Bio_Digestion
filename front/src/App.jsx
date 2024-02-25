import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from './components/ProtectedRoutes/ProtectedRoute';
import OnlyAdminsPage from './components/ProtectedRoutes/OnlyAdminsPage';
import { AuthenticationContextProvider } from "./contexts/authenticationContext";

function App() {
  return (
    <Router>
      <AuthenticationContextProvider>
        <Routes>
          <Route path='/' element={<Navigate to="/dashboard/projects"/>}/>
          <Route path="/dashboard/projects" element={<ProtectedRoute><>Dashboard</></ProtectedRoute>} />
          <Route path="/dashboard/users" element={<OnlyAdminsPage><>Users</></OnlyAdminsPage>} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthenticationContextProvider>
    </Router>
  );
}

export default App;
