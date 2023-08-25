import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Sidebar } from "./Sidebar";
import { Submenu } from "./Submenu";
import { useGlobalContext } from "./context";

const App = () => {

  const { isSidebarOpen } = useGlobalContext()

  return (<>
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu /> 
    </main>

  </>)

}

export default App;
