"use client";

import Image from "next/image";
import { FiHeart, FiMessageCircle, FiSend, FiBookmark } from "react-icons/fi";

export default function InstagramSection() {
  const posts = [
    {
      user: "centro_holistico_ala",
      location: "Cochabamba, Bolivia",
      image: "/instagram/post1.jpg",
      link: "https://www.instagram.com/p/DCRjuS5Os_R/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      user: "sananda.centro.tera",
      location: "637 seguidores",
      image: "/instagram/post2.webp",
      link: "https://www.instagram.com/p/C4EpTDiL4Qc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      user: "dra.nadi...",
      location: "637 seguidores",
      image: "/instagram/post3.jpg",
      link: "https://www.instagram.com/p/C4HVFYcsnvv/?utm_source=ig_web_copy_link",
    },
    {
      user: "dra.nadi...",
      location: "637 seguidores",
      image: "/instagram/post4.jpg",
      link: "https://www.instagram.com/p/DBP39TQNbHb/?utm_source=ig_web_copy_link",
    },
  ];

  return (
    <section id="ig" className="bg-[#e8e4db] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.link}
              target="_blank"
              className="bg-white border border-gray-300 rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between px-3 py-3 border-b">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden border">
                    <Image
                      src="/instagram/logoInsta.jpg"
                      alt=""
                      width={32}
                      height={32}
                    />
                  </div>

                  <div className="leading-tight">
                    <p className="text-[14px] font-semibold text-black">
                      {post.user}
                    </p>
                    <p className="text-[12px] text-gray-500">{post.location}</p>
                  </div>
                </div>

                <button className="bg-[#0095f6] text-white text-[14px] px-4 py-1 rounded font-semibold">
                  Ver perfil
                </button>
              </div>

              <div className="relative w-full h-[420px]">
                <Image src={post.image} alt="" fill className="object-cover" />
              </div>

              <div className="px-4 py-3 text-[#0095f6] text-[15px] border-b">
                Ver más en Instagram
              </div>

              <div className="px-4 py-3 flex justify-between text-[26px] text-black border-t border-gray-400">
                <div className="flex gap-4">
                  <FiHeart className="hover:opacity-60 transition" />
                  <FiMessageCircle className="hover:opacity-60 transition" />
                  <FiSend className="hover:opacity-60 transition" />
                </div>
                <FiBookmark className="hover:opacity-60 transition" />
              </div>

              <div className="border-t px-4 py-3 text-gray-400 text-[15px]">
                Añade un comentario...
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
