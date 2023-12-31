import React from "react";
import Link from "next/link";
import  styles from "./index.module.css";
const FooterLinkSet = ({ linkSet } : any) => {
	return (
		<div className={`${styles.linkGroup}`}>
			<h4>Heading</h4>
			<div>
				<ul className={`${styles.footerLinks}`}>
					{Array(4)
						.fill("Link")
						.map((item, index) => {
							return (
								<li key={index}>
									<Link href="/">{item}</Link>
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
};

export default FooterLinkSet;