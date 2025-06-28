import { FeatureItem, MockTestSet } from "@/types/types";
import TestCard from "@/components/TestCard";
import FeatureItemCard from "@/components/FeatureItemCard";
import { getExams } from "@/directus_api/exams";


const mockTestSets = await getExams()

const features: FeatureItem[] = [
  {
    id: "2",
    name: "Free Quizzes",
    icon: "M16 9.5a.5.5 0 00-1 0v4.793l-3.146-3.147a.5.5 0 00-.708 0L9 11.293V9.5a.5.5 0 00-1 0v3.793l-1.146-1.147a.5.5 0 00-.708 0L5 13.793V9.5a.5.5 0 00-1 0V14a.5.5 0 00.146.354l.854.853a.5.5 0 00.708 0L9 13.207l1.146 1.147a.5.5 0 00.708 0L14 11.207l.854.853a.5.5 0 00.708 0L16 13.793V9.5zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 110-16 8 8 0 010 16z",
    link: "#",
  },
  {
    id: "3",
    name: "Free Tests",
    icon: "M9 13.5H7.5V12h1.5v1.5zm0-3H7.5V9h1.5v1.5zm0-3H7.5V6h1.5v1.5zm4.5 0h-3V6h3v1.5zm0 3h-3V9h3v1.5zm0 3h-3v-1.5h3v1.5zM18 17H6V4h12v13zm-1-11H7v9h10V6zm2 14H5c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2z",
    link: "#",
  },
  {
    id: "4",
    name: "Free Notes",
    icon: "M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h12v16H6V4zm2 5h8v2H8zm0 4h8v2H8zm0 4h5v2H8z",
    link: "#",
  },
  {
    id: "5",
    name: "Free Practice",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.5-13.5H9v2H7.5v-2H6v4h1.5v-2H9v2h1.5v-4zm3 2h-1.5V9h-1.5v2h-1.5V9H10V7.5h3.5v4.5z",
    link: "#",
  },
];

export default function HomePage() {
  return (
    <div className="">
     
      <main className="container mx-auto p-4 pt-8">
        {/* Feature Icons Section */}
        <section className="mb-8">
          <div className="flex justify-around gap-4 overflow-x-scroll">
            {features.map((feature) => (
              <FeatureItemCard key={feature.id} {...feature} />
            ))}
          </div>
        </section>

        {/* Coachings Handpicked Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4 border-l-4 border-red-500 pl-3">
            Exams handpicked for you
          </h2>
          <div className="grid gap-4">
            {mockTestSets.map((course:MockTestSet) => (
              <TestCard key={course.id} {...course} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}