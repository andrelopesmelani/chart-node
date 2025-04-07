import express from 'express';
import cors from 'cors';
import { chartData } from './data.js';

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/data', (req, res) => {
  res.json(chartData);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
