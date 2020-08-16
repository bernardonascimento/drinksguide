import {
  GETDRINKSBYCATEGORYSAGA,
  SEARCHDRINKSSAGA,
  GETDRINKBYIDSAGA,
} from './type';

export function getAllDrinksByCategory(category) {
  return {type: GETDRINKSBYCATEGORYSAGA, category};
}

export function searchDrinksByName(name) {
  return {type: SEARCHDRINKSSAGA, name};
}

export function getDrinkByID(ID) {
  return {type: GETDRINKBYIDSAGA, ID};
}
