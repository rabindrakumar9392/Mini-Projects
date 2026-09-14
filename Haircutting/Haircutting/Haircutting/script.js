const stylesData = [
    { img: "https://content.latest-hairstyles.com/wp-content/uploads/skin-fade-and-razored-edges-on-short-hair-for-guys.jpg", name: "Skin Fade", price: "₹199" },
    { img: "https://haircutinspiration.com/wp-content/uploads/2023/02/awesome-military-haircuts-for-men.jpg", name: "Military Cut", price: "₹149" },
    { img: "https://i.pinimg.com/564x/98/a8/a4/98a8a4ac42e86d0d6edf700f6b6cc193.jpg", name: "Side Part", price: "₹179" },
    { img: "https://cdn.shopify.com/s/files/1/0029/0868/4397/files/Classic-Crew-Cut.webp?v=1755505078", name: "Classic Crew", price: "₹159" }
];

const container = document.getElementById("styles");

// Loop through data and create cards
stylesData.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <p><strong>${item.name}</strong></p>
        <p class="price">${item.price}</p>
    `;
    container.appendChild(div);
});

// Booking Function with WhatsApp Integration
function book() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const service = document.getElementById("service").value;
    const time = document.getElementById("time").value;
    const myNumber = "9060123702"; // <--- Yahan apna 10 digit WhatsApp number likhein (with 91)

    if(name == "" || address == "" || time == "") {
        alert("Bhai, saari details toh bhar do! 🙏");
        return;
    }

    // WhatsApp Message Format
    const message = `Naya Order! 💈%0A
*Naam:* ${name}%0A
*Address:* ${address}%0A
*Service:* ${service}%0A
*Time:* ${time}%0A
*Location:* ${userLocation || "Not provided"}`;
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/${myNumber}?text=${message}`, '_blank');

    document.getElementById("msg").innerText = "✅ Booking process shuru ho gaya hai...";
}




let userLocation = "";

function getLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("Geolocation not supported");
  }
}

function showPosition(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  userLocation = `https://www.google.com/maps?q=${lat},${lon}`;

  document.getElementById("locationText").innerText =
  "📍 Location detected successfully";
}

function showError(){
  alert("Location permission allow karo ⚠️");
}









function book(){
  const name = document.getElementById("name").value;
  const service = document.getElementById("service").value;

  const booking = { name, service };

  let allBookings = JSON.parse(localStorage.getItem("bookings")) || [];
  allBookings.push(booking);

  localStorage.setItem("bookings", JSON.stringify(allBookings));

  alert("Booking sent to barbers 🚀");
}

