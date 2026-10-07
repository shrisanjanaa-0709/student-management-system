function StudentProfile(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px"
      }}
    >
      <p>Name: {props.name}</p>
      <p>Department: {props.department}</p>
      <p>Year: {props.year}</p>
    </div>
  );
}

export default StudentProfile;