"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaLock,
  FaCheck,
  FaBookOpen,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";
import { storiesData, getStoryById } from "@/services/stories";

export default function StoryDetailPage() {
  const routeParams = useParams();
  const storyId = Number(routeParams?.id) || 1;

  const { isHindi } = useLanguage();
  const [currentStory, setCurrentStory] = useState(null);

  useEffect(() => {
    getStoryById(storyId).then((story) => {
      setCurrentStory(story || storiesData[0]);
    });
  }, [storyId]);

  if (!currentStory) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
        <div className="text-center py-20">
          <div className="w-10 h-10 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="paragraph">Loading story...</p>
        </div>
      </div>
    );
  }

  const title = (isHindi ? currentStory.titleHi : currentStory.titleEn) || "";
  const week = (isHindi ? currentStory.weekHi : currentStory.weekEn) || "";
  const desc = (isHindi ? currentStory.descHi : currentStory.descEn) || "";
  const fullBody = (isHindi ? currentStory.fullBodyHi : currentStory.fullBodyEn) || "";
  const publishDate = (isHindi ? currentStory.publishDateHi : currentStory.publishDateEn) || "";
  const bodyParagraphs = fullBody.split("\n\n");

  const publishedStories = storiesData.filter((s) => s.isPublished);
  const upcomingStories = storiesData.filter((s) => !s.isPublished);

  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col">
      <Navbar />

      <main className="flex-1 py-10 md:py-16">
        <div className="container px-4 sm:px-6 mx-auto max-w-5xl">

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/#till-now"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[var(--primary)] text-[var(--heading)] hover:text-white font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow group"
            >
              <FaArrowLeft className="text-xs text-[var(--primary)] group-hover:text-white transition-colors" />
              <span>{isHindi ? "मुख्य पृष्ठ पर वापस जाएँ" : "Back to Home"}</span>
            </Link>
          </motion.div>

          {/* HERO STORY CARD */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl mb-12"
            style={{ background: "var(--primary)" }}
          >
            {/* Decorative top-right glow */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 bg-white blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full opacity-10 bg-white blur-2xl pointer-events-none" />

            <div className="relative z-10 p-6 sm:p-10 md:p-12">
              {/* Top row: week badge + published badge */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="px-3.5 py-1.5 rounded-full bg-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-widest">
                  {week}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[var(--primary)] text-xs font-bold">
                  <FaCheck className="text-[10px]" />
                  {isHindi ? "प्रकाशित" : "Published"}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 leading-tight">
                {title}
              </h1>

              {/* Desc */}
              <p className="text-white/80 text-base sm:text-lg mb-6 max-w-2xl leading-relaxed">
                {desc}
              </p>

              {/* Publish Date chip */}
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white/20 border border-white/30 backdrop-blur-sm">
                <FaCalendarAlt className="text-white text-base shrink-0" />
                <div className="flex flex-col leading-none">
                  <span className="text-white/70 text-[10px] uppercase tracking-widest font-semibold">
                    {isHindi ? "प्रकाशित तिथि" : "Published On"}
                  </span>
                  <span className="text-white text-sm sm:text-base font-extrabold mt-0.5">
                    {publishDate}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="my-7 border-t border-white/20" />

              {/* Story body paragraphs */}
              <div className="space-y-5 text-white/90 text-base sm:text-[17px] leading-relaxed">
                {bodyParagraphs.map((para, idx) => (
                  <p key={idx} className="whitespace-pre-line">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </motion.article>

          {/* ALL STORIES SECTION */}
          <section className="mt-12">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--primary)" }}>
                <FaBookOpen className="text-white text-sm" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--heading)]">
                {isHindi ? "सभी कहानियाँ" : "All Stories"}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Published */}
              {publishedStories.map((story) => {
                const isCurrent = story.id === currentStory.id;
                const stTitle = isHindi ? story.titleHi : story.titleEn;
                const stWeek = isHindi ? story.weekHi : story.weekEn;
                const stDesc = isHindi ? story.descHi : story.descEn;
                const stDate = isHindi ? story.publishDateHi : story.publishDateEn;

                return (
                  <Link key={story.id} href={`/story/${story.id}`}>
                    <motion.div
                      whileHover={{ y: -4, scale: 1.01 }}
                      transition={{ duration: 0.25 }}
                      className={`relative p-5 rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isCurrent
                          ? "border-[var(--primary)] shadow-lg"
                          : "bg-white border-black/5 hover:border-[var(--primary)]/40 hover:shadow-md"
                      }`}
                      style={isCurrent ? { background: "var(--primary)" } : {}}
                    >
                      {isCurrent && (
                        <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 bg-white blur-2xl pointer-events-none" />
                      )}

                      {/* Top row */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                          isCurrent ? "bg-white/20 text-white" : "bg-[var(--background)] text-[var(--primary)]"
                        }`}>
                          {stWeek}
                        </span>
                        <span className={`flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                          isCurrent ? "bg-white text-[var(--primary)]" : "text-emerald-600 bg-emerald-50"
                        }`}>
                          <FaCheck className="text-[9px]" />
                          {isHindi ? "प्रकाशित" : "Published"}
                        </span>
                      </div>

                      <h3 className={`text-lg font-bold mb-1.5 ${isCurrent ? "text-white" : "text-[var(--heading)]"}`}>
                        {stTitle}
                      </h3>
                      <p className={`text-sm line-clamp-2 mb-3 ${isCurrent ? "text-white/80" : "text-[var(--paragraph)]"}`}>
                        {stDesc}
                      </p>

                      {/* Date + arrow */}
                      <div className={`flex items-center justify-between pt-3 border-t ${isCurrent ? "border-white/20" : "border-black/8"}`}>
                        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl ${
                          isCurrent ? "bg-white/15" : "bg-[var(--primary)]/10"
                        }`}>
                          <FaCalendarAlt className={`text-xs shrink-0 ${isCurrent ? "text-white" : "text-[var(--primary)]"}`} />
                          <span className={`text-xs font-bold ${isCurrent ? "text-white" : "text-[var(--primary)]"}`}>
                            {stDate}
                          </span>
                        </div>
                        <FaArrowRight className={`text-xs ${isCurrent ? "text-white/80" : "text-[var(--primary)]"}`} />
                      </div>
                    </motion.div>
                  </Link>
                );
              })}

              {/* Upcoming */}
              {upcomingStories.map((story) => {
                const stTitle = isHindi ? story.titleHi : story.titleEn;
                const stWeek = isHindi ? story.weekHi : story.weekEn;
                const stDesc = isHindi ? story.descHi : story.descEn;
                const stDate = isHindi ? story.publishDateHi : story.publishDateEn;

                return (
                  <div
                    key={story.id}
                    className="relative p-5 rounded-2xl bg-white/60 border border-black/5 opacity-75 cursor-not-allowed select-none overflow-hidden"
                  >
                    {/* Faint lock watermark */}
                    <div className="absolute -right-3 -bottom-3 opacity-[0.06] pointer-events-none">
                      <FaLock className="text-gray-400 text-[60px]" />
                    </div>

                    {/* Top row */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 uppercase tracking-wider">
                        {stWeek}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                        <FaLock className="text-[9px]" />
                        {isHindi ? "जल्द" : "Coming Soon"}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-600 mb-1.5">{stTitle}</h3>
                    <p className="text-sm text-gray-400 line-clamp-2 mb-3">{stDesc}</p>

                    {/* Date */}
                    <div className="flex items-center gap-2 pt-3 border-t border-black/5">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-100">
                        <FaCalendarAlt className="text-xs text-gray-500 shrink-0" />
                        <span className="text-xs font-bold text-gray-600">
                          {isHindi ? "प्रकाशित होगा: " : "Publishes: "}{stDate}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
