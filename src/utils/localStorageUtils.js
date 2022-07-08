export function setString (key, str) {
  localStorage.setItem(key, str);
}

export function setItem (key, obj) {
  setString(key, JSON.stringify(obj));
}

export function getString (key) {
  return localStorage.getItem(key);
}

export function getItem (key) {
  const value = getString(key);
  try {
    return JSON.parse(value);
  } catch (e) {
    console.log(e);
    return value;
  }
}
