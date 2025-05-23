"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Heart,
  LogIn,
  LogOut,
  Moon,
  Pencil,
  Settings,
  Sun,
  User,
  UserPlus,
  Menu,
  Search,
  MapPin,
  Home,
  ChevronRight,
  Headset,
  Building2,
  ListFilter,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const subMenuItems = [
  { label: "បន្ទប់ជួល", value: "phongtro", icon: Home },
  { label: "ផ្ទះទាំងមូល", value: "nhanguyencan", icon: Building2 },
  { label: "អាផាតមិន", value: "canhochungcu", icon: Building2 },
  { label: "អាផាតមិនខ្នាតតូច", value: "canhomini", icon: Building2 },
  { label: "កន្លែងពាណិជ្ជកម្ម", value: "matbang", icon: MapPin },
];

const SUPPORT_NUMBER = "+85512345678";

const Navbar = () => {
  const { setTheme } = useTheme();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <>
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black shadow-md">
        {/* Top Bar */}
        <nav className="relative z-50 bg-white flex items-center justify-between px-4 sm:px-6 py-3 border-b">
          {/* Mobile Left: Home Button */}
          <Link href="/" className="sm:hidden z-10">
            <Button variant="ghost" size="icon">
              <Home size={24} />
            </Button>
          </Link>

          {/* Desktop Left: Logo, Search, Area Select */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/"
              className="flex flex-col items-center justify-center hover:opacity-85 transition-opacity duration-200"
            >
              <span className="font-bold text-lg">
                <span className="text-blue-600 dark:text-blue-400">
                  SMARTSTAY
                </span>
                <span className="text-orange-500 dark:text-orange-300 ml-0.5">
                  ខេអេជ
                </span>
              </span>
              <span className="text-xs text-gray-700 dark:text-gray-300">
                គេហទំព័រព័ត៌មានកន្លែងស្នាក់នៅលេខ ១ កម្ពុជា
              </span>
            </Link>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="ស្វែងរកបន្ទប់ ឬតំបន់..."
                className="pl-9 w-64"
              />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="ជ្រើសរើសតំបន់" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>តំបន់</SelectLabel>
                  <SelectItem value="tphcm">ទីក្រុងហូជីមិញ</SelectItem>
                  <SelectItem value="hanoi">ហាណូយ</SelectItem>
                  <SelectItem value="danang">ដាណាង</SelectItem>
                  <SelectItem value="cantho">កឹងធើ</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Mobile Centered Logo */}
          <Link
            href="/"
            className="flex flex-col items-center gap-0 absolute left-1/2 transform -translate-x-1/2 sm:hidden z-0"
          >
            <span className="font-extrabold text-2xl tracking-tight leading-tight whitespace-nowrap">
              <span className="text-blue-600 dark:text-blue-400">
                SMARTSTAY
              </span>
              <span className="text-orange-500 dark:text-orange-300 ml-0.5">
                ខេអេជ
              </span>
            </span>
            <span className="text-sm text-gray-700 dark:text-gray-300 mt-0.5 whitespace-nowrap">
              គេហទំព័រព័ត៌មានកន្លែងស្នាក់នៅលេខ ១ កម្ពុជា
            </span>
          </Link>

          {/* Right Section: Mobile Sheet Trigger & Desktop Actions */}
          <div className="flex items-center gap-2 sm:gap-4 z-10">
            {/* Mobile Sheet (Hamburger Menu) */}
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild className="sm:hidden">
                <Button variant="ghost" size="icon">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-3/4 sm:max-w-sm p-4 flex flex-col"
              >
                <div className="flex flex-col gap-3 mt-8">
                  <div className="flex justify-between gap-2">
                    <Button
                      variant="ghost"
                      className="flex-1 gap-2 px-2 py-4 h-auto text-base justify-start"
                    >
                      <LogIn size={18} />
                      ចូលគណនី
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex-1 gap-2 px-2 py-4 h-auto text-base justify-start"
                    >
                      <UserPlus size={18} />
                      ចុះឈ្មោះ
                    </Button>
                  </div>
                  <Button
                    variant="default"
                    className="w-full gap-2 text-lg py-3"
                  >
                    <Pencil size={20} />
                    ប្រកាសថ្មី
                  </Button>

                  <div className="flex flex-col mt-4">
                    {subMenuItems.map((item) => (
                      <Button
                        key={item.value}
                        variant="ghost"
                        className="w-full justify-between px-2 py-4 h-auto text-base"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        <div className="flex items-center gap-3">
                          {item.icon && (
                            <item.icon
                              size={20}
                              className="text-muted-foreground"
                            />
                          )}
                          <span>{item.label}</span>
                        </div>
                        <ChevronRight
                          size={18}
                          className="text-muted-foreground"
                        />
                      </Button>
                    ))}
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-start gap-3 px-2 py-4 h-auto text-base"
                      >
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span>ផ្លាស់ប្តូរស្បែក</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem
                        onClick={() => {
                          setTheme("light");
                          setIsSheetOpen(false);
                        }}
                      >
                        ពន្លឺ
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => {
                          setTheme("dark");
                          setIsSheetOpen(false);
                        }}
                      >
                        ងងឹត
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => {
                          setTheme("system");
                          setIsSheetOpen(false);
                        }}
                      >
                        ប្រព័ន្ធ
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <a href={`tel:${SUPPORT_NUMBER}`} className="w-full">
                    <Button
                      className="w-full justify-center mt-6 py-3 gap-2
                      bg-blue-100 text-blue-700 hover:bg-blue-200
                      dark:bg-blue-800 dark:text-blue-200 dark:hover:bg-blue-700
                      rounded-full"
                    >
                      <Headset size={20} />
                      <span>ជំនួយការប្រកាស: {SUPPORT_NUMBER}</span>
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>

            {/* Desktop Action Buttons */}
            <Button variant="ghost" className="gap-2 hidden sm:flex">
              <Heart size={18} />
              ចំណូលចិត្ត
            </Button>
            <Button variant="ghost" className="gap-2 hidden sm:flex">
              <LogIn size={18} />
              ចូលគណនី
            </Button>
            <Button variant="ghost" className="gap-2 hidden sm:flex">
              <UserPlus size={18} />
              ចុះឈ្មោះ
            </Button>
            <Button variant="default" className="gap-2 hidden sm:flex">
              <Pencil size={18} />
              ប្រកាស
            </Button>

            {/* Desktop Theme Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden sm:inline-flex"
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  ពន្លឺ
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  ងងឹត
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  ប្រព័ន្ធ
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Desktop User Avatar Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="hidden sm:block">
                <Avatar className="cursor-pointer hover:scale-105 transition">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>គណនី</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="w-4 h-4 mr-2" /> ប្រវត្តិរូប
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="w-4 h-4 mr-2" /> ការកំណត់
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-500">
                  <LogOut className="w-4 h-4 mr-2" /> ចេញ
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>

        {/* Mobile: Search and Filter Section */}
        <div className="sm:hidden flex items-center gap-2 px-4 py-2 border-b bg-white dark:bg-black">
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="ស្វែងរកតាមតំបន់"
              className="pl-9 pr-2 py-2 rounded-full h-auto text-sm"
            />
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 rounded-full px-4 py-2 h-auto text-sm"
              >
                <ListFilter size={18} />
                តម្រង
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[calc(100vw-4rem)] p-2">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="ជ្រើសរើសតំបន់" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>តំបន់</SelectLabel>
                    <SelectItem value="tphcm">ទីក្រុងហូជីមិញ</SelectItem>
                    <SelectItem value="hanoi">ហាណូយ</SelectItem>
                    <SelectItem value="danang">ដាណាង</SelectItem>
                    <SelectItem value="cantho">កឹងធើ</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </PopoverContent>
          </Popover>
        </div>

        {/* Desktop: Bottom Submenu (Horizontal Scroll) */}
        <div className="hidden sm:flex sm:justify-center overflow-x-auto gap-4 px-4 py-2 bg-gray-100 dark:bg-gray-900 text-xs whitespace-nowrap scrollbar-hide">
          {subMenuItems.map((item) => (
            <Button
              key={item.value}
              variant="ghost"
              className="text-muted-foreground hover:text-primary shrink-0"
            >
              <div className="flex items-center gap-3">
                {item.icon && (
                  <item.icon size={20} className="text-muted-foreground" />
                )}
                <span>{item.label}</span>
              </div>
            </Button>
          ))}
        </div>
      </div>

      {/* Fixed Bottom Navigation (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t shadow-lg bg-white dark:bg-gray-950 dark:border-gray-700 sm:hidden">
        <div className="flex justify-around items-center h-16">
          <Button
            variant="ghost"
            className="flex flex-col items-center p-0 h-auto text-xs text-gray-700 dark:text-gray-300"
          >
            <Home size={20} />
            <span>ទំព័រដើម</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center p-0 h-auto text-xs text-gray-700 dark:text-gray-300"
          >
            <Heart size={20} />
            <span>រក្សាទុក</span>
          </Button>
          {/* Central Post Button */}
          <Button
            variant="default"
            className="flex flex-col items-center justify-center w-16 h-16 rounded-full -mt-8 shadow-lg text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            <Pencil size={24} />
            <span className="text-xs">ប្រកាស</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center p-0 h-auto text-xs text-gray-700 dark:text-gray-300"
          >
            <UserPlus size={20} />
            <span>ចុះឈ្មោះ</span>
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col items-center p-0 h-auto text-xs text-gray-700 dark:text-gray-300"
          >
            <LogIn size={20} />
            <span>ចូលគណនី</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
