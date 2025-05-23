import {
  LayoutDashboard,
  Upload,
  BarChart3,
  FileText,
  Settings,
  Users,
  ShoppingCart,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import React from "react";
import Image from "next/image";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Upload Data",
    url: "/upload",
    icon: Upload,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: FileText,
  },
  {
    title: "Blogs",
    url: "/blogs",
    icon: FileText,
  },
  {
    title: "Tools",
    url: "/tools",
    icon: BarChart3,
  },
  {
    title: "Shop",
    url: "/shop",
    icon: ShoppingCart,
  },
  {
    title: "Forum",
    url: "/forum",
    icon: Users,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: FileText,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center justify-between">
            <span>FBB DEPT</span>
            <Image src="/image.png" alt="Logo" width={24} height={24} />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
