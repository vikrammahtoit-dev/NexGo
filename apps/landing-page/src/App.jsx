import Navbar from "./components/layout/Navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        {/* Temporary Section */}
        <section className="min-h-screen bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-32">
            <div className="text-center">
              <h1 className="text-6xl font-extrabold text-slate-900">
                NEXGO
              </h1>

              <p className="mt-6 text-xl text-slate-500">
                Logistics Aggregator Platform
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}