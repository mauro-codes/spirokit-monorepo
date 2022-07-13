import React, { useEffect, useState } from "react"
import { Box, ColorMode, HStack, IBoxProps, useColorMode } from "native-base"
import { AccentColor } from "../../theme"
import { TitleOne, Subhead } from "../typography"
import CloseButton from "./CloseButton"
import { useColorModeValue } from "../../hooks"

type HeaderProps = IBoxProps & {
	accentColor?: AccentColor
	colorMode?: ColorMode
	isPressed?: boolean
	TitleComponent?: React.ReactComponentElement<typeof TitleOne>
	SubtitleComponent?: React.ReactComponentElement<typeof Subhead>
	onClose: () => void
}

export const Header: React.FC<HeaderProps> = (props) => {
	const { TitleComponent, SubtitleComponent, onClose } = props

	const accentColor = props.accentColor || "primary"
	const colorMode = props.colorMode || useColorMode().colorMode
	const subtitleTextColor = useColorModeValue("white", "primaryGray.300", colorMode)
	const [dynamicBg, setDynamicBg] = useState({})

	useEffect(() => {
		getBackgroundColor()
	}, [colorMode])

	const getBackgroundColor = () => {
		setDynamicBg({
			backgroundColor: {
				linearGradient: {
					colors:
						colorMode === "light"
							? [`${accentColor}.700`, `${accentColor}.500`, `${accentColor}.400`]
							: ["primaryDark.6", "primaryDark.6", "primaryDark.6"],
					start: [0, 0],
					end: [1, 1]
				}
			}
		})
	}

	if (!TitleComponent && !SubtitleComponent) {
		return (
			<HStack paddingX={4} paddingTop={4} justifyContent="flex-end">
				<CloseButton
					colorMode={colorMode}
					accentColor={props.accentColor}
					onClose={onClose}></CloseButton>
			</HStack>
		)
	}

	return (
		<Box {...dynamicBg}>
			<HStack padding={4} alignItems="flex-start">
				<Box flex={1}>
					{TitleComponent
						? {
								...TitleComponent,
								props: {
									...TitleComponent.props,
									color: "white",
									marginBottom: 1
								}
						  }
						: null}
					{SubtitleComponent
						? {
								...SubtitleComponent,
								props: {
									...SubtitleComponent.props,
									color: subtitleTextColor,
									marginBottom: 1
								}
						  }
						: null}
				</Box>
				<CloseButton
					colorMode={colorMode}
					accentColor={props.accentColor}
					onClose={onClose}></CloseButton>
			</HStack>
		</Box>
	)
}
