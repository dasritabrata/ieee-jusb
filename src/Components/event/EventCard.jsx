import { useState } from "react";
import { HiCalendar, HiX, HiExternalLink } from "react-icons/hi";

export default function EventCard({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="group cursor-pointer w-full max-w-sm"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/30 dark:bg-slate-900/40 border border-white/40 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="relative h-48 overflow-hidden rounded-t-2xl bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 dark:from-slate-800 dark:via-slate-900 dark:to-black flex items-center justify-center p-4">
            <img
              src={item.img || "/placeholder.svg?height=300&width=400"}
              alt={item.name}
              className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="p-6 backdrop-blur-sm bg-white/20 dark:bg-slate-900/30">
            <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-3 line-clamp-2 leading-tight">
              {item.name}
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-300 line-clamp-3 mb-6 leading-relaxed">
              {item.description}
            </p>
            <div className="flex items-center text-sm text-gray-600 dark:text-slate-400 font-medium pt-2 border-t border-gray-200/30 dark:border-slate-700/40">
              <HiCalendar className="w-4 h-4 mr-2 text-blue-500 dark:text-sky-400" />
              {item.date}
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 backdrop-blur-md bg-black/30"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl backdrop-blur-xl bg-white/20 dark:bg-slate-900/30 border border-white/30 dark:border-slate-700/50 shadow-2xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800/90 text-gray-700 dark:text-slate-300 transition-all duration-200 flex items-center justify-center shadow-lg"
              aria-label="Close modal"
            >
              <HiX className="w-5 h-5" />
            </button>

            <div className="flex flex-col min-h-[500px]">
              <div className="relative h-64 md:h-80 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 dark:from-slate-800 dark:via-slate-900 dark:to-black flex items-center justify-center p-6 border-b border-gray-200/50 dark:border-slate-700/50">
                <img
                  src={item.img || "/placeholder.svg?height=500&width=600"}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain drop-shadow-md"
                />
              </div>

              <div className="p-8 bg-white/10 dark:bg-slate-900/20">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                      {item.name}
                    </h2>
                    <div className="flex items-center text-base text-gray-600 dark:text-slate-400 mb-6 font-medium pb-6 border-b border-gray-200/30 dark:border-slate-700/40">
                      <HiCalendar className="w-4 h-4 mr-2 text-blue-500 dark:text-sky-400" />
                      {item.date}
                    </div>
                  </div>

                  <div className="bg-gray-50/50 dark:bg-slate-800/40 rounded-xl p-6 border border-gray-200/30 dark:border-slate-700/40">
                    <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 text-white font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                      aria-label="Visit event website"
                    >
                      <HiExternalLink className="w-4 h-4" />
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
