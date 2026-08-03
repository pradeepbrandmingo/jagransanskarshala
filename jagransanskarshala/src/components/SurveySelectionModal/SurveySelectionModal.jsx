"use client";

import { useSurveyModal } from "@/context/SurveyModalContext";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { FiX } from "react-icons/fi";
import { FaGraduationCap, FaUserGroup, FaArrowRight } from "react-icons/fa6";

export default function SurveySelectionModal() {
  const { isSurveyModalOpen, closeSurveyModal } = useSurveyModal();
  const router = useRouter();

  const handleSelect = (category) => {
    closeSurveyModal();
    if (category === "student") {
      router.push("/survey/student");
    } else if (category === "parent") {
      router.push("/survey/parent");
    }
  };

  return (
    <AnimatePresence>
      {isSurveyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSurveyModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md sm:max-w-xl bg-white rounded-3xl shadow-2xl p-5 sm:p-7 md:p-8 z-10 border border-gray-100 max-h-[88vh] overflow-hidden"
          >
            {/* Background Accent Gradients */}
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[var(--primary)]/10 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[var(--secondary)]/15 blur-2xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={closeSurveyModal}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100/80 text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all flex items-center justify-center cursor-pointer z-20"
              aria-label="Close modal"
            >
              <FiX className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-4 sm:mb-6 pr-6 sm:pr-0">
              <span className="inline-block px-3.5 py-1 rounded-full bg-red-100 text-[var(--primary)] text-xs sm:text-sm font-bold tracking-wider uppercase mb-2">
                National Digital Survey 2026
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight">
                Select Your Category
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-1.5 font-medium leading-relaxed">
                कृपया चुनें कि आप यह सर्वे विद्यार्थी के रूप में भर रहे हैं या अभिभावक के रूप में।
              </p>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {/* Student Option */}
              <button
                onClick={() => handleSelect("student")}
                className="group relative p-4 sm:p-5.5 rounded-2xl border-2 border-red-100 bg-red-50/40 hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300 flex flex-row sm:flex-col items-center sm:text-center shadow-sm hover:shadow-xl hover:-translate-y-0.5 active:scale-98 cursor-pointer gap-3.5 sm:gap-0"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white group-hover:bg-white/20 text-[var(--primary)] group-hover:text-white flex items-center justify-center text-2xl sm:text-3xl sm:mb-3.5 transition-colors shadow-sm shrink-0">
                  <FaGraduationCap />
                </div>
                <div className="flex-1 text-left sm:text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-white transition-colors mb-0.5 sm:mb-1">
                    For Student
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 group-hover:text-white/80 transition-colors sm:mb-3">
                    विद्यार्थियों के लिए सर्वे
                  </p>
                  <div className="hidden sm:flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold text-[var(--primary)] group-hover:text-white mt-auto">
                    <span>Start Survey</span>
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <div className="flex sm:hidden items-center justify-center w-8 h-8 rounded-full bg-white group-hover:bg-white/20 text-[var(--primary)] group-hover:text-white text-xs shrink-0">
                  <FaArrowRight />
                </div>
              </button>

              {/* Parent Option */}
              <button
                onClick={() => handleSelect("parent")}
                className="group relative p-4 sm:p-5.5 rounded-2xl border-2 border-orange-100 bg-orange-50/40 hover:bg-[#f07f22] hover:border-[#f07f22] transition-all duration-300 flex flex-row sm:flex-col items-center sm:text-center shadow-sm hover:shadow-xl hover:-translate-y-0.5 active:scale-98 cursor-pointer gap-3.5 sm:gap-0"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white group-hover:bg-white/20 text-[#f07f22] group-hover:text-white flex items-center justify-center text-2xl sm:text-3xl sm:mb-3.5 transition-colors shadow-sm shrink-0">
                  <FaUserGroup />
                </div>
                <div className="flex-1 text-left sm:text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-white transition-colors mb-0.5 sm:mb-1">
                    For Parent
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 group-hover:text-white/80 transition-colors sm:mb-3">
                    अभिभावकों के लिए सर्वे
                  </p>
                  <div className="hidden sm:flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold text-[#f07f22] group-hover:text-white mt-auto">
                    <span>Start Survey</span>
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <div className="flex sm:hidden items-center justify-center w-8 h-8 rounded-full bg-white group-hover:bg-white/20 text-[#f07f22] group-hover:text-white text-xs shrink-0">
                  <FaArrowRight />
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
