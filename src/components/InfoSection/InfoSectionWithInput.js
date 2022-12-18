import React from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img} from './InfoSection.elements'
import { Container, Button } from '../../globalStyles'
import { Link } from 'react-router-dom'
import {Form, FormInput} from '../Footer/Footer.elements'

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
    onClick
}) => {
    const [plateNum, setPlateNum] = React.useState('');
    console.log(plateNum)
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <Form>
                                <FormInput
                                    name='plateNumber' 
                                    type='text' 
                                    placeholder='Enter plate number' 
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
                                >Search</Button>
                            </Form>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSectionWithInput;