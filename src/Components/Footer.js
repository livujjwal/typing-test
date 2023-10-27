import Select from "react-select";
import themeOptions from "../Data/theme";
import {
  FaSquareInstagram,
  FaSquareGithub,
  FaSquareTwitter,
  FaLinkedin,
  FaAngleUp,
} from "react-icons/fa6";
import { useState } from "react";
import { useTheme } from "../Context/ThemeProvider";

const Footer = () => {
const [value,setValue] = useState()
const {setTheme} = useTheme
  function handleChange(event){
    setValue(event.value)
    setTheme(event.value)
console.log(event);
  }
  return (
    <div className="footer">
      <div className="icons">
        <FaLinkedin />
        <FaSquareInstagram />
        <FaSquareTwitter />
        <FaSquareGithub />
      </div>
      <div>
        <Select
          value={value}
          onChange={handleChange}
          options={themeOptions}
          placeholder="Select Theme"
          menuPlacement="top"
        ></Select>
      </div>
    </div>
  );
};
export default Footer;
