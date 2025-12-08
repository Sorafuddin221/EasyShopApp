import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '@/componentStyles/OfferSection.css';

const OfferSection = () => {
  return (
    <section className="offer-section">
      <div className="offer-card">
        <Image src="/images/img-1.jpg" alt="Winter Sale" layout="fill" objectFit="cover" />
        <div className="offer-content">
          <h2>Big Winter Sale</h2>
          <p>Up to 50% off on selected items</p>
          <Link href="/products?discount=50">
            <button className="offer-btn">Shop Now</button>
          </Link>
        </div>
      </div>
      <div className="offer-card">
        <Image src="/images/img-2.jpg" alt="New Arrivals" layout="fill" objectFit="cover" />
        <div className="offer-content">
          <h2>New Arrivals</h2>
          <p>Check out our latest collection</p>
          <Link href="/products?tabKeyword=new-arrival">
            <button className="offer-btn">View Now</button>
          </Link>
        </div>
      </div>
      <div className="offer-card">
        <Image src="/images/img-3.jpg" alt="Electronics Gala" layout="fill" objectFit="cover" />
        <div className="offer-content">
          <h2>Electronics Gala</h2>
          <p>Get the best deals on electronics</p>
          <Link href="/products?category=Electronics">
            <button className="offer-btn">Explore</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
