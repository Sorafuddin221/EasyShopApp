'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Product from '@/components/Product';
import NoProducts from '@/components/NoProducts';
import Pagination from '@/components/Pagination';

const ProductsClientComponent = ({ products, totalPages, currentPage, keyword }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handlePageChange = (page) => {
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        current.set('page', page);
        const search = current.toString();
        const query = search ? `?${search}` : '';
        router.push(`/products${query}`);
    };

    return (
        <div className="products-section">
            {products && products.length > 0 ? (
                <div className="products-product-container">
                    {products.map((product) => (
                        <Product key={product._id} product={product} />
                    ))}
                </div>
            ) : (
                <NoProducts keyword={keyword} />
            )}
            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    );
};

export default ProductsClientComponent;
