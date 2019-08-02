export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  productIds: string[];
}

export const products: Product[] = [
  {
    id: 'ecc60f06-ccbe-4cf7-93bd-0fe64c7c3bb3',
    name: 'Steak',
    price: 15.5,
    description: 'A nice delicious steak',
  },
  {
    id: 'e3fb2192-739a-4fc9-b515-41bf3ecf41c9',
    name: 'Spaghetti',
    price: 10,
    description: "Momma's homemade spaghetti",
  },
  {
    id: 'd45d3fcc-a517-44f8-a5dc-cce3b7a49b32',
    name: 'Ice Cream',
    price: 8,
    description: 'Cold and Creamy',
  },
  {
    id: '48fea807-cd5c-4bfa-ac92-17b608bfdc24',
    name: 'Pancakes',
    price: 5,
    description: 'With sugar and cream',
  },
  {
    id: 'a0a33f01-2820-4780-8e49-c87fd0c34bee',
    name: 'Loempia',
    price: 10,
    description: 'The Chines Curryworst',
  },
  {
    id: '0044f017-cb43-45d3-98bf-6bb3345304c4',
    name: 'Carpacio',
    price: 12,
    description: 'A slice of meat',
  },
];

export const productCategories: ProductCategory[] = [
  {
    id: 'ca14d64a-4aee-43f8-8d35-f66bf4e500f7',
    name: 'Starters',
    description: 'The thing you start with',
    productIds: ['a0a33f01-2820-4780-8e49-c87fd0c34bee', '0044f017-cb43-45d3-98bf-6bb3345304c4'],
  },
  {
    id: '6e7e148a-c23a-4094-a71a-04b3b46273c4',
    name: 'Main',
    description: 'The main dish',
    productIds: ['ecc60f06-ccbe-4cf7-93bd-0fe64c7c3bb3', 'e3fb2192-739a-4fc9-b515-41bf3ecf41c9'],
  },
  {
    id: '973ff865-024b-4ece-ae6f-ab68eef172ec',
    name: 'Desserts',
    description: 'Something sweet',
    productIds: ['d45d3fcc-a517-44f8-a5dc-cce3b7a49b32', '48fea807-cd5c-4bfa-ac92-17b608bfdc24'],
  },
];
