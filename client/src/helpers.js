import { auth } from './firebase';

export const isInCart = (product, cartItems) => {
  return cartItems.find(item => item.id === product.id);
}

const API = process.env.REACT_APP_WEB_SERVER_URL;

export async function fetchFromAPI(endpoint, opts) {
  const { method, body } = { method: 'POST', body: null, ...opts };
  const user = auth.currentUser;
  const token = user && (await user.getIdToken());
  const res = await fetch(`${API}/${endpoint}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      'Content-Type': 'application/json', 
      Authorization: `Bearer ${token}`
    },
  });

  if (res.status === 200) {
    return res.json();
  } else {
    throw new Error(res.statusText);
  }
}
