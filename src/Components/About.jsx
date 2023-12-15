// About.js

import React from 'react';

const dummyData = {
  title: 'About Us',
  description: 'Welcome to our website! We are dedicated to providing high-quality services and products.',
  teamMembers: [
    { id: 1, name: 'John Doe', role: 'Founder' },
    { id: 2, name: 'Jane Smith', role: 'Lead Developer' },
    { id: 3, name: 'Bob Johnson', role: 'Designer' },
  ],
};

const About = () => {
  return (
    <section className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">{dummyData.title}</h2>
      <p className="text-gray-700 mb-6">{dummyData.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {dummyData.teamMembers.map((member) => (
          <div key={member.id} className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
