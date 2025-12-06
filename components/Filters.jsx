'use client';

import React, { Suspense } from 'react';
import FiltersClientComponent from './FiltersClientComponent';
import Loader from './Loader'; // Assuming Loader is in the same components directory
import '@/componentStyles/Filters.css';

function Filters({ categories }) {
  return (
    <Suspense fallback={<Loader />}>
      <FiltersClientComponent categories={categories} />
    </Suspense>
  );
}

export default Filters;