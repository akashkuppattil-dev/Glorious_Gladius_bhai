export const MOCK_DRIVER = {
  id: 'd1',
  name: 'John Doe',
  email: 'driver1@glorious.com',
  phone: '555-0101',
  vehicleLabel: 'Van 01'
};

export const MOCK_DELIVERIES = [
  { 
    id: 'del1', 
    address: 'Prinsengracht 263, Amsterdam', 
    lat: 52.3752, 
    lng: 4.8840, 
    status: 'in_progress', 
    recipientName: 'Anne Frank House', 
    recipientPhone: '020-5567',
    notes: 'Fragile items, use side entrance.'
  },
  { 
    id: 'del2', 
    address: 'Museumstraat 1, Amsterdam', 
    lat: 52.3600, 
    lng: 4.8852, 
    status: 'pending', 
    recipientName: 'Rijksmuseum', 
    recipientPhone: '020-6747',
    notes: 'Customer requested afternoon delivery.'
  }
];
