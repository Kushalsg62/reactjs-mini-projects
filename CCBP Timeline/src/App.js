import TimelineView from './components/TimelineView'
import './App.css'

const App = () => {
  const timelineItemsList = [
    {
      id: 'c6aad2fb-7673-45cf-9606-a335acc0cf4b',
      categoryId: 'COURSE',
      title: '10 DECEMBER 2020',
      courseTitle: 'Static Website',
      description:
        'Build your own personal portfolio website and a website to host conferences and events. Publish your website and share it with your friends, family and beyond.',
      duration: '10 days',
      tagsList: [
        {id: 'c31b2ad8-f766-11eb-9a03-0242ac130003', name: 'HTML Elements'},
        {id: 'c31b2d08-f766-11eb-9a03-0242ac130003', name: 'Class Attribute'},
        {id: 'c31b2dee-f766-11eb-9a03-0242ac130003', name: 'Text Properties'},
        {id: 'c31b2eb6-f766-11eb-9a03-0242ac130003', name: 'Bootstrap'},
        {id: 'c31b2f6a-f766-11eb-9a03-0242ac130003', name: 'Box Properties'},
        {id: 'c31b347e-f766-11eb-9a03-0242ac130003', name: 'Layout'},
        {id: 'c31b358c-f766-11eb-9a03-0242ac130003', name: 'Flexbox'},
      ],
    },
    {
      id: 'a19d93d6-bdac-479e-b554-974ef9e6e66c',
      categoryId: 'PROJECT',
      title: '21 DECEMBER 2020',
      projectTitle: 'Tourism Website',
      description:
        'A tourism website enables the user to browse through the images of popular destinations.',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
      duration: '1 hr',
      projectUrl: 'https://tourismapp.ccbp.tech/',
    },
    {
      id: '40b82899-fdf7-4a3e-a43a-41a9917b4582',
      categoryId: 'COURSE',
      title: '5 JANUARY 2021',
      courseTitle: 'Responsive Website',
      description:
        'Build a responsive website that appears beautifully on any screen size. Develop a personal portfolio website, an E-commerce product listing website and a website to host conferences and events.',
      duration: '12 days',
      tagsList: [
        {
          id: '551e2b7e-f767-11eb-9a03-0242ac130003',
          name: 'Responsive Web Design',
        },
        {id: '551e2de0-f767-11eb-9a03-0242ac130003', name: 'Multiple Layouts'},
        {id: '551e3114-f767-11eb-9a03-0242ac130003', name: 'Column Wrapping'},
        {id: '551e31e6-f767-11eb-9a03-0242ac130003', name: 'Navbar'},
        {id: '551e32a4-f767-11eb-9a03-0242ac130003', name: 'Designing Layouts'},
        {id: '551e334e-f767-11eb-9a03-0242ac130003', name: 'Inheritance'},
        {id: '551e3402-f767-11eb-9a03-0242ac130003', name: 'CSS Gradients'},
      ],
    },
    {
      id: 'ae2ede68-af77-427c-817c-0ce4beeb69c7',
      categoryId: 'PROJECT',
      title: '7 JANUARY 2021',
      projectTitle: 'Food Munch',
      description: 'Food Munch Website is a user-centric food tech website.',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
      duration: '2 hrs',
      projectUrl: 'https://fm.ccbp.tech/',
    },
    {
      id: '4938c3d1-81cd-4729-9d2c-dcd50796aa4d',
      categoryId: 'COURSE',
      title: '30 JANUARY 2021',
      courseTitle: 'Dynamic Website',
      description:
        'Learn JavaScript fundamentals and build dynamic web apps like Counter, Guessing Game, Chat App, E-commerce web app and more.',
      duration: '20 days',
      tagsList: [
        {
          id: 'd4743c06-f767-11eb-9a03-0242ac130003',
          name: 'Declaring Variables',
        },
        {
          id: 'd4743ecc-f767-11eb-9a03-0242ac130003',
          name: 'Comparison Operator',
        },
        {id: 'd4743fe4-f767-11eb-9a03-0242ac130003', name: 'Functions'},
        {id: 'd47440d4-f767-11eb-9a03-0242ac130003', name: 'Object'},
        {id: 'd474434a-f767-11eb-9a03-0242ac130003', name: 'DOM Manipulations'},
        {id: 'd474443a-f767-11eb-9a03-0242ac130003', name: 'Loops'},
        {id: 'd4744516-f767-11eb-9a03-0242ac130003', name: 'Local Storage'},
      ],
    },
    {
      id: 'd6c4b3a5-7b1d-4906-aca8-823f44129004',
      categoryId: 'PROJECT',
      title: '6 FEBRUARY 2021',
      projectTitle: 'Todos Application',
      description:
        'Track day-to-day tasks. Create, edit, update status, and persist todos over reloads.',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png',
      duration: '3 hrs',
      projectUrl: 'https://todossapp.ccbp.tech/',
    },
    {
      id: '0a35abbe-22ca-40a1-81da-613f656b7702',
      categoryId: 'PROJECT',
      title: '15 FEBRUARY 2021',
      projectTitle: 'Wikipedia Search Application',
      description:
        'Users can search and view curated results and open detailed Wikipedia pages.',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/wiki-logo-img.png',
      duration: '4 hrs',
      projectUrl: 'https://wikiseaarch.ccbp.tech/',
    },
    {
      id: 'd80781c3-980e-4ab9-96ca-9ad1a9cdf93d',
      categoryId: 'COURSE',
      title: '15 MARCH 2021',
      courseTitle: 'RWD using Flexbox',
      description:
        'Learn to build responsive layouts using Flexbox and Media Queries.',
      duration: '7 days',
      tagsList: [
        {id: '34e6b208-f768-11eb-9a03-0242ac130003', name: 'Sizing Elements'},
        {id: '34e6b460-f768-11eb-9a03-0242ac130003', name: 'Flexbox Layout'},
        {id: '34e6b76c-f768-11eb-9a03-0242ac130003', name: 'Min & Max Sizes'},
        {
          id: '34e6b83e-f768-11eb-9a03-0242ac130003',
          name: 'Media Query Syntax',
        },
        {id: '34e6b8fc-f768-11eb-9a03-0242ac130003', name: 'Logical Operators'},
        {
          id: '34e6ba28-f768-11eb-9a03-0242ac130003',
          name: 'CSS box-sizing property',
        },
        {id: '34e6baf0-f768-11eb-9a03-0242ac130003', name: 'Media Features'},
      ],
    },
    {
      id: '7bc3f006-f0f1-4574-924b-17c480556727',
      categoryId: 'PROJECT',
      title: '20 MARCH 2021',
      projectTitle: 'Move Messenger',
      description:
        'A responsive landing page for Move Messenger that works smoothly on all devices.',
      imageUrl:
        'https://assets.ccbp.in/frontend/intermediate-rwd/move-messenger-img.png',
      duration: '5 hr',
      projectUrl: 'https://movemessengers.ccbp.tech/',
    },
    {
      id: 'e681e826-260c-4540-9ee5-f53d0e6ecba0',
      categoryId: 'COURSE',
      title: '30 APRIL 2021',
      courseTitle: 'React JS - Getting Started',
      description:
        'Learn to build dynamic apps using React. Become comfortable creating clean and maintainable applications from scratch.',
      duration: '18 days',
      tagsList: [
        {id: '94947ad2-f768-11eb-9a03-0242ac130003', name: 'Components'},
        {id: '94947d52-f768-11eb-9a03-0242ac130003', name: 'Lists'},
        {
          id: '94947e4c-f768-11eb-9a03-0242ac130003',
          name: 'Conditional Rendering',
        },
        {id: '94947f14-f768-11eb-9a03-0242ac130003', name: 'setState()'},
        {id: '94948270-f768-11eb-9a03-0242ac130003', name: 'Updating Phase'},
        {id: '94948342-f768-11eb-9a03-0242ac130003', name: 'Routing'},
        {id: '94948400-f768-11eb-9a03-0242ac130003', name: 'API Calls'},
      ],
    },
    {
      id: 'e093c08a-a2ae-413a-814b-e7c83f5f2ac3',
      categoryId: 'PROJECT',
      title: '26 MAY 2021',
      projectTitle: 'Nxt Trendz',
      description:
        'An E-commerce application like Amazon or Flipkart with search, filters, sorting and more.',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png',
      duration: '6 hrs',
      projectUrl: 'https://nxtz.ccbp.tech/',
    },
  ]

  return <TimelineView timelineItemsList={timelineItemsList} />
}

export default App
