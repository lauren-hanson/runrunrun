import { Navbar } from "./Navbar";
import { Dashboard } from "./dashboard/Dashboard";
import { Sidebar } from "./Sidebar";
import { Submenu } from "./Submenu";
import { useGlobalContext } from "./context";

const App = () => {

  const { isSidebarOpen } = useGlobalContext()

  return (<>
    <main>
      <Navbar />
      <Dashboard />
      <Sidebar />
      <Submenu /> 
    </main>

  </>)

}

export default App;
