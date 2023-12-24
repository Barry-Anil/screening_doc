import React from "react";
import  styles from "./index.module.css";
import ArticleCard from "../ArticleCard";
import Button from "../Button";
import SectionHeading from "../SectionHeading";
const Articles = ({ articles } : any) => {
	return (
		<section className={"margin-on-side"}>
			<SectionHeading headingTitle={"Check out our latest Articles"} />
			<div className={`row aside`} style={{ margin: "3rem 0" }}>
				{articles.map((item : any) => {
					return <ArticleCard key={item.id} data={item} />;
				})}
			</div>
			<div className="row center">
				<Button text={"View All"} extraStyles={{}} />
			</div>
		</section>
	);
};

export default Articles;