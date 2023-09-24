import { useRouter } from "next/router";
import React from "react";
import { api } from "~/utils/api";

const DetailBlog: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // URLパラメーターからidを取得
  const parseIntId = id ? Number(id) : NaN;

  const { data: blog } = api.example.getDetailBlog.useQuery({
    id: parseIntId,
  });

  if (!blog) return <div>Loading...</div>; // データがない場合はローディングを表示

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="mx-auto mt-10 w-full max-w-2xl rounded-md bg-white p-6 shadow-md">
        <h1 className="mb-4 text-3xl font-bold">{blog.title}</h1>
        <div className="mb-8 text-sm text-gray-500">
          <span>{blog.createdAt.toLocaleDateString()}</span>{" "}
          {/* Created Atが必要ならば、表示 */}
        </div>
        <p className="whitespace-pre-line text-gray-700">{blog.description}</p>
      </div>
    </main>
  );
};

export default DetailBlog;
