import { getLikes } from './interactions-api.js';

export const likePokemonAction = async () => 0;
export const getPokemonLikes = async () => {
  const likes = await getLikes();
  return likes;
};