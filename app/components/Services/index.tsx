import React from "react";
import  styles from "./index.module.css";
import SectionHeading from "../SectionHeading";
import ServiceCard from "../ServiceCard";
import Button from "../Button";
const Services = ({ services }: any) => {
	return (
		<section className={styles.container}>
			<div className="margin-on-side">
				{/* Section Heading */}
				<SectionHeading headingTitle="Our Services" />
				{/* Section Description */}
				<p className={`${styles.servicesDes} text-light-gray`}>
					We provide to you the best choiches for you. Adjust it to
					your health needs and make sure your undergo treatment with
					our highly qualified doctors you can consult with us which
					type of service is suitable for your health
				</p>
				{/* Section List - we will map through array and render a card for each item */}
				<div className={`row ${styles.serviceList}`}>
					{services.map((item:any) => {
						return <ServiceCard service={item} key={item.id} />;
					})}
				</div>
				<div className="row center">
					<Button text="Learn More" extraStyles={{}} />
				</div>
			</div>
		</section>
	);
};

export default Services;