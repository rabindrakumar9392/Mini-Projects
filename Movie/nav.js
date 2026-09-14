let nav = document.getElementById("navbar");

let a = document.createElement('a');
a.innerText = "HOME";
let a2 = document.createElement("a");
a2.innerText = "CART";
let a3 = document.createElement("a");
a3.innerText = "Login"

a.setAttribute("href", "index.html");
a2.setAttribute("href", "cart.html");
a3.setAttribute("href", "login.html")

nav.append(a, a2, a3);