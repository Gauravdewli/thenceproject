import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

interface QA {
  Ques: string;
  Ans: string;
}

const Data: QA[] = [
  {
    Ques: "Do you offer freelancers?",
    Ans: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution",
  },
  {
    Ques: "What's the guarantee that I will be satisfied with the hired talent?",
    Ans: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution",
  },
  {
    Ques: "Can I hire multiple talents at once?",
    Ans: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution",
  },
  {
    Ques: "Who can help me pick a right skillset and duration for me?",
    Ans: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution",
  },
  {
    Ques: "Why should I not go to an agency directly?",
    Ans: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution",
  },
];

const Questions: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div>
      {Data.map((item, index) => (
        <div key={index} className=" flex flex-col border-b-2 border-gray-300">
          <div
            className="flex items-center justify-around cursor-pointer max-w-full"
            onClick={() => toggleExpand(index)}
          >
            <div className="flex justify-between w-[700px] text-[20px] py-8 max-w-[600px]">
              {item.Ques}
            </div>
            {expandedIndex === index ? <FaMinus /> : <FaPlus />}
          </div>
          {expandedIndex === index && (
            <div className="max-w-[500px] text-[15px] text-[#828282]  py-6">
              {item.Ans}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Questions;
