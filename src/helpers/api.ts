import { API_URL } from "../constants";
import { ApiFeed } from "../types";

export const getStories = async (page?: number | string): Promise<ApiFeed> => {
  const url = new URL(API_URL);
  if (page) url.searchParams.append('page', `${page}`);
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
