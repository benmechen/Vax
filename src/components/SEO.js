import React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../hooks/useSiteMetadata';

const SEO = () => {
	const { title, description } = useSiteMetadata();

	return (
		<Helmet>
			<html lang="en" />
			<meta charSet="utf-8" />
			<meta name="description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			<title>{title}</title>
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Fraunces:wght@100;300;400;500;600;700;800;900&display=swap"
				rel="stylesheet"
			/>
		</Helmet>
	);
};

export default SEO;
