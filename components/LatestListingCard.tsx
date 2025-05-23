import Image from "next/image";
import { MapPin } from "lucide-react";

// Define the interface for the item's properties
interface LatestListingCardProps {
  item: {
    id: number;
    imageUrl: string;
    title: string;
    price: string;
    location: string;
  };
}

export function LatestListingCard({ item }: LatestListingCardProps) {
  return (
    <div
      key={item.id}
      className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-card"
    >
      <Image
        src={item.imageUrl}
        width={100}
        height={80}
        alt={item.title}
        className="flex-shrink-0 rounded-md object-cover"
      />
      <div className="flex-grow text-sm">
        <p className="cursor-pointer font-semibold leading-tight text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
          {item.title}
        </p>
        <p className="mt-1 flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
          <MapPin size={12} className="text-gray-400 dark:text-gray-500" />{" "}
          {item.location}
        </p>
        <p className="mt-1 text-sm font-bold text-green-600 dark:text-green-500">
          {item.price}
        </p>
      </div>
    </div>
  );
}
