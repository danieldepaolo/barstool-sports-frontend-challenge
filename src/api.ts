import { API_URL } from "./constants";

export const getStories = async (page?: number | string) => {
  const url = new URL(API_URL);
  if (page) url.searchParams.append('page', `${page}`);
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
