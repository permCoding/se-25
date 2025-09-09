process.stdin.on("data", (data) => {
  const input = data.toString().trim();
  
  const numbers = input.split(' ').map(Number);

  const evenNumber = numbers.find(num => num % 2 === 0);

  console.log(evenNumber);
});

process.stdin.on("end", () => {
  process.exit();
});