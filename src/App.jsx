
import './App.css'
import Aside from './components/Aside/Aside';
import Chat from './components/Chat/Chat';
import Header from './components/Header/Header'

function App() {


  return (
    <>
      <Header />
      <main>
        <Aside />
        <Chat/>
      </main>
    </>
  );
}

export default App
