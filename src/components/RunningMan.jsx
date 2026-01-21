import React from 'react';

const RunningMan = () => {
    return (
        <div className="runner-container">
            <div className="runner">
                <div className="head"></div>
                <div className="torso"></div>
                <div className="arm left"></div>
                <div className="arm right"></div>
                <div className="leg left"></div>
                <div className="leg right"></div>
            </div>
            <style>{`
                .runner-container {
                    width: 30px;
                    height: 40px;
                    position: relative;
                    margin-left: 10px;
                    overflow: visible;
                }
                .runner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    animation: bounce 0.6s infinite ease-in-out alternate;
                }
                .head {
                    width: 10px;
                    height: 10px;
                    background: #333;
                    border-radius: 50%;
                    position: absolute;
                    top: 0;
                    left: 10px;
                    z-index: 10;
                }
                .torso {
                    width: 4px;
                    height: 14px;
                    background: #333;
                    position: absolute;
                    top: 10px;
                    left: 13px;
                    border-radius: 2px;
                }
                .arm, .leg {
                    width: 4px;
                    height: 12px;
                    background: #333;
                    position: absolute;
                    border-radius: 2px;
                    transform-origin: top center;
                }
                /* Arms */
                .arm {
                    top: 11px;
                    left: 13px;
                }
                .arm.left {
                    animation: swingArm 0.6s infinite ease-in-out alternate;
                }
                .arm.right {
                    animation: swingArm 0.6s infinite ease-in-out alternate-reverse;
                }
                /* Legs */
                .leg {
                    top: 22px;
                    left: 13px;
                }
                .leg.left {
                    animation: runLeg 0.6s infinite ease-in-out alternate;
                }
                .leg.right {
                    animation: runLeg 0.6s infinite ease-in-out alternate-reverse;
                }

                @keyframes bounce {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(2px); }
                }
                @keyframes swingArm {
                    0% { transform: rotate(50deg); }
                    100% { transform: rotate(-50deg); }
                }
                @keyframes runLeg {
                    0% { transform: rotate(-40deg); }
                    100% { transform: rotate(40deg); }
                }
            `}</style>
        </div>
    );
};

export default RunningMan;
