// Admin bookings table logic
// This will be connected to the backend API
const bookingsTable = document.getElementById('bookings-table').getElementsByTagName('tbody')[0];
// Example static data (replace with API call)
const bookings = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', room: 'Deluxe Suite', checkIn: '2025-07-01', checkOut: '2025-07-05', total: 800 }
];
bookings.forEach(b => {
  const row = bookingsTable.insertRow();
  row.innerHTML = `<td>${b.id}</td><td>${b.name}</td><td>${b.email}</td><td>${b.phone}</td><td>${b.room}</td><td>${b.checkIn}</td><td>${b.checkOut}</td><td>$${b.total}</td>`;
});
