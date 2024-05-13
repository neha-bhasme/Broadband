import React from 'react';
import Card from './Card';
import broadbandImage from './broadband.jpg'; // import an image for the broadband card
import CardWithForm from './CardWithForm';
import EntertainmentPlanCard from './EntertainmentPlanCard';

const HomePage = () => {
  const plan1 = {
    title: 'Basic Plan',
    description: 'Enjoy basic entertainment features.',
    price: '$9.99/month',
    features: ['Access to basic content', 'Standard quality streaming'],
  };

  const plan2 = {
    title: 'Premium Plan',
    description: 'Get access to premium entertainment features.',
    price: '$14.99/month',
    features: [
      'Access to premium content',
      'HD and Ultra HD quality streaming',
      'Multiple simultaneous streams',
    ],
  };
  return (

    <div className="home-page">
      <CardWithForm></CardWithForm>
      <h2 style={{paddingLeft:'40vw'}}>Benefits of using our Broadband</h2>
      <div className="card-container">
        <Card
          title="High Speed Internet"
          description="Broadband provides high-speed internet access, allowing you to stream videos, download files, and browse the web at faster speeds."
          image={broadbandImage}
        />
        <Card
          title="Reliable Connection"
          description="Broadband offers a reliable connection, ensuring that you stay connected to the internet without interruptions or delays."
          image={broadbandImage} // You can use the same image or a different one for each card
        />
      </div>
      <h2 style={{paddingLeft:'2vw'}}>Entertainment Plans</h2>
      <div className="card-container">
        <EntertainmentPlanCard {...plan1} />
        <EntertainmentPlanCard {...plan2} />
      </div>
    </div>
  );
};


export default HomePage;