import { Item } from "../../types/rssFeed";

export interface PodcastTableProps {
  items: Item[];
  onItemClick: (item: Item) => void;
}

export interface TableRowProps {
  scope?: string;
  cols: string[];
  onItemClick?: () => void;
}

function TableRow ({ scope = "col", cols, onItemClick }: TableRowProps) {
  return (
    <tr className={scope === "row" ? "cursor-pointer hover:bg-slate-100" : ""} onClick={onItemClick}>
      {cols.map((col) => (
        <td scope={scope} className={`px-2 py-${scope === "col" ? 2 : 1}`}>{col}</td>
      ))}
    </tr>
  );
}

export default function PodcastTable (props: PodcastTableProps) {
  const onItemClick = (item: any) => {
    console.log('clicked on:', item);
    props.onItemClick(item);
  };

  return (
    <table className="text-left text-sm sticky top-0">
      <thead className="uppercase font-bold bg-gray-200">
        <TableRow cols={['Title', 'Duration', 'Created At']} />
      </thead>
      <tbody className="bg-gray-50">
        {props.items.map((item) => (
          <TableRow
            scope="row"
            cols={[item.title, item.itunes.duration, new Date(item.pubDate).toLocaleDateString()]}
            onItemClick={() => { onItemClick(item) }}
          />
        ))}
      </tbody>
    </table>
  );
}
