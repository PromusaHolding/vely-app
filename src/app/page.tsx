export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <h1 className="text-5xl font-bold mb-4">Landing principal /</h1>
      <p>Esta es tu landing principal</p>
      <a href="/landing" className="text-blue-600 underline mt-4">Ir a /landing</a>
    </div>
  );
}
