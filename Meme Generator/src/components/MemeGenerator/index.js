import {Component} from 'react'

import {
  MainContainer,
  FormContainer,
  MemeContainer,
  MemeImageContainer,
  MemeText,
  Heading,
  Label,
  Input,
  Select,
  Option,
  Button,
} from './styledComponents'

const fontSizesOptionsList = [
  {optionId: '8', displayText: '8'},
  {optionId: '12', displayText: '12'},
  {optionId: '16', displayText: '16'},
  {optionId: '20', displayText: '20'},
  {optionId: '24', displayText: '24'},
  {optionId: '28', displayText: '28'},
  {optionId: '32', displayText: '32'},
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    isGenerated: false,
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    this.setState({isGenerated: true})
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, isGenerated} = this.state

    return (
      <MainContainer>
        <FormContainer onSubmit={this.onGenerateMeme}>
          <Heading>Meme Generator</Heading>

          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            id="imageUrl"
            type="text"
            value={imageUrl}
            onChange={this.onChangeImageUrl}
          />

          <Label htmlFor="topText">Top Text</Label>
          <Input
            id="topText"
            type="text"
            value={topText}
            onChange={this.onChangeTopText}
          />

          <Label htmlFor="bottomText">Bottom Text</Label>
          <Input
            id="bottomText"
            type="text"
            value={bottomText}
            onChange={this.onChangeBottomText}
          />

          <Label htmlFor="fontSize">Font Size</Label>
          <Select
            id="fontSize"
            value={fontSize}
            onChange={this.onChangeFontSize}
          >
            {fontSizesOptionsList.map(each => (
              <Option key={each.optionId} value={each.optionId}>
                {each.displayText}
              </Option>
            ))}
          </Select>

          <Button type="submit">Generate</Button>
        </FormContainer>

        <MemeContainer>
          {isGenerated && (
            <MemeImageContainer data-testid="meme" backgroundImage={imageUrl}>
              <MemeText fontSize={fontSize}>{topText}</MemeText>
              <MemeText fontSize={fontSize}>{bottomText}</MemeText>
            </MemeImageContainer>
          )}
        </MemeContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
