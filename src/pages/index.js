import styled from "styled-components";

function MyImage() {
    return <img src="../static/star.png" alt="my image" width="75%" height="500" />
  }

function Index() {
  return (
      <div>
          
          <h1>Student Tracker</h1>
        <MyImage />
    </div>
  );
}

export default Index;