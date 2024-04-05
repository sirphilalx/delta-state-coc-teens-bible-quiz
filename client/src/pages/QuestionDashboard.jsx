import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../pages/questionDashboard.css";

const QuestionDashboard = () => {
  // declaring state variables with useState
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [questionData, setQuestionData] = useState(null);

  // function for going into the detail page
  const navigate = useNavigate();
  const LoadDetail = (id) => {
    // Update the state to mark the question as clicked
    setSelectedQuestionId(id);
    setQuestionData((prevData) =>
      prevData.map((q) => (q.id === id ? { ...q, clicked: true } : q))
    );

    // navigate to the question detail page
    navigate("/question/detail/" + id);
  };

  //   fetching data from database with useEffect
  useEffect(() => {
    fetch("http://localhost:3000/Questions")
      .then((response) => response.json())
      .then((data) =>
        setQuestionData(data.map((q) => ({ ...q, clicked: false })))
      )
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className=" mt-0 py-10 bg-blue-50">
      <div className=" mx-5 my-5 sm:mx-20 text-center">
        <h1 className="my-5 text-4xl ">Welcome to the Question Page</h1>
        <p className="text-lg">Select your question</p>
        <div className="flex justify-center items-center mt-20">
          <ul className="flex flex-wrap gap-2">
            {questionData &&
              questionData.map((q) => (
                <li key={q.id} className="flex ">
                  <Link
                    onClick={() => LoadDetail(q.id)}
                    className={` ${
                      //   selectedQuestionId === q.id
                      //     ? "bg-gray-500"
                      //     : "bg-green-700"
                      q.clicked ? "bg-gray-500" : "bg-green-700"
                    } p-4 w-16 h-16 m-2 flex items-center justify-center text-2xl text-center text-white shadow rounded`}
                    to={`/question/detail/${q.id}`}
                  >
                    {q.id}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuestionDashboard;
