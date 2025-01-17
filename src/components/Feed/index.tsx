import { useRef } from "react";
import Story from "../Story";
import useFeed from "../../hooks/feed";

export default function Feed () {
  const { isLoadingMore, isLoadingNew, loadMoreStories, stories } = useFeed({});
  const pageToFetch = useRef(2);

  const onLoadMoreClicked = async () => {
    await loadMoreStories(pageToFetch.current);
    pageToFetch.current = pageToFetch.current + 1;
  };

  const buttonLoading = isLoadingMore || isLoadingNew && !stories.length;
  
  return (
    <section className="[&>article]:mt-4">
      {stories.map((story) => <Story key={story.id} story={story} />)}
      <button
        className={`w-full p-4 mt-4 text-cyan-50 text-center font-semibold ${buttonLoading ? 'bg-gray-500' : 'bg-red-700'}`}
        onClick={onLoadMoreClicked}
      >
        {buttonLoading ? 'Loading...' : 'Load More'}
      </button>
    </section>
  );
}
