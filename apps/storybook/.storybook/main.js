module.exports = {
	stories: [
		"../stories/Dashboard.stories.mdx",
		"../stories/getting-started/**/*.stories.mdx",
		"../stories/layout/Layout.stories.mdx",
		"../stories/**/*.stories.mdx",
		"../stories/**/*.stories.@(js|jsx|ts|tsx)"
	],
	addons: ["@storybook/addon-links", "@storybook/addon-essentials", "storybook-dark-mode"],
	framework: "@storybook/react"
}
