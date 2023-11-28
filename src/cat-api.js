const URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_KNzU8hZ3IXVRIryZmREeqm1mxfu6iR8xAjsjxngyR55wk4yvAt0y6p1QQyxwrRZQ';

export function fetchBreeds() {
  return fetch(`${URL}/breeds?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}