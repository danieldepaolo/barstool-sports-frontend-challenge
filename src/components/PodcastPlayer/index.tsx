import { AudioPlayer } from '@barstoolsports/react-audio-player';
import { Item } from '../../types/rssFeed';

export interface PostcastPlayerProps {
  item: Item | null;
  artist: string;
}

export default function PodcastPlayer ({ item, artist }: PostcastPlayerProps) {
  return item ? (
    <div className="fixed bottom-0 left-3 w-80">
      <AudioPlayer
        trackTitle={item.title} trackUrl={item.enclosure.url} artist={artist} cover={item.itunes.image} duration={item.itunes.duration} createdAt={item.pubDate}
      />
    </div>
  ) : null;
}
