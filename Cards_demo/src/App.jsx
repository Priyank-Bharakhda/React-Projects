import Cards from "./cards";

const CardsData = [
  {
    company: "Amazon",
    logo: "https://static.vecteezy.com/system/resources/thumbnails/019/136/322/small_2x/amazon-logo-amazon-icon-free-free-vector.jpg",
    title: "Senior UI/UX Designer",
    timePosted: "5 days ago",
    type: "Part-time",
    level: "Senior Level",
    payRate: "$120/hr",
    location: "San Francisco, CA",
  },
  {
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    title: "Frontend Developer",
    timePosted: "2 days ago",
    type: "Full-time",
    level: "Mid Level",
    payRate: "$150/hr",
    location: "Mountain View, CA",
  },
  {
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    title: "Backend Developer",
    timePosted: "1 day ago",
    type: "Contract",
    level: "Junior Level",
    payRate: "$100/hr",
    location: "Redmond, WA",
  },
  {
    company: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/F0/05/Facebook_Logo_%282019%29.png",
    title: "Full Stack Developer",
    timePosted: "3 days ago",
    type: "Full-time",
    level: "Senior Level",
    payRate: "$130/hr",
    location: "Menlo Park, CA",
  },
  {
    company: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    title: "iOS Developer",
    timePosted: "4 days ago",
    type: "Part-time",
    level: "Mid Level",
    payRate: "$140/hr",
    location: "Cupertino, CA",
  },
 
];

const App = () => {
  return (
    <div className="all-cards">
      <Cards CardsData={CardsData} />
    </div>
  );
};

export default App;
