import { useState } from "react";

const UserInput = () => {
  const [placeholder, setPlaceholder] = useState(
    "Last Month, Amazon Web Services (AWS) India Private Limited announced a strategic partnership with ISRO and IN-SPACe. This collaboration, unveiled by Amazon India, aims to provide space startups, research institutions, and students with advanced cloud technologies, facilitating the development of innovative solutions within the space sector and supporting its growth."
  );
  return (
    <div >
      <input className="userInput" placeholder={placeholder} />
    </div>
  );
};
export default UserInput;
