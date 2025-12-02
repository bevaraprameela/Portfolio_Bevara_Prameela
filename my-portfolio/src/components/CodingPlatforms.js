
import React from "react";
import { ExternalLink } from "lucide-react";

const CodingPlatforms = () => {
  const platforms = [
    {
      name: "LeetCode",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/leetcode.svg",
      link: "https://leetcode.com/u/bevaraprameela123/",
    },
    {
      name: "CodeChef",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/codechef.svg",
      link: "https://www.codechef.com/users/bevaraprameela",
    },
    {
      name: "Coding Ninjas",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/codingninjas.svg",
      link: "https://www.naukri.com/code360/profile/6a4f97a9-79a9-4acf-a629-1781d30b25e8",
    },
    {
      name: "HackerRank",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hackerrank.svg",
      link: "https://www.hackerrank.com/profile/bevaraprameela11",
    },
  ];

  return (
    <section id="coding-platforms" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Coding Profiles
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 md:px-20">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform bg-white dark:bg-gray-800"
          >
            <img
              src={platform.logo}
              alt={`${platform.name} logo`}
              className="w-16 h-16"
            />
            <span className="font-semibold">{platform.name}</span>
            <ExternalLink size={18} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default CodingPlatforms;
