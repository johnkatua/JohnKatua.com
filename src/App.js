import './App.css';
import MainContent from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header/index';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
