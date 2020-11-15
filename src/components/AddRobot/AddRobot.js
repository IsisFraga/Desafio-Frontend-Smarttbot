import './AddRobot.scss';
import React, { useEffect, useState } from 'react';
import addrobot from '../../assets/add robot.png';

function AddRobot (props) {

    return (
        <div className="newRobot">
            <div className="newRobot__left">
                <img src={addrobot} onClick={() => props.newRobot()}></img>
                <div className="mainText">
                    <h3>
                        Adicionar novo Robô
                    </h3>
                    <p>
                        Você possui
                        <span>
                            0{props.availableRobots} Robôs
                        </span> 
                        disponíveis
                    </p>
                </div>
            </div>
            <div className="newRobot__right">
                <p className="newRobot__right--pro">
                    Plano Pro 
                    <span>•</span>
                </p>
                <p className="newRobot__right--upgrade">
                    Fazer Upgrade de plano
                </p>
            </div>
        </div>
    );
}

export default AddRobot;