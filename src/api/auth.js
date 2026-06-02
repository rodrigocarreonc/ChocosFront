import { API_URL } from './URL';

export async function register(userData) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });

  const data = await res.json().catch(() => null);
  if (!res.ok) {
    const msg = (data && (data.message || data.error)) || res.statusText || 'Registro fallido';
    throw new Error(msg);
  }

  return data;
}

export async function login(credentials) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });

  const data = await res.json().catch(() => null);
  if (!res.ok) {
    const msg = (data && (data.message || data.error)) || res.statusText || 'Inicio de sesión fallido';
    throw new Error(msg);
  }

  return data;
}
