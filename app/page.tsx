"use client";

import { Button } from "@/components/ui/button";
import { ListingCard } from "@/components/ListingCard";
import { LatestListingCard } from "@/components/LatestListingCard";
// import { QuickSearchSection } from "@/components/QuickSearchSection"; // Uncomment if you use this component

export default function Home() {
  // Mock data for listings
  const listings = [
    {
      id: 1,
      mainImageUrl: "/listings/1.jpg",
      thumbnailImages: [
        "/listings/1_thumb1.jpg",
        "/listings/1_thumb2.jpg",
        "/listings/1_thumb3.jpg",
      ],
      imageCount: 8,
      title:
        "បន្ទប់ជួលអាផាតមិនខ្នាតតូចលំដាប់ខ្ពស់សម្រាប់ជួលនៅសង្កាត់បឹងកេងកង ១ ភ្នំពេញ",
      price: "250 ដុល្លារ",
      area: "30 m²",
      location: "បឹងកេងកង ១, ភ្នំពេញ",
      description:
        "អាផាតមិនខ្នាតតូចលំដាប់ខ្ពស់សម្រាប់ជួលនៅសង្កាត់បឹងកេងកង ១ ភ្នំពេញ។ ទំហំ 30m2, តម្លៃ 250 ដុល្លារ/ខែ។ រួមបញ្ចូលចំណតក្រោមដី ជណ្តើរយន្ត គ្រឿងសង្ហារឹមពេញលេញ។",
      author: {
        name: "កញ្ញា សុភា",
        avatarUrl: "https://github.com/shadcn.png",
        postedTime: "ថ្ងៃនេះ",
      },
      phoneNumber: "012345678",
      hasVideo: true,
    },
    {
      id: 2,
      mainImageUrl: "/listings/2.jpg",
      thumbnailImages: [],
      imageCount: 5,
      title: "អាផាតមិនស្ទូឌីយោបំពាក់គ្រឿងសង្ហារិមនៅខេត្តសៀមរាប",
      price: "350 ដុល្លារ",
      area: "35 m²",
      location: "សៀមរាប, ខេត្តសៀមរាប",
      description:
        "អាផាតមិនដែលទើបសាងសង់ថ្មីមានគ្រឿងសង្ហារិមមូលដ្ឋាន ទូលាយ។ នៅជិតផ្សាររាត្រី និងផ្លូវផាប់ស្ទ្រីត សុវត្ថិភាពល្អ ការធ្វើដំណើរងាយស្រួល។",
      author: {
        name: "លោក សុខ",
        avatarUrl: "https://github.com/shadcn.png",
        postedTime: "2 ថ្ងៃមុន",
      },
      phoneNumber: "077123456",
      hasVideo: false,
    },
    {
      id: 3,
      mainImageUrl: "/listings/3.jpg",
      thumbnailImages: [],
      imageCount: 12,
      title: "បន្ទប់ឯកជនទំនើបមានគ្រឿងបរិក្ខារពេញលេញនៅខេត្តកំពត",
      price: "180 ដុល្លារ",
      area: "20 m²",
      location: "ក្រុងកំពត, ខេត្តកំពត",
      description:
        "បន្ទប់ឯកជនសម្រាប់ជួលជាមួយផ្ទះបាយ និងបន្ទប់ទឹកដាច់ដោយឡែក។ តំបន់ស្ងប់ស្ងាត់ ស្តង់ដាររស់នៅខ្ពស់។ នៅជិតទីផ្សារធំ ងាយស្រួលទៅដល់រមណីយដ្ឋានទេសចរណ៍។",
      author: {
        name: "កញ្ញា ម៉ារី",
        avatarUrl: "https://github.com/shadcn.png",
        postedTime: "3 ថ្ងៃមុន",
      },
      phoneNumber: "0969876543",
      hasVideo: true,
    },
  ];

  // Mock data for latest listings
  const latestListings = [
    {
      id: 4,
      imageUrl: "/listings/1.jpg",
      title: "បន្ទប់ជិតសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ",
      price: "200 ដុល្លារ",
      location: "ភ្នំពេញ",
    },
    {
      id: 5,
      imageUrl: "/listings/2.jpg",
      title: "ស្ទូឌីយោស្អាតនៅព្រះសីហនុ",
      price: "280 ដុល្លារ",
      location: "ព្រះសីហនុ",
    },
    {
      id: 6,
      imageUrl: "/listings/3.jpg",
      title: "អាផាតមិនខ្នាតតូចនៅបាត់ដំបង",
      price: "150 ដុល្លារ",
      location: "បាត់ដំបង",
    },
  ];

  return (
    <main className="min-h-screen px-4 py-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 md:px-10">
      {/* Hero Section */}
      <div className="my-8 p-6 text-center rounded-xl border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
        <h1 className="mb-2 text-2xl font-bold md:text-3xl">
          ស្វែងរកបន្ទប់ដ៏ល្អឥតខ្ចោះរបស់អ្នកនៅកម្ពុជា
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300 md:text-base">
          រាវរកបញ្ជីដែលបានផ្ទៀងផ្ទាត់សម្រាប់អាផាតមិនខ្នាតតូច ស្ទូឌីយោ
          និងច្រើនទៀត។ ធ្វើបច្ចុប្បន្នភាពប្រចាំថ្ងៃជាមួយនឹងព័ត៌មានទំនាក់ទំនង។
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
        {/* Left Column: Main Listings */}
        <div className="space-y-6 lg:col-span-2">
          <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-3 dark:border-gray-700">
            <Button
              variant="ghost"
              className="rounded-none border-b-2 border-red-600 px-4 py-2 font-semibold text-red-600"
            >
              ណែនាំ
            </Button>
            <Button
              variant="ghost"
              className="rounded-none px-4 py-2 text-gray-600 hover:text-red-600 dark:text-gray-300"
            >
              ចុងក្រោយ
            </Button>
            <Button
              variant="ghost"
              className="rounded-none px-4 py-2 text-gray-600 hover:text-red-600 dark:text-gray-300"
            >
              មានវីដេអូ
            </Button>
          </div>

          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>

        {/* Right Column: Latest Listings & Quick Search (Optional) */}
        <div className="space-y-6">
          <h3 className="border-b-2 border-blue-500 pb-2 text-xl font-bold">
            បញ្ជីចុងក្រោយ
          </h3>
          <div className="space-y-4">
            {latestListings.map((item) => (
              <LatestListingCard key={item.id} item={item} />
            ))}
          </div>

          {/* Uncomment the QuickSearchSection if you have it implemented */}
          {/* <QuickSearchSection /> */}
        </div>
      </div>
    </main>
  );
}
