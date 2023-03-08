checkSpeed(70);
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmperpoint = 5;
  if (speed <= speedLimit + kmperpoint) {
    console.log("OK");
    return;
  }

  const points = Math.floor((speed - speedLimit) / kmperpoint);
  if (points >= 12) console.log("License Gone");
  else console.log("Points", points);
}
