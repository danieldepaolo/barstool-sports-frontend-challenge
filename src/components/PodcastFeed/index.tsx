import { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import PodcastPlayer from '../PodcastPlayer';
import PodcastTable from './Table';
import { Item, RssFeed } from '../../types/rssFeed';
const parser = new Parser();

export default function PodcastFeed () {
  const [feed, setFeed] = useState<RssFeed>();
  const [episodeShown, setEpisodeShown] = useState<Item | null>(null);

  useEffect(() => {
    parser.parseURL('https://mcsorleys.barstoolsports.com/feed/twisted-history').then((feedResponse: any) => {
      console.log(feedResponse);
      setFeed(feedResponse);
      setEpisodeShown(feedResponse.items[0]);
    });
  }, [])

  return (
    <div>
      <PodcastTable
        items={feed?.items.slice(0, 20) || []}
        onItemClick={(item: any) => {
          setEpisodeShown(item);
        }}
      />
      <PodcastPlayer
        item={episodeShown}
        artist={feed?.title || 'Unknown'}
      />
    </div>
  );
}
