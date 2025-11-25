let startRamzan = new Date("Jan 18, 2024");
let upcomingRamzan = new Date("march 17, 2026");
console.log(Math.round(upcomingRamzan.getTime() / 1000 / 60 / 60 / 24) - Math.round(startRamzan.getTime() / 1000 / 60 / 60 / 24));
