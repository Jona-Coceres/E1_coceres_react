import Categorias from "./components/categorias/Categorias";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import CardsProductos from "./components/Productos";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        <Categorias />
        <CardsProductos />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
