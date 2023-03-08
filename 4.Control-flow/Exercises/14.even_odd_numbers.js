function showNumbers(limit) {
  if (limit <= 0) {
    console.log("Limit should be positive and above zero");
    return;
  }
  for (let i = 0; i <= limit; i++) {
    // if (i % 2 === 0) console.log(i, "Even");
    // else console.log(i, "Odd");
    // Better approach
    const message = i % 2 === 0 ? "Even" : "Odd";
    console.log(i, message);
  }
}
