import aboutPhoto1 from "../../assets/images/about-photos/about-1.JPG";
import aboutPhoto2 from "../../assets/images/about-photos/about-2.JPG";
import aboutPhoto3 from "../../assets/images/about-photos/about-3.JPG";

export default function About() {
  return (
    <div className="about-page page-container">
      <h1>ABOUT</h1>

      <div className="about-wrapper">
        <div className="about-grid">
          <div className="about-text">
            <p>
              <b>Process</b> I started this project by setting up my folder
              structure. I do this before writing any code because it helps me
              stay organized and I can begin to picture each part of the project
              and where I want to start building. I build out the routes, export
              and link all page components, and build/style a simple navigation
              bar and footer so that I have a standard page template where I can
              visualize and start to build each component, piece by piece.
            </p>
          </div>

          <div className="about-image">
            <img src={aboutPhoto1} alt="about" />
          </div>

          <div className="about-image">
            <img src={aboutPhoto2} alt="about" />
          </div>

          <div className="about-text">
            <p>
              <b>Challenges</b> Understanding useContext in React posed a
              challenge; figuring out how to use a hook to manage global state
              and pass data across components without prop drilling seemed
              abstract. By utilizing useContext in this project, I learned that
              useContext provides a way to access values (like a state or
              function) within components, removing the need to pass props down
              manually. Using the useContext hook, I could access and update
              shared data with ease.
            </p>
          </div>

          <div className="about-text">
            <p>
              <b>Favorite Languages</b> I enjoyed learning React. I like the
              component-based approach of the language. It helps me visualize a
              project by its individual parts and see how it will render on the
              DOM. I also enjoyed experimenting with SCSS and CSS stylings and
              the various ways in which to make pages and projects cleaner and
              fun.
            </p>
          </div>

          <div className="about-image">
            <img src={aboutPhoto3} alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
}
