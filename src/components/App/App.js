import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "./header/header"
import Main from "./main/main"
import Project from "./projects/projects";
import Footer from '../App/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
