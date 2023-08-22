import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <div className="2xl:container text-center mx-auto pb-10 px-5 md:pb-20">
        <div className="mx-auto md:max-w-[850px] lg:max-w-[1200px]">
          <Header />
          <Main />
          <Projects />
        </div>
      </div>
      <div className="text-center">
        <Contact />
      </div>
    </div>
  );
}

export default App;
