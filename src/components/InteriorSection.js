import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  background-color: #000;
`

const Container = styled.div`
  padding: 3rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 0;
  order: ${({ reverse }) => (reverse ? '2' : '1')};
`

const ColumnLeftWhite = styled.div`
  width: 100%;
  background-color: #fff;
  padding-left: calc((100vw - 1300px) / 2);
`

const ColumnLeftContent = styled.div`
  padding: 100px 100px 100px 0;

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 1400px) {
    padding: 60px;
  }

  @media screen and (max-width: 768px) {
    padding: 100px;
  }
`

const ColumnRight = styled.div`
  padding: 1rem 2rem 1rem 0;
  order: ${({ reverse }) => (reverse ? '1' : '2')};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
  }

  img {
    width: 100%;
    height: 80%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`

const InteriorSection = ({
  heading,
  paragraphOne,
  buttonLabel,
  reverse,
  image,
}) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <ColumnLeftWhite>
            <ColumnLeftContent>
              <h1>{heading}</h1>
              <p>{paragraphOne}</p>
              <Button to='/homes' primary='true'>
                {buttonLabel}
              </Button>
            </ColumnLeftContent>
          </ColumnLeftWhite>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img src={image} alt='home' />
        </ColumnRight>
      </Container>
    </Section>
  )
}

export default InteriorSection
