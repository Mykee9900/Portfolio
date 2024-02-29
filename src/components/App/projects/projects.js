import React from "react";
import './projects.css';
import calculator from "../../../media/calculator.mp4";
import affirm from "../../../media/affirmGen.mp4";
import toDo from "../../../media/toDoList.mp4";
import movie from "../../../media/MovieMaker.mp4";
import task from "../../../media/TaskVid.mp4";

export default class Projects extends React.Component{

    render(){
        return(
            <div className="projects" id="projects">
                    <h2>Front End Projects</h2>
                    <div className="frontEnd">
                        <div className="calculator">
                            <video controls  src={calculator} width="300" height="174">Your browser does not support this video tag.</video>
                            <p className="vidP">A calculator project I created with HTML, CSS, and Javascript</p>
                        </div>
                        <div className="affirmGen">
                            <video controls src={affirm} width="300" height="174"></video>
                            <p className="vidP">A project where I made a website that allows the user to click a button and generate a positive affirmation. The project was made using HTML, CSS, and JavaScript.</p>
                        </div>
                        <div className="todoList">
                            <video controls src={toDo} width="300" height="174"></video>
                            <p className="vidP">A project where the user can type in chores and manage them. The project was created with React.</p>
                        </div>
                    </div>
                    <h2>Full Stack Websites</h2>
                    <div className="fullStack">
                        <div className="movieMaker">
                            <video controls src={movie} width="300" height="174"></video>
                            <p className="vidP">A project I built with Python/Django, HTML, CSS, and Javascript. The websites uses API calls from The Movie Database and also has user acount acess to search movies and get movie details.</p>
                        </div>
                        <div className="taskVid">
                            <video controls src={task} width="300" height="174"></video>
                            <p className="vidP">A project I built with Python/Django, HTML, CSS, and Javascript. The has user authentication and also for task validation.</p>
                        </div>
                </div>
            </div>
        )
    }
}