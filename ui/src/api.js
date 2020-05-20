export const authenticated = () => {
  return localStorage.getItem('token') !== null;
};


export const register = (email, name, password) => {
  const body = { email, name, password };
  return fetch('http://localhost:8000/auth/signup', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(response => {
    console.log(response);
    return response.json();
  }).catch(error => {
    return error;
  });
};

export const login = (email, password) => {
  const body = { email, password };
  return fetch('http://localhost:8000/auth/login', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(async response => {
    if (response.ok) {
      return response.json();
    } else {
      const err = await response.json();
      console.log(err);
      throw new Error(err.message);
    }
  });
};

export const getNotes = () => {
  const token = localStorage.getItem('token');
  const authorization = token ? `Bearer ${token}` : '';
  return fetch('http://localhost:8000/notes/my', {
    method: 'GET',
    headers: {
      authorization,
      'Content-Type': 'application/json'
    },
  }).then(response => {
    console.log(response);
    return response.json();
  }).catch(error => {
    throw error;
  });
};

export const getAllNotes = () => {
  const token = localStorage.getItem('token');
  const authorization = token ? `Bearer ${token}` : '';
  return fetch('http://localhost:8000/notes/all', {
    method: 'GET',
    headers: {
      authorization,
      'Content-Type': 'application/json'
    },
  }).then(response => {
    console.log(response);
    return response.json();
  }).catch(error => {
    throw error;
  });
};

export const addNote = (title, content) => {
  const token = localStorage.getItem('token');
  const authorization = token ? `Bearer ${token}` : '';
  const body = { title, content };
  return fetch('http://localhost:8000/notes', {
    method: 'POST',
    headers: {
      authorization,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  }).then(response => {
    console.log(response);
    return response.json();
  }).catch(error => {
    throw error;
  });
};