import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d7dfe9;
  font-family: 'Open Sans';
`

export const FormContainer = styled.form`
  background-color: #ffffff;
  padding: 24px;
  border-radius: 8px;
  width: 300px;
  margin-right: 24px;
`

export const Heading = styled.h1`
  color: #35469c;
  font-size: 24px;
  margin-bottom: 16px;
`

export const Label = styled.label`
  color: #7e858e;
  font-size: 12px;
  margin-bottom: 4px;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #d7dfe9;
  outline: none;
`

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #d7dfe9;
`

export const Option = styled.option``

export const Button = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  border: none;
  padding: 8px;
  width: 100%;
  cursor: pointer;
`

export const MemeContainer = styled.div`
  width: 300px;
`

export const MemeImageContainer = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
`

export const MemeText = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
  text-align: center;
  font-weight: bold;
`
