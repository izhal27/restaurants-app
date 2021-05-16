import CONFIG from './config';

const API_ENDPOINT = {
  RESTAURANTS: `${CONFIG.BASE_URL}/list`,
  DETAIL: id => `${CONFIG.BASE_URL}/detail/${id}`,
  IMAGE_SMALL: id => `${CONFIG.BASE_IMAGE_URL_SMALL}/${id}`,
  IMAGE_MEDIUM: id => `${CONFIG.BASE_IMAGE_URL_MEDIUM}/${id}`,
  IMAGE_LARGE: id => `${CONFIG.BASE_IMAGE_URL_LARGE}/${id}`,
};

export default API_ENDPOINT;
