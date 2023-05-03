import React from "react";
import { Post } from "./post";
import { Header } from "./header";

export const Layout = ({ current, location }) => (
  <div className="flex min-h-screen flex-wrap content-start justify-center gap-6 bg-slate-800 text-gray-200">
    <Header />

    <div className="flex min-w-0 max-w-screen-2xl grow basis-full flex-wrap justify-center gap-4 px-2 md:px-4">
      <main className="flex min-w-0 max-w-[1024px] shrink grow-[999999] basis-[1024px] flex-wrap content-start gap-4">
        <Post {...{ ...current, location }} isPostPage={true} />
      </main>
    </div>
  </div>
);
