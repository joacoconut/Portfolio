import { ProjectContext } from './ProjectContext';
import { useState } from 'react';

interface ProjectProps {
    children: JSX.Element | JSX.Element[];
}

export const ProjectContextProvider = ({children} : ProjectProps) => {

    const [activeProject, setActiveProject] = useState(0);
    
  return (
    <ProjectContext.Provider value={{activeProject, setActiveProject}}>
        {children}
    </ProjectContext.Provider>
  )
}
