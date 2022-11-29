import "./intro.css";


const intro = () => {
  return (
    <div className="i">
      
      
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">ABOUT MIND AGENCY</h2>
          <h1 className="i-name">WHAT CAN WE DO</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">365 WORKING DAYS PER YEAR</div>
              <div className="i-title-item">144 POSITIVE FEEDBACKS</div>
              <div className="i-title-item">178 PROJECTS COMPLETED</div>
            </div>
          </div>
          <p className="i-desc">
          We have an indepth understanding of the Indian market and how to engage customers, we intelligently amplify the content for multiple media spaces and curate it for 360 degree approach. We rely on an integrated approach to creative storytelling, bundled with impactful designs to create endearing brand communication.
          </p>
        </div>
      </div>

      <div className="i-right">
        <div className="i-bg"></div>
        <img src="https://assets.website-files.com/626f5d0ae6c15cea8c2dd5dd/633d5e81f3191b4f45aa67b3_3d-digital-tb.png" alt="" className="i-img"/>
      </div>
      
    </div>
  );
};

export default intro;