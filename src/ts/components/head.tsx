import React from "react";
import { Helmet } from "react-helmet";

interface IHeadProps {
	title: string;
}

const Head: React.FC<IHeadProps> = ({ title }) => (
	<Helmet>
		<title>{title}</title>
	</Helmet>
);

export default Head;