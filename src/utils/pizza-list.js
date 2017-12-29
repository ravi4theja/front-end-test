import 'isomorphic-fetch';

export const getPizzas = url => fetch(url).then(res => res.json());