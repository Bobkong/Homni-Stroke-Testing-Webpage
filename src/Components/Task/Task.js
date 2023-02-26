import Header from "./Header/Header";
import ProgressBar from "./ProgressBar/ProgressBar";
import { useState, useRef } from 'react';
import './Task.css'
import '../../Style/Typograph.css'
import '../../Style/Color.css'
import LargeButton from "../Button/LargeButton";
import { NavLink } from "react-router-dom";

function Task() {

    const [step, setStep] = useState(1);
    const [state, setState] = useState("initial");
    const score = useRef(null);
    const [userScore, setUserScore] = useState(0)

    let buttonLabel;
    if (state == "initial") {
        buttonLabel = "Confirm"
    } else if (state == "confirm") {
        buttonLabel = "Confirm Your Final Score"
    } else if (state == "result" && step < 4) {
        buttonLabel = "Next Task"
    } else if (state == "result" && step == 4) {
        buttonLabel = "Complete Study"
    }

    return(
        <div className="task-div">
            <Header />
            <ProgressBar step={step}/>
            <p className='title-m black-color' style={{marginTop: "3rem"}} >Task #{step}</p>
            {(state == "initial" || state == "confirm") &&
                <UserTaskCard scoreRef={score}/>
            }

            {(state == "confirm") &&
                <AITaskCard score={getFakeScore(step, userScore).ai}/>
            }

            {(state == "result") &&
                <div>
                    <ResultCard from="user" score={parseInt(score.current.value)}/>
                    <ResultCard from="ai" score={getFakeScore(step, userScore).ai}/>
                    <ResultCard from="doctor" score={getFakeScore(step, userScore).doctor}/>
                </div>
                
            }

            {((state == "result") && step == 4) && 
                <NavLink to='/complete' style={{ textDecoration: 'none', paddingBottom: "3rem", marginTop: "3rem", display: "flex", justifyContent: "center", justifyContent: "center" }} >
                    <LargeButton label={buttonLabel} />
                </NavLink>
            }

            {((state != "result") || step != 4) && 
                <div className="button-div"  onClick={() => {

                    if (state == "initial") {
                        let inputScore = parseInt(score.current.value)
                        if (inputScore != NaN && inputScore >= 0 && inputScore <= 42) {
                            setState("confirm")
                            setUserScore(inputScore)
                        } else {
                            alert("Please input a number between 0-42!!");
                        }
                    } else if (state == "confirm") {
                        setState("result") 
                    } else if (state == "result") {
                        if(step < 4) {
                            setStep(step + 1)
                            setState("initial") 
                            
                        }
                    }
                }} >
                    <LargeButton label={buttonLabel} />
                </div>
            }
            
            


        </div>
    );
}

function UserTaskCard(props) {
    return (
        <div className="task-card-div">
            <p className="title-s black-color" style={{padding: "2rem", margin: "0px"}}>Your Predicted Score:</p>
            <input type="number" className="score-input body-r" max="42" min="0" placeholder="Score" ref={props.scoreRef}/>
        </div>
    );
}

function AITaskCard(props) {
    return (
        <div className="task-card-div">
            <p className="title-s black-color" style={{padding: "2rem", margin: "0px"}}>Your Predicted Score:</p>
            <p className="title-s primary1-color" style={{padding: "2rem", margin: "0px"}}>{props.score}</p>
        </div>
    );
}

function ResultCard(props) {
    let cardTitle;
    let scoreColorClass;
    if (props.from == "user") {
        cardTitle = "Your Predicted Score:";
        scoreColorClass = "black-color";
    } else if (props.from == "ai") {
        cardTitle = "AI Predicted Score:";
        scoreColorClass = "primary1-color";
    } else if (props.from == "doctor") {
        cardTitle = "Doctor’s Diagnosis Score:";
        scoreColorClass = "primary2-color";
    }

    return (
        <div className="result-card-div">
            <p className="title-s black-color" style={{padding: "2rem", margin: "0px"}}>{cardTitle}</p>
            <p className={`title-s ${scoreColorClass}`} style={{padding: "2rem", margin: "0px"}}>{props.score}</p>
        </div>
    );
}

function getFakeScore(step, userScore) {
    if (step == 1) {
        if (userScore == 0) {
            return {ai: 0, doctor: 0}
        } else if (userScore >= 1 && userScore <= 4) {
            return {ai: userScore + 5, doctor: userScore + 6}
        } else {
            return {ai: userScore - 5, doctor: userScore - 4}
        }
    } else if (step == 2) {
        if (userScore == 0) {
            return {ai: 0, doctor: 0}
        } else if (userScore >= 1 && userScore <= 2) {
            return {ai: userScore + 3, doctor: userScore + 4}
        } else if (userScore >= 3 && userScore <= 39) {
            return {ai: userScore + 3, doctor: userScore + 2}
        } else {
            return {ai: userScore - 3, doctor: userScore - 4}
        }
    } else if (step == 3) {
        if (userScore == 0) {
            return {ai: 0, doctor: 0}
        } else if (userScore >= 1 && userScore <= 9) {
            return {ai: userScore + 10, doctor: userScore + 14}
        } else if (userScore >= 10 && userScore <= 32) {
            return {ai: userScore - 10, doctor: userScore - 6}
        } else {
            return {ai: userScore - 10, doctor: userScore - 14}
        }
    } else if (step == 4) {
        if (userScore == 0) {
            return {ai: 0, doctor: 0}
        } else if (userScore >= 1 && userScore <= 16) {
            return {ai: userScore + 17, doctor: userScore + 25}
        } else if (userScore >= 17 && userScore <= 25) {
            return {ai: userScore - 17, doctor: userScore - 9}
        } else {
            return {ai: userScore - 17, doctor: userScore - 25}
        }
    }
}

export default Task