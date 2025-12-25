'use client'; // This component will be client-side due to localStorage and state

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@/componentStyles/OfferSection.css';

const defaultOfferCards = [
  {
    imageUrl: '/images/img-1.jpg',
    title: 'Big Winter Sale',
    description: 'Up to 50% off on selected items',
    buttonUrl: '/products?discount=50',
  },
  {
    imageUrl: '/images/img-2.jpg',
    title: 'New Arrivals',
    description: 'Check out our latest collection',
    buttonUrl: '/products?tabKeyword=new-arrival',
  },
  {
    imageUrl: '/images/img-3.jpg',
    title: 'Electronics Gala',
    description: 'Get the best deals on electronics',
    buttonUrl: '/products?category=Electronics',
  },
];

const OfferSection = () => {
  const [offerCards, setOfferCards] = useState(defaultOfferCards);

  useEffect(() => {
    // Load offer cards from localStorage
    const savedOfferCards = JSON.parse(localStorage.getItem('offerCards'));
    if (savedOfferCards && savedOfferCards.length > 0) {
      setOfferCards(savedOfferCards);
    }
  }, []);

  if (offerCards.length === 0) {
    return (
      <section className="offer-section">
        <p style={{ textAlign: 'center', width: '100%', padding: '2rem' }}>No offer cards configured yet.</p>
      </section>
    );
  }

  return (
    <section className="offer-section">
      {offerCards.map((card, index) => (
        <div className="offer-card" key={index}>
          <Image src={card.imageUrl} alt={card.title} layout="fill" objectFit="cover" />
          <div className="offer-content">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            {card.buttonUrl && (
              <Link href={card.buttonUrl}>
                <button className="offer-btn">Shop Now</button>
              </Link>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default OfferSection;
