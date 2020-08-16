import {GETDRINKSBYCATEGORYSAGA} from './type';

export function getAllDrinksByCategory(category) {
  return {type: GETDRINKSBYCATEGORYSAGA, category};
}
