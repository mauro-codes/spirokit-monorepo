export const ArgTypes = (
	fontSize: string,
	fontWeight: string,
	letterSpacing: string,
	lineHeight: string
) => {
	return {
		fontSize: {
			description: "**Optional**\n\nFont size for the component.",
			control: { disabled: true },
			type: {
				summary: "xs | sm | md | lg | xl | 2xl | 3xl | 4xl"
			},
			defaultValue: {
				summary: fontSize
			}
		},
		fontWeight: {
			description: "**Optional**\n\nFont weight for the component.",
			control: { disabled: true },
			type: {
				summary: "light | normal | medium | semibold | bold | extrabold"
			},
			defaultValue: {
				summary: fontWeight
			}
		},
		letterSpacing: {
			description: "**Optional**\n\nLetter spacing for the component.",
			control: { disabled: true },
			type: {
				summary: "xs | sm | md | lg | xl | 2xl | 3xl"
			},
			defaultValue: {
				summary: letterSpacing
			}
		},
		lineHeight: {
			description: "**Optional**\n\nLine height for the component.",
			control: { disabled: true },
			type: {
				summary: "2xs | xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl"
			},
			defaultValue: {
				summary: lineHeight
			}
		},
		numberOfLines: {
			description: "**Optional**\n\nNumber of lines to show before trim",
			control: { disabled: true },
			type: {
				summary: "number"
			}
		},
		color: {
			description: "**Optional**\n\nColor for the text",
			control: { disabled: true },
			type: {
				summary: "string"
			}
		},
		accessibilityLabel: {
			description:
				"**Optional**\n\nAccessibility prop so people who use VoiceOver know what element they have selected. Voice over will read this string",
			table: {
				type: {
					summary: "string"
				}
			}
		},
		colorMode: {
			options: ["light", "dark"],
			description:
				"**Optional** Allows you to override the global color mode to apply a specific color mode for the component",
			table: {
				type: {
					summary: "ColorMode"
				}
			},
			control: { type: "radio" }
		}
	}
}
