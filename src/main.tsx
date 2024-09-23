import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import postgres from "postgres";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

const db = postgres("postgresql://simple_admin_user:tKN51n600TTp481e63IiNXdLBGoa1CIt@dpg-cromr3aj1k6c739kim50-a/simple_admin")
/*
const db = postgres({
    username: 'simple_admin_user',
    password: 'tKN51n600TTp481e63IiNXdLBGoa1CIt',
    host: 'postgresql://dpg-cromr3aj1k6c739kim50-a',
    port: 5432,
    database: 'simple_admin',
});
 */
async function getUsersOver() {
    const test = await db`
      SELECT *
      FROM public.test_table
      WHERE name = "Ford"
      `
    // users = Result [{ name: "Walter", age: 80 }, { name: 'Murray', age: 68 }, ...]
    return test
}
export {getUsersOver};

