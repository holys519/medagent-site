import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Technology } from './components/Technology';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Technology />
      </main>
      <Footer />
    </div>
  );
}

export default App;
