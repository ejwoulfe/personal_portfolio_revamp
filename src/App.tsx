import Navigation from './components/navigation/navigation';
import Banner from './components/banner/banner';
import SkillsContainer from './components/skills/skills_container';
import ProjectsContainer from './components/projects/projects_container';
import About from './components/about/about';
import ContactContainer from './components/contact/contact_container';
import ToTopButton from './components/to_top_button/to_top_button';



function App() {
    return (

        <div id="main_content">
            <Navigation></Navigation>
            <Banner></Banner>
            <SkillsContainer></SkillsContainer>
            <ProjectsContainer></ProjectsContainer>
            <About></About>
            <ContactContainer></ContactContainer>
            <ToTopButton></ToTopButton>
        </div>

    )
}
export default App;
