import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./HomeAboutPreviews.css";

export default class HomeAboutPreviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewItems: [
        {
          name: "Climber",
          title: "Climbers",
          bgColor: "rgb(172, 236, 234)",
          imgSrc: "https://png.icons8.com/ios/50/000000/climbing.png",
          summary: "Learn how Climber Tech transforms your climbing experience.",
          path: "/climbers"
        },
        {
          name: "Setter",
          title: "Setters",
          bgColor: "rgb(71, 237, 211)",
          imgSrc: "https://png.icons8.com/ios/50/000000/waypoint-map.png",
          summary: "Find out how we generate portfolios for setters and expand their audience.",
          path: "/setters",
        },
        {
          name: "Gym",
          title: "Gyms",
          bgColor: "rgb(56, 188, 196)",
          imgSrc: "https://png.icons8.com/ios/50/000000/garage-closed.png",
          summary: "Use Climber Tech for detailed route rotation schedule and host events.",
          path: "/gyms",
        },
        {
          name: "Event",
          title: "Events",
          bgColor: "rgb(44, 200, 100)",
          imgSrc: "https://png.icons8.com/ios/50/000000/calendar.png",
          summary: "See how Climber Tech provides live score tracking and eliminates paper waste.",
          path: "/events",
        },
      ]
    }
  }

  render() {
    return(
      <div className={styles.container}>
        <ul className={styles.previewList}>

          {this.state.previewItems.map((item, key) => {
            return (
              <li className={styles.previewItem} key={key}>
              <div className={styles.iconContainer}>
                <div className={styles.iconContainerGeneral} style={{color:"rgb(33, 43, 54)", backgroundColor: item.bgColor}}>
                  <span className={`${styles.iconHolder} ${styles.svgWrapper}`}>
                    {/* svg goes here */}
                    <img src={item.imgSrc} alt={item.name}></img>
                  </span>
                </div>
              </div>
  
              <div className={styles.titleContainer}>
                <h4 className={styles.title}>
                  {item.title}
                </h4>
              </div>
              <p className={styles.summary}>
                {item.summary}
              </p>
              <Link to={item.path} className={styles.redirect}>View {item.name} Features</Link>
            </li>  
            );
          })}

        </ul>
      </div>
    )
  }
}