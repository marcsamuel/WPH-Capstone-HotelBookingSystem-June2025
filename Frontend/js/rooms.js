// Fetch and display available rooms
// This will be connected to the backend API
const roomList = document.getElementById('room-list');
// Example static data (replace with API call)
const rooms = [
  { name: 'Deluxe Suite', description: 'Spacious suite with sea view.', price: 200, amenities: 'WiFi, TV, AC', available: true },
  { name: 'Standard Room', description: 'Comfortable room for two.', price: 120, amenities: 'WiFi, TV', available: false }
];
rooms.forEach(room => {
  const card = document.createElement('div');
  card.className = 'col-md-4';
  card.innerHTML = `<div class='card mb-4'><div class='card-body'><h5 class='card-title'>${room.name}</h5><p class='card-text'>${room.description}</p><p><strong>Price:</strong> $${room.price}/night</p><p><strong>Amenities:</strong> ${room.amenities}</p><p><strong>Available:</strong> ${room.available ? 'Yes' : 'No'}</p></div></div>`;
  roomList.appendChild(card);
});
