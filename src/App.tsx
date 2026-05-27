/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Quality from './components/Quality';
import Founders from './components/Founders';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-stone-200">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Quality />
      <Founders />
      <Contact />
      <Footer />
    </div>
  );
}

