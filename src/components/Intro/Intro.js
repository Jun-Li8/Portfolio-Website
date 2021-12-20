import './Intro.scss';
import gif from './Dqou-unscreen.gif'

const Intro = ({}) => (
    <div className='intro' id="intro">
        <h1> Hi, I'm Jun</h1>
        <h3>
        I'm an aspiring Software Engineer studying Computer Science and Mathematics at <span className='highlight'>Northwestern University</span>. 
        I'm particularly interested AI, Computer Visions, Data Science, and Software Development. 
        Previously, I developed Adverse Drug Reaction models as a Machine Learning Intern at <a className='link' href='https://www.abbvie.com/'>AbbVie. </a>
        I have also worked on several AI-based projects ranging from cyber-bully detection within Zoom to face recognition through a face mask. To learn more, please look at my <a className='link' href='#projects'>projects </a> or <a className='link' href='#contact'>contact me</a>.
        </h3>
        <img src={gif} alt="loading..." className='gif'/>
    </div>
)


export default Intro;
