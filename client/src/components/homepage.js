const Home = () => {
  return (
    <>
      <div className="header">
        <img
          className="pfp"
          src="https://miro.medium.com/max/875/1*b2ZpVczibdIDlUbuN6S2ZA.png"
          alt="Linda smiling while looking forward at the camera wearing a maroon shirt"
        />
        <svg viewBox="0 0 500 500">
          <path id="curve" fill="transparent" d="M 45 70 q 75 -80 150 60" />
          <text width="500">
            <textPath href="#curve">&emsp;&nbsp;Linda Sanchez</textPath>
          </text>
        </svg>
      </div>
      <div className="intro">
        <p>const person = {"{"}</p>
        <p>
          &emsp;&emsp;name: <strong>'Linda Sanchez'</strong>,
        </p>
        <p>
          &emsp;&emsp;location: <strong>'Los Angeles'</strong>,
        </p>
        <p>
          &emsp;&emsp;languages spoken:{" "}
          <strong>['English', 'Cantonese', 'Mandarin', 'Korean']</strong>
        </p>
        <p>{"}"}</p>
      </div>
      <div></div>
    </>
  );
};

export default Home;
