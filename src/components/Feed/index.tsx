import { useEffect, useState } from "react";
import Story from "../Story";
import useFeed from "../../hooks/feed";
import useInterval from "../../hooks/interval";

export default function Feed () {
  const [nextPage, setNextPage] = useState(2);
  const { isLoading, fetchNewStories, loadMoreStories, stories } = useFeed({});
  const { startInterval } = useInterval(fetchNewStories, 10);

  useEffect(() => {
    fetchNewStories().then(startInterval).catch((err) => console.error('Error fetching new stories:', err));
  }, [])

  const onLoadMoreClicked = async () => {
    await loadMoreStories(nextPage);
    setNextPage(nextPage + 1);
  };
  
  return (
    <section className="[&>article]:mt-4">
      {stories.map((story) => <Story key={story.id} story={story} />)}
      <button
        className={`w-full p-4 mt-4 text-cyan-50 text-center font-semibold ${isLoading ? 'bg-gray-500' : 'bg-red-700'}`}
        onClick={onLoadMoreClicked}
      >
        {!isLoading ? 'Load More' : 'Loading...'}
      </button>
    </section>
  );
}
