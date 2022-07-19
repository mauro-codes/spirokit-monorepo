import React, { ReactNode } from "react"
import ThemeDark from "./ThemeDark"
import ThemeLight from "./ThemeLight"
import { useSpiroKitTheme, Box, SpiroKitProvider, usePoppins, useColorMode } from "spirokit"
import { useDarkMode } from "storybook-dark-mode"

export const parameters = {
	darkMode: {
		dark: ThemeDark,
		light: ThemeLight,
		darkClass: "lights-out",
		lightClass: "lights-on",
		stylePreview: true
	}
}

export const decorators = [
	(Story) => {
		usePoppins()

		const myTheme = useSpiroKitTheme({
			useSystemColorMode: false,
			gradients: false
		})

		return (
			<SpiroKitProvider theme={myTheme}>
				<ColorModeToggle colorMode={useDarkMode() ? "dark" : "light"}>
					{Story()}
				</ColorModeToggle>
			</SpiroKitProvider>
		)
	}
]

type ColorModeToggleProps = {
	colorMode: string
	children: JSX.Element
}

const ColorModeToggle = (props: ColorModeToggleProps) => {
	const { setColorMode } = useColorMode()

	React.useEffect(() => {
		setColorMode(props.colorMode)
	}, [props.colorMode])

	return <Box>{props.children}</Box>
}
