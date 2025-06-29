"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type StartTestButtonProps = {
  name: string;
};

export default function StartTestButton({ name }: StartTestButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleStartTest = async () => {
    setLoading(true);
    try {
      router.push(`/generate-set/${name}`);
    } catch (error) {
      console.error("Error starting test:", error);
    } finally {
      //   setLoading(false);
    }
  };
  return (
    <>
      <Image
        id="loading"
        width={100}
        height={100}
        src="/loading.svg"
        alt="loading"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden"
        style={{ display: loading ? "block" : "none" }}
      />
      <button
        // href={`/generate-set?exam=${name}`}
        onClick={handleStartTest}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors mt-6 inline-block cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Start Test
      </button>
    </>
  );
}
