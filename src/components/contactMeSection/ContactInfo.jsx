import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="yyoyo6987@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+2 01558611828" Image={FiPhone} />
      <SingleInfo text="Alminia, Egypt" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
