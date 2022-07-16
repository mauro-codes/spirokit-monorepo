const { resolve } = require("path")
const { withUnimodules } = require("@expo/webpack-config/addons")

module.exports = ({ config }) => {
	config.resolve.alias["spirokit"] = resolve(__dirname, "../../../node_modules/spirokit/lib")
	return {
		...withUnimodules(config, {
			projectRoot: resolve(__dirname, "../")
		})
	}
}
