import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Contact from './Contact';
import Footer from './Footer';
import Read from './Read';
import Comment from './Comment';
import List from './List';
import ReadContainer from './ReadContainer';

function App() {
  return(
   <div>
    <Header />
    <Nav />
    <ReadContainer />
    <Footer />
   </div>
  );
}

export default App;
