import React from 'react';
import { InfoSection, Pricing, InfoSectionWithInput, FeedbackView } from '../../components';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';
import axios from 'axios';

const ONE_DAY_EPOCH_MILLIS = 1000 * 3600 * 24;
const LOOKBACK_DAYS_EPOCH_MILLIS = ONE_DAY_EPOCH_MILLIS * 90;

const mockData = {
    'CHZE132': [
        {
            callEndTimeEpochMillis: 1644099131000,
            feedback: 'tailgating'
        },
        {
            callEndTimeEpochMillis: 1649801531000,
            feedback: 'tailgating'
        },
        {
            callEndTimeEpochMillis: Date.now() - 5 * 86400000,
            feedback: 'tailgating'
        },
    ],
    'BLRE434': [
        {
            callEndTimeEpochMillis: 1670883131000,
            feedback: 'aggressive'
        },
        {
            callEndTimeEpochMillis: 1641161531000,
            feedback: 'tailgating'
        },
        {
            callEndTimeEpochMillis: 1642284731000,
            feedback: 'aggressive'
        },
        {
            callEndTimeEpochMillis: Date.now() - 2 * 86400000,
            feedback: 'ran red light'
        },
    ],
    'APZR984': [
        {
            callEndTimeEpochMillis: 1668118331000,
            feedback: 'aggressive'
        },
        {
            callEndTimeEpochMillis: 1670019131000,
            feedback: 'ran red light'
        },
        {
            callEndTimeEpochMillis: 1642716731000,
            feedback: 'aggressive'
        },
        {
            callEndTimeEpochMillis: 1643580731000,
            feedback: 'aggressive'
        },
        {
            callEndTimeEpochMillis: 1646518331000,
            feedback: 'tailgating'
        },
        {
            callEndTimeEpochMillis: Date.now() - 5 * 86400000,
            feedback: 'tailgating'
        },
    ],
}

function getSanitizedPlateNumber(unsanitizedNum) {
    if (!unsanitizedNum) {
        return unsanitizedNum;
    }
    return unsanitizedNum.replace(/[^0-9a-z]/gi, '').toUpperCase();
}

const Home = () => {
    const [feedback, setFeedback] = React.useState([]);
    const [showFeedback, setShowFeedback] = React.useState(false)
    const [isGettingFeedback, setIsGettingFeedback] = React.useState(false)

    function queryData(plateNumber) {
        // get current date time 
        // get date time from past 3 months
        // make api request
        // get response
        // display result below the search box
        if (!plateNumber) {
            return;
        }

        const sanitizedPlateNum = getSanitizedPlateNumber(plateNumber);
        if (Object.keys(mockData).indexOf(sanitizedPlateNum) > -1) {
            // return mock data instead.
            setIsGettingFeedback(true)
            setShowFeedback(false)
            setFeedback(mockData[sanitizedPlateNum])
            setIsGettingFeedback(false)
            setShowFeedback(true)
            return;
        }

        const currentEpochMillis = Date.now();
        const lookBackStartEpochMillis = currentEpochMillis - LOOKBACK_DAYS_EPOCH_MILLIS
        const urlPath = 'https://tysaeja8gf.execute-api.ca-central-1.amazonaws.com/queryData'
        const urlQueryString = new URLSearchParams();
        urlQueryString.set('plateNumber', plateNumber)
        urlQueryString.set('startEpochMillis', lookBackStartEpochMillis)
        urlQueryString.set('endEpochMillis', currentEpochMillis)
        const url = urlPath + '?' + urlQueryString.toString()

        let config = {
            headers: {
              'X-Api-Key': '2p5xPZRjWg5NZejPbLkpH5ZwYx4veWtQaYbGXIAa',
              'Content-Type': '',
              'X-Amz-Date': '',
              'Authorization': '',
              'X-Amz-Security-Token': ''
            }
          }

        setIsGettingFeedback(true)
        setShowFeedback(false)
        setFeedback([])
        axios.get(url, config)
            .then(function (response) {
                // handle success
                setFeedback(response?.data?.data)
                setShowFeedback(true);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                setIsGettingFeedback(false);
            });
    }

    return (
        <>
            <InfoSectionWithInput
                onClick={(plateNumber) => {
                    queryData(plateNumber)
                }}
                isGettingFeedback={isGettingFeedback}
                showFeedback={showFeedback}
                feedbackList={feedback}
                {...homeObjOne} 
            />
            {/* <InfoSection {...homeObjThree} /> */}
            {/* <InfoSection {...homeObjTwo} /> */}
            {/* <Pricing /> */}
            {/* <InfoSection {...homeObjFour} /> */}
        </>
    )
}

export default Home;