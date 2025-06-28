import { MockTestSet } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export default function TestCard({
  id,
  name,
  details,
  banner
}: MockTestSet) {
  // const discountedPrice = Math.round(price * (1 - discountPercentage / 100));

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-4 mb-4 overflow-hidden relative">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
        {/* Cover Image */}
        <div className="w-full md:w-1/3 flex justify-center items-center p-2">
          <div className="w-full h-auto relative aspect-[16/9]">
            <Image
              src={banner}
              alt={details.title}
              fill
              className="object-cover border-4 border-yellow-500"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          </div>
        </div>

        {/* Details */}
        <div className="flex-1 text-white text-center md:text-left">
          <h2 className="text-xl font-bold text-yellow-400">{details.title}</h2>
          <h3 className="text-md font-semibold text-gray-300">{details.subtitle}</h3>
          <p className="text-sm text-gray-400 mt-2">{details.description}</p>
          <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
            <span className="bg-gray-700 text-xs px-2 py-1 rounded">
              Unlimited Tests
            </span>
            <span className="bg-gray-700 text-xs px-2 py-1 rounded">
              Unlimited Questions
            </span>
            {details.features.map((feature:any) => (
              <span
                key={feature}
                className="bg-blue-700 text-xs px-2 py-1 rounded"
              >
                {feature}
              </span>
            ))}
          </div>

          <Link
            // href={`/generate-set?exam=${name}`}
            href={`/generate-set/${name}`}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors mt-6 inline-block"
          >
            Start Test
          </Link>
        </div>
      </div>
    </div>
  );
}