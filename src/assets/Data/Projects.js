const projects = [
    {
      id: 0,
      name:  "OmniCalculator",
      description: "All of the calculators you need in one place!  This React.js application was created so that those who don't speak math can just enter numbers and get a result. Furthermore, each calculator has tested my javascript skills.  ",
      technologies: ['React.js', 'HTML5', 'CSS', 'Javascript', 'MongoDB', 'Chart.js'],
      image:  "https://github.com/dfabert/derick_fabert/blob/main/src/assets/Photos/OmniCalc.JPG?raw=true",
      link: "https://omnicalculator2020.herokuapp.com",
      repo: 'https://github.com/dfabert/CalculatorApp'

    },
    {
      id: 1,
      name:  "Google Books Save",
      description: "This application allows a user to search for books in google books and then save the books to be read later.  It is an example of calling information from an API, but saving the user input to a MongoDB.",
      technologies: ['React.js', 'HTML5', 'CSS', 'Javascript', 'Node', 'Express', 'MongoDB'],
      image:  "https://github.com/dfabert/GoogleBooks/blob/main/client/public/images/Deployed_Saved.JPG?raw=true",
      link: "https://booklist0823.herokuapp.com/",
      repo: 'https://github.com/dfabert/GoogleBooks'

    },
    {
      id: 10,
      name:  "This Portfolio",
      description: "I built this portfolio on React and I usually test most of my new skills somewhere on here first. Many of the components I have made for this application can be repurposed for other applications",
      technologies: ['React.js', 'HTML5', 'CSS', 'Javascript'],
      image:  "https://github.com/dfabert/DerickFabert/blob/master/assets/Photos/Derick.Fabert.0181-6x8.jpg?raw=true",
      link: "https://dfabert.github.io/derick_fabert/",
      repo: 'https://github.com/dfabert/derick_fabert'
    },
    {
      id: 9,
      name:  "Day Planner",
      description: "This application is a single day planner where the user can enter tasks for each hour.  As the day goes on, the background colors will update for the current time as well as the past hours.  This is an example of how HTML, CSS and jQuery can be used as well as Moment.js.",
      technologies: ['HTML5', 'CSS', 'Javascript', 'jQuery', 'Moment.js'],
      image:  "https://raw.githubusercontent.com/dfabert/DayPlanner/master/assets/DeployedImage.jpg",
      link: "https://dfabert.github.io/DayPlanner/",
      repo: 'https://github.com/dfabert/DayPlanner'

    },
    {
      id: 2,
      name:  "Password Generator",
      description: "The Password Generator generates a very secure password through prompts",
      technologies: ['HTML5' , 'CSS', 'Javascript'],
      image:  "https://raw.githubusercontent.com/dfabert/PasswordGenerator/master/PassGenPhoto.jpg",
      link: "https://dfabert.github.io/PasswordGenerator/PasswordGenerator.html",
      repo: 'https://github.com/dfabert/PasswordGenerator'
    },
    {
      id: 3,
      name:  "NBA Dashboard",
      description: "During the NBA season, this application will pull the scores and standings of the NBA.  It uses the TheSportsDB for the scores and standings and is another example of using an API.",
      technologies: ['HTML5', 'CSS', 'Javascript', 'API'],
      image:  "https://dfabert.github.io/DerickFabert/assets/Photos/thumbNBADB.jpg",
      link: "https://dfabert.github.io/NBADashboard/index.html",
      repo: 'https://github.com/dfabert/NBADashboard'
    },
    {
      id: 4,
      name:  "Weather Dashboard",
      description: "This weather dashboard is designed for people who want to look at different cities multiple times.  The displayed forecast is from an the OpenWeather API. The city will be saved in the local storage to be called back later.",
      technologies: ['HTML5', 'CSS', 'Javascript', 'API', 'Local Storage'],
      image:  "https://github.com/dfabert/WXDashboard/blob/master/assets/deployed.jpg?raw=true",
      link: "https://dfabert.github.io/WXDashboard/",
      repo: 'https://github.com/dfabert/WXDashboard'
    },
    {
      id: 5,
      name:  "Eat Da Burger",
      description: "This is an app that allows the user to keep track of the burgers he or she would like to eat. When they eat the burger, they can hit devour and the burger will move to the other side.  This is a simple example of using MySQL to store and edit data.",
      technologies: ['MySql', 'Express-handlebars','Node', 'HTML5', 'CSS', 'Javascript'],
      image:  "https://github.com/dfabert/BurgersToEat/blob/main/public/assets/img/deployed.jpg?raw=true",
      link: "https://safe-forest-88887.herokuapp.com/",
      repo: 'https://github.com/dfabert/BurgersToEat'
    }
    ,
    {
      id: 6,
      name:  "Note Taker",
      description: "Note taker and organizer with Express.  This application uses an express backend to save, retrieve, edit and delete notes from a JSON file.",
      technologies: ['Node', 'Express', 'HTML5', 'CSS', 'Javascript'],
      image:  "https://github.com/dfabert/NoteTaker/blob/master/public/assets/images/Notes.JPG?raw=true",
      link: "https://sleepy-lake-76565.herokuapp.com//",
      repo: 'https://github.com/dfabert/NoteTaker'
    }
    ,
    {
      id: 7,
      name:  "Travel Budget",
      description: "This progressive web application (PWA) will track your deposits and expenses, even when you are offline. Once you return to service, the application will update your online database.",
      technologies: ['IndexedDB', 'Node', 'Express', 'HTML5', 'CSS', 'Javascript', 'PWA', 'MongoDB'],
      image:  "https://github.com/dfabert/TravelBudget/blob/main/public/assets/ScreenGrab.JPG?raw=true",
      link: "https://shrouded-river-56580.herokuapp.com/",
      repo: 'https://github.com/dfabert/TravelBudget'
    }
    ,
    {
      id: 8,
      name:  "Workout Tracker",
      description: "This tracker is designed to keep track of recent workouts so the user can see progress and recall old workouts.  The backend uses a Mongo database with a Mongoose schema and routes are handled with Express.",
      technologies: ['MongoDB', 'Express', 'Node', 'HTML5', 'CSS', 'Javascript'],
      image:  "https://github.com/dfabert/WorkoutTracker/blob/main/public/img/screenshots/index.JPG?raw=true",
      link: "https://salty-chamber-71317.herokuapp.com/?id=5fa55f8c2109c900177139f0",
      repo: 'https://github.com/dfabert/WorkoutTracker'
    }
    
  ]

export default projects;