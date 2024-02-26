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
import UsersManagement from "./pages/UsersManagement";
import ProjectsManagement from "./pages/Projects";
import { QueryFiltersContextProvider } from "./contexts/filtersContext";
import "primereact/resources/themes/lara-light-cyan/theme.css";

function App() {
  return (
    <PrimeReactProvider>
      <Router>
        <QueryFiltersContextProvider>
          <AuthenticationContextProvider>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard/projects" />} />
              <Route
                path="/dashboard/projects"
                element={
                  <ProtectedRoute>
                    <Dashboard>
                      <ProjectsManagement/>
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
                      <UsersManagement/>
                    </Dashboard>
                  </OnlyAdminsPage>
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/bye" element={<Bye />} />
            </Routes>
          </AuthenticationContextProvider>
        </QueryFiltersContextProvider>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;
