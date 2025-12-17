import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5d0fe;
  font-family: 'Roboto', sans-serif;
`

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 48px 64px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`

export const Heading = styled.h1`
  color: #000000;
  font-size: 32px;
  font-weight: 500;
  margin: 0;
  text-align: center;
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const Input = styled.input`
  padding: 12px 16px;
  font-size: 16px;
  color: #323f4b;
  border: 1px solid #cbd2d9;
  border-radius: 4px;
  outline: none;
  font-family: 'Roboto', sans-serif;
  width: 260px;

  &:focus {
    border-color: #d946ef;
  }
`

export const Button = styled.button`
  background-color: #d946ef;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  transition: background-color 0.2s;

  &:hover {
    background-color: #c026d3;
  }

  &:active {
    transform: scale(0.98);
  }
`

export const Text = styled.p`
  font-size: 18px;
  color: #323f4b;
  margin: 0;
  font-weight: 500;
  min-width: 260px;
`
