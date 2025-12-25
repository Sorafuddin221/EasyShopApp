'use client'; // This component will be client-side due to localStorage and state

import React, { useState, useEffect } from 'react';
import InfoSection from '@/components/InfoSection';
import OfferSection from '@/components/OfferSection';
import HotDeals from '@/components/HotDeals';
import ImageSlider from '@/components/ImageSlider';
import Categories from '@/components/Categories';
import ProductTabs from '@/components/ProductTabs';
import TrendingProducts from '@/components/TrendingProducts';
import SpecialOfferSection from '@/components/SpecialOfferSection';
import OfferCardDisplay from '@/components/OfferCardDisplay';
import RotatingOfferCards from '@/components/RotatingOfferCards'; // Import the new component
import '@/pageStyles/Home.css';

export default function Home() {
  const [offerCards, setOfferCards] = useState([]);

  useEffect(() => {
    const savedOfferCards = JSON.parse(localStorage.getItem('offerCards')) || [];
    setOfferCards(savedOfferCards);
  }, []);

  const homepageOfferCards = offerCards.filter(
    (card) => card.displayLocation === 'homepage_after_top_products'
  );

  return (
    <>
      <div className="hero-section-wrapper">
        <div className="main-slider-container">
          <ImageSlider />
        </div>
        <div className="special-offer-container">
          <SpecialOfferSection />
        </div>
      </div>
      <Categories />
      <OfferSection />
      <HotDeals />
      <TrendingProducts /> {/* Use the new component */}
      
      {/* Dynamic Offer Cards for Homepage */}
      {homepageOfferCards.length > 0 && (
        <section className="offer-section dynamic-homepage-offers">
          {homepageOfferCards.length > 1 ? (
            <RotatingOfferCards cards={homepageOfferCards} />
          ) : (
            <OfferCardDisplay card={homepageOfferCards[0]} />
          )}
        </section>
      )}

      <ProductTabs />
      <InfoSection />
    </>
  );
}
