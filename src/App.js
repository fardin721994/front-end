import React, { useState, useRef } from "react";
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
import CourseList from "./courses/course-view/CourseList";
import CourseView from "./courses/course-view/CourseView";
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

  //////////////
  let data = [
    {
      word: "act",
      pronunciation: "/ækt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "act_noun_1",
      meaning: {
        index: 1,
        definition: "one thing that you do",
        examples: [
          "The new president’s first act should be to end the war.",
          "A thoughtless act.",
          "The act of writing a list can help to calm you down.",
          "an act of violence",
          "her many acts of kindness",
          "in the act of doing something (=at the moment that you are doing something)",
          "Lindsay paused in the act of putting down the phone.",
        ],
      },
    },
    {
      word: "act",
      pronunciation: "/ækt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "act_noun_2",
      meaning: {
        index: 2,
        definition:
          "(also Act) , a law that has been officially accepted by Parliament or Congress",
        examples: [
          "The Housing and Community Development Act of 1977.",
          "An act of Parliament.",
        ],
      },
    },
    {
      word: "act",
      pronunciation: "/ækt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "act_noun_3",
      meaning: {
        index: 3,
        definition:
          "insincere behaviour in which you pretend to have a particular kind of feeling or to be a particular kind of person",
        examples: [
          "Mike played the loving husband in front of the children but it was all an act.",
          "Be natural. Don’t feel you have to put on an act.",
        ],
      },
    },
    {
      word: "act",
      pronunciation: "/ækt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "act_noun_4",
      meaning: {
        index: 4,
        definition:
          "→ get your act together, informal, to become more organized and behave in a more effective way, especially in order to achieve something",
        examples: [
          "You need to get your act together if you’re going to find the right house to buy.",
        ],
      },
    },
    {
      word: "act",
      pronunciation: "/ækt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "act_noun_5",
      meaning: {
        index: 5,
        definition:
          "one of the main parts into which a stage play, opera etc is divided",
        examples: [
          "I arrived at the theatre late and missed the first act.",
          "the beginning of Act 3",
        ],
      },
    },
    {
      word: "act",
      pronunciation: "/ækt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "act_noun_6",
      meaning: {
        index: 6,
        definition:
          "a short performance on stage or television by someone who plays music or tells jokes",
        examples: ["The argument was just part of their act."],
      },
    },
    {
      word: "act",
      pronunciation: "/ækt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "act_noun_7",
      meaning: {
        index: 7,
        definition: "a performer or a group of performers who perform together",
        examples: [
          "The band is one of many acts that have been booked for the concert.",
        ],
      },
    },
    {
      word: "act",
      pronunciation: "/ækt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "act_verb_1",
      meaning: {
        index: 1,
        definition:
          "to do something in a particular way or for a particular reason",
        examples: [
          "The company acted correctly in sacking him.",
          "The jury decided that Walker had acted in self-defence.",
          "act to do something",
          "The UN must act now to restore democracy.",
          "Politicians will only act when enough people demand that they do something.",
        ],
      },
    },
    {
      word: "act",
      pronunciation: "/ækt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "act_verb_2",
      meaning: {
        index: 2,
        definition: "to behave in a particular way",
        examples: [
          "They acted unreasonably when they turned down Jill’s application.",
          "He’s been acting strangely ever since his mom died.",
          "Pip acted as if he was better than everyone else.",
          "Stop acting like a baby.",
          "She acted with dignity.",
          "act your age (=used to tell someone to behave in a more adult way, suitable for someone of their age)",
        ],
      },
    },
    {
      word: "act",
      pronunciation: "/ækt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "act_verb_3",
      meaning: {
        index: 3,
        definition:
          "to pretend to have feelings, qualities etc that are different from your true ones",
        examples: [
          "When he’s angry, he acts the fool.",
          "That guy is acting crazy.",
          "Stella felt unnatural in their company, as if she was acting a part.",
          "Why does he act as if he was stupid?",
        ],
      },
    },
    {
      word: "act",
      pronunciation: "/ækt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "act_verb_4",
      meaning: {
        index: 4,
        definition: "to perform in a play or film",
        examples: [
          "I first started acting when I was 12 years old.",
          "She is acting the role of Lady Macbeth six evenings a week.",
          "The movie is very well acted.",
        ],
      },
    },
    {
      word: "act",
      pronunciation: "/ækt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "act_verb_5",
      meaning: {
        index: 5,
        definition: "to have an effect or use act as",
        examples: [
          "The padding acts as a cushion if the player falls or is hit by the ball.",
          "Disinfectants act on bacteria in two main ways.",
        ],
      },
    },
    {
      word: "stand up",
      pronunciation: "/stænd ʌp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "stand up_phrasal verb_1",
      meaning: {
        index: 1,
        definition: "to be on your feet, or to rise to your feet",
        examples: [
          "I've been standing up all day.",
          "Stand up straight and don’t slouch!",
          "Jim stood up stiffly.",
        ],
      },
    },
    {
      word: "stand up",
      pronunciation: "/stænd ʌp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "stand up_phrasal verb_2",
      meaning: {
        index: 2,
        definition:
          "to stay healthy or in good condition in a difficult environment or after a lot of hard use",
        examples: ["Most of the plants stood up well to the heat."],
      },
    },
    {
      word: "stand up",
      pronunciation: "/stænd ʌp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "stand up_phrasal verb_3",
      meaning: {
        index: 3,
        definition:
          "to be proved to be true, correct, useful, etc. when tested",
        examples: [
          "The memoirs stand up well to cross-checking with other records.",
          "Without a witness, the charges will never stand up in court (=be successfully proved in a court of law)..",
        ],
      },
    },
    {
      word: "stand up",
      pronunciation: "/stænd ʌp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "stand up_phrasal verb_4",
      meaning: {
        index: 4,
        definition:
          "stand somebody up, informal, to not meet someone who you have arranged to meet",
        examples: [
          "I was supposed to go to a concert with Kyle on Friday, but he stood me up.",
        ],
      },
    },
    {
      word: "stand-up",
      pronunciation: "/'stændʌp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "stand-up_adjective_1",
      meaning: {
        index: 1,
        definition:
          "stand-up comedy involves one person telling jokes alone as a performance",
        examples: ["a stand-up comedian"],
      },
    },
    {
      word: "stand-up",
      pronunciation: "/'stændʌp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "stand-up_adjective_2",
      meaning: {
        index: 2,
        definition:
          "a stand-up meeting, meal etc is one in which people stand up",
        examples: ["We had a stand-up buffet."],
      },
    },
    {
      word: "sit through something",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "sit through something_phrasal verb",
      meaning: {
        index: 1,
        definition:
          "to attend a meeting, performance, etc., and stay until the end, even if it is very long and boring",
        examples: [
          "I wasn't the least bit interested in all the speeches I had to sit through.",
        ],
      },
    },
    {
      word: "club",
      pronunciation: "/klʌb/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "club_noun_1",
      meaning: {
        index: 1,
        definition:
          "a) an organization for people who share a particular interest or enjoy similar activities, or a group of people who meet together to do something they are interested in b) the building or place where the members of a particular club meet or play sport",
        examples: [
          "rugby/golf/squash etc club",
          "Our chess club really needs new members.",
          "a club for unemployed young people",
          "It costs £15 to join the club.",
          "She belongs to a local health club.",
          "We could have dinner at the golf club.",
        ],
      },
    },
    {
      word: "club",
      pronunciation: "/klʌb/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "club_noun_2",
      meaning: {
        index: 2,
        definition:
          " especially British English, a professional organization including the players, managers, and owners of a sports team",
        examples: ["Manchester United Football Club"],
      },
    },
    {
      word: "club",
      pronunciation: "/klʌb/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "club_noun_3",
      meaning: {
        index: 3,
        definition:
          "a place where people go to dance, listen to music, and meet socially",
        examples: [
          "a jazz club",
          "Shall we go to a club?",
          "I’m not into the club scene at all.",
        ],
      },
    },
    {
      word: "club",
      pronunciation: "/klʌb/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "club_noun_4",
      meaning: {
        index: 4,
        definition:
          "a) an organization, traditionally for men only, which provides a comfortable place for its members to relax, eat, or stay the night b) the building where this organization is based",
        examples: ["I always stay at my London club."],
      },
    },
    {
      word: "club",
      pronunciation: "/klʌb/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "club_noun_5",
      meaning: {
        index: 5,
        definition:
          "→ book/record/wine etc club, an organization which people join to buy books, records, wine etc cheaply",
        examples: [],
      },
    },
    {
      word: "club",
      pronunciation: "/klʌb/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "club_noun_6",
      meaning: {
        index: 6,
        definition:
          "(also golf club) a long thin metal stick used in golf to hit the ball",
        examples: [
          "He swung his club and missed the ball.",
          "She has a new set of clubs.",
        ],
      },
    },
    {
      word: "club",
      pronunciation: "/klʌb/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "club_noun_7",
      meaning: {
        index: 7,
        definition: "a thick heavy stick used to hit people",
        examples: [],
      },
    },
    {
      word: "club",
      pronunciation: "/klʌb/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "club_noun_8",
      meaning: {
        index: 8,
        definition:
          "a) one of the four suits (=types of cards) in a set of playing cards, which has the design of three round black leaves in a group together b) a card from this suit",
        examples: [
          "ten/king etc of clubs",
          "the ace of clubs",
          "You have to play a club.",
        ],
      },
    },
    {
      word: "club",
      pronunciation: "/klʌb/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "club_noun_9",
      meaning: {
        index: 9,
        definition:
          "→ in the club, British English, old-fashioned, if a woman is in the club, she is going to have a baby – used humorously SYN pregnant",
        examples: [],
      },
    },
    {
      word: "club",
      pronunciation: "/klʌb/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "club_noun_10",
      meaning: {
        index: 10,
        definition:
          "(also welcome to the club American English), spoken, used after someone has described a bad situation that they are in, to tell them that you are in the same situation",
        examples: ["‘He never listens to me.’ ‘Join the club.’"],
      },
    },
    {
      word: "glacier",
      pronunciation: "/ˈɡlæsiə $ ˈɡleɪʃər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "glacier_noun",
      meaning: {
        index: 0,
        definition:
          "a large mass of ice that moves slowly down a mountain valley",
        examples: [],
      },
    },
    {
      word: "catch up with somebody",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "catch up with somebody_phrasal verb_1",
      meaning: {
        index: 1,
        definition:
          "to finally find someone who has been doing something illegal and punish them",
        examples: ["It took six years for the law to catch up with them."],
      },
    },
    {
      word: "catch up with somebody",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "catch up with somebody_phrasal verb_2",
      meaning: {
        index: 2,
        definition:
          "if something bad from the past catches up with you, you cannot avoid dealing with it any longer",
        examples: [
          "At the end of the movie his murky past catches up with him.",
        ],
      },
    },
    {
      word: "catch up with somebody",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "catch up with somebody_phrasal verb_3",
      meaning: {
        index: 3,
        definition: "to reach someone who is ahead of you by going faster",
        examples: ["Go on ahead. I'll catch up with you later."],
      },
    },
    {
      word: "erect",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "erect_verb_1",
      meaning: {
        index: 1,
        definition: "formal, to build something such as a building or wall",
        examples: [
          "an imposing town hall, erected in 1892",
          "Police have erected barriers across the main roads into the town.",
        ],
      },
    },
    {
      word: "erect",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "erect_verb_2",
      meaning: {
        index: 2,
        definition:
          "to fix all the pieces of something together, and put it in an upright position SYN put up",
        examples: ["It took a couple of hours to erect the tent."],
      },
    },
    {
      word: "erect",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "erect_verb_3",
      meaning: {
        index: 3,
        definition: "to establish something such as a system or institution",
        examples: [],
      },
    },
    {
      word: "erect",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "erect_adjective_1",
      meaning: {
        index: 1,
        definition: "in a straight upright position",
        examples: ["Martin stood erect on the platform."],
      },
    },
    {
      word: "erect",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "erect_adjective_2",
      meaning: {
        index: 2,
        definition:
          "an erect penis or nipple is stiff and bigger than it usually is because a person is sexually excited",
        examples: [],
      },
    },
    {
      word: "paranoid",
      pronunciation: "/ˈpærənɔɪd/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "paranoid_adjective_1",
      meaning: {
        index: 1,
        definition:
          "believing unreasonably that you cannot trust other people, or that they are trying to harm you or have a bad opinion of you",
        examples: [
          "be/become/get paranoid",
          "Malcolm got really paranoid, deciding that there was a conspiracy out to get him.",
          "paranoid about",
          "He has always been paranoid about his personal security.",
        ],
      },
    },
    {
      word: "paranoid",
      pronunciation: "/ˈpærənɔɪd/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "paranoid_adjective_2",
      meaning: {
        index: 2,
        definition:
          "medical suffering from a mental illness that makes you believe that other people are trying to harm you",
        examples: ["a patient suffering from paranoid schizophrenia"],
      },
    },
    {
      word: "fluff",
      pronunciation: "/flʌf/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "fluff_noun_1",
      meaning: {
        index: 1,
        definition:
          "soft light bits of thread that have come from wool, cotton, or other materials",
        examples: [
          "He was picking bits of fluff off his trousers.",
          "a ball of carpet fluff",
        ],
      },
    },
    {
      word: "fluff",
      pronunciation: "/flʌf/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "fluff_noun_2",
      meaning: {
        index: 2,
        definition:
          "soft light hair or feathers, especially on a young bird or animal",
        examples: ["The chicks were just balls of yellow fluff."],
      },
    },
    {
      word: "fluff",
      pronunciation: "/flʌf/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "fluff_noun_3",
      meaning: {
        index: 3,
        definition: "(verb) to make a mistake or do something badly",
        examples: [
          "He fluffed his shot and missed the goal.",
          "She fluffed her lines in the first scene.",
        ],
      },
    },
    {
      word: "fluff",
      pronunciation: "/flʌf/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "fluff_noun_4",
      meaning: {
        index: 4,
        definition: "(verb) to make something soft become larger by shaking it",
        examples: [
          "She fluffed up the pillows for me.",
          "Fluff the couscous with a fork.",
        ],
      },
    },
    {
      word: "fluff",
      pronunciation: "/flʌf/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "fluff_noun_1",
      meaning: {
        index: 1,
        definition:
          "soft light bits of thread that have come from wool, cotton, or other materials",
        examples: [
          "He was picking bits of fluff off his trousers.",
          "a ball of carpet fluff",
        ],
      },
    },
    {
      word: "fluff",
      pronunciation: "/flʌf/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "fluff_noun_2",
      meaning: {
        index: 2,
        definition:
          "soft light hair or feathers, especially on a young bird or animal",
        examples: ["The chicks were just balls of yellow fluff."],
      },
    },
    {
      word: "fluff",
      pronunciation: "/flʌf/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "fluff_verb_1",
      meaning: {
        index: 1,
        definition:
          "informal, to make a mistake or do something badly SYN mess something ↔ up",
        examples: [
          "He fluffed his shot and missed the goal.",
          "She fluffed her lines in the first scene.",
        ],
      },
    },
    {
      word: "fluff",
      pronunciation: "/flʌf/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "fluff_verb_2",
      meaning: {
        index: 2,
        definition:
          "(also fluff something ↔ up/out) to make something soft become larger by shaking it",
        examples: ["She fluffed up the pillows for me."],
      },
    },
    {
      word: "fluff",
      pronunciation: "/flʌf/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "fluff_verb_3",
      meaning: {
        index: 3,
        definition:
          "(also fluff something ↔ up/out) if a bird fluffs its feathers, it raises them and makes itself look bigger",
        examples: [],
      },
    },
    {
      word: "ammunition",
      pronunciation: "/ˌæmjəˈnɪʃən/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "ammunition_noun_1",
      meaning: {
        index: 1,
        definition: "bullets, shells (shell), etc. that are fired from guns",
        examples: [],
      },
    },
    {
      word: "ammunition",
      pronunciation: "/ˌæmjəˈnɪʃən/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "ammunition_noun_2",
      meaning: {
        index: 2,
        definition:
          "information that you can use to criticize someone or win an argument against them",
        examples: [
          "give somebody ammunition/provide somebody with ammunition",
          "His mistakes provided political opponents with even more ammunition.",
        ],
      },
    },
    {
      word: "chaotic",
      pronunciation: "/keɪˈɒtɪk $ -ˈɑːtɪk/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "chaotic_adjective",
      meaning: {
        index: 0,
        definition:
          "a chaotic situation is one in which everything is happening in a confused way",
        examples: ["a chaotic mixture of images"],
      },
    },
    {
      word: "twirl",
      pronunciation: "/twɜːl $ twɜːrl/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "twirl_verb",
      meaning: {
        index: 0,
        definition: "to turn around and around or make something do this",
        examples: [
          "Couples were twirling around the dance floor.",
          "She twirled the liquid around in her glass.",
        ],
      },
    },
    {
      word: "concern",
      pronunciation: "/kənˈsɜːn $ -ɜːrn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "concern_noun_1",
      meaning: {
        index: 1,
        definition:
          "a) a feeling of worry about something important b) something that worries you",
        examples: [
          "The recent rise in crime is a matter of considerable public concern.",
          "our concern for human rights",
          "concern about/over/with",
          "the rise of concern about the environment",
          "the growing concern over inflation",
          "concern with worsening law and order",
          "increased concern that the war could continue for a long time",
          "be a cause for concern/cause concern",
          "The activities of the far right have been a cause for concern for a while now.",
          "In her last days the poet expressed concern for her father.",
          "One of the concerns that people have is the side effects of treatment.",
          "Education remains the electorate’s main concern.",
          "the concerns expressed by parents",
        ],
      },
    },
    {
      word: "concern",
      pronunciation: "/kənˈsɜːn $ -ɜːrn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "concern_noun_2",
      meaning: {
        index: 2,
        definition: "something that is important to you or that involves you",
        examples: [
          "His main concern is to be able to provide for his family.",
          "The consumer has become a major concern for this government.",
          "of concern to somebody",
          "topics of concern to television viewers",
        ],
      },
    },
    {
      word: "concern",
      pronunciation: "/kənˈsɜːn $ -ɜːrn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "concern_noun_3",
      meaning: {
        index: 3,
        definition: "a feeling of wanting someone to be happy and healthy",
        examples: [
          "He was moved by her obvious concern.",
          "parents’ loving concern for their children",
        ],
      },
    },
    {
      word: "concern",
      pronunciation: "/kənˈsɜːn $ -ɜːrn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "concern_noun_4",
      meaning: {
        index: 4,
        definition:
          "→ somebody’s concern, if something is your concern, you are responsible for it",
        examples: ["The money side of the business is your concern."],
      },
    },
    {
      word: "concern",
      pronunciation: "/kənˈsɜːn $ -ɜːrn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "concern_noun_5",
      meaning: {
        index: 5,
        definition:
          "→ not somebody’s concern/none of somebody’s concern, if something is not your concern, you are not interested in it and you do not need to worry about it or become involved in it",
        examples: ["His affairs were none of her concern."],
      },
    },
    {
      word: "concern",
      pronunciation: "/kənˈsɜːn $ -ɜːrn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "concern_noun_6",
      meaning: {
        index: 6,
        definition: "a business or company",
        examples: [
          "The restaurant is a family concern.",
          "We will continue to run the company as a going concern.",
        ],
      },
    },
    {
      word: "concern",
      pronunciation: "/kənˈsɜːn $ -ɜːrn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "concern_verb_1",
      meaning: {
        index: 1,
        definition:
          "if a story, book, report etc concerns someone or something, it is about them",
        examples: [
          "This study concerns couples’ expectations of marriage.",
          "The report concerns the drug traffic on the Mexican–US border.",
        ],
      },
    },
    {
      word: "concern",
      pronunciation: "/kənˈsɜːn $ -ɜːrn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "concern_verb_2",
      meaning: {
        index: 2,
        definition: "to make someone feel worried or upset",
        examples: ["Issues like food additives do concern me."],
      },
    },
    {
      word: "concern",
      pronunciation: "/kənˈsɜːn $ -ɜːrn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "concern_verb_3",
      meaning: {
        index: 3,
        definition:
          "if an activity, situation, rule etc concerns you, it affects you or involves you",
        examples: [
          "The tax changes will concern large corporations rather than small businesses.",
        ],
      },
    },
    {
      word: "engagement",
      pronunciation: "/ɪnˈɡeɪdʒmənt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "engagement_noun_1",
      meaning: {
        index: 1,
        definition:
          "an agreement between two people to marry, or the period of time they are engaged",
        examples: [
          "Their engagement was announced in the paper.",
          "Tony was stunned when Lisa suddenly broke off their engagement (=finished it).",
          "engagement ring (=a ring that a man gives a woman to show that they are engaged)",
        ],
      },
    },
    {
      word: "engagement",
      pronunciation: "/ɪnˈɡeɪdʒmənt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "engagement_noun_2",
      meaning: {
        index: 2,
        definition:
          "an official arrangement to do something, especially one that is related to your work",
        examples: [
          "The princess will continue to carry out royal engagements.",
          "This is his only public speaking engagement on the tour.",
          "His excuse of a prior engagement was accepted.",
        ],
      },
    },
    {
      word: "engagement",
      pronunciation: "/ɪnˈɡeɪdʒmənt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "engagement_noun_3",
      meaning: {
        index: 3,
        definition:
          "when you become involved with someone or something in order to understand them",
        examples: [
          "a strategy of engagement and cooperation with China",
          "Many students pass without any real engagement in learning.",
        ],
      },
    },
    {
      word: "engagement",
      pronunciation: "/ɪnˈɡeɪdʒmənt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "engagement_noun_4",
      meaning: {
        index: 4,
        definition: " technical fighting between armies etc",
        examples: ["military rules of engagement"],
      },
    },
    {
      word: "engagement",
      pronunciation: "/ɪnˈɡeɪdʒmənt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "engagement_noun_5",
      meaning: {
        index: 5,
        definition:
          "formal, an official arrangement to employ or pay someone to do a particular job",
        examples: [
          "Please sign to indicate your acceptance of the terms of engagement.",
        ],
      },
    },
    {
      word: "engagement",
      pronunciation: "/ɪnˈɡeɪdʒmənt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "engagement_noun_6",
      meaning: {
        index: 6,
        definition: "the fitting together of the working parts of a machine",
        examples: [],
      },
    },
    {
      word: "dread",
      pronunciation: "/dred/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "dread_verb",
      meaning: {
        index: 0,
        definition:
          "to feel anxious or worried about something that is going to happen or may happen",
        examples: [
          "I’ve got an interview tomorrow and I’m dreading it.",
          "dread doing something",
          "I’m dreading going back to work.",
          "dread somebody doing something",
          "Tim dreaded his parents finding out.",
          "I’m dreading that I’ll be asked to make a speech.",
          "dread the thought/prospect of (doing) something",
          "He dreaded the prospect of being all alone in that house.",
          "I dread to think what will happen if they get elected (=I think it will be very bad).",
        ],
      },
    },
    {
      word: "dread",
      pronunciation: "/dred/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "dread_noun",
      meaning: {
        index: 0,
        definition:
          "a strong fear of something that is going to happen or may happen",
        examples: [
          "dread of (doing) something",
          "the dread of losing those we love",
          "Bernice looked with dread at the end of the passage.",
          "The prospect of flying filled me with dread.",
          "She lives in dread of (=is continuously very afraid of) the disease returning.",
        ],
      },
    },
    {
      word: "stomp",
      pronunciation: "/stɒmp $ stɑːmp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "stomp_verb",
      meaning: {
        index: 0,
        definition:
          "to walk with heavy steps or to put your foot down very hard, especially because you are angry SYN stamp",
        examples: [
          "Alex stomped angrily out of the meeting.",
          "Rogers was injured after being stomped on by another player.",
        ],
      },
    },
    {
      word: "perspective",
      pronunciation: "/pəˈspektɪv $ pər-/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "perspective_noun_1",
      meaning: {
        index: 1,
        definition:
          "a way of thinking about something, especially one which is influenced by the type of person you are or by your experiences",
        examples: [
          "His father’s death gave him a whole new perspective on life.",
          "The novel is written from a child’s perspective.",
          "We have to look at everything from an international perspective.",
          "a much-needed historical perspective",
          "wider/broader perspective",
          "Our work in Uganda and Romania adds a wider perspective.",
        ],
      },
    },
    {
      word: "perspective",
      pronunciation: "/pəˈspektɪv $ pər-/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "perspective_noun_2",
      meaning: {
        index: 2,
        definition:
          "a sensible way of judging and comparing situations so that you do not imagine that something is more serious than it really is",
        examples: [
          "I think Viv’s lost all sense of perspective.",
          "The figures have to be put into perspective.",
          "get/keep something in perspective (=judge the importance of something correctly)",
        ],
      },
    },
    {
      word: "perspective",
      pronunciation: "/pəˈspektɪv $ pər-/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "perspective_noun_3",
      meaning: {
        index: 3,
        definition:
          "a method of drawing a picture that makes objects look solid and shows distance and depth, or the effect this method produces in a picture",
        examples: ["the artist’s use of perspective"],
      },
    },
    {
      word: "perspective",
      pronunciation: "/pəˈspektɪv $ pər-/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "perspective_noun_4",
      meaning: {
        index: 4,
        definition:
          "formal, a view, especially one in which you can see a long way into the distance",
        examples: [],
      },
    },
    {
      word: "fit into something",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "fit into something_phrasal verb_1",
      meaning: {
        index: 1,
        definition: "to be part of a group or system",
        examples: [
          "Some of the patients we see do not fit neatly into any of the existing categories.",
          "How does this fit into the company’s overall marketing strategy?",
        ],
      },
    },
    {
      word: "fit into something",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "fit into something_phrasal verb_2",
      meaning: {
        index: 2,
        definition: "to be accepted by the people in a group or organization",
        examples: ["She fitted into the team very well."],
      },
    },
    {
      word: "be up to somebody",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "be up to somebody_phrasal verb",
      meaning: {
        index: 0,
        definition:
          "a) used to say that someone can decide about something b)used to say that someone is responsible for a particular duty",
        examples: [
          "You can pay weekly or monthly – it’s up to you.",
          "It’s up to the travel companies to warn customers of any possible dangers.",
        ],
      },
    },
    {
      word: "presumably",
      pronunciation: "/prɪˈzjuːməbli $ -ˈzuː-/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adverb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "presumably_adverb",
      meaning: {
        index: 0,
        definition: "used to say that you think something is probably true",
        examples: [
          "It’s raining, which presumably means that your football match will be cancelled.",
          "He’s dead now, presumably?",
        ],
      },
    },
    {
      word: "sonogram",
      pronunciation: "/ˈsɒnəɡræm $ ˈsɑː-/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "sonogram_noun",
      meaning: {
        index: 0,
        definition:
          "American English, technical, an image, for example of an unborn baby inside its mother’s body, that is produced by a special machine SYN ultrasound British English",
        examples: [],
      },
    },
    {
      word: "ruin",
      pronunciation: "/ˈruːɪn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "ruin_verb_1",
      meaning: {
        index: 1,
        definition: "to spoil or destroy something completely",
        examples: [
          "This illness has ruined my life.",
          "His career would be ruined.",
          "All this mud’s going to ruin my shoes.",
        ],
      },
    },
    {
      word: "ruin",
      pronunciation: "/ˈruːɪn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "ruin_verb_2",
      meaning: {
        index: 2,
        definition: "to make someone lose all their money",
        examples: ["Jefferson was ruined by the lawsuit."],
      },
    },
    {
      word: "curry",
      pronunciation: "/ˈkʌri $ ˈkɜːri/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "curry_noun",
      meaning: {
        index: 0,
        definition:
          "a type of food from India, consisting of meat or vegetables in a spicy sauce",
        examples: ["chicken curry"],
      },
    },
    {
      word: "have a thing about somebody/something",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "informal",
      additionalInfo: "",
      translation: "",
      title: "have a thing about somebody/something_phrasal verb",
      meaning: {
        index: 0,
        definition:
          "to like or dislike someone or something very much, often without a good reason",
        examples: ["She’s always had a thing about Peter."],
      },
    },
    {
      word: "selfish",
      pronunciation: "/ˈselfɪʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "selfish_adjective",
      meaning: {
        index: 1,
        definition:
          "caring only about yourself and not about other people – used to show disapproval",
        examples: ["How can you be so selfish?", "selfish behaviour"],
      },
    },
    {
      word: "bring something ↔ up",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "bring something ↔ up_phrasal verb_1",
      meaning: {
        index: 1,
        definition: "to mention a subject or start to talk about it SYN raise",
        examples: ["Why did you have to bring up the subject of money?"],
      },
    },
    {
      word: "bring something ↔ up",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "bring something ↔ up_phrasal verb_2",
      meaning: {
        index: 2,
        definition:
          " to look after and influence a child until he or she is grown up SYN raise",
        examples: [
          "He was brought up by his grandparents.",
          "bring somebody up to do something",
          "In my day, children were brought up to respect the law.",
          "be brought up (as) a Catholic/Muslim etc",
          "I was brought up a Catholic.",
        ],
      },
    },
    {
      word: "bring something ↔ up",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "bring something ↔ up_phrasal verb_3",
      meaning: {
        index: 3,
        definition: "to make something appear on a computer screen",
        examples: ["Can you bring up the list of candidates again?"],
      },
    },
    {
      word: "bring something ↔ up",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "bring something ↔ up_phrasal verb_4",
      meaning: {
        index: 4,
        definition:
          "British English, if you bring food up, it comes back up from your stomach and out of your mouth",
        examples: [
          "I had a sandwich for lunch and promptly brought it up again.",
        ],
      },
    },
    {
      word: "bring something ↔ up",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "bring something ↔ up_phrasal verb_5",
      meaning: {
        index: 5,
        definition:
          "to charge someone with a particular crime and make them go to a court to be judged",
        examples: [
          "He was brought up before a magistrate, charged with dangerous driving.",
        ],
      },
    },
    {
      word: "bring something ↔ up",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "bring something ↔ up_phrasal verb_6",
      meaning: {
        index: 6,
        definition:
          "bring somebody up short/with a start, to surprise someone and make them suddenly stop talking or doing something",
        examples: ["Her question brought me up short."],
      },
    },
    {
      word: "heat",
      pronunciation: "/hiːt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "heat_noun_1",
      meaning: {
        index: 1,
        definition: "warmth or the quality of being hot",
        examples: [
          "Ice needs heat to melt.",
          "Insulating the attic is a good way to reduce heat loss.",
        ],
      },
    },
    {
      word: "heat",
      pronunciation: "/hiːt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "heat_noun_2",
      meaning: {
        index: 2,
        definition: "→ the heat, very hot weather or a high temperature",
        examples: [
          "The heat was making them tired.",
          "Angela liked to rest during the heat of the day (=the hottest part of the day).",
          "Firefighters were beaten back by the intense heat.",
        ],
      },
    },
    {
      word: "heat",
      pronunciation: "/hiːt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "heat_noun_3",
      meaning: {
        index: 3,
        definition:
          "the level of temperature used when cooking or heating something",
        examples: [
          "Cook the chicken portions over a high heat.",
          "Turn off the heat when the milk comes to the boil.",
          "Reduce the heat and cover the pan.",
        ],
      },
    },
    {
      word: "heat",
      pronunciation: "/hiːt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "heat_noun_4",
      meaning: {
        index: 4,
        definition: "strong feelings, especially anger or excitement",
        examples: [
          "Reconciliation services can take the heat out of (=reduce the anger in) the dispute.",
          "Quick decisions had to be made in the heat of the negotiations.",
          "In the heat of the moment (=when feelings were very strong), Nick threatened to resign.",
        ],
      },
    },
    {
      word: "heat",
      pronunciation: "/hiːt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "heat_noun_5",
      meaning: {
        index: 5,
        definition: "strong pressure on someone",
        examples: [
          "The heat is on (=there is a lot of pressure) as schools struggle to finish their entries by the deadline.",
          "The team turned up the heat (=used more effort against their opponents) in the last few minutes to score two more goals.",
          "There was a lot of heat, and it affected our relationship.",
        ],
      },
    },
    {
      word: "heat",
      pronunciation: "/hiːt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "heat_noun_6",
      meaning: {
        index: 6,
        definition:
          "American English, the system in a house or other building that keeps it warm in the winter, or the warmth from this system SYN heating British English",
        examples: ["Can you turn up the heat?"],
      },
    },
    {
      word: "heat",
      pronunciation: "/hiːt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "heat_noun_7",
      meaning: {
        index: 7,
        definition:
          "a part of a race or competition whose winners then compete against each other in the next part",
        examples: ["Bill finished second in his heat."],
      },
    },
    {
      word: "altar",
      pronunciation: "/ˈɔːltə $ ˈɒːltər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "altar_noun_1",
      meaning: {
        index: 1,
        definition: "a holy table or surface used in religious ceremonies",
        examples: [
          "a crucifix above the high altar (=the main altar in a church)",
          "The victim was tied to a sacrificial altar.",
        ],
      },
    },
    {
      word: "altar",
      pronunciation: "/ˈɔːltə $ ˈɒːltər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "altar_noun_2",
      meaning: {
        index: 2,
        definition:
          "the area furthest from the entrance of a church, where the priest or minister stands",
        examples: [],
      },
    },
    {
      word: "chubby",
      pronunciation: "/ˈtʃʌbi/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "chubby_adjective",
      meaning: {
        index: 0,
        definition: "slightly fat in a way that looks healthy and attractive",
        examples: ["a chubby six-year-old", "a baby with round chubby cheeks"],
      },
    },
    {
      word: "anecdote",
      pronunciation: "/ˈænɪkdəʊt $ -doʊt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "anecdote_noun",
      meaning: {
        index: 0,
        definition: "a short story based on your personal experience",
        examples: [
          "The book is full of amusing anecdotes about his life in Japan.",
        ],
      },
    },
    {
      word: "folk",
      pronunciation: "/fəʊk $ foʊk/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "folk_noun_1",
      meaning: {
        index: 1,
        definition: "[plural] (also folks) especially American English, people",
        examples: [
          "I’m sure there are some folk who would rather they weren’t here.",
          "Thanks to the folks at NBC.",
          "Wait till the folks back home hear about this!",
        ],
      },
    },
    {
      word: "folk",
      pronunciation: "/fəʊk $ foʊk/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "folk_noun_2",
      meaning: {
        index: 2,
        definition:
          "→ folks, [plural]  a) especially American English your parents and family b) used when talking to a group of people in a friendly way",
        examples: [
          "Is it OK if I call my folks?",
          "That’s all for now, folks.",
        ],
      },
    },
    {
      word: "folk",
      pronunciation: "/fəʊk $ foʊk/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "folk_noun_3",
      meaning: {
        index: 3,
        definition:
          "→ country/farming etc folk, [plural] (also country etc folks American English), literary, people who live in a particular area or do a particular kind of work",
        examples: ["simple country folk"],
      },
    },
    {
      word: "folk",
      pronunciation: "/fəʊk $ foʊk/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "folk_noun_4",
      meaning: {
        index: 4,
        definition: "folk music",
        examples: ["a folk singer"],
      },
    },
    {
      word: "deal",
      pronunciation: "/diːl/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "deal_noun_1",
      meaning: {
        index: 1,
        definition:
          "an agreement or arrangement, especially in business or politics, that helps both sides involved",
        examples: [
          "They made a deal to sell the land to a property developer.",
          "rumors that the company had done a deal with Microsoft to market its products",
          "Twelve US soldiers were released after a deal between the army and the guerillas.",
        ],
      },
    },
    {
      word: "deal",
      pronunciation: "/diːl/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "deal_noun_2",
      meaning: {
        index: 2,
        definition:
          "→ a great/good deal, a large quantity of something SYN a lot",
        examples: [
          "It took a great deal of time and effort.",
          "His work has been attracting a great deal of attention.",
          "a great/good deal more/less etc (=a lot more, less etc)",
          "He knew a good deal more than I did.",
          "She’s married to a man a good deal older than herself.",
        ],
      },
    },
    {
      word: "deal",
      pronunciation: "/diːl/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "deal_noun_3",
      meaning: {
        index: 3,
        definition: "treatment of a particular type that is given or received",
        examples: [
          "a better/fairer etc deal",
          "a better deal for nurses",
          "The prime minister promised farmers a new deal (=a new and fairer system).",
          "a rough/raw deal (=unfair treatment)",
          "Women tend to get a raw deal from employers.",
        ],
      },
    },
    {
      word: "deal",
      pronunciation: "/diːl/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "deal_noun_4",
      meaning: {
        index: 4,
        definition:
          "→ it’s a deal, spoken, used to say that you agree to do something",
        examples: ["OK, it’s a deal."],
      },
    },
    {
      word: "deal",
      pronunciation: "/diːl/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "deal_noun_5",
      meaning: {
        index: 5,
        definition:
          "→ what's the deal?, American English spoken used when you want to know about a problem or something strange that is happening",
        examples: ["So what's the deal? Why is he so mad?"],
      },
    },
    {
      word: "deal",
      pronunciation: "/diːl/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "deal_noun_6",
      meaning: {
        index: 6,
        definition: "when you give out cards to players in a card game",
        examples: ["It’s your deal, Alison."],
      },
    },
    {
      word: "deal",
      pronunciation: "/diːl/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "deal_noun_7",
      meaning: {
        index: 7,
        definition: "British English, fir or pine wood used for making things",
        examples: ["a deal table"],
      },
    },
    {
      word: "deal",
      pronunciation: "/diːl/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "deal_verb_1",
      meaning: {
        index: 1,
        definition:
          "(also deal something ↔ out) to give playing cards to each of the players in a game",
        examples: ["Whose turn is it to deal?"],
      },
    },
    {
      word: "deal",
      pronunciation: "/diːl/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "deal_verb_2",
      meaning: {
        index: 2,
        definition: "informal, to buy and sell illegal drugs",
        examples: ["Many users end up dealing to support their habit."],
      },
    },
    {
      word: "deal",
      pronunciation: "/diːl/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "deal_verb_3",
      meaning: {
        index: 3,
        definition:
          "→ deal a blow (to somebody/something), to cause harm to someone or something – used in news reports",
        examples: [
          "deal a heavy/severe/serious etc blow",
          "The sanctions have dealt a severe blow to the local tourism industry.",
          "This will deal a blow to consumer confidence.",
        ],
      },
    },
    {
      word: "deal with somebody/something",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "deal with somebody/something_phrasal verb_1",
      meaning: {
        index: 1,
        definition:
          "to take the necessary action, especially in order to solve a problem SYN handle",
        examples: [
          "a strategy for dealing with disruptive pupils",
          "Don’t worry, I’ll deal with this.",
          "deal with a problem/issue/matter etc",
          "The council has failed to deal with the problem of homelessness in the city.",
          "deal effectively/adequately etc with something",
          "They should deal properly and fairly with any complaint.",
        ],
      },
    },
    {
      word: "deal with somebody/something",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "deal with somebody/something_phrasal verb_2",
      meaning: {
        index: 2,
        definition:
          "if a book, speech etc deals with a particular subject, it is about that subject",
        examples: ["These ideas are dealt with more fully in Chapter Four."],
      },
    },
    {
      word: "deal with somebody/something",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "deal with somebody/something_phrasal verb_3",
      meaning: {
        index: 3,
        definition:
          "to do business with someone or have a business connection with someone",
        examples: [
          "Most travel agents do not deal directly with these companies.",
        ],
      },
    },
    {
      word: "deal with somebody/something",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "deal with somebody/something_phrasal verb_4",
      meaning: {
        index: 4,
        definition:
          "to succeed in controlling your feelings about an emotional problem so that it does not affect your life SYN cope with",
        examples: ["How’s he dealing with the whole thing?"],
      },
    },
    {
      word: "pro",
      pronunciation: "/prəʊ $ proʊ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "pro_noun_1",
      meaning: {
        index: 1,
        definition:
          "someone who is paid to do something, especially play a sport, that other people do for pleasure SYN professional OPP amateur",
        examples: [
          "a tennis pro",
          "the small gap between top amateurs and pros in golf",
        ],
      },
    },
    {
      word: "pro",
      pronunciation: "/prəʊ $ proʊ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "pro_noun_2",
      meaning: {
        index: 2,
        definition:
          " informal, (also old pro), someone who has had a lot of experience with a particular type of situation",
        examples: ["Cathy’s an old pro at organizing raffles."],
      },
    },
    {
      word: "pro",
      pronunciation: "/prəʊ $ proʊ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "pro_noun_3",
      meaning: {
        index: 3,
        definition:
          "→ pros and cons, the advantages and disadvantages of something",
        examples: ["the pros and cons of nuclear power"],
      },
    },
    {
      word: "time",
      pronunciation: "/taɪm/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "time_verb",
      meaning: {
        index: 25,
        definition:
          "a) to do something slowly or carefully without hurrying b) to do something more slowly than seems reasonable",
        examples: [
          "take your time doing something",
          "Marie took her time cutting my hair and did it really well.",
          "take your time over",
          "He had planned to take his time over the journey.",
          "You’re taking your time with the lab tests. We need the results now.",
        ],
      },
    },
    {
      word: "twin",
      pronunciation: "/twɪn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "twin_noun",
      meaning: {
        index: 0,
        definition:
          "one of two children born at the same time to the same mother",
        examples: ["The twins are now eight months old."],
      },
    },
    {
      word: "identical twin",
      pronunciation: "/aɪˌdentɪkəl ˈtwɪn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "identical twin_noun",
      meaning: {
        index: 0,
        definition:
          "one of a pair of brothers or sisters born at the same time, who develop from the same egg and look almost exactly alike",
        examples: [],
      },
    },
    {
      word: "high-powered",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "high-powered_adjective_1",
      meaning: {
        index: 1,
        definition:
          "a high-powered machine, vehicle, or piece of equipment is very powerful",
        examples: ["a high-powered automobile"],
      },
    },
    {
      word: "high-powered",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "high-powered_adjective_2",
      meaning: {
        index: 2,
        definition: "very important or successful",
        examples: ["a high-powered publisher"],
      },
    },
    {
      word: "driven",
      pronunciation: "/ˈdrɪvən/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "driven_adjective",
      meaning: {
        index: 0,
        definition: "trying extremely hard to achieve what you want",
        examples: ["He claims he is not a driven workaholic."],
      },
    },
    {
      word: "career woman",
      pronunciation: "/kəˈrɪə ˌwʊmən $ -ˈrɪər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "career woman_noun",
      meaning: {
        index: 0,
        definition:
          "a woman whose career is very important to her, so that she may not want to get married or have children",
        examples: ["independent career women"],
      },
    },
    {
      word: "dump",
      pronunciation: "/dʌmp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "dump_verb_1",
      meaning: {
        index: 1,
        definition: "to put something somewhere in a careless untidy way",
        examples: [
          "Merrill dumped her suitcase down in the hall.",
          "dump something on something",
          "They dump tons of salt on icy road surfaces to make driving safer.",
          "dump something in/into something",
          "He found a can of beef stew and dumped it in a saucepan to heat.",
        ],
      },
    },
    {
      word: "dump",
      pronunciation: "/dʌmp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "dump_verb_2",
      meaning: {
        index: 2,
        definition:
          "a) to get rid of something that you do not want b) to get rid of waste material by taking it from people’s houses and burying it under the soil",
        examples: [
          "Ellie dumped all the photos of her ex-husband.",
          "He dumped her body into the sea.",
          "Britain dumps more of its waste than any other European country.",
        ],
      },
    },
    {
      word: "dump",
      pronunciation: "/dʌmp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "dump_verb_3",
      meaning: {
        index: 3,
        definition: "informal, to end a relationship with someone",
        examples: ["Vicky dumped Neil yesterday."],
      },
    },
    {
      word: "dump",
      pronunciation: "/dʌmp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "dump_verb_4",
      meaning: {
        index: 4,
        definition:
          "to get rid of goods by selling them in a foreign country at a much lower price",
        examples: [
          "a campaign to stop cheap European beef being dumped in West Africa",
        ],
      },
    },
    {
      word: "dump",
      pronunciation: "/dʌmp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "dump_verb_5",
      meaning: {
        index: 5,
        definition:
          "technical, to copy information stored in a computer’s memory on to something else such as a disk or magnetic tape",
        examples: [],
      },
    },
    {
      word: "steer",
      pronunciation: "/stɪə $ stɪr/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "steer_verb_1",
      meaning: {
        index: 1,
        definition:
          "to control the direction a vehicle is going, for example by turning a wheel",
        examples: [
          "He was steering with only one hand.",
          "Steer towards the left.",
        ],
      },
    },
    {
      word: "steer",
      pronunciation: "/stɪə $ stɪr/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "steer_verb_2",
      meaning: {
        index: 2,
        definition:
          "to guide someone’s behaviour or the way a situation develops",
        examples: [
          "steer somebody towards/away from/through etc something",
          "Teachers try to steer pupils away from drugs.",
          "Helen tried to steer the conversation away from herself.",
        ],
      },
    },
    {
      word: "steer",
      pronunciation: "/stɪə $ stɪr/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "steer_verb_3",
      meaning: {
        index: 3,
        definition:
          "to be in charge of an organization, team etc and make decisions that help it to be successful, especially during a difficult time",
        examples: [
          "steer something through/to etc something",
          "McKinney steered the company through the recession.",
        ],
      },
    },
    {
      word: "steer",
      pronunciation: "/stɪə $ stɪr/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "steer_verb_4",
      meaning: {
        index: 4,
        definition:
          "to guide someone to a place, especially while touching them",
        examples: [
          "steer somebody towards/to etc something",
          "Joel steered Don and Louise towards the backyard.",
        ],
      },
    },
    {
      word: "steer",
      pronunciation: "/stɪə $ stɪr/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "steer_verb_5",
      meaning: {
        index: 5,
        definition:
          "steer somebody towards/to etc something, informal, to avoid someone or something unpleasant or difficult ",
        examples: ["Jo tried to steer clear of political issues."],
      },
    },
    {
      word: "shell",
      pronunciation: "/ʃel/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "shell_noun_1",
      meaning: {
        index: 1,
        definition:
          "a) the hard outer part that covers and protects an egg, nut, or seed b) the hard protective covering of an animal such as a snail, mussel, or crab",
        examples: [
          "Never buy eggs with cracked shells.",
          "peanuts roasted in their shells",
          "a snail shell",
          "The children were collecting shells on the beach.",
        ],
      },
    },
    {
      word: "shell",
      pronunciation: "/ʃel/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "shell_noun_2",
      meaning: {
        index: 2,
        definition:
          "a metal container, like a large bullet, which is full of an explosive substance and is fired from a large gun",
        examples: [
          "We ran for cover as shells dropped all around us.",
          "an exploding mortar shell",
        ],
      },
    },
    {
      word: "shell",
      pronunciation: "/ʃel/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "shell_noun_3",
      meaning: {
        index: 3,
        definition:
          "especially American English, a metal tube containing a bullet and an explosive substance SYN cartridge",
        examples: [],
      },
    },
    {
      word: "shell",
      pronunciation: "/ʃel/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "shell_noun_4",
      meaning: {
        index: 4,
        definition:
          "the outside structure of something, especially the part of a building that remains when the rest of it has been destroyed",
        examples: ["the burnt-out shell of a nightclub"],
      },
    },
    {
      word: "shell",
      pronunciation: "/ʃel/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "shell_noun_5",
      meaning: {
        index: 5,
        definition:
          "→ out of your shell, becoming less shy and more confident and willing to talk to people",
        examples: [
          "I had hoped that university would bring him out of his shell.",
          "She’s started to come out of her shell a little.",
        ],
      },
    },
    {
      word: "complicated",
      pronunciation: "/ˈkɒmplɪkeɪtɪd $ ˈkɑːm-/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "complicated_adjective_1",
      meaning: {
        index: 1,
        definition:
          "difficult to understand or deal with, because many parts or details are involved SYN complex",
        examples: [
          "a complicated voting system",
          "For young children, getting dressed is a complicated business.",
          "very/extremely/immensely/highly etc complicated",
          "Mental illness is a very complicated subject.",
        ],
      },
    },
    {
      word: "complicated",
      pronunciation: "/ˈkɒmplɪkeɪtɪd $ ˈkɑːm-/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "complicated_adjective_2",
      meaning: {
        index: 2,
        definition: "consisting of many closely connected parts SYN complex",
        examples: [
          "a complicated pattern",
          "The human brain is an incredibly complicated organ.",
        ],
      },
    },
    {
      word: "stuck",
      pronunciation: "/stʌk/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "stuck_adjective_1",
      meaning: {
        index: 1,
        definition: "impossible or unable to move from a particular position",
        examples: [
          "Sara tried to open the window but it was stuck.",
          "The boat was stuck in the mud.",
          "I’ve got something stuck in my throat.",
        ],
      },
    },
    {
      word: "stuck",
      pronunciation: "/stʌk/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "stuck_adjective_2",
      meaning: {
        index: 2,
        definition: "informal, unable to escape from a bad or boring situation",
        examples: [
          "Mum resented being stuck at home with two young kids.",
          "We could be stuck in this place for days.",
        ],
      },
    },
    {
      word: "stuck",
      pronunciation: "/stʌk/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "stuck_adjective_3",
      meaning: {
        index: 3,
        definition:
          "unable to do any more of something that you are working on because it is too difficult",
        examples: [
          "Can you help me with my homework, Dad? I’m stuck.",
          "If you get stuck on a difficult word, just ask for help.",
          "I'm stuck on this crossword clue.",
        ],
      },
    },
    {
      word: "stuck",
      pronunciation: "/stʌk/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "stuck_adjective_4",
      meaning: {
        index: 4,
        definition:
          "→ be stuck with something, informal, to have something you do not want because you cannot get rid of it",
        examples: [
          "We are, unfortunately, stuck with this huge, ugly building.",
        ],
      },
    },
    {
      word: "stuck",
      pronunciation: "/stʌk/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "stuck_adjective_5",
      meaning: {
        index: 5,
        definition:
          "→ be stuck with somebody, to have to spend time with someone or have a relationship with them, even though you do not want to",
        examples: ["They are stuck with each other with no end in sight."],
      },
    },
    {
      word: "stuck",
      pronunciation: "/stʌk/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "stuck_adjective_6",
      meaning: {
        index: 6,
        definition:
          "→ be stuck for something, to be unable to think what to say or do",
        examples: [
          "For once Anthony was stuck for words (=did not know what to say).",
        ],
      },
    },
    {
      word: "stuck",
      pronunciation: "/stʌk/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "stuck_adjective_7",
      meaning: {
        index: 7,
        definition:
          "→ get stuck in/get stuck into something, British English, spoken, to start doing something eagerly and with a lot of energy",
        examples: ["Take your jacket off and get stuck in!"],
      },
    },
    {
      word: "stuck",
      pronunciation: "/stʌk/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "stuck_adjective_8",
      meaning: {
        index: 8,
        definition:
          "→ be stuck on somebody, informal, to be attracted to someone",
        examples: ["He says he’s stuck on me."],
      },
    },
    {
      word: "cervix",
      pronunciation: "/ˈsɜːvɪks $ ˈsɜːr-/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "cervix_noun",
      meaning: {
        index: 0,
        definition: "the narrow passage into a woman’s uterus",
        examples: [],
      },
    },
    {
      word: "gag",
      pronunciation: "/ɡæɡ/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "gag_noun_1",
      meaning: {
        index: 1,
        definition: "a joke or funny story",
        examples: [
          "He told a few gags.",
          "It was a bit of a running gag (=a joke which is repeated) in the show.",
        ],
      },
    },
    {
      word: "gag",
      pronunciation: "/ɡæɡ/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "gag_noun_2",
      meaning: {
        index: 2,
        definition:
          "a piece of cloth put over someone’s mouth to stop them making a noise",
        examples: [""],
      },
    },
    {
      word: "gag",
      pronunciation: "/ɡæɡ/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "gag_verb_1",
      meaning: {
        index: 1,
        definition:
          "to be unable to swallow and feel as if you are about to bring up food from your stomach",
        examples: [
          "The foul smell made her gag.",
          "He almost gagged on his first mouthful of food.",
        ],
      },
    },
    {
      word: "gag",
      pronunciation: "/ɡæɡ/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "gag_verb_2",
      meaning: {
        index: 2,
        definition:
          "to put a piece of cloth over someone’s mouth to stop them making a noise",
        examples: [
          "Thugs gagged her and tied her to a chair.",
          "He left his victim bound and gagged (=tied up and with something over their mouth that stops them speaking).",
        ],
      },
    },
    {
      word: "gag",
      pronunciation: "/ɡæɡ/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "gag_verb_3",
      meaning: {
        index: 3,
        definition:
          "to stop people saying what they want to say and expressing their opinions",
        examples: ["an attempt to gag political activists"],
      },
    },
    {
      word: "gag",
      pronunciation: "/ɡæɡ/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "gag_verb_4",
      meaning: {
        index: 4,
        definition:
          "→ be gagging to do something/be gagging for something, British English, informal, to be very eager to do or have something",
        examples: ["They were gagging to sign the contract."],
      },
    },
    {
      word: "gag",
      pronunciation: "/ɡæɡ/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "gag_verb_5",
      meaning: {
        index: 5,
        definition:
          "→ be gagging for it, British English, informal, to be very eager to have sex",
        examples: [],
      },
    },
    {
      word: "instance",
      pronunciation: "/ˈɪnstəns/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "instance_noun_1",
      meaning: {
        index: 1,
        definition: "→ for instance, for example",
        examples: [
          "We need to rethink the way we consume energy. Take, for instance, our approach to transport.",
        ],
      },
    },
    {
      word: "instance",
      pronunciation: "/ˈɪnstəns/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "instance_noun_2",
      meaning: {
        index: 2,
        definition: "an example of a particular kind of situation",
        examples: [
          "They came across many instances of discrimination.",
          "instances where safety regulations have been breached",
          "In this instance I think she was mistaken.",
        ],
      },
    },
    {
      word: "instance",
      pronunciation: "/ˈɪnstəns/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "instance_noun_3",
      meaning: {
        index: 3,
        definition:
          "→ in the first instance, at the beginning of a series of actions",
        examples: [
          "Anyone wishing to join the society should apply in the first instance to the secretary.",
        ],
      },
    },
    {
      word: "instance",
      pronunciation: "/ˈɪnstəns/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "instance_noun_4",
      meaning: {
        index: 4,
        definition:
          "→ at somebody’s instance, formal, because of someone’s wish or request",
        examples: [],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "roll_noun_1",
      meaning: {
        index: 1,
        definition:
          "a piece of paper, film, money etc that has been rolled into the shape of a tube",
        examples: [
          "There’s a new roll of silver foil in there.",
          "I used up three rolls of film on holiday.",
          "wallpaper costing £3 a roll",
        ],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "roll_noun_2",
      meaning: {
        index: 2,
        definition: "a small round loaf of bread for one person",
        examples: [
          "hot soup served with crusty rolls",
          "bread rolls with butter",
          "ham/cheese etc roll, British English, (=one that is filled with ham, cheese etc)",
        ],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "roll_noun_3",
      meaning: {
        index: 3,
        definition: "an official list of names SYN register",
        examples: [
          "on the roll, British English",
          "a school with 300 pupils on the roll",
          "call/take the roll (=say the list of names to check who is there)",
          "The teacher called the roll.",
          "the electoral roll, British English, the (voter) rolls, American English, (=a list of the people who are allowed to vote)",
          "welfare rolls, American English, (=a list of people without jobs who claim money from the state)",
          "Thompson said he had cut welfare rolls by 39%.",
        ],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "roll_noun_4",
      meaning: {
        index: 4,
        definition:
          "→ be on a roll, informal, to be having a lot of success with what you are trying to do ",
        examples: [
          "Midvale High was on a roll, having won their last six basketball games.",
        ],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "roll_noun_5",
      meaning: {
        index: 5,
        definition: "the action of throwing dice as part of a game",
        examples: ["If you get a 7 or 11 on your first roll, you win."],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "roll_noun_6",
      meaning: {
        index: 6,
        definition:
          "a thick layer of skin or fat, usually just below your waist",
        examples: ["the rolls of fat on her stomach"],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "roll_noun_7",
      meaning: {
        index: 7,
        definition:
          "a) British English a movement in which you roll forward or back in a controlled way with your body curled so that your head is near your feet, often done as part of a sport SYN somersault b) especially British English the action of turning your body over one or more times while lying down",
        examples: [
          "a forward roll",
          "gymnasts doing rolls and handsprings",
          "a young horse having a roll in the field",
        ],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "roll_noun_8",
      meaning: {
        index: 8,
        definition: "a long low fairly loud sound made by drums etc",
        examples: [
          "There was a roll of thunder, and the rain started pelting down.",
          "a drum roll",
        ],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "noun",
      additionalInfo: "",
      translation: "",
      title: "roll_noun_9",
      meaning: {
        index: 9,
        definition:
          "the movement of a ship or plane when it leans from side to side with the movement of the water or air",
        examples: [],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "roll_verb_1",
      meaning: {
        index: 1,
        definition:
          "if something rolls, especially something round, or if you roll it, it moves along a surface by turning over and over",
        examples: [
          "roll down/into/through etc",
          "The ball rolled into the street.",
          "roll something along/in/onto etc something",
          "Roll the dough into small balls.",
        ],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "roll_verb_2",
      meaning: {
        index: 2,
        definition:
          " (also roll over) to turn your body over one or more times while lying down, or to turn someone else’s body over",
        examples: [
          "roll down/onto/off etc",
          "The children rolled down the hill, laughing.",
          " Ralph rolled onto his stomach.",
          "roll somebody onto/off something",
          "I tried to roll him onto his side.",
        ],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "roll_verb_3",
      meaning: {
        index: 3,
        definition:
          "(also roll up) to make something into the shape of a tube or ball",
        examples: [
          "roll something into a ball/tube",
          "Roll the dough into small balls.",
          "Would you like the paper rolled or folded?",
        ],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "roll_verb_4",
      meaning: {
        index: 4,
        definition:
          "(also roll up) to make something flat by rolling something heavy over it",
        examples: ["Pizza dough should be rolled thinly."],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "roll_verb_5",
      meaning: {
        index: 5,
        definition:
          "(also roll up) to fold the sleeves or legs of something that you are wearing upwards, so that they are shorter",
        examples: ["His sleeves were rolled above his elbows."],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "roll_verb_6",
      meaning: {
        index: 6,
        definition: "to move on wheels, or make something that has wheels move",
        examples: [
          "Her car was slowly rolling away from the curb.",
          "The waitress rolled the dessert trolley over to our table.",
        ],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "roll_verb_7",
      meaning: {
        index: 7,
        definition: "to move over a surface smoothly without stopping",
        examples: ["Tears rolled down her cheeks."],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "roll_verb_8",
      meaning: {
        index: 8,
        definition: "to move continuously in a particular direction",
        examples: [
          "roll into/towards etc",
          "Mist rolled in from the sea.",
          "We watched the waves rolling onto the beach.",
        ],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "roll_verb_9",
      meaning: {
        index: 9,
        definition: " if you roll dice, you throw them as part of a game",
        examples: [],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "roll_verb_10",
      meaning: {
        index: 10,
        definition:
          "if drums or thunder roll, they make a long low series of sounds",
        examples: ["Thunder rolled in the distance."],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "roll_verb_11",
      meaning: {
        index: 11,
        definition:
          "if a machine such as a film camera or a printing press rolls, it operates",
        examples: ["There was silence as the cameras started to roll."],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "roll_verb_12",
      meaning: {
        index: 12,
        definition:
          "if a ship or plane rolls, it leans one way and then another with the movement of the water or air",
        examples: [],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "roll_verb_13",
      meaning: {
        index: 13,
        definition:
          "to make your own cigarette, using tobacco or marijuana and special paper",
        examples: [
          "Ben rolled a joint (=a cigarette containing marijuana) and lit it.",
          "It’s cheaper to roll your own (=make your own cigarettes).",
        ],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "roll_verb_14",
      meaning: {
        index: 14,
        definition: "to move your shoulders forward, up, and back down",
        examples: ["He rolled his shoulders back"],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "roll_verb_15",
      meaning: {
        index: 15,
        definition:
          "to move your eyes around and up, especially in order to show that you are annoyed or think something is silly",
        examples: ["Lucy rolled her eyes as Tom sat down beside her."],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "roll_verb_16",
      meaning: {
        index: 16,
        definition:
          "American English, informal, to rob someone, especially when they are drunk and asleep",
        examples: ["Kids on the streets rolled drunks for small change."],
      },
    },
    {
      word: "roll",
      pronunciation: "/rəʊl $ roʊl/",
      frequency: {
        written: "",
        spoken: "",
      },
      register: "",
      partOfSpeech: "verb",
      additionalInfo: "",
      translation: "",
      title: "roll_verb_17",
      meaning: {
        index: 23,
        definition:
          "→ roll with the punches, to deal with problems or difficulties by doing whatever you need to do, rather than by trying only one method",
        examples: [
          "Strong industries were able to roll with the punches during the recession.",
        ],
      },
    },
    {
      word: "punch",
      pronunciation: "/pʌntʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "punch_verb_1",
      meaning: {
        index: 1,
        definition:
          "to hit someone or something hard with your fist (=closed hand)",
        examples: [
          "He punched me and knocked my teeth out.",
          "He punched Jack in the face.",
        ],
      },
    },
    {
      word: "punch",
      pronunciation: "/pʌntʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "punch_verb_2",
      meaning: {
        index: 2,
        definition:
          "to make a hole in something, using a metal tool or other sharp object",
        examples: [
          "The guard punched my ticket and I got on.",
          "These bullets can punch a hole through 20 mm steel plate.",
        ],
      },
    },
    {
      word: "punch",
      pronunciation: "/pʌntʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "punch_verb_3",
      meaning: {
        index: 3,
        definition: "to push a button or key on a machine",
        examples: ["Just punch the button to select a track."],
      },
    },
    {
      word: "punch",
      pronunciation: "/pʌntʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "punch_verb_4",
      meaning: {
        index: 4,
        definition:
          "→ punch holes in somebody’s argument/idea/plans etc, to criticize someone’s views, idea, plans etc by showing why they are wrong",
        examples: [],
      },
    },
    {
      word: "punch",
      pronunciation: "/pʌntʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "punch_verb_5",
      meaning: {
        index: 5,
        definition:
          "→ punch the air, to make a movement like a punch towards the sky, to show that you are very pleased",
        examples: ["He punched the air in triumph."],
      },
    },
    {
      word: "punch",
      pronunciation: "/pʌntʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "punch_verb_6",
      meaning: {
        index: 6,
        definition:
          "→ punch somebody’s lights out, informal, to hit someone hard in the face",
        examples: [],
      },
    },
    {
      word: "punch",
      pronunciation: "/pʌntʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "punch_verb_7",
      meaning: {
        index: 7,
        definition:
          "→ punch the clock, American English, informal, to record the time that you start or finish work by putting a card into a special machine",
        examples: [],
      },
    },
    {
      word: "punch",
      pronunciation: "/pʌntʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "punch_noun_1",
      meaning: {
        index: 1,
        definition: "a quick strong hit made with your fist (=closed hand)",
        examples: [
          "a punch in the kidneys",
          "I managed to land a punch on his chin.",
          "The two men started throwing punches (=trying to hit each other).",
        ],
      },
    },
    {
      word: "punch",
      pronunciation: "/pʌntʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "punch_noun_2",
      meaning: {
        index: 2,
        definition:
          "a strong effective way of expressing things that makes people interested",
        examples: [
          "Thirty years after it was written, Orton’s ‘Entertaining Mr Sloane’ still packs a punch.",
        ],
      },
    },
    {
      word: "punch",
      pronunciation: "/pʌntʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "punch_noun_3",
      meaning: {
        index: 3,
        definition:
          "a drink made from fruit juice, sugar, water, and usually some alcohol",
        examples: ["a glass of hot punch"],
      },
    },
    {
      word: "punch",
      pronunciation: "/pʌntʃ/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "punch_noun_4",
      meaning: {
        index: 4,
        definition:
          "a metal tool for cutting holes or for pushing something into a small hole",
        examples: [],
      },
    },
    {
      word: "table",
      pronunciation: "/ˈteɪbəl/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "table_noun_1",
      meaning: {
        index: 5,
        definition:
          "→ on the table, an offer, idea etc that is on the table has been officially suggested and someone is considering it",
        examples: ["The offer on the table is a 10% wage increase."],
      },
    },
    {
      word: "table",
      pronunciation: "/ˈteɪbəl/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "table_noun_2",
      meaning: {
        index: 6,
        definition:
          "→ turn the tables (on somebody), to change a situation completely, so that someone loses an advantage and you gain one",
        examples: [
          "The tables were turned in the second half, when Leeds United scored from the penalty spot.",
        ],
      },
    },
    {
      word: "table",
      pronunciation: "/ˈteɪbəl/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "table_noun_3",
      meaning: {
        index: 7,
        definition:
          "→ under the table, informal, money that is paid under the table is paid secretly and illegally",
        examples: ["Payments were made under the table to local officials."],
      },
    },
    {
      word: "table",
      pronunciation: "/ˈteɪbəl/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "table_noun_4",
      meaning: {
        index: 8,
        definition:
          "→ times table, a list that young children learn, in which all the numbers between 1 and 12 are multiplied by each other SYN multiplication table",
        examples: [
          "three/four etc times table",
          "He’s 12 years old and still doesn’t know his three times table.",
        ],
      },
    },
    {
      word: "tan",
      pronunciation: "/tæn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "tan_noun_1",
      meaning: {
        index: 1,
        definition:
          "[noun] the attractive brown colour that someone with pale skin gets after they have been in the sun SYN suntan",
        examples: ["I wish I could get a tan like that."],
      },
    },
    {
      word: "tan",
      pronunciation: "/tæn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "tan_noun_2",
      meaning: {
        index: 2,
        definition: "a light yellowish-brown colour",
        examples: [],
      },
    },
    {
      word: "tan",
      pronunciation: "/tæn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "tan_verb_1",
      meaning: {
        index: 1,
        definition:
          "if you tan, or if the sun tans you, your skin becomes darker because you spend time in the sun",
        examples: ["She has a pale skin which doesn't tan easily."],
      },
    },
    {
      word: "tan",
      pronunciation: "/tæn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "tan_verb_2",
      meaning: {
        index: 2,
        definition:
          "to make animal skin into leather by treating it with tannin (=a kind of acid)",
        examples: [],
      },
    },
    {
      word: "tan",
      pronunciation: "/tæn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "tan_adjective_1",
      meaning: {
        index: 1,
        definition: "having a light yellowish-brown colour",
        examples: ["tan shoes"],
      },
    },
    {
      word: "tan",
      pronunciation: "/tæn/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "adjective",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "tan_adjective_2",
      meaning: {
        index: 2,
        definition:
          "American English, having darker skin after spending time in the sun SYN tanned",
        examples: ["She arrived home tan and rested."],
      },
    },
    {
      word: "stick",
      pronunciation: "/stɪk/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "stick_noun_1",
      meaning: {
        index: 1,
        definition:
          "a long thin piece of wood from a tree, which is no longer attached to the tree",
        examples: ["They collected sticks to start the fire."],
      },
    },
    {
      word: "stick",
      pronunciation: "/stɪk/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "stick_noun_2",
      meaning: {
        index: 2,
        definition:
          "a long thin piece of wood, plastic etc that you use for a particular purpose",
        examples: [
          "a pair of drum sticks",
          "a measuring stick",
          "Aunt Lou walks with a stick (=uses a stick to help her walk).",
        ],
      },
    },
    {
      word: "stick",
      pronunciation: "/stɪk/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "stick_noun_3",
      meaning: {
        index: 3,
        definition: "a long thin or round piece of something",
        examples: [
          "carrot sticks with dip",
          "a glue stick",
          "a stick of chewing gum",
        ],
      },
    },
    {
      word: "stick",
      pronunciation: "/stɪk/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "stick_noun_4",
      meaning: {
        index: 4,
        definition:
          "a long, specially shaped piece of wood, plastic etc that you use in some sports to hit a ball",
        examples: ["a hockey stick"],
      },
    },
    {
      word: "border",
      pronunciation: "/ˈbɔːdə $ ˈbɔːrdər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "border_noun_1",
      meaning: {
        index: 1,
        definition:
          "the official line that separates two countries, states, or areas, or the area close to this line",
        examples: [
          "To cross the border, you will need a valid passport.",
          "the border between the US and Mexico",
          "regular patrols along the border with France",
          "a market town on the border of England and Wales",
          "He helped them to get across the border.",
          "south/north etc of the border",
          "The coach took us south of the border to Tijuana.",
        ],
      },
    },
    {
      word: "border",
      pronunciation: "/ˈbɔːdə $ ˈbɔːrdər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "border_noun_2",
      meaning: {
        index: 2,
        definition:
          "a band along or around the edge of something such as a picture or piece of material",
        examples: ["writing paper with a black border"],
      },
    },
    {
      word: "border",
      pronunciation: "/ˈbɔːdə $ ˈbɔːrdər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "border_noun_3",
      meaning: {
        index: 3,
        definition:
          "an area of soil where you plant flowers or bushes, along the edge of an area of grass",
        examples: ["a flower and shrub border"],
      },
    },
    {
      word: "border",
      pronunciation: "/ˈbɔːdə $ ˈbɔːrdər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "border_noun_4",
      meaning: {
        index: 4,
        definition:
          "something that separates one situation, state etc from another",
        examples: [
          "new scientific discoveries that are stretching the borders of knowledge",
        ],
      },
    },
    {
      word: "border",
      pronunciation: "/ˈbɔːdə $ ˈbɔːrdər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "border_verb_1",
      meaning: {
        index: 1,
        definition:
          "if one country, state, or area borders another, it is next to it and shares a border with it",
        examples: [
          "countries that border the Mediterranean",
          "The area borders on the Yorkshire Dales.",
        ],
      },
    },
    {
      word: "border",
      pronunciation: "/ˈbɔːdə $ ˈbɔːrdər/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "border_verb_2",
      meaning: {
        index: 2,
        definition: "to form a border along the edge of something",
        examples: ["to form a border along the edge of something"],
      },
    },
    {
      word: "border on something",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "border on something_phrasal verb",
      meaning: {
        index: 0,
        definition: "to be very close to being something extreme",
        examples: ["His confidence bordered on arrogance."],
      },
    },
    {
      word: "wind up",
      pronunciation: "/ˈwaɪnd ʌp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "wind up_phrasal verb_1",
      meaning: {
        index: 1,
        definition: "to bring an activity, meeting etc to an end",
        examples: [
          "OK, just to wind up, could I summarize what we’ve decided?",
          "It’s time to wind things up – I have a plane to catch.",
        ],
      },
    },
    {
      word: "wind up",
      pronunciation: "/ˈwaɪnd ʌp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "wind up_phrasal verb_2",
      meaning: {
        index: 2,
        definition: "to close down a company or organization",
        examples: ["Our operations in Jamaica are being wound up."],
      },
    },
    {
      word: "wind up",
      pronunciation: "/ˈwaɪnd ʌp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "wind up_phrasal verb_3",
      meaning: {
        index: 3,
        definition:
          "informal, to be in an unpleasant situation or place after a lot has happened SYN end up",
        examples: [
          "You know you’re going to wind up in court over this.",
          "I wound up wishing I’d never come.",
        ],
      },
    },
    {
      word: "wind up",
      pronunciation: "/ˈwaɪnd ʌp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "wind up_phrasal verb_4",
      meaning: {
        index: 4,
        definition:
          "wind somebody ↔ up, British English, to deliberately say or do something that will annoy or worry someone, as a joke",
        examples: ["They’re only winding you up."],
      },
    },
    {
      word: "wind up",
      pronunciation: "/ˈwaɪnd ʌp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "wind up_phrasal verb_5",
      meaning: {
        index: 5,
        definition:
          "to turn part of a machine around several times, in order to make it move or start working",
        examples: [],
      },
    },
    {
      word: "wind up",
      pronunciation: "/ˈwaɪnd ʌp/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "wind up_phrasal verb_6",
      meaning: {
        index: 6,
        definition:
          "wind something ↔ up, British English,to make something, especially a car window, move up by turning a handle or pressing a button",
        examples: ["Could you wind the window up, please?"],
      },
    },
    {
      word: "get/have your (own) way",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "get/have your (own) way",
      meaning: {
        index: 0,
        definition:
          "to do what you want to, even though someone else wants something different",
        examples: ["Don’t let the children always get their own way."],
      },
    },
    {
      word: "nausea",
      pronunciation: "/ˈnɔːziə, -siə $ ˈnɒːziə, -ʃə/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "nausea_noun",
      meaning: {
        index: 0,
        definition:
          "the feeling that you have when you think you are going to vomit (=bring food up from your stomach through your mouth) SYN sickness",
        examples: ["A feeling of nausea suddenly came over me."],
      },
    },
    {
      word: "be about to do something",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "be about to do something",
      meaning: {
        index: 0,
        definition:
          "if someone is about to do something, or if something is about to happen, they will do it or it will happen very soon",
        examples: [
          "We were just about to leave when Jerry arrived.",
          "Work was about to start on a new factory building.",
        ],
      },
    },
    {
      word: "tilt",
      pronunciation: "/tɪlt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "tilt_verb_1",
      meaning: {
        index: 1,
        definition:
          "to move a part of your body, especially your head or chin, upwards or to the side SYN tip",
        examples: [
          "My mother tilted her head and smiled.",
          "Ned’s mouth tilted upwards slightly at the corners.",
        ],
      },
    },
    {
      word: "tilt",
      pronunciation: "/tɪlt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "tilt_verb_2",
      meaning: {
        index: 2,
        definition:
          "to move or make something move into a position where one side is higher than the other SYN tip",
        examples: [
          "As it came in to land, the plane tilted sideways.",
          "The man was tilting his chair back.",
        ],
      },
    },
    {
      word: "tilt",
      pronunciation: "/tɪlt/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "tilt_verb_3",
      meaning: {
        index: 3,
        definition:
          "if an opinion or situation tilts, or if something tilts it, it changes so that people start to prefer one person, belief, or action to others",
        examples: [
          "Crisis situations tend to tilt the balance of power in favour of the president.",
          "Government tax policy has tilted toward industrial development.",
        ],
      },
    },
    {
      word: "work out",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "work out_phrasal verb_1",
      meaning: {
        index: 1,
        definition:
          "work something ↔ out , to think carefully about how you are going to do something and plan a good way of doing it",
        examples: [
          "UN negotiators have worked out a set of compromise proposals.",
          "We need to work out how we’re going to get there.",
          "I had it all worked out (=had made very careful plans).",
        ],
      },
    },
    {
      word: "work out",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "work out_phrasal verb_2",
      meaning: {
        index: 2,
        definition:
          "work something ↔ out, to calculate an answer, amount, price etc",
        examples: [
          "See if you can work this bill out.",
          "We’ll have to work out how much food we’ll need for the party.",
        ],
      },
    },
    {
      word: "work out",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "work out_phrasal verb_3",
      meaning: {
        index: 3,
        definition:
          "work something ↔ out especially British English, to think about something and manage to understand it",
        examples: [
          "The plot is very complicated – it’ll take you a while to work it out.",
          "I’m sure you can work it out for yourself.",
        ],
      },
    },
    {
      word: "work out",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "work out_phrasal verb_4",
      meaning: {
        index: 4,
        definition:
          "if a cost or amount works out at a particular figure, it is found to be that much when you calculate it",
        examples: [
          "work out at/to £10/$500 etc",
          "The bill works out at £15 each.",
          "work out expensive/cheap etc (=be expensive or cheap)",
          "If we go by taxi, it’s going to work out very expensive.",
        ],
      },
    },
    {
      word: "work out",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "work out_phrasal verb_5",
      meaning: {
        index: 5,
        definition:
          "if a problem or complicated situation works out, it gradually gets better or gets solved",
        examples: [
          "Things will work out, you’ll see.",
          "I hope it all works out for Gina and Andy.",
          "I’m sure everything will work itself out.",
        ],
      },
    },
    {
      word: "work out",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "work out_phrasal verb_6",
      meaning: {
        index: 6,
        definition:
          "if a situation works out in a particular way, it happens in that way SYN turn out",
        examples: ["Financially, things have worked out well for us."],
      },
    },
    {
      word: "work out",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "work out_phrasal verb_7",
      meaning: {
        index: 7,
        definition: "to make your body fit and strong by doing exercises",
        examples: ["He works out with weights twice a week."],
      },
    },
    {
      word: "work out",
      pronunciation: "",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "phrasal verb",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "work out_phrasal verb_8",
      meaning: {
        index: 8,
        definition:
          "I can’t work somebody out, British English, spoken, used to say that you cannot understand what someone is really like or why they behave in the way they do",
        examples: ["I couldn’t work her out at all."],
      },
    },
    {
      word: "hairline",
      pronunciation: "/ˈheəlaɪn $ ˈher-/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "hairline_noun_1",
      meaning: {
        index: 0,
        definition:
          "the line around your head, especially at the front, where your hair starts growing",
        examples: [
          "He had put on weight, and his hairline was beginning to recede.",
        ],
      },
    },
    {
      word: "hairline",
      pronunciation: "/ˈheəlaɪn $ ˈher-/",
      frequency: {
        written: "",
        spoken: "",
      },
      partOfSpeech: "noun",
      register: "",
      additionalInfo: "",
      translation: "",
      title: "hairline_noun_2",
      meaning: {
        index: 2,
        definition: "→ a hairline crack/fracture, a very thin crack ",
        examples: ["a hairline fracture in a bone"],
      },
    },
  ];

  ///////////////
  //CHECK IF THERE IS AN ITEM WITHOUT THE MEANING PROP
  // data.forEach((item) => {
  //   if (!item?.meanings) console.log("nooooooooooooo", item);
  // });
  /////////////
  //// ADDING TRANSLATION PROP
  // let newData = data.map((item) => ({ ...item, translation: "" }));
  /////////////
  // ADDING FREQUENCY PROP VALUE AS AN OBJECT
  // let newData = data.map((item) => ({
  //   ...item,
  //   frequency: { written: "", spoken: "" },
  // }));
  /////////////////
  // SEPARATING EACH MEANING
  // let newData = [];
  // data.forEach((item) => {
  //   const { meanings, ...restOfItem } = item;
  //   if (item.meanings.length === 1) {
  //     newData.push({
  //       ...restOfItem,
  //       title: item.partOfSpeech
  //         ? `${item.word}_${item.partOfSpeech}`
  //         : `${item.word}`,
  //       meaning: item.meanings,
  //     });
  //   } else {
  //     // let x = {...restOfItem};
  //     // console.log("rest", restOfItem);
  //     const newitems = item.meanings.forEach((meaning, index) => {
  //       newData.push({
  //         ...restOfItem,
  //         title: item.partOfSpeech
  //           ? `${item.word}_${item.partOfSpeech}_${index + 1}`
  //           : `${item.word}_${index + 1}`,
  //         meaning: meaning,
  //       });
  //     });
  //   }
  // });
  ////////////////
  // console.log("53", data[52]);
  // let dataCopy = [...data];
  // dataCopy.forEach((item, index) => {
  //   if (item.meanings.length === 1) {
  //     data[index].meanings[0].index = 0;
  //     // console.log("no meanings", index);
  //   }
  // });
  // console.log("new dataaaaaaaa", newData);
  /////////

  // const newData = data.map((item) => {
  //   if (!Array.isArray(item.meaning)) return item;
  //   else {
  //     return { ...item, meaning: item.meaning[0] };
  //   }
  // });
  // const newData = data.map((item) => {
  //   return {
  //     ...item,
  //     title: item.title.replaceAll("_", " _ "),
  //   };
  // });
  // console.log("new", newData);

  // const json = JSON.stringify(newData);
  // console.log("json", json);
  //////////

  ////////////
  return (
    <NewCourse />
    // <WordCreation />
    // <Carousel slides={slides} />
    // <WordReview />
    // <WordsPart />
    // <WordAutoCompleteSearch />
    // <CourseView />
    // <Router>
    //   <NavBar
    //     logInstatus={!!token}
    //     logOutStatusHandler={logOutStatusHandler}
    //     userId={userId}
    //   />
    //   <Switch>
    //     <Route path="/" exact>
    //       <MainPage />
    //     </Route>
    //     <Route path="/users" exact>
    //       <Users />
    //     </Route>
    //     <Route path="/login" exact>
    //       <LoginForm logInStatusHandler={logInStatusHandler} />
    //     </Route>
    //     <Route path="/registration" exact>
    //       <RegistrationForm logInStatusHandler={logInStatusHandler} />
    //     </Route>
    //     <Route path="/tour" exact>
    //       <Tour />
    //     </Route>
    //     <Route path="/courses/all" exact>
    //       <CourseList />
    //     </Route>
    //     <Route path="/courses/user/:userId" exact>
    //       <UserCourses />
    //     </Route>
    //     <Route path="/courses/new" exact>
    //       <NewCourse />
    //     </Route>
    //     <Route path="/courses/:courseId" exact>
    //       <UpdateCourse userId={userId} />
    //     </Route>
    //     <Route path="/course/friends" exact>
    //       <CourseView />
    //     </Route>
    //     <Route path="/audios/new" exact>
    //       <AudioStoring />
    //     </Route>{" "}
    //     <Route path="/images/new" exact>
    //       <ImageStoring />
    //     </Route>
    //     <Redirect to="/" />
    //   </Switch>
    // </Router>
  );
}
export default App;
