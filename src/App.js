import React from "react";

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "noname" },
    {},
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

User.defaultProps = {
  age: 1,
  name: "No Name",
};

export default App;
