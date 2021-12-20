import './Projects.scss';
import { useState } from 'react';
import {BsGithub, BsLinkedin} from "react-icons/bs"

const Projects = ({data}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick= (direction) => {
        direction == "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length-1) : setCurrentSlide(currentSlide < data.length - 1 > 0 ? currentSlide + 1 : 0);
    };

    return(
        <div className='projects' id="projects">
            <img src='assets/arrow.png' className='arrow left' onClick={() => handleClick("left")}/>
            <div className='slider' style={{width:`${data.length * 100}vw`,transform:`translateX(${-currentSlide * 100}vw)`}}>
                {data.map( (d) => (
                    <Item key={d.id} d={d}/>
                ))}
            </div>
            <img src='assets/arrow.png' className='arrow right' onClick={() => handleClick("right")}/>
        </div>
    );
}

const Item = ({d}) => (
    <div className='container'>
        <div className='item'>
            <div className='left'>
                <div className='leftContainer'>
                    <div className='imgContainer' style={{backgroundColor:`${d.icolor}`}}>
                        <img src={d.icon}/>
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <a href={d.git}>
                        <BsGithub className='logo'/>
                    </a>
                </div>
            </div>
            <div className='right' style={{backgroundColor:`${d.color}`}}>
                <img src={d.pic}/>
            </div>
        </div>
    </div>
)



export default Projects;