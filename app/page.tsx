"use client";

import UploadForm from "../components/UploadForm";

export default function Home() {
  return (
    <main className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">CV Debugger</h1>
      <UploadForm />
    </main>
  );
}
