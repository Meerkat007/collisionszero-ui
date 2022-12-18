import React from 'react';
import { InfoSection, Pricing, InfoSectionWithInput } from '../../components';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';
import axios from 'axios';

const ONE_DAY_EPOCH_MILLIS = 1000 * 3600 * 24;
const LOOKBACK_DAYS_EPOCH_MILLIS = ONE_DAY_EPOCH_MILLIS * 90;

const Home = () => {
    function queryData(plateNumber) {
        // get current date time 
        // get date time from past 3 months
        // make api request
        // get response
        // display result below the search box
        const currentEpochMillis = Date.now();
        const lookBackStartEpochMillis = currentEpochMillis - LOOKBACK_DAYS_EPOCH_MILLIS
        const urlPath = 'https://tysaeja8gf.execute-api.ca-central-1.amazonaws.com/queryData'
        const urlQueryString = new URLSearchParams();
        urlQueryString.set('plateNumber', plateNumber)
        urlQueryString.set('startEpochMillis', currentEpochMillis)
        urlQueryString.set('endEpochMillis', lookBackStartEpochMillis)
        const url = urlPath + '?' + urlQueryString.toString()

        let config = {
            headers: {
              'X-Api-Key': '2p5xPZRjWg5NZejPbLkpH5ZwYx4veWtQaYbGXIAa',
            }
          }

        axios.get(url, config)
            .then(function (response) {
            // handle success
            console.log(response);
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            })
            .finally(function () {
            // always executed
            });
    }

    return (
        <>
            <InfoSectionWithInput
                onClick={(plateNumber) => {
                    queryData(plateNumber)
                }}
                {...homeObjOne} 
            />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjTwo} />
            <Pricing />
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Home;