import React, { useState, useRef } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import NavBar from "./main/components/navigation/NavBar";
import MainPage from "./main/pages/MainPage";
import Tour from "./main/components/tour/Tour";
import RegistrationForm from "./main/components/Registration/formik/RegistrationForm";
import LoginForm from "./main/components/Registration/formik/LoginForm";
import NewCourse from "./courses/course-creation/NewCourse";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserCourses from "./courses/course-view/UserCourses";
import UpdateCourse from "./courses/course-creation/UpdateCourse";
import { useHttpClient } from "./shared/hooks/http-hook";

import AutoCompleteSearch from "./shared/components/UIElements/AutoCompleteSearch";
import CourseSection from "./courses/course-creation/CourseSection";
import RBAutoCompleteSearch from "./shared/components/UIElements/RBAutoCompleteSearch";
// import Ttest from "./shared/components/UIElements/Ttest";
import Courses from "./courses/course-view/Courses";
import SectionView from "./courses/course-view/SectionView";
// import CourseTitle from "./courses/course-creation/CourseTitle";
import Test from "./courses/course-creation/Test";
import AudioStoring from "./courses/course-creation/word-creation/AudioStoring";
import ImageStoring from "./courses/course-creation/word-creation/ImageStoring";
import VideoPlayer from "./courses/course-view/VideoPlayer";
import RBtest from "./shared/components/UIElements/RBtest";
import WordAutoCompleteSearch from "./courses/course-creation/WordAutoCompleteSearch";
import WordsPart from "./courses/course-creation/WordsPart";
import WordReview from "./courses/course-view/WordReview";
import Carousel from "./courses/course-view/Carousel";
import WordCreation from "./courses/word-creation/WordCreation";
import {
  BarLoader,
  CircleLoader,
  ClipLoader,
  BounceLoader,
  RingLoader,
  BeatLoader,
  ClockLoader,
  DotLoader,
  ClimbingBoxLoader,
  RotateLoader,
  ScaleLoader,
  SyncLoader,
  PropagateLoader,
} from "react-spinners";
import LoadingSpinner from "./courses/course-view/LoadingSpinner";
import CourseView from "./courses/course-view/CourseView";

function App() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  // React.useEffect(() => {
  //   (function () {
  //     const dataSave = async (data) => {
  //       try {
  //         const saveDataResponse = await sendRequest(
  //           "http://localhost:5000/api/database",
  //           "POST",
  //           JSON.stringify(data),
  //           {
  //             "Content-Type": "application/json",
  //           }
  //         );
  //         console.log("successfully saved data");
  //       } catch (err) {
  //         console.log("sth wrong happened");
  //       }
  //     };
  //     newData.forEach((element) => {
  //       dataSave(element);
  //       console.log(`${element.word} is saved.`);
  //     });
  //   })();
  // }, []);

  // console.log(data);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const logInStatusHandler = (uid, token) => {
    setToken(token);
    setUserId(uid);
  };

  const logOutStatusHandler = () => {
    setToken(null);
    setUserId(null);
  };

  const slides = [
    { content: <h3>Slide 1</h3> },
    { content: <h3>Slide 2</h3> },
    { content: <h3>Slide 3</h3> },
    // Add more slides as needed
  ];
  ////////////////
  let data = [
    {
      word: "gotta",
      pronunciation: "/ˈɡɒtə $ ˈɡɑːtə/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "",
      register: "informal",
      additionalInfo: "",
      translation: "باید",
      title: "gotta",
      meaning: {
        index: 0,
        definition:
          "a short form of ‘have got to’, ‘has got to’, ‘have got a’, or ‘has got a’, which most people think is incorrect",
        examples: ["We gotta go now."],
      },
      images: [],
    },
    {
      word: "hump",
      pronunciation: "/hʌmp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation:
        " برآمدگی روی یک سطح ، مانع سرعتگیر ، کوهان (شتر) ، قوز کمر ",
      title: "hump _ noun _ 1",
      meaning: {
        index: 1,
        definition:
          "a large round shape that rises above the surface of something",
        examples: ["the hump of a hill"],
      },
      images: [],
    },
    {
      word: "hump",
      pronunciation: "/hʌmp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation:
        " برآمدگی روی یک سطح ، مانع سرعتگیر ، کوهان (شتر) ، قوز کمر ",
      title: "hump _ noun _ 2",
      meaning: {
        index: 2,
        definition:
          "→ speed/traffic humps British English a series of humps in the road, designed to make traffic slow down",
        examples: [],
      },
      images: [],
    },
    {
      word: "hump",
      pronunciation: "/hʌmp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation:
        " برآمدگی روی یک سطح ، مانع سرعتگیر ، کوهان (شتر) ، قوز کمر ",
      title: "hump _ noun _ 3",
      meaning: {
        index: 3,
        definition: "a raised part on the back of a camel",
        examples: [],
      },
      images: [],
    },
    {
      word: "hump",
      pronunciation: "/hʌmp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation:
        " برآمدگی روی یک سطح ، مانع سرعتگیر ، کوهان (شتر) ، قوز کمر ",
      title: "hump _ noun _ 4",
      meaning: {
        index: 4,
        definition:
          "a raised part on someone’s back that is caused by an unusually curved spine",
        examples: [],
      },
      images: [1, 2, 3],
    },
    {
      word: "hump",
      pronunciation: "/hʌmp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation:
        " برآمدگی روی یک سطح ، مانع سرعتگیر ، کوهان (شتر) ، قوز کمر ",
      title: "hump _ noun _ 5",
      meaning: {
        index: 5,
        definition:
          "→ be over the hump ,  to have finished the most difficult part of something",
        examples: [],
      },
      images: [],
    },
    {
      word: "hairpiece",
      pronunciation: "/ˈheəpiːs $ ˈher-/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "موی مصنوعی",
      title: "hairpiece _ noun",
      meaning: {
        index: 0,
        definition:
          "a piece of false hair that you wear on your head to make your own hair look thicker",
        examples: [
          "The very first day her ad ran, she got a call for a hairpiece to be worn at a trendy wedding.",
          "Look-Willard Scott has lost his hairpiece!",
          "Brent, in spite of the obvious hairpiece and the gold chain, is a rebel.",
        ],
      },
      images: [1, 2, 3],
    },
    {
      word: "chalk",
      pronunciation: "/tʃɔːk $ tʃɒːk/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "گچ",
      title: "chalk _ noun _ 1",
      meaning: {
        index: 1,
        definition:
          "soft white or grey rock formed a long time ago from the shells of small sea animals",
        examples: ["chalk cliffs"],
      },
      images: [],
    },
    {
      word: "chalk",
      pronunciation: "/tʃɔːk $ tʃɒːk/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "گچ",
      title: "chalk _ noun _ 2",
      meaning: {
        index: 2,
        definition:
          "small sticks of a white or coloured substance like soft rock, used for writing or drawing",
        examples: [
          "a box of coloured chalks",
          "a piece of chalk",
          "writing in chalk on the blackboard",
        ],
      },
      images: [1, 2],
    },
    {
      word: "go through",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "تجربه کردن",
      title: "go through _ phrasal verb _ 1",
      meaning: {
        index: 1,
        definition:
          "to experience a difficult or unpleasant situation, feeling etc",
        examples: [
          "When you’re going through a crisis, it often helps to talk to someone.",
          "He’s going through a divorce at the moment.",
        ],
      },
      images: [],
    },
    {
      word: "go through",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "تجربه کردن",
      title: "go through _ phrasal verb _ 2",
      meaning: {
        index: 2,
        definition: "to experience a particular process",
        examples: [
          "Candidates must go through a process of selection.",
          "Caterpillars go through several stages of growth.",
        ],
      },
      images: [],
    },
    {
      word: "go through",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "تجربه کردن",
      title: "go through _ phrasal verb _ 3",
      meaning: {
        index: 3,
        definition: "to use up money or a supply of something",
        examples: ["We went through five pints of milk last week."],
      },
      images: [],
    },
    {
      word: "go through",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "تجربه کردن",
      title: "go through _ phrasal verb _ 4",
      meaning: {
        index: 4,
        definition:
          "if a law goes through, or goes through Parliament, it is officially accepted",
        examples: [],
      },
      images: [],
    },
    {
      word: "go through",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "تجربه کردن",
      title: "go through _ phrasal verb _ 5",
      meaning: {
        index: 5,
        definition:
          "if a deal or agreement goes through, it is officially accepted and agreed",
        examples: [
          "He accepted the offer and the deal went through.",
          "The sale of the land went through.",
        ],
      },
      images: [],
    },
    {
      word: "go through",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "تجربه کردن",
      title: "go through _ phrasal verb _ 6",
      meaning: {
        index: 6,
        definition: "to practise something, for example a performance",
        examples: [
          "Let’s go through the whole thing again, from the beginning.",
        ],
      },
      images: [],
    },
    {
      word: "go through",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "تجربه کردن",
      title: "go through _ phrasal verb _ 7",
      meaning: {
        index: 7,
        definition:
          "to search something in order to find something in particular",
        examples: [
          "Dave went through his pockets looking for the keys.",
          "Customs officers went through all my bags.",
        ],
      },
      images: [],
    },
    {
      word: "go through",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "تجربه کردن",
      title: "go through _ phrasal verb _ 8",
      meaning: {
        index: 8,
        definition:
          "to read or discuss something in order to make sure it is correct",
        examples: [
          "We’ll go through the details later on.",
          "Do you want me to go through this and check your spellings?",
        ],
      },
      images: [],
    },
    {
      word: "date",
      pronunciation: "/deɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "تاریخ",
      title: "date _ noun _ 1",
      meaning: {
        index: 1,
        definition:
          "a particular day of the month or year, especially shown by a number",
        examples: [
          "The date on the letter was 30th August 1962.",
          "What’s today’s date?",
          "What’s the date of the next meeting?",
          "You should apply at least 8 weeks before your date of departure.",
          "Have you set a date for the wedding yet?",
        ],
      },
      images: [],
    },
    {
      word: "date",
      pronunciation: "/deɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "تاریخ",
      title: "date _ noun _ 2",
      meaning: {
        index: 2,
        definition: "→ at a later/future date,  at some time in the future",
        examples: [" The details will be agreed at a later date."],
      },
      images: [],
    },
    {
      word: "date",
      pronunciation: "/deɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "تاریخ",
      title: "date _ noun _ 3",
      meaning: {
        index: 3,
        definition: "→ to date, up to now",
        examples: [
          "   The cost of the work to date has been about £150 million.",
          "Her best performance to date was her third place at the World Junior Championships.  ",
        ],
      },
      images: [],
    },
    {
      word: "date",
      pronunciation: "/deɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "تاریخ",
      title: "date _ noun _ 4",
      meaning: {
        index: 4,
        definition:
          "an occasion when you go out with someone that you like in a romantic way or someone that you have a date with",
        examples: [
          "I’ve got a date with Andrea tomorrow night.",
          "I felt like a teenager going out on a first date.",
          "Can I bring my date to the party?",
        ],
      },
      images: [1, 2],
    },
    {
      word: "date",
      pronunciation: "/deɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "تاریخ",
      title: "date _ noun _ 5",
      meaning: {
        index: 5,
        definition: "a time arranged to meet someone, especially socially",
        examples: ["Let’s make a date to come over and visit."],
      },
      images: [],
    },
    {
      word: "date",
      pronunciation: "/deɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "تاریخ",
      title: "date _ noun _ 6",
      meaning: {
        index: 6,
        definition: "a sweet sticky brown fruit with a long hard seed inside",
        examples: [],
      },
      images: [],
    },
    {
      word: "cafeteria",
      pronunciation: "/ˌkæfəˈtɪəriə $ -ˈtɪr-/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "cafeteria _ noun",
      meaning: {
        index: 0,
        definition:
          "a restaurant, often in a factory, college etc, where you choose from foods that have already been cooked and carry your own food to a table",
        examples: ["the school cafeteria"],
      },
      images: [],
    },
    {
      word: "turn out",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "turn out _ phrasal verb _ 1",
      meaning: {
        index: 1,
        definition:
          "to happen in a particular way, or to have a particular result, especially one that you did not expect",
        examples: [
          "It was a difficult time, but eventually things turned out all right.",
          "It turned out that I was wrong.",
          "As it turned out, he passed the exam quite easily.",
          "That guy turned out to be Maria’s second cousin.",
        ],
      },
      images: [],
    },
    {
      word: "turn out",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "turn out _ phrasal verb _ 2",
      meaning: {
        index: 2,
        definition:
          "to stop the flow of electricity to a light by pressing a switch, pulling a string etc",
        examples: ["Don’t forget to turn out the lights when you go!"],
      },
      images: [],
    },
    {
      word: "turn out",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "turn out _ phrasal verb _ 3",
      meaning: {
        index: 3,
        definition:
          "if a lot of people turn out for an event, they go to watch it or take part in it",
        examples: [
          "About 70% of the population turned out for the election.",
          "Thousands turned out to watch yesterday’s match against Ireland.",
        ],
      },
      images: [],
    },
    {
      word: "turn out",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "turn out _ phrasal verb _ 4",
      meaning: {
        index: 4,
        definition:
          "to force someone to leave a place permanently, especially their home",
        examples: ["If you can’t pay the rent, they turn you out."],
      },
      images: [],
    },
    {
      word: "weird",
      pronunciation: "/wɪəd $ wɪrd/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "informal",
      additionalInfo: "",
      translation: "عجیب و غریب",
      title: "weird _ adjective",
      meaning: {
        index: 0,
        definition:
          "very strange and unusual, and difficult to understand or explain",
        examples: [
          "A really weird thing happened last night.",
          "He’s a weird bloke.",
          "They sell all sorts of weird and wonderful (=very strange) products.",
        ],
      },
      images: [],
    },
    {
      word: "grab",
      pronunciation: "/ɡræb/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "grab _ verb _ 1",
      meaning: {
        index: 1,
        definition:
          "to take hold of someone or something with a sudden or violent movement",
        examples: [
          "I grabbed my bag and ran off.",
          "Two men grabbed her and pushed her to the ground.",
          "Kay grabbed hold of my arm to stop herself falling.",
          "I managed to grab the gun from Bowen.",
        ],
      },
      images: [],
    },
    {
      word: "grab",
      pronunciation: "/ɡræb/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "grab _ verb _ 2",
      meaning: {
        index: 2,
        definition: "to get some food or sleep quickly because you are busy",
        examples: [
          "Why don’t you go and grab some sleep",
          "Hang on while I grab a cup of coffee.",
          "Let’s grab a bite to eat before we go.",
        ],
      },
      images: [],
    },
    {
      word: "grab",
      pronunciation: "/ɡræb/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "grab _ verb _ 3",
      meaning: {
        index: 3,
        definition: "to get something for yourself, sometimes in an unfair way",
        examples: [
          "Try to get there early and grab good seats.",
          "Bob tried to grab all the profit.",
        ],
      },
      images: [],
    },
    {
      word: "grab",
      pronunciation: "/ɡræb/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "grab _ verb _ 4",
      meaning: {
        index: 4,
        definition:
          " to take an opportunity, accept an invitation etc immediately",
        examples: [
          "I think you should grab your chance to travel while you’re young.",
          "She grabbed the opportunity to go to America.",
          "Melanie grabbed at the invitation to go.",
          "This is our chance to grab a slice of this new market.",
        ],
      },
      images: [],
    },
    {
      word: "grab",
      pronunciation: "/ɡræb/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "grab _ verb _ 5",
      meaning: {
        index: 5,
        definition: "to get someone’s attention",
        examples: [
          "The book is full of good ideas to grab your students’ attention.",
          "The plight of the refugees immediately grabbed the headlines (=was the most important story in the newspapers).",
        ],
      },
      images: [],
    },
    {
      word: "grab",
      pronunciation: "/ɡræb/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "grab _ verb _ 6",
      meaning: {
        index: 6,
        definition: "to take information on a computer, website etc",
        examples: [],
      },
      images: [],
    },
    {
      word: "intestine",
      pronunciation: "/ɪnˈtestɪn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "روده",
      title: "intestine _ noun",
      meaning: {
        index: 0,
        definition:
          "the long tube in your body through which food passes after it leaves your stomach",
        examples: [
          "The village paths soon became covered with a mass of bodies, brains, blood and intestines.",
        ],
      },
      images: [],
    },
    {
      word: "stuff",
      pronunciation: "/stʌf/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "informal",
      additionalInfo: "",
      translation: "چیزها",
      title: "stuff _ noun _ 1",
      meaning: {
        index: 1,
        definition:
          "used when you are talking about things such as substances, materials, or groups of objects when you do not know what they are called, or it is not important to say exactly what they are",
        examples: [
          "I’ve got some sticky stuff on my shoe.",
          "How do you think you’re going to fit all that stuff into the car?",
          "I felt sorry for the ones who had to eat the awful stuff.",
          "Where’s all the camping stuff?",
        ],
      },
      images: [],
    },
    {
      word: "stuff",
      pronunciation: "/stʌf/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "informal",
      additionalInfo: "",
      translation: "چیزها",
      title: "stuff _ noun _ 2",
      meaning: {
        index: 2,
        definition:
          "somebody’s stuff, informal the things that belong to someone",
        examples: ["Did you get the rest of your stuff?"],
      },
      images: [],
    },
    {
      word: "stuff",
      pronunciation: "/stʌf/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "informal",
      additionalInfo: "",
      translation: "چیزها",
      title: "stuff _ noun _ 3",
      meaning: {
        index: 3,
        definition:
          "used when talking about different activities, subjects, or ideas, when you do not say exactly what these are",
        examples: [
          "What kind of stuff do you like to read?",
          "I’ve got so much stuff to do this weekend.",
          "There’s a lot of interesting stuff in this book.",
          "He’s talked to me about all that stuff too.",
          "He does mountain biking and skiing, and stuff like that.",
        ],
      },
      images: [],
    },
    {
      word: "stuff",
      pronunciation: "/stʌf/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "informal",
      additionalInfo: "",
      translation: "چیزها",
      title: "stuff _ noun _ 4",
      meaning: {
        index: 4,
        definition:
          "used when you are talking about what someone has done or made, for example writing, music, or art",
        examples: [
          "I don’t like his stuff.",
          "John Lee was getting ready to play his stuff.",
          "He did some great stuff in his early films.",
          "good stuff British English (=used to tell someone that their work is good)",
          "This is good stuff.",
        ],
      },
      images: [],
    },
    {
      word: "stuff",
      pronunciation: "/stʌf/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "informal",
      additionalInfo: "",
      translation: "چیزها",
      title: "stuff _ noun _ 5",
      meaning: {
        index: 5,
        definition:
          "→ ... and stuff, spoken informal, used to say that there are other things similar to what you have just mentioned, but you are not going to say what they are ",
        examples: [
          "There’s some very good music there, CD systems and stuff, and laser disks",
        ],
      },
      images: [],
    },
    {
      word: "cleanse",
      pronunciation: "/klɛnz/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "پاک کردن",
      title: "cleanse _ verb _ 1",
      meaning: {
        index: 1,
        definition: "to make something completely clean",
        examples: [
          "The body naturally cleanses itself of toxins.",
          "The company claims that its products can cleanse the skin.",
        ],
      },
      images: [],
    },
    {
      word: "cleanse",
      pronunciation: "/klɛnz/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "پاک کردن",
      title: "cleanse _ verb _ 2",
      meaning: {
        index: 2,
        definition:
          "to remove everything that is bad or immoral from a person’s character, an organization, or a place – used especially in news reports",
        examples: [
          "The government is trying to cleanse the country of corruption.",
          "The new law is aimed at cleansing the sport of drugs.",
          "The mayor was elected on a promise to cleanse the city government of corruption.",
        ],
      },
      images: [],
    },
    {
      word: "aura",
      pronunciation: "/ˈɔːrə/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "aura _ noun",
      meaning: {
        index: 0,
        definition:
          "a quality or feeling that seems to surround or come from a person or a place",
        examples: ["The building retains an aura of mystery."],
      },
      images: [],
    },
    {
      word: "fixated",
      pronunciation: "/fɪkˈseɪtɪd/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "fixated _ adjective",
      meaning: {
        index: 0,
        definition: "always thinking or talking about one particular thing",
        examples: [
          "He never used to be so fixated on losing weight.",
          "She becomes fixated on pursuing justice at all costs.",
        ],
      },
      images: [],
    },
    {
      word: "decaf",
      pronunciation: "/ˈdiːkæf/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "informal",
      additionalInfo: "",
      translation: "",
      title: "decaf _ noun",
      meaning: {
        index: 0,
        definition:
          "coffee that has had the caffeine (=a substance that keeps you awake) removed",
        examples: [],
      },
      images: [],
    },
    {
      word: "bridesmaid",
      pronunciation: "/ˈbraɪdzmeɪd/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "bridesmaid _ noun",
      meaning: {
        index: 0,
        definition:
          "a girl or woman, usually unmarried, who helps a bride on her wedding day and is with her at the wedding",
        examples: [
          "She was one of my bridesmaids.",
          "I’ve asked my sister to be my bridesmaid.",
        ],
      },
      images: [],
    },
    {
      word: "gravy",
      pronunciation: "/ˈɡreɪvi/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "gravy _ noun",
      meaning: {
        index: 0,
        definition:
          "a sauce made from the juice that comes from meat as it cooks, mixed with flour and water",
        examples: ["roast beef and gravy", "a jug of gravy"],
      },
      images: [],
    },
    {
      word: "gravy boat",
      pronunciation: "/ˈɡreɪvi bəʊt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "gravy boat _ noun",
      meaning: {
        index: 0,
        definition: "a long jug that you pour gravy from",
        examples: [],
      },
      images: [],
    },
    {
      word: "survivor",
      pronunciation: "/səˈvaɪvə $ sərˈvaɪvər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "survivor _ noun _ 1",
      meaning: {
        index: 1,
        definition:
          "someone who continues to live after an accident, war, or illness",
        examples: [
          "Emergency help is needed for survivors of the earthquake.",
          "She was the sole survivor (=only survivor) of the massacre.",
        ],
      },
      images: [],
    },
    {
      word: "survivor",
      pronunciation: "/səˈvaɪvə $ sərˈvaɪvər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "survivor _ noun _ 2",
      meaning: {
        index: 2,
        definition:
          "someone who manages to live normally in spite of many problems",
        examples: ["Don’t worry about Kurt; he’s a survivor."],
      },
      images: [],
    },
    {
      word: "survivor",
      pronunciation: "/səˈvaɪvə $ sərˈvaɪvər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "survivor _ noun _ 3",
      meaning: {
        index: 3,
        definition:
          "someone who continues to live after other members of their family have died",
        examples: ["She was the last survivor of the family."],
      },
      images: [],
    },
    {
      word: "survivor",
      pronunciation: "/səˈvaɪvə $ sərˈvaɪvər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "survivor _ noun _ 4",
      meaning: {
        index: 4,
        definition:
          "a company that continues to be successful in spite of many problems",
        examples: [
          "The company hopes to be one of the survivors of this recession.",
        ],
      },
      images: [],
    },
    {
      word: "turn on",
      pronunciation: "/tɜːn ɒn $ tɜːrn ɑːn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "turn on _ phrasal verb _ 1",
      meaning: {
        index: 1,
        definition:
          "to make a machine or piece of electrical equipment such as a television, engine, light etc start operating by pushing a button, turning a key etc",
        examples: ["Jake turned on his computer and checked his mail."],
      },
      images: [],
    },
    {
      word: "turn on",
      pronunciation: "/tɜːn ɒn $ tɜːrn ɑːn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "turn on _ phrasal verb _ 2",
      meaning: {
        index: 2,
        definition:
          "to make the supply of water, gas etc start flowing from something by turning a handle",
        examples: [
          "He turned on the gas and lit the stove.",
          "‘I’m thirsty, ’ she said, turning on the tap.",
        ],
      },
      images: [],
    },
    {
      word: "turn on",
      pronunciation: "/tɜːn ɒn $ tɜːrn ɑːn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "turn on _ phrasal verb _ 3",
      meaning: {
        index: 3,
        definition:
          "to suddenly attack someone, using physical violence or unpleasant words",
        examples: ["Peter turned on Rae and screamed, ‘Get out of my sight!’"],
      },
      images: [],
    },
    {
      word: "turn on",
      pronunciation: "/tɜːn ɒn $ tɜːrn ɑːn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "turn on _ phrasal verb _ 4",
      meaning: {
        index: 4,
        definition:
          "if a situation, event, argument etc turns on a particular thing or idea, it depends on that thing",
        examples: [
          "As usual, everything turned on how much money was available.",
        ],
      },
      images: [],
    },
    {
      word: "turn on",
      pronunciation: "/tɜːn ɒn $ tɜːrn ɑːn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "turn on _ phrasal verb _ 5",
      meaning: {
        index: 5,
        definition: "to make someone feel sexually excited",
        examples: ["The way he looked at her really turned her on."],
      },
      images: [],
    },
    {
      word: "turn on",
      pronunciation: "/tɜːn ɒn $ tɜːrn ɑːn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "turn on _ phrasal verb _ 6",
      meaning: {
        index: 6,
        definition:
          "to interest someone, or to make someone become interested in something",
        examples: [
          "Science fiction just doesn’t turn me on.",
          "It was Walter who turned me on to vegetarian food.",
        ],
      },
      images: [],
    },
    {
      word: "turn on",
      pronunciation: "/tɜːn ɒn $ tɜːrn ɑːn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "turn on _ phrasal verb _ 7",
      meaning: {
        index: 7,
        definition:
          "to suddenly start to be very nice, amusing, and interesting, especially in a way that is not sincere",
        examples: ["Simon was good at turning on the charm at parties."],
      },
      images: [],
    },
    {
      word: "freak out",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "freak out _ phrasal verb",
      meaning: {
        index: 0,
        definition:
          "to become very anxious, upset, or afraid, or make someone very anxious, upset, or afraid",
        examples: [
          "People just freaked out when they heard the news.",
          "The whole idea freaked me out.",
        ],
      },
      images: [],
    },
    {
      word: "hit",
      pronunciation: "/hɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "hit _ verb _ 1",
      meaning: {
        index: 1,
        definition:
          "to touch someone or something quickly and hard with your hand, a stick etc",
        examples: [
          "He raised the hammer and hit the bell.",
          "The robbers hit him over the head with a baseball bat.",
        ],
      },
      images: [],
    },
    {
      word: "hit",
      pronunciation: "/hɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "hit _ verb _ 2",
      meaning: {
        index: 2,
        definition: "to move into something or someone quickly and with force",
        examples: [
          "The tanks exploded as the plane hit the ground.",
          "He was hit by a car.",
        ],
      },
      images: [],
    },
    {
      word: "hit",
      pronunciation: "/hɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "hit _ verb _ 3",
      meaning: {
        index: 3,
        definition:
          "to move a part of your body quickly against something accidentally, causing pain",
        examples: [
          "The ceiling’s low, so be careful you don’t hit your head.",
          "She slipped and hit her head on the sidewalk.",
        ],
      },
      images: [],
    },
    {
      word: "hit",
      pronunciation: "/hɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "hit _ verb _ 4",
      meaning: {
        index: 4,
        definition:
          "if you hit a ball or other object, you make it move forward quickly by hitting it with a bat, stick etc",
        examples: [
          "Hit the ball as hard as you can.",
          "Last year, Griffey hit 49 home runs.",
        ],
      },
      images: [],
    },
    {
      word: "hit",
      pronunciation: "/hɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "hit _ verb _ 5",
      meaning: {
        index: 5,
        definition: "to press a part in a machine, car, etc to make it work",
        examples: ["Maria hit the brakes just in time."],
      },
      images: [],
    },
    {
      word: "hit",
      pronunciation: "/hɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "hit _ verb _ 6",
      meaning: {
        index: 6,
        definition:
          "to attack something or wound someone with a bomb, bullet etc",
        examples: [
          "Our ship was badly hit and sank within minutes.",
          "A second shot hit her in the back.",
          "The bomb failed to hit its target.",
        ],
      },
      images: [],
    },
    {
      word: "hit",
      pronunciation: "/hɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "hit _ verb _ 7",
      meaning: {
        index: 7,
        definition:
          "if something bad hits a place or a person, it suddenly happens and affects people badly",
        examples: [
          "The village has been hit by a devastating drought.",
          "Hurricane Louis is expected to hit at the weekend.",
          "The company has been hard hit by the drop in consumer confidence.",
          "The south of the country is the worst hit by the recession.",
        ],
      },
      images: [],
    },
    {
      word: "hit",
      pronunciation: "/hɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "hit _ verb _ 8",
      meaning: {
        index: 8,
        definition: "to experience trouble, problems etc",
        examples: ["My father hit a bad patch, and had to sell the house."],
      },
      images: [],
    },
    {
      word: "hit",
      pronunciation: "/hɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "hit _ verb _ 9",
      meaning: {
        index: 9,
        definition: "to reach a particular level or number",
        examples: [
          "Sales have hit the 1 million mark.",
          "Earnings hit a peak in the early 1980s.",
          "Oil prices have hit rock-bottom.",
        ],
      },
      images: [],
    },
    {
      word: "hit",
      pronunciation: "/hɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "hit _ verb _ 10",
      meaning: {
        index: 10,
        definition:
          "if a fact hits you, you suddenly realize its importance and feel surprised or shocked",
        examples: [
          "It’s impossible to pinpoint a moment when it hit me that I was ‘a success’.",
          "He was gone before they knew what had hit them.",
        ],
      },
      images: [],
    },
    {
      word: "strip club",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "informal",
      additionalInfo: "",
      translation: "",
      title: "strip club _ noun",
      meaning: {
        index: 0,
        definition:
          "a place where people go to see performers who take off their clothes in a sexually exciting way",
        examples: [],
      },
      images: [],
    },
    {
      word: "strip joint",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "informal",
      additionalInfo: "",
      translation: "",
      title: "strip joint _ noun",
      meaning: {
        index: 0,
        definition:
          "a strip club , a place where people go to see performers who take off their clothes in a sexually exciting way",
        examples: [],
      },
      images: [],
    },
    {
      word: "turn on",
      pronunciation: "/tɜːn ɒn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "turn on _ phrasal verb _ 1",
      meaning: {
        index: 1,
        definition:
          "to make a machine or piece of electrical equipment such as a television, engine, light etc start operating by pushing a button, turning a key etc",
        examples: ["Jake turned on his computer and checked his mail."],
      },
      images: [],
    },
    {
      word: "turn on",
      pronunciation: "/tɜːn ɒn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "turn on _ phrasal verb _ 2",
      meaning: {
        index: 2,
        definition:
          "to make the supply of water, gas etc start flowing from something by turning a handle",
        examples: [
          "He turned on the gas and lit the stove.",
          "‘I’m thirsty,’ she said, turning on the tap.",
        ],
      },
      images: [],
    },
    {
      word: "turn on",
      pronunciation: "/tɜːn ɒn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "turn on _ phrasal verb _ 3",
      meaning: {
        index: 3,
        definition:
          "to suddenly attack someone, using physical violence or unpleasant words",
        examples: ["Peter turned on Rae and screamed, ‘Get out of my sight!’"],
      },
      images: [],
    },
    {
      word: "turn on",
      pronunciation: "/tɜːn ɒn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "turn on _ phrasal verb _ 4",
      meaning: {
        index: 4,
        definition:
          "if a situation, event, argument etc turns on a particular thing or idea, it depends on that thing",
        examples: [
          "As usual, everything turned on how much money was available.",
        ],
      },
      images: [],
    },
    {
      word: "turn on",
      pronunciation: "/tɜːn ɒn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "turn on _ phrasal verb _ 5",
      meaning: {
        index: 5,
        definition: "to make someone feel sexually excited",
        examples: ["The way he looked at her really turned her on."],
      },
      images: [],
    },
    {
      word: "turn on",
      pronunciation: "/tɜːn ɒn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "turn on _ phrasal verb _ 6",
      meaning: {
        index: 6,
        definition:
          "to interest someone, or to make someone become interested in something",
        examples: [
          "Science fiction just doesn’t turn me on.",
          "It was Walter who turned me on to vegetarian food.",
        ],
      },
      images: [],
    },
    {
      word: "turn on",
      pronunciation: "/tɜːn ɒn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "turn on _ phrasal verb _ 7",
      meaning: {
        index: 7,
        definition:
          "to suddenly start to be very nice, amusing, and interesting, especially in a way that is not sincere",
        examples: ["Simon was good at turning on the charm at parties."],
      },
      images: [],
    },
    {
      word: "freak out",
      pronunciation: "/friːk aʊt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "informal",
      additionalInfo: "",
      translation: "",
      title: "freak out _ phrasal verb",
      meaning: {
        index: 0,
        definition:
          "to become very anxious, upset, or afraid, or to make someone very anxious, upset, or afraid",
        examples: [
          "People just freaked out when they heard the news.",
          "The whole idea freaked me out.",
        ],
      },
      images: [],
    },
    {
      word: "hit",
      pronunciation: "/hɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "hit _ verb _ 1",
      meaning: {
        index: 1,
        definition:
          "to touch someone or something quickly and hard with your hand, a stick etc",
        examples: [
          "He raised the hammer and hit the bell.",
          "The robbers hit him over the head with a baseball bat.",
        ],
      },
      images: [],
    },
    {
      word: "hit",
      pronunciation: "/hɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "hit _ verb _ 2",
      meaning: {
        index: 2,
        definition: "to move into something or someone quickly and with force",
        examples: [
          "The tanks exploded as the plane hit the ground.",
          "He was hit by a car.",
        ],
      },
      images: [],
    },
    {
      word: "hit",
      pronunciation: "/hɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "hit _ verb _ 3",
      meaning: {
        index: 3,
        definition:
          " to move a part of your body quickly against something accidentally, causing pain",
        examples: [
          "The ceiling’s low, so be careful you don’t hit your head.",
          "She slipped and hit her head on the sidewalk.",
        ],
      },
      images: [],
    },
    {
      word: "hit",
      pronunciation: "/hɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "hit _ verb _ 4",
      meaning: {
        index: 4,
        definition:
          " a) if you hit a ball or other object, you make it move forward quickly by hitting it with a bat, stick etc b) to get points by hitting a ball in a game such as baseball or cricket",
        examples: [
          "Hit the ball as hard as you can.",
          "Last year, Griffey hit 49 home runs.",
        ],
      },
      images: [],
    },
    {
      word: "hit",
      pronunciation: "/hɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "hit _ verb _ 5",
      meaning: {
        index: 5,
        definition:
          "to make something start working or operating by pressing a button, turning a key etc",
        examples: ["Jake turned on his computer and checked his mail."],
      },
      images: [],
    },
    {
      word: "hit",
      pronunciation: "/hɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "hit _ verb _ 6",
      meaning: {
        index: 6,
        definition:
          "to attack something or wound someone with a bomb, bullet etc",
        examples: [
          "Our ship was badly hit and sank within minutes.",
          "A second shot hit her in the back.",
        ],
      },
      images: [],
    },
    {
      word: "hit",
      pronunciation: "/hɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "hit _ verb _ 7",
      meaning: {
        index: 7,
        definition:
          "if something bad hits a place or a person, it suddenly happens and affects people badly",
        examples: [
          "The village has been hit by a devastating drought.",
          "Hurricane Louis is expected to hit at the weekend.",
        ],
      },
      images: [],
    },
    {
      word: "hit",
      pronunciation: "/hɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "hit _ verb _ 8",
      meaning: {
        index: 9,
        definition: "to reach a particular level or number",
        examples: [
          "Sales have hit the 1 million mark.",
          "Earnings hit a peak in the early 1980s.",
        ],
      },
      images: [],
    },
    {
      word: "hit",
      pronunciation: "/hɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "hit _ verb _ 9",
      meaning: {
        index: 10,
        definition:
          "if a fact hits you, you suddenly realize its importance and feel surprised or shocked",
        examples: [
          "It’s impossible to pinpoint a moment when it hit me that I was ‘a success’.",
          "He was gone before they knew what had hit them (=realized what had happened).",
        ],
      },
      images: [],
    },
    {
      word: "wonder",
      pronunciation: "/ˈwʌndər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "wonder _ verb _ 1",
      meaning: {
        index: 1,
        definition:
          "to think about something that you are not sure about and try to guess what is true, what will happen etc",
        examples: [
          "I wonder how James is getting on.",
          "What are they going to do now, I wonder?",
          "I wonder if I’ll recognize Philip after all these years.",
          " He’s been leaving work early a lot – it makes you wonder, doesn’t it?",
        ],
      },
      images: [],
    },
    {
      word: "wonder",
      pronunciation: "/ˈwʌndər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "wonder _ verb _ 2",
      meaning: {
        index: 2,
        definition:
          "→ I wonder if/whether, spoken, used to ask politely for something",
        examples: [" I wonder if I might have a drink? "],
      },
      images: [],
    },
    {
      word: "wonder",
      pronunciation: "/ˈwʌndər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "wonder _ verb _ 3",
      meaning: {
        index: 3,
        definition:
          "→ I was wondering if/whether, a) spoken used to ask someone politely to help you b) used to ask someone politely if they would like to do something",
        examples: [
          " I was wondering if I could borrow your car?",
          "I was wondering if you’d like to come to dinner.",
        ],
      },
      images: [],
    },
    {
      word: "wonder",
      pronunciation: "/ˈwʌndər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "wonder _ verb _ 4",
      meaning: {
        index: 4,
        definition: "to feel surprised and unable to believe something",
        examples: [
          "He says he's had no formal training but when you see how good his work is, you start to wonder.",
          "The picture forces the viewer to wonder at the subject of the crowd's attention.",
        ],
      },
      images: [],
    },
    {
      word: "wonder",
      pronunciation: "/ˈwʌndər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "wonder _ verb _ 5",
      meaning: {
        index: 5,
        definition: "to doubt or question whether something is true",
        examples: [
          "Sometimes I wonder if he’s got any sense at all!",
          "Is she serious?’ ‘I wonder.’",
        ],
      },
      images: [],
    },
    {
      word: "drift apart",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "drift apart _ phrasal verb",
      meaning: {
        index: 0,
        definition: "if people drift apart, their relationship gradually ends",
        examples: [
          "Over the years my college friends and I have drifted apart.",
          "Teddy and Maria never really argued -- they just drifted apart.",
          "We grew up, went off to different places, drifted apart.",
        ],
      },
      images: [],
    },
    {
      word: "organ",
      pronunciation: "/ˈɔːɡən $ ˈɔːr-/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "organ _ noun _ 1",
      meaning: {
        index: 1,
        definition:
          "a part of the body, such as the heart or lungs, that has a particular purpose",
        examples: [
          "the liver, heart, and other internal organs",
          "loss of blood flow to his vital organs",
          "Extra doses of the hormone caused the animals’ reproductive organs to develop sooner than usual.",
          "In Arizona, 480 people are waiting for organ transplants.",
          "dying people who have agreed to be organ donors",
        ],
      },
      images: [],
    },
    {
      word: "organ",
      pronunciation: "/ˈɔːɡən $ ˈɔːr-/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "organ _ noun _ 2",
      meaning: {
        index: 2,
        definition:
          "a) (also pipe organ) a large musical instrument used especially in churches, with keys like a piano and large pipes that air passes through to produce the sound b) an electronic musical instrument that produces music similar to a pipe organ, but that does not have pipes",
        examples: [
          "He played the organ at his local church.",
          "an electronic organ",
        ],
      },
      images: [],
    },
    {
      word: "organ",
      pronunciation: "/ˈɔːɡən $ ˈɔːr-/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "organ _ noun _ 3",
      meaning: {
        index: 3,
        definition:
          "an organization that is part of, or works for, a larger organization or group",
        examples: [
          "The courts are organs of government.",
          "the decision-making organs",
        ],
      },
      images: [],
    },
    {
      word: "organ",
      pronunciation: "/ˈɔːɡən $ ˈɔːr-/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "organ _ noun _ 4",
      meaning: {
        index: 4,
        definition:
          "a newspaper or magazine which gives information, news etc for an organization or group",
        examples: ["the official organ of the Communist Party"],
      },
      images: [],
    },
    {
      word: "metaphor",
      pronunciation: "/ˈmetəfə, -fɔː $ -fɔːr/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "metaphor _ noun",
      meaning: {
        index: 0,
        definition:
          "a way of describing something by referring to it as something different and suggesting that it has similar qualities to that thing",
        examples: [
          "She uses some wonderful images and metaphors in her writing.",
          "a very creative use of metaphor",
        ],
      },
      images: [],
    },
    {
      word: "establish",
      pronunciation: "/ɪˈstæblɪʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "establish _ verb _ 1",
      meaning: {
        index: 1,
        definition:
          "to start a company, organization, system, etc that is intended to exist or continue for a long time",
        examples: [
          "The city of Boerne was established by German settlers in the 1840s.",
          "Our goal is to establish a new research centre in the North.",
        ],
      },
      images: [],
    },
    {
      word: "establish",
      pronunciation: "/ɪˈstæblɪʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "establish _ verb _ 2",
      meaning: {
        index: 2,
        definition:
          "to begin a relationship with someone or a situation that will continue",
        examples: [
          "Hungary established diplomatic relations with Chile in 1990.",
          "I wondered why he should bother to try and establish contact with me.",
        ],
      },
      images: [],
    },
    {
      word: "establish",
      pronunciation: "/ɪˈstæblɪʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "establish _ verb _ 3",
      meaning: {
        index: 3,
        definition: "to find out facts that will prove that something is true",
        examples: [
          "The police must establish the facts of the case before proceeding.",
          "The autopsy established that he had been murdered.",
          "I was never able to establish whether she was telling the truth.",
        ],
      },
      images: [],
    },
    {
      word: "establish",
      pronunciation: "/ɪˈstæblɪʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "establish _ verb _ 4",
      meaning: {
        index: 4,
        definition:
          "to make people accept that you can do something, or that you have a particular quality",
        examples: [
          "He had three years in which to establish himself as prime minister.",
          "He’d already begun to establish quite a reputation as a journalist.",
        ],
      },
      images: [],
    },
    {
      word: "whisker",
      pronunciation: "/ˈwɪskə $ -ər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "whisker _ noun _ 1",
      meaning: {
        index: 1,
        definition:
          "one of the long stiff hairs that grow near the mouth of a cat, mouse etc",
        examples: [
          "The cat's whiskers twitched.",
          "The mouse's whiskers were moving.",
          "He had a beard and bushy whiskers.",
        ],
      },
      images: [],
    },
    {
      word: "whisker",
      pronunciation: "/ˈwɪskə $ -ər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "whisker _ noun _ 2",
      meaning: {
        index: 2,
        definition: "one of the hairs that grow on a man’s face",
        examples: ["He had a few whiskers on his chin."],
      },
      images: [],
    },
    {
      word: "whisker",
      pronunciation: "/ˈwɪskə $ -ər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "whisker _ noun _ 3",
      meaning: {
        index: 3,
        definition:
          "→ win/lose by a whisker,informal to win or lose by a very small amount",
        examples: [
          "Doctors say he came within a whisker of dying on the operating table.",
          "Schmidt finished second, losing by a whisker in the final event.",
        ],
      },
      images: [],
    },
    {
      word: "kitten",
      pronunciation: "/ˈkɪtn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "kitten _ noun",
      meaning: {
        index: 0,
        definition: "a young cat",
        examples: [
          "She has a kitten and a puppy.",
          "The kitten was playing with a ball of wool.",
        ],
      },
      images: [],
    },
    {
      word: "sleigh",
      pronunciation: "/sleɪ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "sleigh _ noun",
      meaning: {
        index: 0,
        definition:
          "a large open vehicle with no wheels that is used for travelling over snow and is pulled along by animals",
        examples: [
          "We went for a sleigh ride through the woods.",
          "The children were riding on a sleigh.",
        ],
      },
      images: [],
    },
    {
      word: "mitten",
      pronunciation: "/ˈmɪtn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "mitten _ noun",
      meaning: {
        index: 0,
        definition:
          "a type of glove that covers the thumb separately from the other four fingers",
        examples: [
          "She was wearing a pair of mittens.",
          "He put on his mittens and went outside.",
        ],
      },
      images: [],
    },
    {
      word: "be for the best",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "be for the best",
      meaning: {
        index: 0,
        definition:
          "especially spoken used to say that a particular event may seem bad now, but might have a good result later",
        examples: [
          "I still don’t want him to go, but maybe it’s for the best.",
        ],
      },
      images: [],
    },
    {
      word: "wine",
      pronunciation: "/waɪn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "wine _ noun _ 1",
      meaning: {
        index: 1,
        definition:
          "an alcoholic drink made from grapes, or a type of this drink",
        examples: [
          "a glass of wine",
          "red/white wine",
          "a bottle of red wine",
          "dry/sweet/sparkling wine",
        ],
      },
      images: [],
    },
    {
      word: "wine",
      pronunciation: "/waɪn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "wine _ noun _ 2",
      meaning: {
        index: 2,
        definition: "an alcoholic drink made from another fruit or plant",
        examples: ["damson wine"],
      },
      images: [],
    },
    {
      word: "hit on somebody/something",
      pronunciation: "/hɪt ɒn ˈsʌmbədi ˈsʌmθɪŋ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "hit on somebody/something _ phrasal verb _ 1",
      meaning: {
        index: 2,
        definition:
          "to talk to someone in a way that shows you are sexually attracted to them",
        examples: ["Dave has hit on most of the women in the department."],
      },
      images: [],
    },
    {
      word: "hit on somebody/something",
      pronunciation: "/hɪt ɒn ˈsʌmbədi ˈsʌmθɪŋ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "hit on somebody/something _ phrasal verb _ 2",
      meaning: {
        index: 1,
        definition:
          "to have an idea or discover something suddenly or unexpectedly",
        examples: [
          "Then we hit on the idea of asking viewers to donate money over the Net.",
        ],
      },
      images: [],
    },
    {
      word: "diary",
      pronunciation: "/ˈdaɪəri $ ˈdaɪri/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "diary _ noun _ 1",
      meaning: {
        index: 1,
        definition:
          "a book in which you write down the things that happen to you each day SYN journal",
        examples: [
          "Inge kept a diary during the war years.",
          "a diary entry (=what you have written for a particular day)",
        ],
      },
      images: [],
    },
    {
      word: "diary",
      pronunciation: "/ˈdaɪəri $ ˈdaɪri/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "diary _ noun _ 2",
      meaning: {
        index: 2,
        definition:
          "a book with separate spaces for each day of the year, in which you write down the meetings, events etc that are planned for each day SYN calendar American English",
        examples: ["Did you put the meeting date in your diary?"],
      },
      images: [],
    },
    {
      word: "catch",
      pronunciation: "/kætʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "catch _ verb _ 1",
      meaning: {
        index: 1,
        definition:
          "a) to get hold of and stop an object such as a ball that is moving through the air b) to suddenly take hold of someone or something with your hand",
        examples: [
          "Stephen leapt up and caught the ball in one hand.",
          "The kids were throwing and catching a Frisbee down on the beach.",
          "He caught her elbow to steady her.",
          "Miss Perry caught hold of my sleeve and pulled me back.",
        ],
      },
      images: [],
    },
    {
      word: "catch",
      pronunciation: "/kætʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "catch _ verb _ 2",
      meaning: {
        index: 2,
        definition:
          "a) to stop someone after you have been chasing them and not let them get away b) to find a criminal or enemy and stop them from escaping SYN capture",
        examples: [
          "‘You can’t catch me!’ she yelled, running away.",
          "State police have launched a massive operation to catch the murderer.",
          "If you go back to the city, you’re bound to get caught.",
        ],
      },
      images: [],
    },
    {
      word: "catch",
      pronunciation: "/kætʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "catch _ verb _ 3",
      meaning: {
        index: 3,
        definition:
          "to see someone doing something that they did not want you to know they were doing",
        examples: [
          "I caught him reading my private letters.",
          "Gemma turned around and caught the stranger looking at her intently.",
          "catch somebody in the act (of doing something) (=catch someone while they are doing something illegal)",
          "The gang was caught in the act of unloading the cigarettes.",
          "He was caught red-handed (=as he was doing something wrong) taking money from the cash register.",
          "catch somebody at it",
          "We knew he’d been cheating, but we’d never caught him at it before.",
        ],
      },
      images: [],
    },
    {
      word: "catch",
      pronunciation: "/kætʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "catch _ verb _ 4",
      meaning: {
        index: 4,
        definition: "to get an infectious disease",
        examples: [
          "Anton caught malaria in Mali, and nearly died.",
          "Many young people are still ignorant about how HIV is caught.",
          "catch something from/off somebody/something",
          "Typhoid and cholera are often caught from contaminated water supplies.",
          "I caught chicken pox off my friend at school.",
          "catch your death (of cold) British English spoken (=get a very bad cold)",
          "Don’t stand out in the rain. You’ll catch your death.",
        ],
      },
      images: [],
    },
    {
      word: "catch",
      pronunciation: "/kætʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "catch _ verb _ 5",
      meaning: {
        index: 7,
        definition:
          "to trap an animal or fish by using a trap, net, or hook, or by hunting it",
        examples: [
          "Did you catch any fish?",
          "Early settlers caught rabbits and squirrels and even rats in order to survive.",
        ],
      },
      images: [],
    },
    {
      word: "catch",
      pronunciation: "/kætʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "catch _ verb _ 6",
      meaning: {
        index: 5,
        definition:
          "→ catch somebody by surprise, catch somebody off guard, catch somebody napping/unawares , (also catch somebody on the hop British English) to do something or to happen when someone is not expecting it or prepared for it ",
        examples: ["Her question caught him off guard."],
      },
      images: [],
    },
    {
      word: "catch",
      pronunciation: "/kætʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "catch _ verb _ 7",
      meaning: {
        index: 6,
        definition:
          "→ catch somebody with their pants/trousers down ,to discover that someone is doing something that they should not be doing or has not done something that they should have done ",
        examples: [
          "He’s not the first politician to be caught with his pants down, and he won’t be the last.",
        ],
      },
      images: [],
    },
    {
      word: "catch",
      pronunciation: "/kætʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "catch _ verb _ 8",
      meaning: {
        index: 8,
        definition:
          "→ catch a train/plane/bus , to get on a train, plane etc in order to travel on it, or to be in time to get on a train, plane etc before it leaves",
        examples: [
          "I caught the 7.15 train to London.",
          "There’s a train in now. If you run, you’ll just catch it.",
          "I have to hurry – I have a bus to catch.",
        ],
      },
      images: [],
    },
    {
      word: "catch",
      pronunciation: "/kætʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "catch _ verb _ 9",
      meaning: {
        index: 9,
        definition:
          "to not be too late to do something, see something, talk to someone etc OPP miss",
        examples: [
          "I managed to catch her just as she was leaving.",
          "I just caught the last few minutes of the documentary.",
          "Tumours like these can be treated quite easily if they’re caught early enough.",
          "catch the post, British English, (=post letters in time for them to be collected that day)",
        ],
      },
      images: [],
    },
    {
      word: "catch",
      pronunciation: "/kætʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "catch _ verb _ 10",
      meaning: {
        index: 10,
        definition:
          "if your hand, finger, clothing etc catches or is caught in something, it gets stuck in it accidentally",
        examples: [
          "His overalls caught in the engine.",
          "Her microphone was forever getting caught on her clothes.",
        ],
      },
      images: [],
    },
    {
      word: "catch",
      pronunciation: "/kætʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "catch _ verb _ 11",
      meaning: {
        index: 11,
        definition:
          "→ catch somebody’s attention/interest/imagination etc , to make you notice something and feel interested in it ",
        examples: [
          "Lucie whistled sharply to catch the other girl’s attention.",
          "This is a story that will catch the imagination of every child.",
        ],
      },
      images: [],
    },
    {
      word: "catch",
      pronunciation: "/kætʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "catch _ verb _ 12",
      meaning: {
        index: 12,
        definition:
          "→ not catch something, spoken, to not hear or understand what someone says",
        examples: ["I’m afraid I didn’t catch your name."],
      },
      images: [],
    },
    {
      word: "catch",
      pronunciation: "/kætʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "catch _ verb _ 13",
      meaning: {
        index: 13,
        definition: "to manage to hear a sound",
        examples: [
          "I caught the muffled thud of a car door slamming in the street.",
        ],
      },
      images: [],
    },
    {
      word: "catch",
      pronunciation: "/kætʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "catch _ verb _ 14",
      meaning: {
        index: 14,
        definition: "→ catch you later, spoken , used to say goodbye",
        examples: [
          "‘I’ll give you a call in a couple of days.’ ‘Okay. Catch you later.’",
        ],
      },
      images: [],
    },
    {
      word: "catch",
      pronunciation: "/kætʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "catch _ verb _ 15",
      meaning: {
        index: 15,
        definition:
          "spoken, especially American English, to go somewhere in order to do or see something",
        examples: [
          "We could catch a movie (=go to a movie).",
          "M Records caught his act and signed him immediately.",
        ],
      },
      images: [],
    },
    {
      word: "eyelash",
      pronunciation: "/ˈaɪlæʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "eyelash _ noun",
      meaning: {
        index: 0,
        definition:
          "one of the small hairs that grow along the edge of your eyelids",
        examples: [
          "If Claire had flicked an eyelash at him, Harvey would never have come near them again.",
          "The eyebrows and eyelashes were drawn in and then very pale washes were put on, the paint smooth and even.",
          "She was missing clumps of hair, eyelashes, eyebrows.",
        ],
      },
      images: [],
    },
    {
      word: "suppose",
      pronunciation: "/səˈpəʊz $ -ˈpoʊz/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "suppose _ verb _ 1",
      meaning: {
        index: 1,
        definition:
          "→ I suppose, a) used to say you think something is true, although you are uncertain about it SYN I guess b) used when agreeing to let someone do something, especially when you do not really want to SYN I guess c) used when saying in an angry way that you expect something is true SYN I guess d) used to say that you think that something is probably true, although you wish it was not and hope someone will tell you it is not SYN I guess e) used when guessing that something is true SYN I guess",
        examples: [
          "I suppose you’re right.",
          "So things worked out for the best, I suppose.",
          "‘Aren’t you pleased?’ ‘Yes, I suppose so.’",
          "Can we come with you?’ ‘Oh, I suppose so.’",
          "I suppose you thought you were being clever!",
          "I suppose it’s too late to apply for that job now.",
          "She looked about 50, I suppose.",
        ],
      },
      images: [],
    },
    {
      word: "suppose",
      pronunciation: "/səˈpəʊz $ -ˈpoʊz/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "suppose _ verb _ 2",
      meaning: {
        index: 2,
        definition:
          "→ I don’t suppose (that) , a) used to ask a question in an indirect way, especially if you think the answer will be ‘no’ b) used to ask for something in a very polite way  c) used to say that you think it is unlikely something will happen",
        examples: [
          "I don’t suppose you have any idea where my address book is, do you?",
          "I don’t suppose you’d give me a lift to the station?",
          "I don’t suppose I’ll ever see her again.",
        ],
      },
      images: [],
    },
    {
      word: "suppose",
      pronunciation: "/səˈpəʊz $ -ˈpoʊz/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "suppose _ verb _ 3",
      meaning: {
        index: 3,
        definition:
          "→ do you suppose (that) ... ?, used to ask someone their opinion about something, although you know that it is unlikely that they have any more information about the situation than you do ",
        examples: [
          "Do you suppose this is the exact spot?",
          "who/what/why etc do you suppose ... ?",
          "Who on earth do you suppose could have done this?",
          "How do you suppose he got here?",
        ],
      },
      images: [],
    },
    {
      word: "suppose",
      pronunciation: "/səˈpəʊz $ -ˈpoʊz/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "suppose _ verb _ 4",
      meaning: {
        index: 4,
        definition:
          "→ what’s that supposed to mean?, used when you are annoyed by what someone has just said",
        examples: [
          "‘It sounds like things aren’t going too well for you lately.’ ‘What’s that supposed to mean?’",
        ],
      },
      images: [],
    },
    {
      word: "suppose",
      pronunciation: "/səˈpəʊz $ -ˈpoʊz/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "suppose _ verb _ 5",
      meaning: {
        index: 5,
        definition:
          "→ suppose/supposing (that), used when talking about a possible condition or situation, and then imagining the result",
        examples: [
          "Look, suppose you lost your job tomorrow, what would you do?",
          "Supposing it really is a fire!",
        ],
      },
      images: [],
    },
    {
      word: "suppose",
      pronunciation: "/səˈpəʊz $ -ˈpoʊz/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "suppose _ verb _ 6",
      meaning: {
        index: 6,
        definition:
          "→ be supposed to do/be something, a) used to say what someone should or should not do, especially because of rules or what someone in authority has said b) used to say what was or is expected or intended to happen, especially when it did not happen b) used to say what was or is expected or intended to happen, especially when it did not happen  ",
        examples: [
          "We’re supposed to check out of the hotel by 11 o'clock.",
          "I’m not supposed to tell anyone.",
          "What time are you supposed to be there?",
          "No one was supposed to know about it.",
          "The meeting was supposed to take place on Tuesday, but we’ve had to postpone it.",
          "The new laws are supposed to prevent crime.",
          "The castle is supposed to be haunted.",
          "‘Dirty Harry’ is supposed to be one of Eastwood’s best films.",
          "Mrs Carver is supposed to have a lot of money.",
        ],
      },
      images: [],
    },
    {
      word: "head",
      pronunciation: "/hed/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "head _ verb _ 1",
      meaning: {
        index: 1,
        definition:
          " (also be headed) to go or travel towards a particular place, especially in a deliberate way",
        examples: [
          "head for/towards/back etc",
          "The ship was heading for Cuba.",
          "It’s about time we were heading home.",
          "head north/south etc",
          "We headed south towards the capital.",
          "Where are you guys headed?",
        ],
      },
      images: [],
    },
    {
      word: "head",
      pronunciation: "/hed/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "head _ verb _ 2",
      meaning: {
        index: 2,
        definition:
          "2 → be heading, (also be headed) if you are heading for a particular situation, especially a bad one, it seems likely to happen ",
        examples: [
          "be heading for",
          "Forecasters predict the region’s economy is heading for disaster.",
          "Where is your life heading?",
        ],
      },
      images: [],
    },
    {
      word: "head",
      pronunciation: "/hed/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "head _ verb _ 3",
      meaning: {
        index: 3,
        definition:
          "(also head up) to be in charge of a team, government, organization etc",
        examples: [
          "David was asked to head up the technical team.",
          "an interim government headed by the former prime minister",
        ],
      },
      images: [],
    },
    {
      word: "head",
      pronunciation: "/hed/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "head _ verb _ 4",
      meaning: {
        index: 4,
        definition:
          "a) to be at the top of a list or group of people or things b) be headed if a page is headed with a particular name, title, image etc, it has it on the top",
        examples: [
          "The movie heads the list of Oscar nominations.",
          "The page was headed ‘Expenses’.",
          "officially-headed writing paper",
        ],
      },
      images: [],
    },
    {
      word: "lizard",
      pronunciation: "/ˈlɪzəd $ -ərd/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "lizard _ noun",
      meaning: {
        index: 0,
        definition: "a type of reptile that has four legs and a long tail",
        examples: [
          "And lizards hid lots of baby lizards under the rocks in the desert.",
          "All the wiring was exposed and frayed, and small lizards ran across the ceiling.",
          "The severed heads of gulls, rabbits, crows, mice, owls, moles and small lizards looked down on me.",
        ],
      },
      images: [],
    },
    {
      word: "hang out",
      pronunciation: "/hæŋ aʊt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "hang out _ phrasal verb _ 1",
      meaning: {
        index: 1,
        definition:
          "to spend a lot of time in a particular place or with particular people",
        examples: [
          "I don’t really know who she hangs out with.",
          "Where do the youngsters hang out?",
        ],
      },
      images: [],
    },
    {
      word: "hang out",
      pronunciation: "/hæŋ aʊt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "hang out _ phrasal verb _ 2",
      meaning: {
        index: 2,
        definition:
          "hang something ↔ out, to hang clothes outside in order to dry them",
        examples: [
          "My job was to hang out the washing.",
          "Hang the wet things out to dry.",
        ],
      },
      images: [],
    },
    {
      word: "bracket",
      pronunciation: "/ˈbrækɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "bracket _ noun _ 1",
      meaning: {
        index: 1,
        definition:
          "(also round bracket) [usually plural] British English, one of a pair of signs ( ) put around words to show extra information SYN parenthesis American English",
        examples: [
          "Last year’s sales figures are given in brackets.",
          "Supplements in brackets apply to July and August departures.",
        ],
      },
      images: [],
    },
    {
      word: "bracket",
      pronunciation: "/ˈbrækɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "bracket _ noun _ 2",
      meaning: {
        index: 2,
        definition:
          "→ income/tax/age etc bracket, a particular income, tax etc range",
        examples: [
          "the highest tax bracket",
          "families in lower income brackets",
        ],
      },
      images: [],
    },
    {
      word: "bracket",
      pronunciation: "/ˈbrækɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "bracket _ noun _ 3",
      meaning: {
        index: 3,
        definition:
          "a piece of metal, wood, or plastic, often in the shape of the letter L, fixed to a wall to support something such as a shelf",
        examples: [
          "A little ink bottle and two pens were fastened to its floor by gold brackets.",
        ],
      },
      images: [],
    },
    {
      word: "whatsoever",
      pronunciation: "/ˌwɒtsəʊˈevə $ ˌwɑːtsoʊˈevər, ˌwʌt-/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adverb",
      additionalInfo: "",
      translation: "",
      title: "whatsoever _ adverb",
      meaning: {
        index: 0,
        definition: "used to emphasize a negative statement SYN whatever",
        examples: ["He’s had no luck whatsoever."],
      },
      images: [],
    },
    {
      word: "bookcase",
      pronunciation: "/ˈbʊk-keɪs/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "bookcase _ noun",
      meaning: {
        index: 0,
        definition: "a piece of furniture with shelves to hold books",
        examples: [],
      },
      images: [],
    },
    {
      word: "catch on",
      pronunciation: "/kætʃ ɒn $ kætʃ ɑːn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      additionalInfo: "",
      translation: "",
      title: "catch on _ phrasal verb _ 1",
      meaning: {
        index: 1,
        definition: "to become popular or fashionable",
        examples: [
          "The idea never really caught on.",
          "The trend caught on quickly and soon everyone was wearing them.",
        ],
      },
      images: [],
    },
    {
      word: "catch on",
      pronunciation: "/kætʃ ɒn $ kætʃ ɑːn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      additionalInfo: "",
      translation: "",
      title: "catch on _ phrasal verb _ 2",
      meaning: {
        index: 2,
        definition: "to begin to understand or realize something",
        examples: [
          "It took me a while to catch on to what she was saying.",
          "I didn't catch on until he explained it to me.",
        ],
      },
      images: [],
    },
    {
      word: "mess",
      pronunciation: "/mes/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "mess _ noun _ 1",
      meaning: {
        index: 1,
        definition:
          "if there is a mess somewhere or a place is a mess, things there are dirty or not neatly arranged",
        examples: [
          "Sorry – the place is a bit of a mess.",
          "When I got home, the house was a complete mess.",
        ],
      },
      images: [],
    },
    {
      word: "mess",
      pronunciation: "/mes/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "mess _ noun _ 2",
      meaning: {
        index: 2,
        definition:
          "a situation in which there are a lot of problems and difficulties, especially as a result of mistakes or carelessness",
        examples: [
          "The welfare system in this country is a mess.",
          "Her life’s such a mess.",
        ],
      },
      images: [],
    },
    {
      word: "mess",
      pronunciation: "/mes/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "mess _ noun _ 3",
      meaning: {
        index: 3,
        definition: "→ make a mess of (doing) something, to do something badly",
        examples: [
          "I feel I’ve made a real mess of my marriage.",
          "Many people make a mess of handling money.",
        ],
      },
      images: [],
    },
    {
      word: "mess",
      pronunciation: "/mes/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "mess _ noun _ 4",
      meaning: {
        index: 4,
        definition:
          "→ be a mess, informal, if someone is a mess, they look dirty and untidy, or are in a bad emotional state",
        examples: [],
      },
      images: [],
    },
    {
      word: "mess",
      pronunciation: "/mes/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "mess _ noun _ 5",
      meaning: {
        index: 5,
        definition:
          "→ a mess of something, American English, informal, a lot of something",
        examples: ["a mess of fresh fish"],
      },
      images: [],
    },
    {
      word: "mess",
      pronunciation: "/mes/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "mess _ verb _ 1",
      meaning: {
        index: 1,
        definition: "to make something look untidy or dirty",
        examples: ["He scratched his head and messed his hair even more."],
      },
      images: [],
    },
    {
      word: "mess",
      pronunciation: "/mes/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "mess _ verb _ 2",
      meaning: {
        index: 2,
        definition:
          "British English, if an animal or person messes something, they use the wrong place as a toilet",
        examples: ["He was so drunk that he messed the bed."],
      },
      images: [],
    },
    {
      word: "mess",
      pronunciation: "/mes/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "mess _ verb _ 3",
      meaning: {
        index: 3,
        definition:
          "→ no messing, spoken, informal, used to say that something was done very easily",
        examples: ["Williams won very comfortably, no messing."],
      },
      images: [],
    },
    {
      word: "mess around with somebody/something",
      pronunciation: "/ˈmes əˌraʊnd wɪð ˈsʌmbədi ˈsʌmθɪŋ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      additionalInfo: "",
      translation: "",
      title: "mess around with somebody/something _ phrasal verb _ 1",
      meaning: {
        index: 1,
        definition:
          "to have a sexual relationship with someone that you should not have a sexual relationship with",
        examples: ["She’d been messing around with another man."],
      },
      images: [],
    },
    {
      word: "mess around with somebody/something",
      pronunciation: "/ˈmes əˌraʊnd wɪð ˈsʌmbədi ˈsʌmθɪŋ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      additionalInfo: "",
      translation: "",
      title: "mess around with somebody/something _ phrasal verb _ 2",
      meaning: {
        index: 2,
        definition: "to spend time playing with something, repairing it etc",
        examples: ["Dave likes messing around with old cars."],
      },
      images: [],
    },
    {
      word: "mess around with somebody/something",
      pronunciation: "/ˈmes əˌraʊnd wɪð ˈsʌmbədi ˈsʌmθɪŋ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      additionalInfo: "",
      translation: "",
      title: "mess around with somebody/something _ phrasal verb _ 3",
      meaning: {
        index: 3,
        definition: "to use something and make annoying changes to it",
        examples: ["Who’s been messing around with my camera?"],
      },
      images: [],
    },
    {
      word: "mess up",
      pronunciation: "/mes ʌp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      additionalInfo: "",
      translation: "",
      title: "mess up _ phrasal verb _ 1",
      meaning: {
        index: 1,
        definition:
          "to spoil or ruin something, especially something important or something that has been carefully planned",
        examples: [
          "It took me ages to get this right – I don’t want some idiot to mess it up.",
          "She felt she’d messed up her whole life.",
        ],
      },
      images: [],
    },
    {
      word: "mess up",
      pronunciation: "/mes ʌp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      additionalInfo: "",
      translation: "",
      title: "mess up _ phrasal verb _ 2",
      meaning: {
        index: 2,
        definition: "mess something ↔ up, to make something dirty or untidy",
        examples: ["Who messed up the kitchen?"],
      },
      images: [],
    },
    {
      word: "mess up",
      pronunciation: "/mes ʌp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      additionalInfo: "",
      translation: "",
      title: "mess up _ phrasal verb _ 3",
      meaning: {
        index: 3,
        definition: "to make a mistake and do something badly",
        examples: [
          "I think I messed up on the last question.",
          "It doesn’t matter if you mess it up, you can always try again.",
        ],
      },
      images: [],
    },
    {
      word: "mess up",
      pronunciation: "/mes ʌp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      additionalInfo: "",
      translation: "",
      title: "mess up _ phrasal verb _ 4",
      meaning: {
        index: 4,
        definition: "to make someone have emotional or mental problems",
        examples: ["I messed up my kids."],
      },
      images: [],
    },
    {
      word: "mess with somebody/something",
      pronunciation: "/mes wɪð ˈsʌmbədi ˈsʌmθɪŋ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "informal",
      additionalInfo: "",
      translation: "",
      title: "mess with somebody/something _ phrasal verb _ 1",
      meaning: {
        index: 1,
        definition:
          "to get involved with someone or something that may cause problems or be dangerous",
        examples: ["Don’t mess with drugs."],
      },
      images: [],
    },
    {
      word: "mess with somebody/something",
      pronunciation: "/mes wɪð ˈsʌmbədi ˈsʌmθɪŋ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "informal",
      additionalInfo: "",
      translation: "",
      title: "mess with somebody/something _ phrasal verb _ 2",
      meaning: {
        index: 2,
        definition: "to deceive someone or cause trouble for them",
        examples: ["You mess with me, and I’ll rip your head off."],
      },
      images: [],
    },
    {
      word: "mess with somebody/something",
      pronunciation: "/mes wɪð ˈsʌmbədi ˈsʌmθɪŋ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "informal",
      additionalInfo: "",
      translation: "",
      title: "mess with somebody/something _ phrasal verb _ 3",
      meaning: {
        index: 3,
        definition:
          "to try changing something, especially in a way that damages or spoils it",
        examples: ["I wouldn't mess with that if I were you."],
      },
      images: [],
    },
    {
      word: "whipped cream",
      pronunciation: "/wɪpt kriːm/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "whipped cream _ noun",
      meaning: {
        index: 0,
        definition: "cream that has been beaten until it is thick",
        examples: [""],
      },
      images: [],
    },
    {
      word: "whip",
      pronunciation: "/wɪp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "whip _ verb _ 1",
      meaning: {
        index: 1,
        definition: "to hit someone or something with a whip",
        examples: ["He whipped the horse into a canter."],
      },
      images: [],
    },
    {
      word: "whip",
      pronunciation: "/wɪp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "whip _ verb _ 2",
      meaning: {
        index: 2,
        definition:
          "to move quickly and violently, or to make something do this",
        examples: [
          "The wind whipped her hair into her eyes.",
          "whip across/around/past etc",
          "Rain whipped across the window pane.",
          "whip something about/around",
          "The branches were being whipped about in the storm.",
          "whip round/around",
          "He whipped round to face them.",
        ],
      },
      images: [],
    },
    {
      word: "whip",
      pronunciation: "/wɪp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "whip _ verb _ 3",
      meaning: {
        index: 3,
        definition: "to move or remove something with a quick sudden movement",
        examples: [
          "whip something off/out/back etc",
          "Annie whipped off her apron and put it into the drawer.",
          "He whipped back the sheets.",
        ],
      },
      images: [],
    },
    {
      word: "whip",
      pronunciation: "/wɪp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "whip _ verb _ 4",
      meaning: {
        index: 4,
        definition:
          "to mix cream or the clear part of an egg very hard until it becomes stiff",
        examples: ["Whip the cream until thick."],
      },
      images: [],
    },
    {
      word: "horny",
      pronunciation: "/ˈhɔːni $ ˈhɔːrni/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      additionalInfo: "",
      translation: "",
      title: "horny _ adjective",
      meaning: {
        index: 0,
        definition: "informal sexually excited",
        examples: ["feeling horny"],
      },
      images: [],
    },
    {
      word: "revelation",
      pronunciation: "/ˌrevəˈleɪʃən/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "revelation _ noun _ 1",
      meaning: {
        index: 1,
        definition:
          "a surprising fact about someone or something that was previously secret and is now made known",
        examples: [
          "He resigned after revelations about his affair.",
          "startling revelations about his background",
          "revelations that two senior officers had lied in court",
        ],
      },
      images: [],
    },
    {
      word: "revelation",
      pronunciation: "/ˌrevəˈleɪʃən/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "revelation _ noun _ 2",
      meaning: {
        index: 2,
        definition:
          "the act of suddenly making known a surprising fact that had previously been secret",
        examples: ["the revelation of previously unknown facts"],
      },
      images: [],
    },
    {
      word: "revelation",
      pronunciation: "/ˌrevəˈleɪʃən/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "revelation _ noun _ 3",
      meaning: {
        index: 3,
        definition: "something that is surprisingly good, enjoyable, or useful",
        examples: ["Alice Walker’s novel was a real revelation to me."],
      },
      images: [],
    },
    {
      word: "revelation",
      pronunciation: "/ˌrevəˈleɪʃən/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "revelation _ noun _ 4",
      meaning: {
        index: 4,
        definition:
          "an event, experience etc that is considered to be a message from God",
        examples: [],
      },
      images: [],
    },
    {
      word: "be more of something than something",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "",
      additionalInfo: "",
      translation: "",
      title: "be more of something than something",
      meaning: {
        index: 0,
        definition: "to be one thing rather than another",
        examples: ["It was more of a holiday than a training exercise."],
      },
      images: [],
    },
    {
      word: "spit",
      pronunciation: "/spɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "spit _ verb _ 1",
      meaning: {
        index: 1,
        definition:
          "to force a small amount of saliva (=the liquid in your mouth) out of your mouth",
        examples: [
          "Nick rolled down his window and spat",
          "spit at/on/into",
          "A group of fans spat on the players as they left the field.",
        ],
      },
      images: [],
    },
    {
      word: "spit",
      pronunciation: "/spɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "spit _ verb _ 2",
      meaning: {
        index: 2,
        definition: "to force something out of your mouth",
        examples: [
          "Billy stood up slowly, rubbed his jaw, and spat blood.",
          "Diana tasted her martini and quickly spat it out.",
        ],
      },
      images: [],
    },
    {
      word: "spit",
      pronunciation: "/spɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "spit _ verb _ 3",
      meaning: {
        index: 3,
        definition:
          "→ be spitting, British English, to be raining very lightly SYN drizzle",
        examples: ["You don’t need an umbrella – it’s only spitting."],
      },
      images: [],
    },
    {
      word: "spit",
      pronunciation: "/spɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "spit _ verb _ 4",
      meaning: {
        index: 4,
        definition: "to say something quickly in a very angry way",
        examples: ["'Shut up!', spat Maria furiously."],
      },
      images: [],
    },
    {
      word: "spit",
      pronunciation: "/spɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "spit _ verb _ 5",
      meaning: {
        index: 5,
        definition:
          "→ spit it out,spoken used to ask someone to tell you something that they seem too frightened or embarrassed to say",
        examples: ["Come on, Jean. Spit it out!"],
      },
      images: [],
    },
    {
      word: "spit",
      pronunciation: "/spɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "spit _ verb _ 6",
      meaning: {
        index: 6,
        definition:
          "to send out small bits of something, for example fire or hot oil, into the air",
        examples: ["A log fire was crackling and spitting in the hearth."],
      },
      images: [],
    },
    {
      word: "spit",
      pronunciation: "/spɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "spit _ verb _ 7",
      meaning: {
        index: 7,
        definition: "if a cat spits, it makes short angry sounds",
        examples: [],
      },
      images: [],
    },
    {
      word: "smash",
      pronunciation: "/smæʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "smash _ verb _ 1",
      meaning: {
        index: 1,
        definition:
          "to break into pieces violently or noisily, or to make something do this by dropping, throwing, or hitting it",
        examples: [
          "Vandals had smashed all the windows.",
          "Firemen had to smash the lock to get in.",
          "Several cups fell to the floor and smashed to pieces.",
        ],
      },
      images: [],
    },
    {
      word: "smash",
      pronunciation: "/smæʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "smash _ verb _ 2",
      meaning: {
        index: 2,
        definition:
          " to hit an object or surface violently, or to make something do this",
        examples: [
          "A stolen car smashed into the bus.",
          "He smashed his fist down on the table.",
        ],
      },
      images: [],
    },
    {
      word: "smash",
      pronunciation: "/smæʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "smash _ verb _ 3",
      meaning: {
        index: 3,
        definition:
          "to do something much faster, better etc than anyone has done before",
        examples: ["The film smashed all box office records."],
      },
      images: [],
    },
    {
      word: "smash",
      pronunciation: "/smæʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "smash _ verb _ 4",
      meaning: {
        index: 4,
        definition:
          "to destroy something such as a political system or criminal organization",
        examples: ["Police say they have smashed a major crime ring."],
      },
      images: [],
    },
    {
      word: "smash",
      pronunciation: "/smæʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "smash _ verb _ 5",
      meaning: {
        index: 5,
        definition:
          "to hit a high ball with a strong downward action, in tennis or similar games",
        examples: [""],
      },
      images: [],
    },
    {
      word: "get together",
      pronunciation: "/ɡet təˈɡeðər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "get together _ phrasal verb _ 1",
      meaning: {
        index: 1,
        definition:
          "if people get together, they meet in order to spend time with each other",
        examples: ["We must get together for a drink."],
      },
      images: [],
    },
    {
      word: "get together",
      pronunciation: "/ɡet təˈɡeðər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "get together _ phrasal verb _ 2",
      meaning: {
        index: 2,
        definition:
          "if two people get together, they start a romantic or sexual relationship",
        examples: [],
      },
      images: [],
    },
    {
      word: "get together",
      pronunciation: "/ɡet təˈɡeðər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "get together _ phrasal verb _ 3",
      meaning: {
        index: 3,
        definition: "get something ↔ together to collect things together",
        examples: ["I need to get some paperwork together for the meeting."],
      },
      images: [],
    },
    {
      word: "get together",
      pronunciation: "/ɡet təˈɡeðər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "get together _ phrasal verb _ 4",
      meaning: {
        index: 4,
        definition:
          "get somebody ↔ together to bring people together to make a group",
        examples: [
          "He got together a group of local businessmen to discuss the problem.",
        ],
      },
      images: [],
    },
    {
      word: "get together",
      pronunciation: "/ɡet təˈɡeðər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "get together _ phrasal verb _ 5",
      meaning: {
        index: 5,
        definition:
          "get something ↔ together to succeed in getting enough money to do or buy something",
        examples: ["We’re trying to get together enough money to buy a flat."],
      },
      images: [],
    },
    {
      word: "get together",
      pronunciation: "/ɡet təˈɡeðər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "get together _ phrasal verb _ 6",
      meaning: {
        index: 6,
        definition:
          "get something together, informal, to change your life so that it is organized and you are in control of it",
        examples: [
          "He’s just trying to get his life together at the moment.",
          "get yourself together",
          "I’m staying with my parents for a while, until I’ve got myself together a bit.",
        ],
      },
      images: [],
    },
    {
      word: "get together",
      pronunciation: "/ɡet təˈɡeðər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "get together _ phrasal verb _ 7",
      meaning: {
        index: 7,
        definition:
          "get it together spoken to be organized and successful in your life, job etc",
        examples: [
          "The government can’t seem to get it together on the environment.",
        ],
      },
      images: [],
    },
    {
      word: "be on a roll",
      pronunciation: "/bi ɒn ə rəʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "idiom",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "be on a roll _ idiom",
      meaning: {
        index: 0,
        definition:
          "to be having a lot of success with what you are trying to do",
        examples: [
          "Midvale High was on a roll, having won their last six basketball games.",
          "The Toronto-born architect is on a roll.",
          "Small business is on a roll.",
        ],
      },
      images: [],
    },
    {
      word: "abuse",
      pronunciation: "/əˈbjuːs/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "abuse _ noun _ 1",
      meaning: {
        index: 1,
        definition: "cruel or violent treatment of someone",
        examples: [
          "several cases of child abuse",
          "physical/sexual/racial abuse",
          "Many children suffer racial abuse at school.",
          "An independent committee will look into alleged human rights abuses.",
        ],
      },
      images: [],
    },
    {
      word: "abuse",
      pronunciation: "/əˈbjuːs/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "abuse _ noun _ 2",
      meaning: {
        index: 2,
        definition:
          "the use of something in a way that it should not be used SYN misuse",
        examples: [
          "abuse of",
          "government officials’ abuse of power",
          "A self-monitoring tax system is clearly open to abuse (=able to be used wrongly).",
          "alcohol/drug abuse (=the practice of drinking too much or taking illegal drugs)",
        ],
      },
      images: [],
    },
    {
      word: "abuse",
      pronunciation: "/əˈbjuːs/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "abuse _ noun _ 3",
      meaning: {
        index: 3,
        definition:
          "rude or offensive things that someone says when they are angry",
        examples: [
          "vandalism and verbal abuse directed at old people",
          "a torrent/stream of abuse (=a series of rude or angry words)",
          "shout/hurl/scream abuse at somebody",
          "The other driver started hurling abuse at me.",
        ],
      },
      images: [],
    },
    {
      word: "abuse",
      pronunciation: "/əˈbjuːz/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "abuse _ verb _ 1",
      meaning: {
        index: 1,
        definition:
          "to treat someone in a cruel and violent way, often sexually",
        examples: [
          "sexually/physically abused",
          "She was sexually abused as a child.",
        ],
      },
      images: [],
    },
    {
      word: "abuse",
      pronunciation: "/əˈbjuːz/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "abuse _ verb _ 2",
      meaning: {
        index: 2,
        definition:
          "to deliberately use something for the wrong purpose or for your own advantage",
        examples: [
          "Williams abused his position as mayor to give jobs to his friends.",
          "Morris abused the trust the firm had shown in him.",
          "people who abuse the system",
          "abuse alcohol/drugs",
          "The proportion of drinkers who abuse alcohol is actually quite small.",
        ],
      },
      images: [],
    },
    {
      word: "abuse",
      pronunciation: "/əˈbjuːz/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "abuse _ verb _ 3",
      meaning: {
        index: 3,
        definition: "to say rude or offensive things to someone SYN insult",
        examples: [
          "Many soldiers in Belfast are verbally abused.",
          "He came to the help of another driver who was being racially abused by three white passengers.",
        ],
      },
      images: [],
    },
    {
      word: "abuse",
      pronunciation: "/əˈbjuːz/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "abuse _ verb _ 4",
      meaning: {
        index: 4,
        definition: "to treat something so badly that you start to destroy it",
        examples: ["James abused his body for years with heroin and cocaine."],
      },
      images: [],
    },
    {
      word: "credit",
      pronunciation: "/ˈkredɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "credit _ noun _ 1",
      meaning: {
        index: 1,
        definition:
          "an arrangement with a shop, bank etc that allows you to buy something and pay for it later",
        examples: [
          "Most new cars are bought on credit.",
          "The store agreed to let him have credit.",
          "What’s the credit limit on your Visa card?",
        ],
      },
      images: [],
    },
    {
      word: "credit",
      pronunciation: "/ˈkredɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "credit _ noun _ 2",
      meaning: {
        index: 2,
        definition:
          "approval or praise that you give to someone for something they have done",
        examples: [
          "Credit for this win goes to everybody in the team.",
          "They never give Gene any credit for all the extra work he does.",
          "She deserves credit for trying her best.",
          "To Jamie’s credit, he remained calm.",
          "Credit must go to Fiona for making sure everything ran smoothly.",
        ],
      },
      images: [],
    },
    {
      word: "credit",
      pronunciation: "/ˈkredɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "credit _ noun _ 3",
      meaning: {
        index: 3,
        definition:
          "→ be a credit to somebody/something,(also do somebody/something credit) to behave so well or be so successful that your family, team etc are proud of you",
        examples: [
          "She’s a credit to her profession.",
          "Your children really do you credit.",
        ],
      },
      images: [],
    },
    {
      word: "credit",
      pronunciation: "/ˈkredɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "credit _ noun _ 4",
      meaning: {
        index: 4,
        definition:
          "→ have something to your credit,to have achieved something",
        examples: ["She already has two successful novels to her credit."],
      },
      images: [],
    },
    {
      word: "credit",
      pronunciation: "/ˈkredɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "credit _ noun _ 5",
      meaning: {
        index: 5,
        definition:
          "→ in credit,if you are in credit, there is money in your bank account",
        examples: [" There are no bank charges if you stay in credit."],
      },
      images: [],
    },
    {
      word: "credit",
      pronunciation: "/ˈkredɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "credit _ noun _ 6",
      meaning: {
        index: 6,
        definition:
          "→ the credits,[plural] a list of all the people involved in making a film or television programme, which is shown at the beginning or end of it",
        examples: [],
      },
      images: [],
    },
    {
      word: "credit",
      pronunciation: "/ˈkredɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "credit _ noun _ 7",
      meaning: {
        index: 7,
        definition:
          "→ on the credit side,used to talk about the good things about someone or something",
        examples: [
          "On the credit side, the book is extremely well researched.",
        ],
      },
      images: [],
    },
    {
      word: "credit",
      pronunciation: "/ˈkredɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "credit _ noun _ 8",
      meaning: {
        index: 8,
        definition:
          "→ (give) credit where credit is due,used to say that someone deserves to be praised for the good things they have done",
        examples: [],
      },
      images: [],
    },
    {
      word: "credit",
      pronunciation: "/ˈkredɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "credit _ noun _ 9",
      meaning: {
        index: 9,
        definition:
          "a successfully completed part of a course at a university or college",
        examples: ["I don’t have enough credits to graduate."],
      },
      images: [],
    },
    {
      word: "credit",
      pronunciation: "/ˈkredɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "credit _ noun _ 10",
      meaning: {
        index: 10,
        definition:
          "an amount of money that is put into someone’s bank account or added to another amount OPP debit",
        examples: [
          "The company promised to provide credits to customers who had been charged too much.",
        ],
      },
      images: [],
    },
    {
      word: "credit",
      pronunciation: "/ˈkredɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "credit _ noun _ 11",
      meaning: {
        index: 11,
        definition: "the belief that something is true or correct",
        examples: ["The witness’s story gained credit with the jury."],
      },
      images: [],
    },
    {
      word: "snap",
      pronunciation: "/snæp/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "snap _ verb _ 1",
      meaning: {
        index: 1,
        definition:
          "to break with a sudden sharp noise, or to make something do this",
        examples: [
          "A twig snapped under my feet.",
          "The teacher snapped the chalk in two and gave me a piece.",
        ],
      },
      images: [],
    },
    {
      word: "snap",
      pronunciation: "/snæp/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "snap _ verb _ 2",
      meaning: {
        index: 2,
        definition:
          "to move into a particular position suddenly, making a short sharp noise, or to make something move like this",
        examples: [
          "The pieces just snap together like this.",
          "She snapped her briefcase shut.",
        ],
      },
      images: [],
    },
    {
      word: "snap",
      pronunciation: "/snæp/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "snap _ verb _ 3",
      meaning: {
        index: 3,
        definition: "to say something quickly in an angry way",
        examples: [
          "‘What do you want?’ Mike snapped.",
          "He snapped at Walter for no reason.",
        ],
      },
      images: [],
    },
    {
      word: "snap",
      pronunciation: "/snæp/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "snap _ verb _ 4",
      meaning: {
        index: 4,
        definition:
          "to suddenly stop being able to control your anger, anxiety, or other feelings in a difficult situation",
        examples: [
          "The stress began to get to her, and one morning she just snapped.",
        ],
      },
      images: [],
    },
    {
      word: "snap",
      pronunciation: "/snæp/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "snap _ verb _ 5",
      meaning: {
        index: 5,
        definition: "if an animal such as a dog snaps, it tries to bite you",
        examples: ["The dog started snapping at my heels."],
      },
      images: [],
    },
    {
      word: "snap",
      pronunciation: "/snæp/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "snap _ verb _ 6",
      meaning: {
        index: 6,
        definition: "(informal) to take a photograph",
        examples: [
          "Dave snapped a picture of me and Sonia.",
          "Mel snapped a picture with his pocket camera.",
        ],
      },
      images: [],
    },
    {
      word: "snap",
      pronunciation: "/snæp/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "snap _ verb _ 7",
      meaning: {
        index: 7,
        definition:
          "→ snap your fingers,to make a short sharp noise by moving one of your fingers quickly against your thumb, for example in order to get someone’s attention or to mark the beat of music",
        examples: [],
      },
      images: [],
    },
    {
      word: "snap",
      pronunciation: "/snæp/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "snap _ verb _ 8",
      meaning: {
        index: 8,
        definition:
          "→ snap to it, spoken, used to tell someone to hurry and do something immediately",
        examples: ["Come on, snap to it – get that room cleaned up!"],
      },
      images: [],
    },
    {
      word: "snap",
      pronunciation: "/snæp/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "snap _ verb _ 9",
      meaning: {
        index: 9,
        definition:
          " American English, to end a series of events – used especially in newspapers",
        examples: [
          "The Rockets snapped a seven-game losing streak by beating Portland.",
        ],
      },
      images: [],
    },
    {
      word: "turtle",
      pronunciation: "/ˈtɜːtl $ ˈtɜːrtl/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "turtle _ noun _ 1",
      meaning: {
        index: 1,
        definition:
          "a reptile that lives mainly in water and has a soft body covered by a hard shell",
        examples: [],
      },
      images: [],
    },
    {
      word: "turtle",
      pronunciation: "/ˈtɜːtl $ ˈtɜːrtl/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "turtle _ noun _ 2",
      meaning: {
        index: 2,
        definition:
          "any reptile that has a hard shell covering its body, for example a tortoise",
        examples: [],
      },
      images: [],
    },
    {
      word: "sophisticated",
      pronunciation: "/səˈfɪstɪkeɪtɪd/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "sophisticated _ adjective _ 1",
      meaning: {
        index: 1,
        definition:
          "having a lot of experience of life, and good judgment about socially important things such as art, fashion etc",
        examples: [
          "a sophisticated, witty American",
          "Clarissa’s hair was swept up into a sophisticated style.",
        ],
      },
      images: [],
    },
    {
      word: "sophisticated",
      pronunciation: "/səˈfɪstɪkeɪtɪd/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "sophisticated _ adjective _ 2",
      meaning: {
        index: 2,
        definition:
          "a sophisticated machine, system, method etc is very well designed and very advanced, and often works in a complicated way",
        examples: [
          "sophisticated software",
          "a highly sophisticated weapons system",
        ],
      },
      images: [],
    },
    {
      word: "sophisticated",
      pronunciation: "/səˈfɪstɪkeɪtɪd/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "sophisticated _ adjective _ 3",
      meaning: {
        index: 3,
        definition:
          "having a lot of knowledge and experience of difficult or complicated subjects and therefore able to understand them well",
        examples: ["British voters have become much more sophisticated."],
      },
      images: [],
    },
    {
      word: "beacon",
      pronunciation: "/ˈbiːkən/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "beacon _ noun _ 1",
      meaning: {
        index: 1,
        definition:
          "a light that is put somewhere to warn or guide people, ships, vehicles, or aircraft",
        examples: [],
      },
      images: [],
    },
    {
      word: "beacon",
      pronunciation: "/ˈbiːkən/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "beacon _ noun _ 2",
      meaning: {
        index: 2,
        definition:
          "a radio or radar signal used by aircraft or boats to help them find their position and direction",
        examples: [],
      },
      images: [],
    },
    {
      word: "beacon",
      pronunciation: "/ˈbiːkən/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "beacon _ noun _ 3",
      meaning: {
        index: 3,
        definition:
          "especially literary, a person, idea etc that guides or encourages you",
        examples: [
          "The education program offers a beacon of hope to these children.",
        ],
      },
      images: [],
    },
    {
      word: "beacon",
      pronunciation: "/ˈbiːkən/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "beacon _ noun _ 4",
      meaning: {
        index: 4,
        definition: "a fire on top of a hill used in the past as a signal",
        examples: [],
      },
      images: [],
    },
    {
      word: "upbeat",
      pronunciation: "/ˈʌpbiːt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "upbeat _ adjective",
      meaning: {
        index: 0,
        definition: "positive and making you feel that good things will happen",
        examples: ["an upbeat message"],
      },
      images: [],
    },
    {
      word: "live off somebody/something",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "live off somebody/something _ phrasal verb",
      meaning: {
        index: 0,
        definition:
          "to get your income or food from a supply of money or from another person",
        examples: [
          "Mom used to live off the interest from her savings.",
          "Dad lost his job and we had to live off welfare.",
          "Most people in the countryside live off the land (=live by growing or finding their own food).",
        ],
      },
      images: [],
    },
    {
      word: "give me/it a break!",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "idiom",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "give me/it a break! _ idiom",
      meaning: {
        index: 0,
        definition:
          "spoken, used when you want someone to stop doing or saying something that is annoying you",
        examples: [],
      },
      images: [],
    },
    {
      word: "end up",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "end up _ phrasal verb",
      meaning: {
        index: 0,
        definition:
          "to be in a particular situation, state, or place after a series of events, especially when you did not plan it",
        examples: [
          "He came round for a coffee and we ended up having a meal together.",
          "I wondered where the pictures would end up after the auction.",
          "end up doing something",
          "Most slimmers end up putting weight back on.",
          "Anyone who swims in the river could end up with a nasty stomach upset.",
          "He could end up as president.",
          "I don’t want to end up like my parents.",
        ],
      },
      images: [],
    },
    {
      word: "albino",
      pronunciation: "/ælˈbiːnəʊ $ ælˈbaɪnoʊ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "albino _ noun",
      meaning: {
        index: 0,
        definition:
          "a person or animal with a genetic condition that makes their skin and hair very white and their eyes pink",
        examples: [],
      },
      images: [],
    },
    {
      word: "windshield",
      pronunciation: "/ˈwɪndʃiːld/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "windshield _ noun _ 1",
      meaning: {
        index: 1,
        definition:
          "American English, (a windscreen, British English) the large window at the front of a car, bus etc",
        examples: [],
      },
      images: [],
    },
    {
      word: "windshield",
      pronunciation: "/ˈwɪndʃiːld/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "windshield _ noun _ 2",
      meaning: {
        index: 2,
        definition:
          "a piece of glass or clear plastic fixed at the front of a motorcycle that protects the rider from wind",
        examples: [],
      },
      images: [],
    },
    {
      word: "port",
      pronunciation: "/pɔːt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "port _ noun _ 1",
      meaning: {
        index: 1,
        definition: "a place where ships can be loaded and unloaded",
        examples: [
          "We’ll have two days ashore while the ship is in port.",
          "The ferry was about to leave port.",
        ],
      },
      images: [],
    },
    {
      word: "port",
      pronunciation: "/pɔːt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "port _ noun _ 2",
      meaning: {
        index: 2,
        definition:
          "a town or city with a harbour or dock where ships can be loaded or unloaded",
        examples: ["Britain’s largest port"],
      },
      images: [],
    },
    {
      word: "port",
      pronunciation: "/pɔːt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "port _ noun _ 3",
      meaning: {
        index: 3,
        definition:
          "a part of a computer where you can connect another piece of equipment, such as a printer",
        examples: [],
      },
      images: [],
    },
    {
      word: "port",
      pronunciation: "/pɔːt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "port _ noun _ 4",
      meaning: {
        index: 4,
        definition:
          "strong sweet Portuguese wine that is usually drunk after a meal",
        examples: ["a glass of port"],
      },
      images: [],
    },
    {
      word: "port",
      pronunciation: "/pɔːt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "port _ noun _ 5",
      meaning: {
        index: 5,
        definition:
          "the left side of a ship or aircraft when you are looking towards the front OPP starboard",
        examples: ["The plane tilted to port."],
      },
      images: [],
    },
    {
      word: "aromatherapy",
      pronunciation: "/əˌrəʊməˈθerəpi $ əˌroʊ-/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "aromatherapy _ noun",
      meaning: {
        index: 0,
        definition:
          "a treatment that uses massage with pleasant smelling natural oils to reduce pain and make you feel well",
        examples: [],
      },
      images: [],
    },
    {
      word: "something sucks",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "something sucks",
      meaning: {
        index: 0,
        definition:
          "spoken, not polite, used when you dislike something very much or think something is very bad",
        examples: ["If you ask me, the whole thing sucks."],
      },
      images: [],
    },
    {
      word: "crash",
      pronunciation: "/kræʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "crash _ verb _ 1",
      meaning: {
        index: 1,
        definition:
          "to have an accident in a car, plane etc by violently hitting something else",
        examples: [
          "The jet crashed after take-off.",
          "The plane crashed into a mountain.",
          "He was drunk when he crashed the car.",
        ],
      },
      images: [],
    },
    {
      word: "crash",
      pronunciation: "/kræʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "crash _ verb _ 2",
      meaning: {
        index: 2,
        definition:
          "to hit something or someone extremely hard while moving, in a way that causes a lot of damage or makes a lot of noise",
        examples: [
          "A brick crashed through the window.",
          "We watched the waves crashing against the rocks.",
          "The plates went crashing to the ground.",
          "A large branch came crashing down.",
        ],
      },
      images: [],
    },
    {
      word: "crash",
      pronunciation: "/kræʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "crash _ verb _ 3",
      meaning: {
        index: 3,
        definition: " to make a sudden loud noise",
        examples: ["Thunder crashed and boomed outside."],
      },
      images: [],
    },
    {
      word: "crash",
      pronunciation: "/kræʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "crash _ verb _ 4",
      meaning: {
        index: 4,
        definition:
          "if a computer crashes, or if you crash the computer, it suddenly stops working",
        examples: ["The system crashed and I lost three hours’ worth of work."],
      },
      images: [],
    },
    {
      word: "crash",
      pronunciation: "/kræʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "crash _ verb _ 5",
      meaning: {
        index: 5,
        definition:
          "if a stock market or shares crash, they suddenly lose a lot of value",
        examples: [],
      },
      images: [],
    },
    {
      word: "crash",
      pronunciation: "/kræʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "crash _ verb _ 6",
      meaning: {
        index: 6,
        definition: "British English, to lose very badly in a sports event",
        examples: ["Liverpool crashed to their worst defeat of the season."],
      },
      images: [],
    },
    {
      word: "crash",
      pronunciation: "/kræʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "crash _ verb _ 7",
      meaning: {
        index: 7,
        definition:
          "spoken, a) to stay at someone’s house for the night b) (also crash out) to go to bed, or go to sleep very quickly, because you are very tired; (informal) to go to a party that you have not been invited to",
        examples: [
          "Can I crash at your place on Saturday night?",
          "I crashed out on the sofa this afternoon.",
          "We crashed Joe’s party yesterday.",
        ],
      },
      images: [],
    },
    {
      word: "crash",
      pronunciation: "/kræʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "crash _ verb _ 8",
      meaning: {
        index: 8,
        definition:
          " informal, to go to a party that you have not been invited to",
        examples: ["We crashed Joe’s party yesterday."],
      },
      images: [],
    },
    {
      word: "split",
      pronunciation: "/splɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "split _ verb _ 1",
      meaning: {
        index: 1,
        definition:
          "if a group of people splits, or if it is split, people in the group disagree strongly with each other and the group sometimes divides into separate smaller groups",
        examples: [
          "It was feared that the issue would split the church.",
          "The party is split over the issue of immigration.",
          "The government appears deeply split on this issue.",
          "The Pan-Africanist Congress split from the ANC in 1959.",
          "The war has split the nation in two.",
        ],
      },
      images: [],
    },
    {
      word: "split",
      pronunciation: "/splɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "split _ verb _ 2",
      meaning: {
        index: 2,
        definition:
          "(also split up) to divide or separate something into different parts or groups, or to be divided into different parts or groups",
        examples: [
          "Can you split into groups of three now?",
          "The book is split into six sections.",
        ],
      },
      images: [],
    },
    {
      word: "split",
      pronunciation: "/splɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "split _ verb _ 3",
      meaning: {
        index: 3,
        definition:
          "if something splits, or if you split it, it tears or breaks along a straight line",
        examples: [
          "The branch split under their weight.",
          "One of the boxes had split open.",
          "The board had split in two.",
          "Split the pineapple down the middle.",
        ],
      },
      images: [],
    },
    {
      word: "split",
      pronunciation: "/splɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "split _ verb _ 4",
      meaning: {
        index: 4,
        definition:
          "to divide something into separate parts and share it between two or more people",
        examples: [
          "Profits will be split between three major charities.",
          "He agreed to sell the car and split the proceeds with his brother.",
          "split something three/four etc ways (=share something between three, four etc people or groups)",
          "The money will have to be split three ways.",
          "We agreed to split the cost.",
        ],
      },
      images: [],
    },
    {
      word: "split",
      pronunciation: "/splɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "split _ verb _ 5",
      meaning: {
        index: 5,
        definition:
          "to make someone’s head or lip have a cut in it, as a result of a fall or hit",
        examples: [
          "She fell against a table and split her lip.",
          "The force of the blow nearly split his head open.",
        ],
      },
      images: [],
    },
    {
      word: "split",
      pronunciation: "/splɪt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "split _ verb _ 6",
      meaning: {
        index: 6,
        definition:
          "(also split up), informal, if people split, they end a marriage or relationship with each other",
        examples: [
          "He split from his wife last year.",
          "The band split two years ago.",
        ],
      },
      images: [],
    },
    {
      word: "major",
      pronunciation: "/ˈmeɪdʒə $ -ər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "major _ adjective _ 1",
      meaning: {
        index: 1,
        definition: "having very serious or worrying results OPP minor",
        examples: [
          "There is a major problem with parking in London.",
          "The loss of their goalkeeper through injury was a major setback for the team.",
          "He underwent major heart surgery recently.",
          "It could have sparked a major confrontation.",
        ],
      },
      images: [],
    },
    {
      word: "major",
      pronunciation: "/ˈmeɪdʒə $ -ər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "major _ adjective _ 2",
      meaning: {
        index: 2,
        definition:
          "very large or important, when compared to other things or people of a similar kind OPP minor",
        examples: [
          "Britain played a major role in the negotiations.",
          "There are two major political parties in the US.",
          "The government’s major concern is with preventing road accidents.",
          "Smoking is one of the major causes of cancer.",
          "the major developments in computer technology",
          "a major road",
        ],
      },
      images: [],
    },
    {
      word: "major",
      pronunciation: "/ˈmeɪdʒə $ -ər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "major _ adjective _ 3",
      meaning: {
        index: 3,
        definition: "(American English spoken) very important",
        examples: ["This is major? You got me out of bed for this?"],
      },
      images: [],
    },
    {
      word: "major",
      pronunciation: "/ˈmeɪdʒə $ -ər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "major _ adjective _ 4",
      meaning: {
        index: 4,
        definition:
          "(music) a major key is based on a musical scale in which there are semitones between the third and fourth and the seventh and eighth notes → minor",
        examples: ["a symphony in D major"],
      },
      images: [],
    },
    {
      word: "crush",
      pronunciation: "/krʌʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "crush _ verb _ 1",
      meaning: {
        index: 1,
        definition: "to press something so hard that it breaks or is damaged",
        examples: [
          "His leg was crushed in the accident.",
          "Two people were crushed to death in the rush to escape.",
        ],
      },
      images: [],
    },
    {
      word: "crush",
      pronunciation: "/krʌʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "crush _ verb _ 2",
      meaning: {
        index: 2,
        definition:
          "to press something in order to break it into very small pieces or into a powder",
        examples: ["Crush two cloves of garlic."],
      },
      images: [],
    },
    {
      word: "crush",
      pronunciation: "/krʌʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "crush _ verb _ 3",
      meaning: {
        index: 3,
        definition:
          "→ crush a rebellion/uprising/revolt etc, to use severe methods to stop people from fighting you or opposing you SYN put down",
        examples: ["The revolution was crushed within days."],
      },
      images: [],
    },
    {
      word: "crush",
      pronunciation: "/krʌʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "crush _ noun _ 1",
      meaning: {
        index: 1,
        definition:
          "a crowd of people pressed so close together that it is difficult for them to move",
        examples: ["There’s always such a crush on the train in the mornings."],
      },
      images: [],
    },
    {
      word: "crush",
      pronunciation: "/krʌʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "crush _ noun _ 2",
      meaning: {
        index: 2,
        definition:
          " a strong feeling of romantic love for someone, especially one that a young person has for someone older who they do not know well",
        examples: [
          "She had a huge crush on her geography teacher.",
          "It’s just a schoolgirl crush.",
        ],
      },
      images: [],
    },
    {
      word: "crush",
      pronunciation: "/krʌʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "crush _ noun _ 3",
      meaning: {
        index: 3,
        definition:
          "American English, informal, someone who you have a feeling of romantic love for, but who you do not know well",
        examples: ["a first date with your crush"],
      },
      images: [],
    },
    {
      word: "figure",
      pronunciation: "/ˈfɪɡər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "figure _ noun _ 1",
      meaning: {
        index: 1,
        definition:
          "a) a number representing an amount, especially an official number b) a number from 0 to 9, written as a character rather than a word",
        examples: [
          "unemployment/sales/trade figures",
          "Ohio’s unemployment figures for December",
          "Government figures underestimate the problem.",
          "the figure ‘2’",
          "executives with salaries in six figures (=more than £99,999)",
          "a four/five/six figure number (=a number in the thousands, ten thousands, hundred thousands etc)",
        ],
      },
      images: [],
    },
    {
      word: "figure",
      pronunciation: "/ˈfɪɡər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "figure _ noun _ 2",
      meaning: {
        index: 2,
        definition: "a particular amount of money",
        examples: ["an estimated figure of $200 million"],
      },
      images: [],
    },
    {
      word: "figure",
      pronunciation: "/ˈfɪɡər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "figure _ noun _ 3",
      meaning: {
        index: 3,
        definition:
          "a) someone who is important or famous in some way b) someone with a particular type of appearance or character, especially when they are far away or difficult to see",
        examples: [
          "Several leading figures resigned from the party.",
          "the outstanding political figure of his time",
          "a tall figure in a hat",
          "Through the window I could see the commanding figure of Mrs Bradshaw.",
        ],
      },
      images: [],
    },
    {
      word: "figure",
      pronunciation: "/ˈfɪɡər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "figure _ noun _ 4",
      meaning: {
        index: 4,
        definition: "the shape of a woman’s body",
        examples: [
          "She has a good figure.",
          "keep/lose your figure (=stay thin or become fat)",
          "Most women have to watch their figure (=be careful not to get fat).",
        ],
      },
      images: [],
    },
    {
      word: "figure",
      pronunciation: "/ˈfɪɡər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "figure _ noun _ 5",
      meaning: {
        index: 5,
        definition:
          "→ father/mother/authority figure, someone who is considered to be like a father etc, or to represent authority, because of their character or behaviour",
        examples: ["an estimated figure of $200 million"],
      },
      images: [],
    },
    {
      word: "figure",
      pronunciation: "/ˈfɪɡər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "figure _ noun _ 6",
      meaning: {
        index: 6,
        definition:
          "→ figures, [plural], British English the activity of adding, multiplying etc numbers SYN arithmetic",
        examples: [
          "a natural ability with figures",
          "have a head for figures (=be good at arithmetic)",
        ],
      },
      images: [],
    },
    {
      word: "figure",
      pronunciation: "/ˈfɪɡər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "figure _ noun _ 7",
      meaning: {
        index: 7,
        definition: "a geometric shape",
        examples: ["A hexagon is a six-sided figure."],
      },
      images: [],
    },
    {
      word: "figure",
      pronunciation: "/ˈfɪɡər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "figure _ noun _ 8",
      meaning: {
        index: 8,
        definition: "a person in a painting or a model of a person",
        examples: ["the figure in the background"],
      },
      images: [],
    },
    {
      word: "figure",
      pronunciation: "/ˈfɪɡər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "figure _ noun _ 9",
      meaning: {
        index: 9,
        definition:
          "(written abbreviation fig.) a numbered drawing or a diagram in a book",
        examples: [],
      },
      images: [],
    },
    {
      word: "figure",
      pronunciation: "/ˈfɪɡər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "figure _ verb _ 1",
      meaning: {
        index: 1,
        definition:
          "to be an important part of a process, event, or situation, or to be included in something",
        examples: [
          "figure in/among",
          "Social issues figured prominently in the talks.",
          "My wishes didn’t figure among his considerations.",
          "Reform now figures high on the agenda.",
        ],
      },
      images: [],
    },
    {
      word: "figure",
      pronunciation: "/ˈfɪɡər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "figure _ verb _ 2",
      meaning: {
        index: 2,
        definition:
          "informal, to form a particular opinion after thinking about a situation",
        examples: [
          "From the way he behaved, I figured that he was drunk.",
          "It was worth the trouble, I figured.",
        ],
      },
      images: [],
    },
    {
      word: "figure",
      pronunciation: "/ˈfɪɡər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "figure _ verb _ 3",
      meaning: {
        index: 3,
        definition:
          "→ that figures/(it) figures, spoken, especially American English, a) used to say that something that happens is expected or typical, especially something bad b) used to say that something is reasonable or makes sense",
        examples: [
          "‘It rained the whole weekend.’ ‘Oh, that figures.’",
          "It figures that she’d be mad at you, after what you did.",
        ],
      },
      images: [],
    },
    {
      word: "figure",
      pronunciation: "/ˈfɪɡər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "figure _ verb _ 4",
      meaning: {
        index: 4,
        definition:
          "→ go figure, American English, spoken, said to show that you think something is strange or difficult to explain",
        examples: ["He didn’t even leave a message.’ ‘Go figure.’"],
      },
      images: [],
    },
    {
      word: "figure",
      pronunciation: "/ˈfɪɡər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "figure _ verb _ 5",
      meaning: {
        index: 5,
        definition: "American English, to calculate an amount SYN work out",
        examples: ["I’m just figuring my expenses."],
      },
      images: [],
    },
    {
      word: "geek",
      pronunciation: "/ɡiːk/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "geek _ noun",
      meaning: {
        index: 0,
        definition:
          "someone who is not popular because they wear unfashionable clothes, do not know how to behave in social situations, or do strange things SYN nerd",
        examples: ["a computer geek"],
      },
      images: [],
    },
    {
      word: "vulnerable",
      pronunciation: "/ˈvʌlnərəbəl/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "vulnerable _ adjective _ 1",
      meaning: {
        index: 1,
        definition:
          "someone who is vulnerable can be easily harmed or hurt OPP invulnerable",
        examples: [
          "He took advantage of me when I was at my most vulnerable.",
          "We work mainly with the elderly and other vulnerable groups.",
          "Children are most vulnerable to abuse within their own home.",
        ],
      },
      images: [],
    },
    {
      word: "vulnerable",
      pronunciation: "/ˈvʌlnərəbəl/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "vulnerable _ adjective _ 2",
      meaning: {
        index: 2,
        definition:
          "a place, thing, or idea that is vulnerable is easy to attack or criticize OPP invulnerable",
        examples: [
          "Their theories were badly thought out and very vulnerable to ridicule.",
          "The fort was vulnerable to attack from the north.",
        ],
      },
      images: [],
    },
    {
      word: "ask",
      pronunciation: "/ɑːsk $ æsk/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "ask _ verb _ 1",
      meaning: {
        index: 1,
        definition:
          "to speak or write to someone in order to get an answer, information, or a solution",
        examples: [
          "‘What’s your name?’ she asked.",
          "Don’t ask him – he won’t know.",
          "That kid’s always asking awkward questions.",
          "I asked him where he lived.",
          "We’ll have to ask someone the way to the station.",
          "Go and ask Tom whether he’s coming tonight.",
          "Visitors usually ask about the history of the castle.",
          "ask around (=ask in a lot of places or ask a lot of people)",
          "I’ll ask around, see if I can find you a place to stay.",
        ],
      },
      images: [],
    },
    {
      word: "ask",
      pronunciation: "/ɑːsk $ æsk/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "ask _ verb _ 2",
      meaning: {
        index: 2,
        definition: "to make a request for help, advice, information etc",
        examples: [
          "Don’t be afraid to ask for help.",
          "You can call this number to ask for assistance.",
          "If you are in any doubt, ask for advice.",
          "I wrote asking for information about the course.",
        ],
      },
      images: [],
    },
    {
      word: "ask",
      pronunciation: "/ɑːsk $ æsk/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "ask _ verb _ 3",
      meaning: {
        index: 3,
        definition:
          "to want a particular amount of money for something you are selling",
        examples: [
          "How much is he asking?",
          "He’s asking £2,000 for his car.",
          "They’re asking a fortune for that house.",
        ],
      },
      images: [],
    },
    {
      word: "ask",
      pronunciation: "/ɑːsk $ æsk/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "ask _ verb _ 4",
      meaning: {
        index: 4,
        definition: "to invite someone to your home, to go out with you etc",
        examples: [
          "Let’s ask them to have dinner with us some time.",
          "ask somebody out (=ask someone, especially someone of the opposite sex, to go to a film, a restaurant etc with you)",
          "Jerry’s too scared to ask her out.",
          "ask somebody in (=invite someone into your house, office etc)",
          "Don’t leave them standing on the doorstep – ask them in!",
          "ask somebody over/round (=invite someone to come to your home)",
          "We must ask our new neighbours over for a drink.",
        ],
      },
      images: [],
    },
    {
      word: "ask",
      pronunciation: "/ɑːsk $ æsk/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "ask _ verb _ 5",
      meaning: {
        index: 5,
        definition:
          "if you ask something of someone, you want them to do it for you",
        examples: [
          "It would be better if he cooperated, but perhaps I’m asking too much.",
          "You have no right to ask anything of me.",
          "Expecting the children to do an hour’s homework after school is asking a lot of them.",
        ],
      },
      images: [],
    },
  ];
  const words1 = data.map((item) => item.word);
  const words = [...new Set(words1)];
  console.log("this is words", words);
  //////////////
  const x = "hi this is \n a good";
  ////////////
  return (
    // <div className="xxx">{x}</div>
    // <Courses />
    // <NewCourse />
    // <WordCreation />
    // <Carousel slides={slides} />
    // <WordReview />
    // <WordsPart />
    // <WordAutoCompleteSearch />
    // <SectionView />

    <Router>
      <NavBar
        logInstatus={!!token}
        logOutStatusHandler={logOutStatusHandler}
        userId={userId}
      />
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/login" exact>
          <LoginForm logInStatusHandler={logInStatusHandler} />
        </Route>
        <Route path="/registration" exact>
          <RegistrationForm logInStatusHandler={logInStatusHandler} />
        </Route>
        <Route path="/tour" exact>
          <Tour />
        </Route>
        <Route path="/courses/all" exact>
          <Courses />
        </Route>
        <Route path="/courses/view/:courseId" exact>
          <CourseView />
        </Route>
        <Route path="/courses/user/:userId" exact>
          <UserCourses />
        </Route>
        <Route path="/courses/new" exact>
          <NewCourse />
        </Route>
        <Route path="/courses/:courseId" exact>
          <UpdateCourse userId={userId} />
        </Route>
        <Route path="/course/friends" exact>
          <SectionView />
        </Route>
        <Route path="/sections/view/:courseId/:sectionNumber" exact>
          <SectionView />
        </Route>
        <Route path="/audios/new" exact>
          <AudioStoring />
        </Route>{" "}
        <Route path="/images/new" exact>
          <ImageStoring />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
export default App;
