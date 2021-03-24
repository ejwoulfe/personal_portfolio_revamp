import Navigation from './components/navigation/navigation';
import Banner from './components/banner/banner';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import About from './components/about/about';
import Contact from './components/contact/contact';
import ToTopButton from './components/to_top_button/to_top_button';



function App(){
    return(

        <div id="main_content">
            <Navigation></Navigation>
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
            <About></About>
            <Contact></Contact>
            <ToTopButton></ToTopButton>
        </div>

    )
}
export default App;
