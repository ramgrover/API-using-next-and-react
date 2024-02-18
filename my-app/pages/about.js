import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';
import { CardBody } from 'react-bootstrap';

export function getStaticProps() {
  return new Promise((resolve, reject) => {
    fetch('https://fair-jodhpurs-bee.cyclic.app/api/listings/1206363').then(res => res.json()).then(data => {
      resolve({ props: { listing: data } })
    })
  })
}
export default function About({ listing }) {
  return (
    <div>
      <PageHeader text="About the developer" />
      <Card>
        <CardBody>
          <p>I am Ram, I like BTI most, My main aim is to develop good projects for companies and eventually open my own company.</p>
          <p>Welcome to our inviting sanctuary, a carefully curated space designed to envelop you in comfort and style...</p>
          <p>
            One of the places which I like to live in is: <Link href="/listing/1206363">Eco Hale Hawaii in the Rainforest Lots Of Aloha</Link>.
          </p>
          <ListingDetails listing={listing} />
        </CardBody>
      </Card>
      <br />
    </div>
  );
}