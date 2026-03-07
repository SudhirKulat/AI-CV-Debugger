"use client";

import UploadForm from "../components/UploadForm";

export default function Home() {
  return (
    <main className="p-10 mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-center text-[#38c096]">CV Debugger</h1>
      <h5 className="text-sm text-gray-600 mb-2 text-center">[Only support pdf files as of now]</h5>
      <UploadForm />
    </main>
  );
}
