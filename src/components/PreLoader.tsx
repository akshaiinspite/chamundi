import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
<div className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#F7F2E8] via-[#EFE6D3] to-[#E6D6B8] flex items-center justify-center">      <div className="text-center px-6">

        {/* Anniversary Badge */}
        <div className="relative mx-auto mb-8 h-40 w-40">
          <div className="absolute inset-0 rounded-full border-4 border-amber-400 animate-pulse" />

          <div className="absolute inset-3 rounded-full bg-gradient-to-br from-amber-50 to-amber-100 shadow-2xl flex flex-col items-center justify-center">
            <span className="text-5xl font-bold text-amber-700">
              25
            </span>

            <span className="text-[11px] tracking-[4px] uppercase text-amber-600">
              Years
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-serif font-semibold text-gray-900">
          Celebrating
        </h1>

        <h2 className="mt-2 text-xl md:text-3xl font-light text-gray-700">
          25 Years of Healing & Excellence
        </h2>

        <p className="mt-4 text-gray-500 max-w-md mx-auto">
          Trusted Ayurvedic Care • Wellness • Transformation
        </p>

        {/* Loader */}
        <div className="mt-10 w-72 max-w-full mx-auto">
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-full origin-left animate-[loading_3.5s_linear_forwards] bg-gradient-to-r from-amber-500 via-red-500 to-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
}