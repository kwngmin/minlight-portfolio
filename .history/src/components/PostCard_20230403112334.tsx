import { Post, getLocaleDateString } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";

type props = {
  post: Post;
};

export default async function PostCard({
  post: { title, description, date, category, path },
}: props) {
  return await (
    <Link href={`/posts/${path}`}>
      <article className="rounded-lg overflow-hidden shadow-md hover:shadow-xl mt-3 hover:ring-4 hover:ring-slate-300">
        <Image
          src={`/images/posts/${path}.png`}
          alt={path}
          width={240}
          height={160}
          className="w-full"
        />
        <div className="p-4">
          <div className="flex justify-between mb-2 items-center">
            <span className="bg-slate-200 px-2 text-slate-600 rounded-sm">
              {category}
            </span>
            <span className="text-black/40 text-sm">
              {/* {getLocaleDateString(date)} */}
            </span>
          </div>
          <h3 className="font-medium text-lg truncate">{title}</h3>
          <p className="text-slate-600 truncate mb-2">{description}</p>
        </div>
      </article>
    </Link>
  );
}
