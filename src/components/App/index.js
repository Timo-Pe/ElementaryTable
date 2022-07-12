// == Import
import PeriodicTable from "src/components/PeriodicTable";
import Header from "src/components/Header";
import "./app.scss";

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <PeriodicTable />
  </div>
);

// == Export
export default App;
