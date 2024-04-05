import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const QuestionDetail = () => {
  // useParams to identify the parameter to pass to the detail page
  const { id } = useParams();

  // declaring state variables with useState
  const [questionData, setQuestionData] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);
  const [timer, setTimer] = useState(10);

  // fetching data from database with useEffect
  useEffect(() => {
    fetch("http://localhost:3000/Questions/" + id)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => setQuestionData(data))
      .catch((e) => console.log(e));
  }, []);

  // handles timer
  const startTimer = () => {
    setTimer(10); // Reset the timer to 30 seconds
    const countdown = setInterval(() => {
      setTimer((prevTime) => prevTime - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(countdown);
      setTimer(0);
      // Additional logic when the timer reaches 0 (e.g., display "TIME UP!")
    }, 10000);
  };

  // handles the showanswer button and the answer
  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div>
      <div className="flex flex-col bg-blue-50 h-screen items-center justify-center">
        <h1>Question Detail Page</h1>
        <div className="flex items-center sm:w-[1200px] bg-white justify-content-center  mt-5 p-5">
          {questionData && (
            <div className="m-auto w-full text-center p-5 flex flex-col gap-5 border">
              {timer > 0 && (
                <h3 className="text-red-500 text-4xl ">{`00:${
                  timer < 10 ? "0" : ""
                }${timer}`}</h3>
              )}
              {timer === 0 && (
                <h3 className="text-red-500 text-4xl">TIME UP!</h3>
              )}
              {/* {timer === 0 && setShowAnswer(true)} */}
              <h2 className="text-4xl font-thin mt-10">
                Question {questionData.id}
              </h2>

              <p className="text-4xl mt-10">{questionData.question}</p>
              {showAnswer && (
                <p className="text-4xl w-20 mx-auto text-red-500 mt-10 text-uppercase">
                  {questionData.answer}
                </p>
              )}
              <button
                onClick={handleShowAnswer}
                className=" bg-yellow-500 mx-auto px-5 py-5 rounded text-lg mt-5 shadow-2xl"
              >
                Show Answer
              </button>
            </div>
          )}
        </div>
        <div className="  flex  flex-wrap items-center justify-center  ">
          <button
            onClick={startTimer}
            className=" bg-gray-500 m-4 text-white p-5 rounded"
          >
            Start timer
          </button>
          <Link
            to="/questionDashboard"
            className=" bg-gray-500 m-4 text-white p-5 rounded shadow-2xl"
          >
            Go to Questions Dashboard
          </Link>
          <Link
            to="/"
            className=" bg-gray-500 m-4 text-white p-5 rounded shadow-lg"
          >
            Go to Home
          </Link>
          <Link
            to="/"
            className=" bg-gray-500 m-4 text-white p-5 rounded shadow-lg"
          >
            Go to Results Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
