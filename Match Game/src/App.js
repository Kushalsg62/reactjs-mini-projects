import MatchGame from './components/MatchGame'
import './App.css'

const tabsList = [
  {tabId: 'FRUIT', displayText: 'Fruits'},
  {tabId: 'ANIMAL', displayText: 'Animals'},
  {tabId: 'PLACE', displayText: 'Places'},
]

const imagesList = [
  {
    id: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/orange-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '04ac6b9f-b7e7-45f7-a8fc-fd48f3f72526',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/panda-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/panda-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: 'a132f546-5b2b-4c0d-b9e4-e524bdf904cc',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/zebra-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/zebra-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: 'd89386da-94db-4275-9cb5-249c6e071a19',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/paris-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/paris-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: 'd810bbb0-1683-407a-8db6-898fe7b75782',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/giraffe-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/giraffe-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: '176aab62-e86a-4ccd-8b89-5b83c3f02506',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/taj-mahal-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/taj-mahal-thumbnail-img.png',
    category: 'PLACE',
  },
  {
    id: '0e8daf1b-45b0-4eb0-9dde-383fede78a9b',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/monkey-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/monkey-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: '1a38bf4a-659d-4470-956c-56c1cddb6735',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/cheetah-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/cheetah-thumbnail-img.png',
    category: 'ANIMAL',
  },
  {
    id: '8f2ebd70-4fdd-47a0-b4f9-a6c654b519ab',
    imageUrl:
      'https://images.pexels.com/photos/1929611/pexels-photo-1929611.jpeg',
    thumbnailUrl:
      'https://images.pexels.com/photos/1929611/pexels-photo-1929611.jpeg',
    category: 'PLACE',
  },
  {
    id: '7a72c38e-a83d-48eb-b9ce-ae3c0361cc49',
    imageUrl:
      'https://images.pexels.com/photos/14050363/pexels-photo-14050363.jpeg',
    thumbnailUrl:
      'https://images.pexels.com/photos/14050363/pexels-photo-14050363.jpeg',
    category: 'ANIMAL',
  },
  {
    id: '30e23e09-5c47-4d86-8c4d-d73e6e13e96d',
    imageUrl:
      'https://images.pexels.com/photos/35101659/pexels-photo-35101659.jpeg',
    thumbnailUrl:
      'https://images.pexels.com/photos/35101659/pexels-photo-35101659.jpeg',
    category: 'PLACE',
  },
  {
    id: '4c2e6c8d-3e4f-4b5d-9c5e-5e8dc3f4d5e9',
    imageUrl:
      'https://images.pexels.com/photos/1011093/pexels-photo-1011093.jpeg',
    thumbnailUrl:
      'https://images.pexels.com/photos/1011093/pexels-photo-1011093.jpeg',
    category: 'PLACE',
  },
  {
    id: '4f0c2b90-4e97-47c1-8cc0-65d6dccc1712',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/pineapple-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/pineapple-img.png',
    category: 'FRUIT',
  },
  {
    id: '5a79c58c-afe5-44f1-858a-d6e5e3f1e0c3',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/strawberry-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/strawberry-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: 'd5d82eba-da52-4e99-a8e4-a04c8a4e74fb',
    imageUrl:
      'https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg',
    thumbnailUrl:
      'https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg',
    category: 'FRUIT',
  },
  {
    id: '7b081897-d0d2-4c47-a0b3-e9f6d324e8bc',
    imageUrl:
      'https://images.pexels.com/photos/1053914/pexels-photo-1053914.jpeg',
    thumbnailUrl:
      'https://images.pexels.com/photos/1053914/pexels-photo-1053914.jpeg',
    category: 'FRUIT',
  },
  {
    id: '5e8dc63b-81ca-4f38-83f9-57a30d7bfc3e',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/apple-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/apple-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '2f01e8d4-0c2b-4dfe-a4c3-e1e6f7f8e0c6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/watermelon-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/watermelon-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '3e12c0a2-ec1e-4b5a-bd7a-5a3c5e38c5cb',
    imageUrl:
      'https://images.pexels.com/photos/2316466/pexels-photo-2316466.jpeg',
    thumbnailUrl:
      'https://images.pexels.com/photos/2316466/pexels-photo-2316466.jpeg',
    category: 'FRUIT',
  },
  {
    id: '1c16e5f7-e30e-4c47-b0c5-5e8dc3f4d5e9',
    imageUrl:
      'https://images.pexels.com/photos/5945763/pexels-photo-5945763.jpeg',
    thumbnailUrl:
      'https://images.pexels.com/photos/5945763/pexels-photo-5945763.jpeg',
    category: 'FRUIT',
  },
  {
    id: '5e8dc63b-81ca-4f38-83f9-57a30d7bfc3f',
    imageUrl:
      'https://images.pexels.com/photos/951007/pexels-photo-951007.jpeg',
    thumbnailUrl:
      'https://images.pexels.com/photos/951007/pexels-photo-951007.jpeg',
    category: 'ANIMAL',
  },
  {
    id: '9fd02ac4-4a8e-4c56-bc52-5e8dc3f4d5e9',
    imageUrl:
      'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg',
    thumbnailUrl:
      'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg',
    category: 'ANIMAL',
  },
  {
    id: '8e91c32d-3c6e-4e5e-9c5e-5e8dc3f4d5e9',
    imageUrl:
      'https://images.pexels.com/photos/4696771/pexels-photo-4696771.jpeg',
    thumbnailUrl:
      'https://images.pexels.com/photos/4696771/pexels-photo-4696771.jpeg',
    category: 'ANIMAL',
  },
  {
    id: '4c2e6c8d-3e4f-4b5d-9c5e-5e8dc3f4d5e0',
    imageUrl: 'https://images.pexels.com/photos/46273/pexels-photo-46273.jpeg',
    thumbnailUrl:
      'https://images.pexels.com/photos/46273/pexels-photo-46273.jpeg',
    category: 'PLACE',
  },
  {
    id: '8f2ebd70-4fdd-47a0-b4f9-a6c654b519ac',
    imageUrl:
      'https://images.pexels.com/photos/1548024/pexels-photo-1548024.jpeg',
    thumbnailUrl:
      'https://images.pexels.com/photos/1548024/pexels-photo-1548024.jpeg',
    category: 'PLACE',
  },
  {
    id: '8f2ebd70-4fdd-47a0-b4f9-a6c654b519ad',
    imageUrl:
      'https://images.pexels.com/photos/2333081/pexels-photo-2333081.jpeg',
    thumbnailUrl:
      'https://images.pexels.com/photos/2333081/pexels-photo-2333081.jpeg',
    category: 'PLACE',
  },
  {
    id: '8f2ebd70-4fdd-47a0-b4f9-a6c654b519ae',
    imageUrl:
      'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg',
    thumbnailUrl:
      'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg',
    category: 'PLACE',
  },
  {
    id: '8f2ebd70-4fdd-47a0-b4f9-a6c654b519af',
    imageUrl:
      'https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg',
    thumbnailUrl:
      'https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg',
    category: 'PLACE',
  },
  {
    id: '8f2ebd70-4fdd-47a0-b4f9-a6c654b519ag',
    imageUrl:
      'https://images.pexels.com/photos/35172412/pexels-photo-35172412.jpeg',
    thumbnailUrl:
      'https://images.pexels.com/photos/35172412/pexels-photo-35172412.jpeg',
    category: 'PLACE',
  },
  {
    id: '4f0c2b90-4e97-47c1-8cc0-65d6dccc1713',
    imageUrl:
      'https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg',
    thumbnailUrl:
      'https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg',
    category: 'FRUIT',
  },
  {
    id: '5a79c58c-afe5-44f1-858a-d6e5e3f1e0c4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/papaya-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/papaya-thumbnail-img.png',
    category: 'FRUIT',
  },
  {
    id: '5a79c58c-afe5-44f1-858a-d6e5e3f1e0c5',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/cherry-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game/cherry-thumbnail-img.png',
    category: 'FRUIT',
  },
]

const App = () => <MatchGame tabsList={tabsList} imagesList={imagesList} />

export default App
