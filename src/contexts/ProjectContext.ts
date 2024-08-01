import { createContext } from "react";

interface ProjectContextProps {
    activeProject:number;
    setActiveProject: (num:number) => void;
}

export const ProjectContext = createContext({} as ProjectContextProps);