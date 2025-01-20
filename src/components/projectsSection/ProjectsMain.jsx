import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Socially App",
   
    align: "right",
    image: "../../public/images/socially.png",
    link: "https://github.com/Aya7m/socially-nextjs-app",
  },
  {
    name: "E-commerce",
   
    align: "left",
    image: "../../public/images/e-comm.png",
    link: "https://github.com/Aya7m/e-commerc-mern-",
  },
  {
    name: "Spotifly",
    
    align: "right",
    image: "../../public/images/spotify (2).png",
    link: "https://github.com/Aya7m/spotify-clone",
  },
  {
    name: "Twitter Clone",
   
    align: "left",
    image: "../../public/images/twiter.png",
    link: "https://github.com/Aya7m/twitter-clone",
  },

  {
    name: "Chatty App",
    
    align: "right",
    image: "../../public/images/chatty.png",
    link: "https://github.com/Aya7m/mern-stack-chatty-app",
  },
  {
    name: "Netflix Clone",
   
    align: "left",
    image: "../../public/images/netflex.png",
    link: "https://github.com/Aya7m/netFlex-clone",
  },

  {
    name: "OnlyFans Clone",
    
    align: "right",
    image: "../../public/images/only.png",
    link: "https://github.com/Aya7m/onlyhors-",
  },
 
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              link={project.link}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
