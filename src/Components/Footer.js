import CreatableSelect from "react-select/creatable";
import {
  FaSquareInstagram,
  FaSquareGithub,
  FaSquareTwitter,
  FaLinkedin,
  FaAngleUp,
} from "react-icons/fa6";
const theme = [
  { value: "dark", label: "Dark" },
  { value: "white", label: "White" },
];
const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <a>
          <FaLinkedin />
        </a>
        <a>
          <FaSquareInstagram />
        </a>
        <a>
          <FaSquareTwitter />
        </a>
        <a>
          <FaSquareGithub />
        </a>
      </div>
      <div>
        <CreatableSelect
          isClearable
          options={theme}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "grey" : "red",
            }),
          }}
          placeholder="Select Theme"
        ></CreatableSelect>
      </div>
    </div>
  );
};
export default Footer;
