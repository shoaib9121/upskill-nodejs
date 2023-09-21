import express from 'express';
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  let total = 0;
  for (let i = 0; i < 10_100_100; i++) {
    total++;
  }
  res.send(`CPU intensive task ${total}\n`);
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
  console.log(`worker process id ${process.pid}`);
});
