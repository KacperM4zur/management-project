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

   function handleAddProject(projectData) {
       setProjectState(prevState => {

           const projectId = Math.random();
           const newProject = {
               ...projectData,
               id: projectId
           };

           return {
               ...prevState,
               selectedProjectId: undefined,
               projects: [...prevState.projects, newProject]
           }
       });
   }

   function handleCancelAddProject() {
       setProjectState(prevState => {
           return {
               ...prevState,
               selectedProjectId: undefined,
           };
       });
   }


   let content;

   if(projectsState.selectedProjectId === null) {
       content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
   } else if (projectsState.selectedProjectId === undefined) {
       content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
   }

  return (
    <main className="h-screen my-8 flex gap-8">
       <ProjectsSidebar
           onStartAddProject={handleStartAddProject}
           projects={projectsState.projects}
       />
        {content}
    </main>
  );
}

export default App;
