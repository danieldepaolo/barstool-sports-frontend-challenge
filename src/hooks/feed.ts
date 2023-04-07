import { useState } from "react";
import { ApiFeed } from "../types";
import { getStories } from "../api";

export interface UseFeedProps {
}

export default function useFeed() {
  const [isLoading, setIsLoading] = useState(false);
  const [stories, setStories] = useState<ApiFeed>([]);

  const fetchStories = async (page: number | string) => {
    setIsLoading(true);
    const newStories = await getStories(page);
    setIsLoading(false);
    setStories([...stories, ...newStories]);
  }

  return { isLoading, fetchStories, stories };
}
