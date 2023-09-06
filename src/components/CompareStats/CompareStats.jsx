import './CompareStats.css'
import CanvasJSReact from '@canvasjs/react-charts';
import { Component } from 'react';

import PropTypes from 'prop-types';

function CompareStats(props){
    const fullName = props.fullName
    const position = props.position
    const number = props.number
    const height = props.height
    const team =  props.team
    const age = props.age
    const shoots = props.shoots
    const gamesPlayed = props.gamesPlayed
    const points = props.points
    const goals = props.goals
    const assists = props.assists
    const shotsOnGoal = props.shotsOnGoal
    const shotPercentage = props.shotPercentage
    const avgTimeOnIce = props.avgTimeOnIce
    const plusMinus = props.plusMinus

    const fullName2 = props.fullName2
    const position2 = props.position2
    const number2 = props.number2
    const height2 = props.height2
    const team2 =  props.team2
    const age2 = props.age2
    const shoots2 = props.shoots2
    const gamesPlayed2 = props.gamesPlayed2
    const points2 = props.points2
    const goals2 = props.goals2
    const assists2 = props.assists2
    const shotsOnGoal2 = props.shotsOnGoal2
    const shotPercentage2 = props.shotPercentage2
    const avgTimeOnIce2 = props.avgTimeOnIce2
    const plusMinus2 = props.plusMinus2

    return(
        <>
            <Chart 
                fullName={fullName}
                position={position}
                number={number}
                height={height}
                team={team}
                age={age}
                shoots={shoots}
                gamesPlayed={gamesPlayed}
                points={points}
                goals={goals}
                assists={assists}
                shotsOnGoal={shotsOnGoal}
                shotPercentage={shotPercentage}
                avgTimeOnIce={avgTimeOnIce}
                plusMinus={plusMinus}

                fullName2={fullName2}
                position2={position2}
                number2={number2}
                height2={height2}
                team2={team2}
                age2={age2}
                shoots2={shoots2}
                gamesPlayed2={gamesPlayed2}
                points2={points2}
                goals2={goals2}
                assists2={assists2}
                shotsOnGoal2={shotsOnGoal2}
                shotPercentage2={shotPercentage2}
                avgTimeOnIce2={avgTimeOnIce2}
                plusMinus2={plusMinus2}
            />
        </>
    )
}  

CompareStats.propTypes = {
    fullName: PropTypes.string.isRequired,
    // Define other prop types here
};

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {	
    render() {
        const {
            fullName,
            number,
            height,
            team,
            age,
            shoots,
            gamesPlayed,
            points,
            goals,
            assists,
            shotsOnGoal,
            shotPercentage,
            avgTimeOnIce,
            plusMinus,

            fullName2,
            number2,
            height2,
            team2,
            age2,
            shoots2,
            gamesPlayed2,
            points2,
            goals2,
            assists2,
            shotsOnGoal2,
            shotPercentage2,
            avgTimeOnIce2,
            plusMinus2
        } = this.props;
        
        const gamesPlayedOptions = {
            height: 250,
            width: 250,
            animationEnabled: true,
            title: {
                text: "Games Played"
            },
            axisY: {
                includeZero: true,
                scaleBreaks: {
                    
                },
            },
            data: [{
                type: "column",
                indexLabel: "{y}",
                dataPoints: [
                    {"label": fullName, "y":gamesPlayed},
                    {"label": fullName2, "y":gamesPlayed2},
                ]
            }]
        }

        const pointsOptions = {
            height: 250,
            width: 250,
            animationEnabled: true,
            title: {
                text: "Points"
            },
            axisY: {
                includeZero: true,
                scaleBreaks: {
                    
                },
            },
            data: [{
                type: "column",
                indexLabel: "{y}",
                dataPoints: [
                    {"label": fullName, "y":points},
                    {"label": fullName2, "y":points2},
                ]
            }]
        }

        const goalsOptions = {
            height: 250,
            width: 250,
            animationEnabled: true,
            title: {
                text: "Goals"
            },
            axisY: {
                includeZero: true,
                scaleBreaks: {
                    
                },
            },
            data: [{
                type: "column",
                indexLabel: "{y}",
                dataPoints: [
                    {"label": fullName, "y":goals},
                    {"label": fullName2, "y":goals2},
                ]
            }]
        }

        const assistsOptions = {
            height: 250,
            width: 250,
            animationEnabled: true,
            title: {
                text: "Assists"
            },
            axisY: {
                includeZero: true,
                scaleBreaks: {
                    
                },
            },
            data: [{
                type: "column",
                indexLabel: "{y}",
                dataPoints: [
                    {"label": fullName, "y":assists},
                    {"label": fullName2, "y":assists2},
                ]
            }]
        }

        
        
        return (
            <>
                <div className='compare-stats'>
                    <div className='charts-container'>
                        <CanvasJSChart options = {gamesPlayedOptions} /> 
                        <CanvasJSChart options = {pointsOptions} /> 
                        <CanvasJSChart options = {goalsOptions} />
                        <CanvasJSChart options = {assistsOptions} />      
                    </div>
                </div>
            </>
        );
    }
}

export default CompareStats