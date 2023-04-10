import { ApiStory } from "../../types";

export interface StoryProps {
  story: ApiStory
}

export default function Story ({ story }: StoryProps) {
  return (
    <article className="flex gap-4 p-4 border">
      <img className="w-48" src={story.thumbnail.desktop} alt={story.title} />
      <div className="flex flex-col justify-between pb-1">
        <h3 className="font-bold text-lg">{story.title}</h3>
        <div className="flex items-center gap-2">
          <img className="rounded-full w-8 h-8" src={story.author.avatar} alt='' />
          <span>{story.author.name}</span>
        </div>
      </div>
    </article>
  );
}
