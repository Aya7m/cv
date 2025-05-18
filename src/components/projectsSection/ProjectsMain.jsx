import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [

   {
    name: "Chat & Call App",
   
    align: "right",
    image: "https://res.cloudinary.com/dnejzqj2z/image/upload/v1747610096/Capturettt_yqgr7c.png",
    link: "https://stream-frontend-gllrovn08-ayas-projects-ecef4715.vercel.app",
  },
  {
    name: "Socially App",
   
    align: "right",
    image: "https://res.cloudinary.com/dnejzqj2z/image/upload/v1737402142/socially_g3c205.png",
    link: "https://vercel.com/ayas-projects-ecef4715/socially-nextjs-app",
  },


  {
    name: "Halwany E-Commerce backend",
   
    align: "left",
    image: "https://res.cloudinary.com/dnejzqj2z/image/upload/v1744116088/14_74c55a47-9839-45ab-b0de-8c15f3dac2f5_hwcfzz.webp",
    link : "https://github.com/Aya7m/halwany-backend",
   
  },

  {
    name: "Halwany E-Commerce frontend",
   
    align: "Right",
    image: "https://res.cloudinary.com/dnejzqj2z/image/upload/v1744116088/14_74c55a47-9839-45ab-b0de-8c15f3dac2f5_hwcfzz.webp",
    link : "https://github.com/Aya7m/halwany-frontend",
   
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
  {
    name: "Store Website With React and Sql",
    
    align: "left",
    image: "https://res.cloudinary.com/dnejzqj2z/image/upload/v1738959475/tt_w0p9ld.png",
    link: "https://github.com/Aya7m/pern-stack",
  }
 
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
