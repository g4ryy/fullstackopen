import React from "react";
import StatisticLine from './StatisticLine';

const renderStats = (good, neutral, bad) => {
    if (good == 0 && neutral == 0 && bad == 0) {
        return (
            <p>
                No feedback given
            </p>
        )
    } 

    return (
        <table>
            <tbody>
                <StatisticLine label='good' value={good} />
                <StatisticLine label='neutral' value={neutral} />
                <StatisticLine label='bad' value={bad} />
                <StatisticLine label='all' value={good + neutral + bad} />
                <StatisticLine label='average' value={(good - bad) / (good + neutral + bad)} />
                <StatisticLine label='positive' value={(good / (good + neutral + bad)) + '%'}/>
            </tbody>
            
        </table>
    )
}

export default function Statistic({good, neutral, bad}) {
    return (
        <div>
            <h1>statistics</h1>
            {renderStats(good, neutral, bad)}
        </div>
    )
}