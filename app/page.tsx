"use client";

import UploadForm from "../components/UploadForm";

export default function Home() {
  return (
    <main className="p-10 mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">CV Debugger</h1>
      <h5 className="text-sm text-gray-600 mb-6 text-center">Only support pdf file as of now</h5>
      <UploadForm />
    </main>
  );
}
