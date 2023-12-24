import React from "react";
import Image from "next/image";
import  styles from "./index.module.css";
const ServiceCard = ({ service } :any) => {
	return (
		<div className={styles.cardContainer}>
			<div className={`${styles.imageContainer}`}>
				<div>
					<Image src={service.picture} alt="Health is Wealth" />
				</div>
			</div>
			<h3 className={`${styles.cardHeading}`}>{service.title}</h3>
			<p className={`${styles.cardDes} text-light-gray`}>
				{service.description}
			</p>
		</div>
	);
};

export default ServiceCard;