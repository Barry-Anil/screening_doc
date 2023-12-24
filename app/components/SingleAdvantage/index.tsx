import React from "react";
import Image from "next/image";
import  styles from "./index.module.css";
import Button from "../Button";
const SingleAdvantage = ({ data, direction }: any) => {
	return (
		<div className={`row aside ${direction}`} style={{ margin: "5rem 0" }}>
			{/* Image side */}
			<div className={styles.imageContainer}>
				<Image src={data.image} alt="Health is Wealth" />
			</div>
			<div className={styles.infoContainer}>
				<h3 className={styles.heading}>{data.title}</h3>
				<p className={`${styles.description} text-light-gray`}>
					{data.description}
				</p>
				<Button text={data.buttonText} extraStyles={{}} />
			</div>
		</div>
	);
};

export default SingleAdvantage;