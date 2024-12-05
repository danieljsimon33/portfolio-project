export function getToken(key) {
  return localStorage.getItem("token");
}

export function deleteToken() {
  localStorage.removeItem("token");
}

/* 
fetch from token (token) {
- GET HTTP request
- body: `Bearer ${token}`
- return the user object
}

check if authenticated () {
- get token
- if token, get user from token
- return user ? user : null
}
*/
