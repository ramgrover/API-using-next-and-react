/*********************************************************************************
* BTI425 – Assignment 3
*
* I declare that this assignment is my own work in accordance with Seneca's
* Academic Integrity Policy:
*
* https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
*
* Name: ________Ram Grover__________ Student ID: _____158824219_____ Date: _____17-02-2024______
*
********************************************************************************/ 

import useSWR, { SWRConfig } from 'swr';
import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';
import Accordion from 'react-bootstrap/Accordion';
import Listing from './listing/[id]';
export default function Home() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const { data, error } = useSWR(`https://fair-jodhpurs-bee.cyclic.app/api/listings?page=${page}&perPage=10`);
  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  function previous() {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  function next() {
    setPage(page + 1);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <PageHeader text="Browse Listings : Sorted by Number of Ratings" />
    
    <Accordion>
      {pageData.map(listing => (
        <Accordion.Item key={listing._id} eventKey={listing._id}>
          <Accordion.Header>
            <strong>{listing.name}</strong> - {listing.address.street}
          </Accordion.Header>
          <Accordion.Body>
            <ListingDetails listing={listing} />
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
    
    <Pagination>
      <Pagination.Prev onClick={previous} />
      <Pagination.Item>{page}</Pagination.Item>
      <Pagination.Next onClick={next} />
    </Pagination>
  </main>
  );
}
