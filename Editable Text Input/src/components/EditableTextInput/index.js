import {useState} from 'react'
import {
  AppContainer,
  Card,
  Heading,
  ContentContainer,
  Input,
  Button,
  Text,
} from './styledComponents'

const EditableTextInput = () => {
  const [isEditing, setIsEditing] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const [savedText, setSavedText] = useState('')

  const handleSave = () => {
    if (inputValue.trim()) {
      setSavedText(inputValue)
      setIsEditing(false)
    }
  }

  const handleEdit = () => {
    setInputValue(savedText)
    setIsEditing(true)
  }

  const handleInputChange = e => {
    setInputValue(e.target.value)
  }

  return (
    <AppContainer>
      <Card>
        <Heading>Editable Text Input</Heading>
        <ContentContainer>
          {isEditing ? (
            <>
              <Input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter text"
              />
              <Button onClick={handleSave}>Save</Button>
            </>
          ) : (
            <>
              <Text>{savedText}</Text>
              <Button onClick={handleEdit}>Edit</Button>
            </>
          )}
        </ContentContainer>
      </Card>
    </AppContainer>
  )
}

export default EditableTextInput
