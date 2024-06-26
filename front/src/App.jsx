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
import Indicators from "./pages/Indicators";
import OnlyAdminsPage from "./components/ProtectedRoutes/OnlyAdminsPage";
import Info from "./pages/Info";
import Dashboard from "./pages/Dashboard";
import Bye from "./pages/Bye";
import Graphics from "./pages/Graphics";
import UsersManagement from "./pages/UsersManagement";
import ProjectsManagement from "./pages/Projects";
import SelectBiodigestorTypeMenu from './components/BiodigestorsDesign/SelectBiodigestorTypeMenu'
import PostTreatmentBiodigestorsDesign from './pages/PostTreatmentBiodigestorsDesign'
import TreatmentBiodigestorsDesign from './pages/TreatmentBiodigestorsDesign'
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
                path="/dashboard/projects/:projectId"
                element={
                  <ProtectedRoute>
                    <Dashboard>
                      <Indicators/>
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/graphics"
                element={
                  <ProtectedRoute>
                    <Dashboard>
                      <Graphics/>
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/design"
                element={
                  <ProtectedRoute>
                    <Dashboard>
                      <SelectBiodigestorTypeMenu/>
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/design/treatment-biodigestors"
                element={
                  <ProtectedRoute>
                    <Dashboard>
                      <TreatmentBiodigestorsDesign/>
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/design/post-treatment-biodigestors"
                element={
                  <ProtectedRoute>
                    <Dashboard>
                      <PostTreatmentBiodigestorsDesign/>
                    </Dashboard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard/info"
                element={
                  <ProtectedRoute>
                    <Dashboard>
                      <Info/>
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
