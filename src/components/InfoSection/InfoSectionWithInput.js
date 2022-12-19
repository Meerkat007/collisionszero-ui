import React from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img} from './InfoSection.elements'
import { Container, Button } from '../../globalStyles'
import { Link } from 'react-router-dom'
import {Form, FormInput} from '../Footer/Footer.elements'
import {FeedbackView} from '..'

 const InfoSectionWithInput = ({ 
    
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
    start,
    onClick,
    feedbackList,
    showFeedback,
    isGettingFeedback,
}) => {
    const [plateNum, setPlateNum] = React.useState('');
    console.log(plateNum)
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container style={{textAlign: 'center'}}>
                    <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle
                        style={{
                            margin: '0 auto 20px',
                            maxWidth: '480px'
                        }}
                        lightTextDesc={lightTextDesc}
                    >{description}</Subtitle>
                    <Form style={{width: '100%'}}>
                        <FormInput
                            name='plateNumber' 
                            type='text' 
                            placeholder='Plate # or Bumper ID' 
                            onChange={(event) => {
                                setPlateNum(event.target.value)
                            }}
                        />
                        <Button 
                            type='button'
                            onClick={(event) => {
                                event.preventDefault();
                                onClick(plateNum)}
                            }
                            disabled={isGettingFeedback}
                        >
                            {isGettingFeedback 
                                ? 'Checking...' 
                                : 'Check Feedback'
                            }
                        </Button>
                    </Form>
                    {
                        showFeedback && (
                            <FeedbackView 
                                feedbackList={feedbackList}
                            />
                        )
                    }
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSectionWithInput;