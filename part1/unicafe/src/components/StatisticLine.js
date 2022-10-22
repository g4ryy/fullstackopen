import React from "react";

export default function StatisticLine({label, value}) {
    return (
        <tr>
            <td>{label}</td>
            <td>{value}</td>
        </tr>
    )
}