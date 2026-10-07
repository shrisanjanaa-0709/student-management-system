import Header from "./Header";
import StudentProfile from "./StudentProfile";
import Footer from "./Footer";

function App() {
  // Student 1 details
  const student1Name = "Anu";
  const student1Department = "CSE";
  const student1Year = "3rd Year";

  // Student 2 details
  const student2Name = "Bala";
  const student2Department = "Computer Science";
  const student2Year = "3rd Year";

  return (
    <div>
      <Header />

      <h2>Student 1</h2>

      <StudentProfile
        name={student1Name}
        department={student1Department}
        year={student1Year}
      />

      <h2>Student 2</h2>

      <StudentProfile
        name={student2Name}
        department={student2Department}
        year={student2Year}
      />

      <Footer />
    </div>
  );
}

export default App;