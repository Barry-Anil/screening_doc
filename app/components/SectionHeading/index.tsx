import React from "react";
import  styles from "./index.module.css";
const SectionHeading = ({ headingTitle = "Placeholder", color = "black" }) => {
	return (
		<div className={`center row`} style={{ borderColor: color, color }}>
			<div className={styles.headingContainer}>
				<h2 className={styles.heading}>{headingTitle}</h2>
			</div>
		</div>
	);
};

export default SectionHeading;