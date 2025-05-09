import React from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  const cardData = [
    {
      title: 'React Basics',
      description: 'Learn the fundamentals of React including components, props, and hooks.',
      image: 'https://img.icons8.com/?size=100&id=0Da6k7SMq0hs&format=png&color=FFFFFF',
    },
    {
      title: 'Node.js Backend',
      description: 'Understand building scalable backend services using Node and Express.',
      image: 'https://img.icons8.com/win10/600/FFFFFF/node-js.png',
    },
    {
      title: 'MongoDB Database',
      description: 'Explore data modeling, CRUD operations, and queries with MongoDB.',
      image: 'https://img.icons8.com/?size=100&id=Y9VdL7V5XPIc&format=png&color=FFFFFF',
    },
    {
      title: 'JavaScript ES6+',
      description: 'Master modern JavaScript features like arrow functions, destructuring, and promises.',
      image: 'https://img.icons8.com/?size=100&id=106036&format=png&color=FFFFFF',
    },
    {
      title: 'HTML5 & CSS3',
      description: 'Build structured pages and style them responsively with the latest standards.',
      image: 'https://png.pngtree.com/png-clipart/20230622/original/pngtree-logo-html-css-icone-and-png-image_9202872.png',
    },
    {
      title: 'Git & GitHub',
      description: 'Version control your projects and collaborate with others on GitHub.',
      image: 'https://img.icons8.com/?size=100&id=38389&format=png&color=FFFFFF',
    },
    {
      title: 'TypeScript',
      description: 'Enhance JavaScript with strong typing and object-oriented capabilities.',
      image: 'https://img.icons8.com/?size=100&id=10lIo9AfRXQs&format=png&color=FFFFFF',
    },
    {
      title: 'Tailwind CSS',
      description: 'Style rapidly using utility-first classes and responsive design features.',
      image: 'https://img.icons8.com/?size=100&id=UpSCHTwpywad&format=png&color=FFFFFF',
    },
    {
      title: 'RESTful APIs',
      description: 'Design and consume RESTful APIs using Express and Postman.',
      image: 'https://img.icons8.com/?size=100&id=21893&format=png&color=FFFFFF',
    },
    {
      title: 'Redux Toolkit',
      description: 'Manage complex state in large applications using Redux Toolkit.',
      image: 'https://img.icons8.com/?size=100&id=A6r5yddU9uA0&format=png&color=FFFFFF',
    },
    {
      title: 'Responsive Design',
      description: 'Create layouts that adapt beautifully to all screen sizes and devices.',
      image: 'https://img.icons8.com/?size=100&id=32258&format=png&color=FFFFFF',
    },
  ];
  

  return (
    <div className="app">
      <h1>Course Cards</h1>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
