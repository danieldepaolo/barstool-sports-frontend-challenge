import { useEffect, useState } from "react";
import { ApiFeed } from "../../types";
import Story from "../Story";
import useFeed from "../../hooks/feed";

export interface FeedProps {
  initialStories: ApiFeed;
}

export default function Feed ({ initialStories }: FeedProps) {
  const [nextPage, setNextPage] = useState(2);
  const { isLoading, fetchOlderStories, fetchEveryNSec, stories } = useFeed(initialStories);

  useEffect(() => {
    fetchEveryNSec(10);
  })

  const onLoadMoreClicked = async () => {
    await fetchOlderStories(nextPage);
    setNextPage(nextPage + 1);
  };
  
  return (
    <section className="[&>*]:mt-4">
      {stories?.map((story) => <Story story={story} />)}
      <button
        className={`w-full p-4 text-cyan-50 text-center font-semibold ${isLoading ? 'bg-gray-500' : 'bg-red-700'}`}
        onClick={onLoadMoreClicked}
      >
        {!isLoading ? 'Load More' : 'Loading...'}
      </button>
    </section>
  );
}
