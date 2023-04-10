import { API_URL_PROD } from "../constants";
import { ApiFeed } from "../types";

export const getStories = async (page?: number | string): Promise<ApiFeed> => {
  const url = new URL(API_URL_PROD);
  if (page) url.searchParams.append('page', `${page}`);
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (response.status >= 400) {
      console.error('API error:', data.message);
    } else {
      return data;
    }
  } catch(err) {
    console.error('Unable to fetch from API:', err);
  }

  return [];
};
