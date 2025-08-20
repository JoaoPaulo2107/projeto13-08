import './App.css';
import Header from './components/Header';
import Cartao from './components/Cartao';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Cartao 
        foto="https://placehold.co/150"
        nome="João"
        profissao="Estudante"
        descricao="EStudante da ETEC professora Maria Cristina Medeiros"
      />
      <Footer />
    </div>
  );
}

export default App;
