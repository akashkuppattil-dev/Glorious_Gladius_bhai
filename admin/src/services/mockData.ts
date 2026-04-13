import type { AuthUser, Delivery, Driver, DriverLocation, WarehouseDepot } from '@/types';

export const MOCK_USER: AuthUser = {
  id: 'u1',
  name: 'Demo Admin',
  email: 'admin@glorious.com',
  role: 'admin'
};

export const MOCK_DRIVERS: Driver[] = [
  { id: 'd1', userId: 'u101', name: 'John Doe', email: 'driver1@glorious.com', phone: '555-0101', vehicleLabel: 'Van 01', isActive: true, onDuty: true },
  { id: 'd2', userId: 'u102', name: 'Jane Smith', email: 'driver2@glorious.com', phone: '555-0102', vehicleLabel: 'Bike 04', isActive: true, onDuty: true },
  { id: 'd3', userId: 'u103', name: 'Mike Ross', email: 'driver3@glorious.com', phone: '555-0103', vehicleLabel: 'Truck 07', isActive: false }
];

export const MOCK_WAREHOUSE: WarehouseDepot = {
  label: 'Central Hub',
  address: 'Damrak 1, Amsterdam',
  lat: 52.3731,
  lng: 4.8926,
  updatedAt: new Date().toISOString()
};

export const MOCK_DELIVERIES: Delivery[] = [
  { id: 'del1', address: 'Prinsengracht 263, Amsterdam', lat: 52.3752, lng: 4.8840, status: 'in_progress', assignedDriverId: 'd1', sequenceOrder: 1, recipientName: 'Anne Frank House', recipientPhone: '020-5567', createdAt: new Date().toISOString() },
  { id: 'del2', address: 'Museumstraat 1, Amsterdam', lat: 52.3600, lng: 4.8852, status: 'pending', assignedDriverId: 'd1', sequenceOrder: 2, recipientName: 'Rijksmuseum', recipientPhone: '020-6747', createdAt: new Date().toISOString() },
  { id: 'del3', address: 'Westermarkt 20, Amsterdam', lat: 52.3744, lng: 4.8837, status: 'completed', assignedDriverId: 'd2', sequenceOrder: 1, recipientName: 'Westerkerk', recipientPhone: '020-6247', createdAt: new Date().toISOString() }
];

export const MOCK_LOCATIONS: DriverLocation[] = [
  { driverId: 'd1', lat: 52.3700, lng: 4.8900, updatedAt: new Date().toISOString() },
  { driverId: 'd2', lat: 52.3744, lng: 4.8837, updatedAt: new Date().toISOString() }
];
