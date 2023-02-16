import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'guitars',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/1286/3245/files/Crossroud_980x.jpg?v=1623591440',
    route: 'shop/guitars',
  },
  {
    id: 2,
    title: 'bass',
    imageUrl:
      'https://lowendbassshop.com/wp-content/uploads/2022/06/C1E82AE4-A6A5-4D05-9C3B-5E6E89C361AE-1024x565.jpeg',
    route: 'shop/bass',
  },
  {
    id: 3,
    title: 'drums',
    imageUrl: 'https://cdn.mos.cms.futurecdn.net/nopLdHGQ8rEB6anbeRHqZB.jpg',
    route: 'shop/drums',
  },
  {
    id: 4,
    title: 'keyboards',
    imageUrl:
      'https://cdn.schoolofrock.com/img/news-article-hero@2x/learn-piano-on-a-keyboard1550004644.jpg',
    route: 'shop/keyboards',
  },
  {
    id: 5,
    title: 'amplifiers',
    imageUrl:
      'https://flypaper.soundfly.com/wp-content/uploads/2019/06/genre-amps-facebook.jpg',
    route: 'shop/amplifiers',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
