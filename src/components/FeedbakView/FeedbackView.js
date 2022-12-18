import React from 'react';

function FeedbackRow({feedbackItem}) {
    return (
        <div>
            <div>{`time`}</div>
            <div>{feedbackItem.feedback}</div>
        </div>
    )
}

export default function FeedbackView({
    feedbackList
}) {
    if (!Array.isArray(feedbackList) || feedbackList.length === 0) {
        return (
            <div>
                No feedback found!
            </div>
        )
    }
    return (
        <div>
            {feedbackList.map((feedback, index) => {
                return (
                    <FeedbackRow
                        key={index}
                        feedbackItem={feedback}
                    />
                )
            })}
        </div>
    )
}