// Booking form logic
// This will be connected to the backend API
const bookingForm = document.getElementById('booking-form');
const roomTypeSelect = document.getElementById('roomType');
const totalCostInput = document.getElementById('totalCost');
// Example static room types (replace with API call)
const roomTypes = [
  { name: 'Deluxe Suite', price: 200 },
  { name: 'Standard Room', price: 120 }
];
roomTypes.forEach(room => {
  const option = document.createElement('option');
  option.value = room.name;
  option.textContent = `${room.name} ($${room.price}/night)`;
  roomTypeSelect.appendChild(option);
});
function calculateCost() {
  const room = roomTypes.find(r => r.name === roomTypeSelect.value);
  const checkIn = new Date(document.getElementById('checkIn').value);
  const checkOut = new Date(document.getElementById('checkOut').value);
  if (room && checkIn && checkOut && checkOut > checkIn) {
    const nights = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
    totalCostInput.value = '$' + (nights * room.price);
  } else {
    totalCostInput.value = '';
  }
}
roomTypeSelect.addEventListener('change', calculateCost);
document.getElementById('checkIn').addEventListener('change', calculateCost);
document.getElementById('checkOut').addEventListener('change', calculateCost);
bookingForm.addEventListener('submit', function(e) {
  e.preventDefault();
  // Submit booking to backend (to be implemented)
  alert('Booking submitted!');
});
