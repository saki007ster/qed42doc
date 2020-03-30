const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://www.qed42.com",
		"gaTrackingId": null,
		"trailingSlash": false
	},
	"header": {
		"logo": "https://www.drupal.org/files/logo-new.png",
		"logoLink": "https://www.qed42.com",
		"title": "Qed42 Docs",
		"githubUrl": "https://github.com/saki007ster/qed42docs",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
		"search": {
			"enabled": false,
			"indexName": "",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction", // add trailing slash if enabled above
    		"/JS"
		],
    	"collapsedNav": [
      		"/JS" // add trailing slash if enabled above
    	],
		"links": [
			{ "text": "Qed42", "link": "https://www.qed42.com"},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "Qed42 | Documentation",
		"description": "Documentation built with mdx. Powering qed42 documentation",
		"ogImage": null,
		"docsLocation": "https://github.com/saki007ster/qed42docs/tree/master/content",
		"favicon": "https://www.qed42.com/themes/qed42/favicon.ico"
	},
	"pwa": {
		"enabled": false, // disabling this will also remove the existing service worker.
		"manifest": {
			"name": "Qed42 Documentation",
			"short_name": "qed42docs",
			"start_url": "/",
			"background_color": "#ff0000",
			"theme_color": "#ff0000",
			"display": "standalone",
			"crossOrigin": "use-credentials",
			icons: [
				{
					src: "src/pwa-512.png",
					sizes: `512x512`,
					type: `image/png`,
				},
			],
		},
	}
};

module.exports = config;
