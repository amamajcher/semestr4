import './App.css';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { List } from './components/main/List';

function App() {

  const items = ['Adam', 'Jacek', 'Ferdek'];

  return (
    <div>
      <Header />
      <List items={items} />
      <Footer />
    </div>
  );
}

export default App;
