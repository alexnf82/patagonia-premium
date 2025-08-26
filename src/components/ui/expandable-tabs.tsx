"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface TabItem {
  icon: LucideIcon;
  href?: string;
  onClick?: () => void;
}

interface MinimalTabsProps {
  tabs: TabItem[];
  className?: string;
}

export function MinimalTabs({
  tabs,
  className,
}: MinimalTabsProps) {

  return (
    <div
      className={cn(
        "flex items-center gap-4 rounded-full bg-white/95 backdrop-blur-sm border border-gray-200/50 px-6 py-3 shadow-lg",
        className
      )}
    >
      {tabs.map((tab, index) => {
        const Icon = tab.icon;
        
        const buttonContent = (
          <div className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
            <Icon size={18} className="text-gray-600 hover:text-gray-800" strokeWidth={1.5} />
          </div>
        );

        if (tab.href) {
          return (
            <a
              key={index}
              href={tab.href}
              className="block"
            >
              {buttonContent}
            </a>
          );
        }

        return (
          <button
            key={index}
            onClick={tab.onClick}
            className="block"
          >
            {buttonContent}
          </button>
        );
      })}
    </div>
  );
}
