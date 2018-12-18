import React from "react";
import PropTypes from "prop-types";
const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "noname", age: 3 },
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
};

const User = props => {
  const { name, age } = props;
  return (
    <div>
      hello {name}, and {age} years old!
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

export default App;
