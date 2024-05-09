// Interfaces
import { Order } from '@/interfaces';

export const orders: Order[] = [
  {
    id: '001',
    OrderAddress: {
      firstName: 'John',
      lastName: 'Doe'
    },
    isPaid: true
  },
  {
    id: '002',
    OrderAddress: {
      firstName: 'Jane',
      lastName: 'Doe'
    },
    isPaid: false
  },
  {
    id: '003',
    OrderAddress: {
      firstName: 'Alice',
      lastName: 'Smith'
    },
    isPaid: true
  },
  {
    id: '004',
    OrderAddress: {
      firstName: 'Bob',
      lastName: 'Johnson'
    },
    isPaid: true
  },
  {
    id: '005',
    OrderAddress: {
      firstName: 'Emily',
      lastName: 'Brown'
    },
    isPaid: false
  },
  {
    id: '006',
    OrderAddress: {
      firstName: 'Michael',
      lastName: 'Wilson'
    },
    isPaid: true
  },
];
