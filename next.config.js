const path = require("path");
const withPWA = require("next-pwa");
const nextTranslate = require("next-translate");

module.exports = nextTranslate(
	withPWA({
		pwa: {
			disable: process.env.NODE_ENV === "development",
			// dest: 'public',
			register: true,
			sw: "/sw.js",
		},
		sassOptions: {
			includePaths: [path.join(__dirname, "styles")],
		},
		env: {
			JWT_SECRET: "djhfghbdsgrasklkajsdgf",
			SENDGRID_KEY:
				"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",
			CLOUDINARY_URL:
				"https://api.cloudinary.com/v1_1/dmlz23oxq/image/upload",
			CLOUDINARY_VIDEO_URL:
				"https://api.cloudinary.com/v1_1/dmlz23oxq/video/upload",
			STRIPE_SECRET_KEY: "sk_test_51M6YhASGRDmYwsuvo78K7MTYTsNSNTFvkKfxDb6aZjnymROGtN82GZNu5poaHMUSxrfSAz9o9ziebfNYbQcijkkG00bXbqjcmd",
			STRIPE_PUBLISHABLE_KEY:
				"pk_test_51M6YhASGRDmYwsuvYj3LmggH8JW4uu9VcQM4crATlZwVX1TLf4iUo7812KQ4WupzzB3oRRk433oN2a6KKfuEi6Ga0085HUNH4e",
		},
	})
);
