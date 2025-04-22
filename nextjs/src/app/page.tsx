import React from "react";
import Header from "../components/Header"; // Import the Header component
import Footer from "../components/Footer"; // Import the Footer component

interface NewsItem {
  id: string;
  rank: number;
  title: string;
  url: string;
  domain: string;
  points: number;
  user: string;
  timeAgo: string;
  commentsCount: number;
}

// Data parsed from the provided Hacker News snapshot
const newsItems: NewsItem[] = [
  {
    id: "43744591",
    rank: 1,
    title: "Things Zig comptime won't do",
    url: "https://matklad.github.io/2025/04/19/things-zig-comptime-wont-do.html",
    domain: "matklad.github.io",
    points: 296,
    user: "JadedBlueEyes",
    timeAgo: "9 hours ago",
    commentsCount: 111,
  },
  {
    id: "43743337",
    rank: 2,
    title: "Gemma 3 QAT Models: Bringing AI to Consumer GPUs",
    url: "https://developers.googleblog.com/en/gemma-3-quantized-aware-trained-state-of-the-art-ai-to-consumer-gpus/",
    domain: "googleblog.com",
    points: 427,
    user: "emrah",
    timeAgo: "13 hours ago",
    commentsCount: 196,
  },
  {
    id: "43717251",
    rank: 3,
    title: "Crows can recognize geometric regularity",
    url: "https://phys.org/news/2025-04-crows-geometric-regularity.html",
    domain: "phys.org",
    points: 66,
    user: "wglb",
    timeAgo: "6 hours ago",
    commentsCount: 15,
  },
  {
    id: "43746831",
    rank: 4,
    title: "TikZJax: Embedding LaTeX Drawings in HTML",
    url: "https://tikzjax.com/",
    domain: "tikzjax.com",
    points: 29,
    user: "steventhedev",
    timeAgo: "2 hours ago",
    commentsCount: 8,
  },
  {
    id: "43745868",
    rank: 5,
    title: "Find the Odd Disk",
    url: "https://colors2.alessandroroussel.com/",
    domain: "alessandroroussel.com",
    points: 84,
    user: "layer8",
    timeAgo: "6 hours ago",
    commentsCount: 60,
  },
  {
    id: "43745040",
    rank: 6,
    title: "Signal Carnival",
    url: "https://www.quiss.org/signal%5Fcarnival/",
    domain: "quiss.org",
    points: 86,
    user: "adunk",
    timeAgo: "8 hours ago",
    commentsCount: 7,
  },
  {
    id: "43746461",
    rank: 7,
    title: "Decomposing Transactional Systems",
    url: "https://transactional.blog/blog/2025-decomposing-transactional-systems",
    domain: "transactional.blog",
    points: 52,
    user: "pongogogo",
    timeAgo: "4 hours ago",
    commentsCount: 4,
  },
  {
    id: "43746017",
    rank: 8,
    title: "Falsify: Hypothesis-Inspired Shrinking for Haskell (2023)",
    url: "https://www.well-typed.com/blog/2023/04/falsify/",
    domain: "well-typed.com",
    points: 53,
    user: "birdculture",
    timeAgo: "6 hours ago",
    commentsCount: 9,
  },
  {
    id: "43745261",
    rank: 9,
    title: "New Proof Settles Decades-Old Bet About Connected Networks",
    url: "https://www.quantamagazine.org/new-proof-settles-decades-old-bet-about-connected-networks-20250418/",
    domain: "quantamagazine.org",
    points: 70,
    user: "rbanffy",
    timeAgo: "8 hours ago",
    commentsCount: 11,
  },
  {
    id: "43715024",
    rank: 10,
    title: "Which year: guess which year each photo was taken",
    url: "https://whichyr.com/",
    domain: "whichyr.com",
    points: 623,
    user: "trymas",
    timeAgo: "21 hours ago",
    commentsCount: 187,
  },
];

function NewsItemComponent({ item }: { item: NewsItem }) {
  return (
    <li className="mb-1 flex items-start">
      <div className="text-right mr-1 text-gray-500 w-5">{item.rank}.</div>
      <div>
        <a
          href={item.url}
          className="text-black dark:text-gray-200 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.title}
        </a>
        <span className="text-gray-500 text-xs ml-1">({item.domain})</span>
        <div className="text-xs text-gray-500">
          {item.points} points by {item.user} {item.timeAgo} |{" "}
          <a
            href={`https://news.ycombinator.com/item?id=${item.id}`}
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.commentsCount} comments
          </a>
        </div>
      </div>
    </li>
  );
}

export default function Home() {
  return (
    <div className="bg-[#f6f6ef] dark:bg-[#1e1e1e] min-h-screen p-2 font-sans">
      <Header /> {/* Use the Header component */}
      <main className="bg-[#f6f6ef] dark:bg-[#1e1e1e] px-2">
        <ol>
          {newsItems.map((item) => (
            <NewsItemComponent key={item.id} item={item} />
          ))}
        </ol>
        <div className="mt-2 ml-6 text-black dark:text-gray-200">
          <a href="#" className="hover:underline">
            More
          </a>
        </div>
      </main>
      <Footer /> {/* Use the Footer component */}
    </div>
  );
}
