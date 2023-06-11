import AppContent from "./components/AppContent";
import AppHeader from "./components/AppHeader";
import PageTitle from "./components/PageTitle";
import './styles/appModule.css'

function App() {
  return (
    <div className="app_container">
        <PageTitle heading="TODO LIST"/>
        <div className="app__wrapper">
          <AppHeader/>
          <AppContent/>
        </div>
    </div>
  );
}

export default App;
