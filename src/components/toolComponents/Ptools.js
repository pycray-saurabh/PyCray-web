import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

const Ptools = () => {
  const [currentComponent, setCurrentComponent] = useState(null);

  const handleComponentChange = (component) => {
    setCurrentComponent(component);
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div>
        <button onClick={() => handleComponentChange(<Component1 />)}>Component 1</button>
        <button onClick={() => handleComponentChange(<Component2 />)}>Component 2</button>
        {/* Add more buttons here for other components */}
      </div>
      <div>
        {/* Render the currently selected component */}
        {currentComponent}
      </div>
    </div>
  );
};

// Replace Component1, Component2, etc. with the actual components you want to display
const Component1 = () => <div>Component 1 Content</div>;
const Component2 = () => <div>Component 2 Content</div>;
// Add more component definitions here

export default Ptools;

