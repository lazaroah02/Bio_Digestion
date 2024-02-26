import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthenticationContextProvider } from "./contexts/authenticationContext";
import { PrimeReactProvider } from 'primereact/api';
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";
import OnlyAdminsPage from "./components/ProtectedRoutes/OnlyAdminsPage";
import Dashboard from "./pages/Dashboard";
import Bye from "./pages/Bye";
import "primereact/resources/themes/lara-light-cyan/theme.css";

function App() {
  return (
    <PrimeReactProvider>

      <Router>
        <AuthenticationContextProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard/projects" />} />
            <Route
              path="/dashboard/projects"
              element={
                <ProtectedRoute>
                  <Dashboard>
                    <>Projects</>
                  </Dashboard>
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/graphics"
              element={
                <ProtectedRoute>
                  <Dashboard>
                    <>Graphics</>
                  </Dashboard>
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/info"
              element={
                <ProtectedRoute>
                  <Dashboard>
                    <>Info</>
                  </Dashboard>
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/users"
              element={
                <OnlyAdminsPage>
                  <Dashboard>
                    <>Users</>
                  </Dashboard>
                </OnlyAdminsPage>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/bye" element={<Bye />} />
          </Routes>
        </AuthenticationContextProvider>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;
