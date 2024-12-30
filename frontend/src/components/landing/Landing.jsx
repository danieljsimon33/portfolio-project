export default function Landing() {
  return (
    <div className="page-container">
      <div className="about-me">
        <p>
          Hi!  My name is Daniel Simon and I am a high school graduate set to study mechanical engineering starting next school year, while currently I am taking a gap year with Aardvark Israel. My hobbies include drawing, 3D printing, reading, and playing Minecraft, and I enjoy a good mental challenge.
        </p>
        <p>
          This small website is intended to demonstrate the skills I've learned throughout my full stack developer course taught by <a href="https://www.methodian.net" rel="external" target="_blank" className="methodian-link">Methodian</a>.
        </p>
      </div>

      <div className="about-course">
        <p>In this course, I learned how to implement:</p>
        <p className="parent-item">- User authentication</p>
        <p className="child-item">- Logging in and out, making authenticated requests to the backend</p>
        <p className="parent-item">- HTTP requests</p>
        <p className="child-item">- API calls</p>
        <p className="child-item">- Using third-party databases</p>
      </div>
    </div>
  );
}
