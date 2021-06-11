// const API_URL = process.env.VUE_APP_API_URL

// export const getBeersPage = (page, perPage) =>
//   fetch(`${API_URL}/beers?page=${page}&per_page=${perPage}`)
//   .then(res => console.log(res));
  // .then(response => response.json());

  export const getBeersPage = (page, perPage) =>
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`)
    .then(response => response.json());

  