import { useState } from "react";
import Header from "./Header";
import StudentProfile from "./StudentProfile";
import Footer from "./Footer";

function App() {
  const studentName = "Anu";
  const studentDepartment = "CSE";
  const studentYear = "3rd Year";

  const [practiceCount, setPracticeCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  const completePractice = () => {
    setPracticeCount(practiceCount + 1);
  };

  const resetPractice = () => {
    setPracticeCount(0);
  };

  return (
    <div>
      <Header />

      <button onClick={completePractice}>
        Complete Practice
      </button>

      <button onClick={resetPractice}>
        Reset
      </button>

      <button onClick={() => setShowProfile(!showProfile)}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      {showProfile && (
        <StudentProfile
          name={studentName}
          department={studentDepartment}
          year={studentYear}
          practiceCount={practiceCount}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;