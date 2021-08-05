export let beforeSearch = '';
export let page = 1;

export function fetchImg(searchQuery) {
  if (searchQuery === beforeSearch) {
    page += 1;
  } else {
    searchQuery = beforeSearch;
    page;
  }

  const BASE_URL = 'https://pixabay.com/api/';
  const API = '22388360-9dc449b5610cc7d9d70a92a85';
  const URL = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${API}`;

  return fetch(URL).then(response => {
    if (response.status === 200) return response.json();
      else return Promise.reject('REQUEST ERROR');
  });
}

