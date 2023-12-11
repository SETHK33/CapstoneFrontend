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
            <img src={aboutPhoto1} alt="" />
          </div>

          <div className="about-image">
            <img src={aboutPhoto2} alt="" />
          </div>

          <div className="about-text">
            <p>
              <b>Struggles</b> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ex ad sapiente vero iure laboriosam repellat
              dicta. Nihil possimus earum ad? Eos tenetur cumque explicabo rem
              dolorum porro quis magnam corrupti.
            </p>
          </div>

          <div className="about-text">
            <p>
              <b>Favorite Languages</b> Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Iusto quaerat ipsum sit reiciendis perspiciatis
              aperiam assumenda nobis animi est, explicabo consectetur eveniet
              fugiat earum ducimus odit repellat quibusdam mollitia impedit!
            </p>
          </div>

          <div className="about-image">
            <img src={aboutPhoto3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
