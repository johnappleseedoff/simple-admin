import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as pg from 'pg'
//import { native as pg } from 'pg';
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

const client = new pg.Client({
    user: 'simple_admin_user',
    password: 'tKN51n600TTp481e63IiNXdLBGoa1CIt',
    host: 'postgresql://simple_admin_user:tKN51n600TTp481e63IiNXdLBGoa1CIt@dpg-cromr3aj1k6c739kim50-a/simple_admin',
    port: 5432,
    database: 'simple_admin',
});
client
    .connect()
    .then(() => {
        console.log('Connected to PostgreSQL database');
    })
    .catch((err) => {
        console.error('Error connecting to PostgreSQL database', err);
    });
