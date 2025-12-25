'use client';

import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function AllOfferCardsClientComponent() {
  const [offerCards, setOfferCards] = useState([]);

  useEffect(() => {
    loadOfferCards();
  }, []);

  const loadOfferCards = () => {
    const savedOfferCards = JSON.parse(localStorage.getItem('offerCards')) || [];
    setOfferCards(savedOfferCards);
  };

  const handleDelete = (indexToDelete) => {
    const updatedOfferCards = offerCards.filter((_, index) => index !== indexToDelete);
    localStorage.setItem('offerCards', JSON.stringify(updatedOfferCards));
    setOfferCards(updatedOfferCards);
    toast.success('Offer card deleted successfully!');
  };

  return (
    <div className="admin-settings-container">
      <h3>All Offer Cards</h3>
      {offerCards.length === 0 ? (
        <p>No offer cards added yet. Go to "Add New Offer Card" to create some.</p>
      ) : (
        <div className="slides-list"> {/* Reusing slides-list styling */}
          {offerCards.map((card, index) => (
            <div key={index} className="special-offer-item"> {/* Reusing special-offer-item styling */}
              <h4>Offer Card #{index + 1}</h4>
              <img src={card.imageUrl} alt={`Offer Card ${index + 1}`} style={{ maxWidth: '100%', height: 'auto', marginBottom: '1rem' }} />
              <p><strong>Title:</strong> {card.title}</p>
              <p><strong>Description:</strong> {card.description}</p>
              <p><strong>Button URL:</strong> {card.buttonUrl || 'N/A'}</p>
              <button
                type="button"
                onClick={() => handleDelete(index)}
                className="remove-btn"
              >
                Delete Offer Card
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllOfferCardsClientComponent;
