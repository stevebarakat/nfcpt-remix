import { useRef } from "react";
import CountUp from "react-countup";
import useOnScreen from "~/hooks/useOnScreen";
import styles from "~/styles/mission.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const Mission = () => {
  const statsRef = useRef(null);
  const onScreen = useOnScreen(statsRef, "-100px");

  return (
    <div className="mission">
      <div className="missionLeftWrap">
        <div>
          <span className="missionHeader">
            <h1>Car Accident Chiropractor</h1>
          </span>
          <span className="missionDescription">
            With over 20 years serving the Orange Park area, North Florida
            Chiropractic Physical Therapy prides itself on being the primary
            chiropractic center for auto accident rehabilitation. Not only do we
            guide you to recovery from pain, we work closely with attorneys to
            ensure you get the settlement you deserve.
          </span>
        </div>
      </div>
      <div className="missionRightWrap">
        <div>
          <span className="missionSubHeader">We&apos;re not a franchise</span>
          <ul className="missionList">
            <li>Doctor owned and operated.</li>
            <li>Individualized personal treatment plans.</li>
            <li>No long term contracts.</li>
            <li>Free transportation to and from appointments.</li>
          </ul>
          <div ref={statsRef} id="stats" className="stats">
            <div className="stat">
              <CountUp
                start={onScreen}
                end={25}
                duration={3.5}
                useEasing={true}
                suffix="Y+"
              />
              <span id="ubu">Serving North Florida</span>
            </div>
            <div className="stat">
              <CountUp
                start={onScreen}
                end={20}
                duration={3.75}
                useEasing={true}
                suffix="K"
              />
              <span>Patients Served</span>
            </div>
            <div className="stat">
              <CountUp
                start={onScreen}
                end={15}
                duration={4}
                useEasing={true}
                prefix="$"
                suffix="M"
              />
              <span>Settlement Claims</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
