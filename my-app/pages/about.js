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
    <>
    <div>
      <PageHeader text="About the developer"/><Card>
        <CardBody>
          <p>I am Ram, I like BTI most, My main aim is to deevelop good projects for companies and eventually opening my own company;</p>
          <p>Welcome to our inviting sanctuary, a carefully curated space designed to envelop you in comfort and style. Step into a world where every detail has been thoughtfully considered, from the tasteful decor to the plush furnishings. Our room is more than just a place to rest; it's a retreat crafted for relaxation and rejuvenation. Whether you're traveling for business or leisure, our room offers a harmonious blend of functionality and aesthetic appeal. Immerse yourself in the cozy ambiance, unwind in the luxurious surroundings, and experience the perfect balance of modern convenience and timeless elegance. Your stay with us promises not just accommodation, but an elevated experience that resonates with warmth and hospitality</p>
          <p>
            One of the places which I like to live in is: "<Link href="/listing/1206363">Eco Hale Hawaii in the Rainforest Lots Of Aloha</Link>".
            {' '}
            <ListingDetails listing={listing} />
          </p>
        </CardBody>
      </Card>
      <br />
    </div>
    </>
  )
}