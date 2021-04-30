import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem 0;
`

const SectionTitleWrap = styled.div`
  padding: 0 calc((100vw - 1300px) / 2);
`

const SectionH1 = styled.h1`
  padding: 1rem;
`

const Container = styled.div`
  padding: 1rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Column = styled.div`
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 370px;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
    }
  }

  h2 {
    padding: 20px 0;
    font-size: 1.2rem;
  }
`

const ButtonWrap = styled.div`
  padding-bottom: 30px;
`

const ListSection = ({ listOne, listTwo }) => {
  return (
    <Section>
      <SectionTitleWrap>
        <SectionH1>View our newest homes</SectionH1>
      </SectionTitleWrap>
      <Container>
        <Column>
          <img src={listOne.image} alt='home' />
          <h2>{listOne.heading}</h2>
          <ButtonWrap>
            <Button to='/homes' primary='true'>
              {listOne.buttonLabel}
            </Button>
          </ButtonWrap>
        </Column>
        <Column>
          <img src={listTwo.image} alt='home' />
          <h2>{listTwo.heading}</h2>
          <ButtonWrap>
            <Button to='/homes' primary='true'>
              {listTwo.buttonLabel}
            </Button>
          </ButtonWrap>
        </Column>
      </Container>
    </Section>
  )
}

export default ListSection
