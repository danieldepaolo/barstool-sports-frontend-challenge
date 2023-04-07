import { useEffect, useState } from "react";
import { ApiFeed } from "../../types";
import Story from "../Story";
import useFeed from "../../hooks/feed";

export interface FeedProps {
  initialStories: ApiFeed;
}

export default function Feed ({ initialStories }: FeedProps) {
  const [nextPage, setNextPage] = useState(2);
  const { isLoading, fetchStories, stories } = useFeed();

  const onLoadMoreClicked = async () => {
    await fetchStories(nextPage);
    setNextPage(nextPage + 1);
  };
  
  return (
    <section className="[&>article]:mt-4">
      {initialStories?.map((story) => <Story story={story} />)}
      {stories?.map((story) => <Story story={story} />)}
      <button onClick={() => onLoadMoreClicked()}>Load More {isLoading && '...loading'}</button>
    </section>
  );
}
