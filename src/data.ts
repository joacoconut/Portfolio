import {
  DescriptionProjectsProps,
  IDescriptionHome,
} from "./interfaces/interfaces";

//? Si quiero agregar nuevos proyectos, modificar SOLO descriptionsProjects
//? El 'id' debe de coincidir con el nombre de la imagen

// Projectos que se muestran en /projects
export const descriptionsProjects: DescriptionProjectsProps[] = [
  {
    id: "audiophile",
    title: "Audiophile Ecommerce",
    desc: "Tienda de productos de audio. Reto de Frontend Mentor.",
    url: "https://audiophile-ecommerce-pi-two.vercel.app/",
    tags: ["HTML", "React", "TypeScript"],
  },
 /*  {
    id: "tasks",
    title: "Task Management",
    desc: "Permite crear distintas categorías para agupar tareas, además de cambiar su estado, editarlas y/o eliminarlas.",
    url: "https://taskakus.vercel.app/",
    tags: ["HTML", "TailwindCSS", "React", "Jotai", "TypeScript"],
  }, */
];

// Projectos que se muestran en la página principal
export const descriptionsHome: IDescriptionHome[] = [
  {
    id: "audiophile",
    title: "Audiophile Ecommerce",
    desc: "Tienda de productos de audio. Reto de Frontend Mentor.",
    url: "https://audiophile-ecommerce-pi-two.vercel.app/",
    github: "https://github.com/joacoconut/Audiophile-Ecommerce",
    tags: ["HTML", "React", "TypeScript"],
  },
 /*  {
    id: "quiz",
    title: "Quiz App",
    desc: "Aplicación de preguntas y respuestas que cuenta con distintas dificultades y categorías.",
    url: "https://akusquiz.vercel.app/",
    github: "https://github.com/aKus-web/Quiz-app",
    tags: ["HTML", "SASS", "React", "TypeScript", "API"],
  }, */
];
