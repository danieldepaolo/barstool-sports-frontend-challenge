import { useState } from "react";
import { ApiFeed, ApiStory } from "../types";
import { getStories } from "../api";

export default function useFeed(initialStories: ApiFeed) {
  const [isLoading, setIsLoading] = useState(false);
  const [stories, setStories] = useState<ApiFeed>(initialStories || []);
  const [storyIds, setStoryIds] = useState<Set<number>>(new Set());

  const fetchOlderStories = async (page: number | string) => {
    setIsLoading(true);
    const fetchedStories = await getStories(page);
    setIsLoading(false);
    const newStoriesState = [...stories, ...fetchedStories];
    setStories(newStoriesState);
    setStoryIds(new Set([...Array.from(storyIds), ...fetchedStories.map((story: ApiStory) => story.id)]))
  };

  const fetchEveryNSec = async (nSecs: number) => {
    await new Promise((resolve) => setTimeout(resolve, nSecs * 1000));
    const fetchedStories = await getStories();
    const newStoriesState = stories;
    fetchedStories.slice().reverse().forEach((story: ApiStory) => {
      if (!storyIds.has(story.id)) {
        newStoriesState.unshift(story);
        storyIds.add(story.id);
      }
    });
    setStories(newStoriesState);
    fetchEveryNSec(nSecs);
  };

  return { isLoading, fetchOlderStories, fetchEveryNSec, stories };
}
