let contain = document.querySelector(".container");

for (var i = 0; i < 36; i++) {
    let seats = document.createElement("div");
    contain.appendChild(seats);
    seats.className = "seats";
}

const seatBooked = document.querySelectorAll(".seats");

var bs = 0;
var rs = 36;
let stats = document.querySelectorAll("span")

seatBooked.forEach((seating)=>{
    seating.addEventListener("click", () => {
        if (seating.classList.contains("seatBook")) {
            seating.classList.remove("seatBook");
            bs--;
            rs++;
            stats[0].innerHTML = bs;
            stats[1].innerHTML = rs;
        }

        else{
            seating.classList.add("seatBook");
            rs--;
            bs++;
            stats[0].innerHTML = bs;
            stats[1].innerHTML = rs;
        }
    });
});



