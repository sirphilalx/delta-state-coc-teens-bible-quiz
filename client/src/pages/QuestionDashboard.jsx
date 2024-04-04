import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const QuestionDashboard = () => {
  // declaring state variables with useState
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);
  const [questionData, setQuestionData] = useState(null);

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
    <div className=" mt-0 py-10">
      <div className=" mx-5 my-5 sm:mx-20 text-center">
        <h1 className="mt-5 text-4xl ">Welcome to the Question Page</h1>
        <p>Chooose your question</p>
        <div className="flex">
          <ul className="flex flex-wrap">
            {questionData &&
              questionData.map((q) => (
                <li key={q.id} className="flex gap-4">
                  <Link
                    onClick={() => LoadDetail(q.id)}
                    className={`btn ${
                      selectedQuestionId === q.id
                        ? "bg-gray-500"
                        : "bg-green-700"
                    } p-4 w-16 h-16 m-2 flex items-center justify-center text-2xl text-center text-white rounded shadow`}
                    to={`/api/question/detail/${q.id}`}
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
