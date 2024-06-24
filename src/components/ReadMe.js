import React, { useEffect, useState } from 'react';
import Marked from 'marked-react';

const Readme = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/README.md')
      .then(response => response.text())
      .then(text => {
        setContent(text);
      })
      .catch(error => console.error('Error fetching README:', error));
  }, []);

  return (
    <div>
      <Marked>{content}</Marked>
    </div>
  );
};

export default Readme;
