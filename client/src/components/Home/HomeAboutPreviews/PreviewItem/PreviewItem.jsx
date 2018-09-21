import React from "react";
import styles from "./PreviewItem.css";
import { Link } from "react-router-dom";

const PreviewItem = props => {
  const item = props.item;
  return (
    <li className={styles.previewItem}>
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
  )
}

export default PreviewItem;