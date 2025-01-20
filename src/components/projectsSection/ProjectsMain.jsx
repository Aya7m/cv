import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Socially App",
   
    align: "right",
    image: "https://res.cloudinary.com/dnejzqj2z/image/upload/v1737402142/socially_g3c205.png",
    link: "https://github.com/Aya7m/socially-nextjs-app",
  },
  {
    name: "E-commerce",
   
    align: "left",
    image: "https://res.cloudinary.com/dnejzqj2z/image/upload/v1737402215/e-comm_j0cyxp.png",
    link: "https://github.com/Aya7m/e-commerc-mern-",
  },
  {
    name: "Spotifly",
    
    align: "right",
    image: "https://res.cloudinary.com/dnejzqj2z/image/upload/v1737402281/spotify_2_i5w3ot.png",
    link: "https://github.com/Aya7m/spotify-clone",
  },
  {
    name: "Twitter Clone",
   
    align: "left",
    image: "https://res.cloudinary.com/dnejzqj2z/image/upload/v1737402349/twiter_k8cm0y.png",
    link: "https://github.com/Aya7m/twitter-clone",
  },

  {
    name: "Chatty App",
    
    align: "right",
    image: "https://res.cloudinary.com/dnejzqj2z/image/upload/v1737402419/chatty_zrr4mr.png",
    link: "https://github.com/Aya7m/mern-stack-chatty-app",
  },
  {
    name: "Netflix Clone",
   
    align: "left",
    image: "https://res.cloudinary.com/dnejzqj2z/image/upload/v1737402466/netflex_gagsre.png",
    link: "https://github.com/Aya7m/netFlex-clone",
  },

  {
    name: "OnlyFans Clone",
    
    align: "right",
    image: "https://res.cloudinary.com/dnejzqj2z/image/upload/v1737402532/only_egquih.png",
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
