import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";


const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/aya-ahmed-4558162a2/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Aya7m?tab=repositories" Icon={FiGithub} />
     
    </div>
  );
};

export default ContactSocial;
