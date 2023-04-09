import { useEffect, useState } from "react";
import { ApiFeed, ApiStory } from "../types";
import { getStories } from "../helpers/api";
import useInterval from "./interval";

export type FeedInsertType = 'prepend' | 'append';

export interface UseFeedOptions {
  initialStories?: ApiFeed;
  fetchIntervalSecs?: number;
  continuousUpdate?: boolean;
}

export default function useFeed({ initialStories = [], fetchIntervalSecs = 10, continuousUpdate = true }: UseFeedOptions) {
  const [isLoading, setIsLoading] = useState(false);
  const [stories, setStories] = useState<ApiFeed>(initialStories);
  const { startInterval } = useInterval(fetchNewStories, fetchIntervalSecs);

  useEffect(() => {
    fetchNewStories().then(() => {
      if (continuousUpdate) {
        startInterval();
      }
    });
  }, [])

  const addUniqueStories = (stories: ApiFeed, insertType: FeedInsertType) => {
    setStories(prevStories => {
      // Set to speed up checking if a fetched story is already in the feed
      const ids = new Set(prevStories.map((story) => story.id));
      const uniqueStories = stories.filter((story: ApiStory) => !ids.has(story.id));
      return insertType === 'append' ? [...prevStories, ...uniqueStories] : [...uniqueStories, ...prevStories];
    });
  };

  async function fetchNewStories () {
    const fetchedStories = await getStories();
    addUniqueStories(fetchedStories, 'prepend');
  };

  const loadMoreStories = async (page: number | string) => {
    setIsLoading(true);
    const fetchedStories = await getStories(page);
    setIsLoading(false);
    addUniqueStories(fetchedStories, 'append');
  };

  return { isLoading, fetchNewStories, loadMoreStories, stories };
}
