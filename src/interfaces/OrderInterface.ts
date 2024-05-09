export interface Order {
  id: string;
  OrderAddress: {
    firstName: string;
    lastName: string;
  };
  isPaid: boolean;
}
