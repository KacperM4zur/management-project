import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useState} from "react";

function App() {
   const [projectsState, setProjectState] = useState({
       selectedProjectId: undefined,
       projects: []
   });

   function handleStartAddProject() {
       setProjectState(prevState => {
           return {
               ...prevState,
               selectedProjectId: null,
           };
       });
   }

  return (
    <main className="h-screen my-8 flex gap-8">
       <ProjectsSidebar/>
       <NoProjectSelected/>
    </main>
  );
}

export default App;
