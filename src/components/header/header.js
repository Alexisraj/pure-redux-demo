import "./header.css";
import Typed from "react-typed";
import Clock from "react-live-clock";

function Header() {
  return (
    <>
      <div style={{ top: 0, position: "sticky", zIndex: 1000 }}>
        <div className="logo">
          <img
            style={{ height: "6.25rem" }}
            src={"/images/tenor.gif"}
            alt="logo"
          />
        </div>
        <div className="headerText">
          <Typed
            backDelay={200}
            strings={["We are welcoming you to", "React Champianship Program"]}
            typeSpeed={200}
            loop
          />
        </div>
        <div className="time">
          <Clock format={"h:mm:ssa"} ticking={true} />
        </div>
      </div>
    </>
  );
}

export default Header;
