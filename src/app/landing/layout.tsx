export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-8 bg-gray-100">
      {children}
    </div>
  );
}
