let homeScore = 0
let guestScore = 0

function addPoints(target, val) {
    console.log(target)
    if (target === "homePoints") {
    homeScore += val
    document.getElementById("home-points").textContent = homeScore
    } else {
    guestScore += val
    document.getElementById("guest-points").textContent = guestScore
    }
}

function newGame() {
    homeScore = 0 
    guestScore = 0
    document.getElementById("home-points").textContent = homeScore
    document.getElementById("guest-points").textContent = guestScore
}

