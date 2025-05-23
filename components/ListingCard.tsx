"use client";

import Image from "next/image";
import { MapPin, Phone, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define the structure for listing properties
interface ListingCardProps {
  listing: {
    id: number;
    mainImageUrl: string;
    imageCount: number;
    title: string;
    price: string;
    area: string;
    location: string;
    description: string;
    author: {
      name: string;
      avatarUrl: string;
      postedTime: string;
    };
    phoneNumber: string;
    hasVideo: boolean; // This property is present in the mock data but not used in the current UI
  };
}

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-md overflow-hidden dark:border-gray-700 dark:bg-card">
      {/* Listing Image Section */}
      <div className="relative h-64 w-full bg-gray-200 dark:bg-gray-800 sm:h-72 md:h-80">
        <Image
          src={listing.mainImageUrl}
          alt={listing.title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-lg"
          priority // Prioritize loading for better LCP
        />
        {/* Image Count Overlay */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-black bg-opacity-60 px-2 py-0.5 text-xs text-white sm:text-sm">
          <Image
            src="/icons/camera.svg"
            alt="Camera Icon"
            width={16}
            height={16}
            className="invert" // Invert color for dark background visibility
          />
          {listing.imageCount}
        </div>
      </div>

      {/* Listing Content Section */}
      <div className="p-4 sm:p-5">
        {/* Action Buttons (Share & Favorite) */}
        <div className="mb-2 -mt-1 flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            className="cursor-pointer text-gray-400 transition-colors hover:text-red-500"
          >
            <Heart size={20} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="ml-2 cursor-pointer text-gray-400 transition-colors hover:text-blue-500"
          >
            <Share2 size={20} />
          </Button>
        </div>

        {/* Title and Location */}
        <div className="mb-2 flex cursor-pointer items-center truncate text-sm font-bold text-orange-600 sm:text-base">
          <MapPin size={16} className="mr-1 flex-shrink-0" />
          <span className="truncate">{listing.title}</span>
        </div>

        {/* Price, Area, and Detailed Location */}
        <div className="mb-3 flex flex-wrap items-center gap-x-2 text-xs text-gray-700 dark:text-gray-300 sm:text-sm">
          <span className="font-semibold text-red-500">{listing.price}/ខែ</span>
          <span className="hidden sm:inline">•</span>
          <span>{listing.area}</span>
          <span className="hidden sm:inline">•</span>
          <span className="truncate">{listing.location}</span>
        </div>

        {/* Description */}
        <p className="mb-4 line-clamp-3 text-xs leading-relaxed text-gray-600 dark:text-gray-400 sm:text-sm">
          {listing.description}
        </p>

        {/* Author Info and Phone Number */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-gray-100 pt-3 dark:border-gray-700 sm:flex-row sm:items-center">
          <div className="flex min-w-0 items-center gap-3">
            <Image
              src={listing.author.avatarUrl || "/avatars/default-avatar.jpg"}
              alt={listing.author.name}
              width={36}
              height={36}
              className="flex-shrink-0 rounded-full object-cover"
            />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-gray-800 dark:text-gray-200">
                {listing.author.name}
              </p>
              <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                {listing.author.postedTime}
              </p>
            </div>
          </div>
          <Button className="flex items-center gap-2 whitespace-nowrap rounded-full bg-green-600 px-4 py-2 font-bold text-white hover:bg-green-700">
            <Phone size={16} />
            <span>{listing.phoneNumber}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
