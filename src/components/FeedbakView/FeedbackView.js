import React from 'react';
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img} from '../InfoSection/InfoSection.elements'
import { Container, Button } from '../../globalStyles'
import './FeedbackView.css'
import moment from 'moment-timezone'

function FeedbackRow({feedbackItem}) {
    return (
        <tr>
            <td>{moment(feedbackItem.callEndTimeEpochMillis).format('YYYY-MM-DD')}</td>
            <td>{feedbackItem.feedback}</td>
        </tr>
    )
}

function TableView({feedbackList}) {
    if (!Array.isArray(feedbackList) || feedbackList.length === 0) {
        return (
            <div className="cz_tableview no_feedback">
                No feedback found!
            </div>
        )
    }
    return (
        <div className="cz_tableview">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbackList.map((feedback, index) => {
                        return (
                            <FeedbackRow
                                key={index}
                                feedbackItem={feedback}
                            />
                        )
                    })}
                </tbody>
            </table>
            
        </div>
    )
}

export default function FeedbackView({
    feedbackList,
    primary,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    start
}) {
    return (
        <>
            <TableView 
                feedbackList={feedbackList}
            />
        </>
    )
    
}