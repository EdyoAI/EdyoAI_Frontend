import { FeatureItem } from "@/types/types";
import Link from "next/link";

export default function FeatureItemCard({
  name,
  icon,
  isFree,
  link,
}: FeatureItem) {
  return (
    <Link
      href={link}
      className="flex flex-col items-center p-2 text-center text-white transition-transform transform hover:scale-105"
    >
      <div className="relative p-2 rounded-full bg-gray-700 w-10 h-10 flex items-center justify-center">
        {isFree && (
          <span className="absolute top-0 right-0 -mt-1 -mr-1 px-2 py-0.5 text-xs font-semibold bg-green-500 text-white rounded-full">
            FREE
          </span>
        )}
        {/* Placeholder SVG icon - replace with actual icons or images */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 text-white"
        >
          <path d={icon} />
        </svg>
      </div>
      <span className="mt-2 text-sm">{name}</span>
    </Link>
  );
}