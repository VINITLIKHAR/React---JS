import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobs = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      company: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45 - $65/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      company: "Microsoft",
      datePosted: "1 week ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50 - $75/hour",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      company: "Amazon",
      datePosted: "3 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40 - $60/hour",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      company: "Meta",
      datePosted: "2 weeks ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$45 - $70/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      company: "Apple",
      datePosted: "4 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$60 - $90/hour",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      company: "Netflix",
      datePosted: "3 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65 - $95/hour",
      location: "Remote, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      company: "NVIDIA",
      datePosted: "10 days ago",
      post: "AI/ML Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70 - $100/hour",
      location: "Pune, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/adobe.com",
      company: "Adobe",
      datePosted: "6 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50 - $75/hour",
      location: "Noida, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/ibm.com",
      company: "IBM",
      datePosted: "1 month ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$45 - $70/hour",
      location: "Ahmedabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/salesforce.com",
      company: "Salesforce",
      datePosted: "10 days ago",
      post: "Salesforce Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40 - $60/hour",
      location: "Chennai, India",
    },
  ];

  return (
    <div className="parent">
      {jobs.map((elem, idx) => (
        <Card key={idx} {...elem} />
      ))}
    </div>
  );
};

export default App;