import React from "react"
import { AccentColor, Radio, Box, ColorMode } from "spirokit"
import { useDarkMode } from "storybook-dark-mode"
import { ArgTypes, Parameters } from "@storybook/addons"
import dedent from "ts-dedent"

const radioArgTypes: ArgTypes = {
	value: {
		description: "Value for the Radio button",
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	isDisabled: {
		description: "Radio button disable status. The default value is `false`",
		defaultValue: {
			summary: "false"
		},
		control: { type: "boolean" }
	},
	isHovered: {
		description: "Radio button hover status. The default value is `false`",
		defaultValue: {
			summary: "false"
		},
		control: { type: "boolean" }
	},
	isPressed: {
		description: "Radio button press status. The default value is `false`",
		defaultValue: {
			summary: "false"
		},
		control: { type: "boolean" }
	},
	isFocused: {
		description: "Radio button focus status. The default value is `false`",
		defaultValue: {
			summary: "false"
		},
		control: { type: "boolean" }
	},
	isInvalid: {
		description: "Radio button validation status. The default value is `false`",
		defaultValue: {
			summary: "false"
		},
		control: { type: "boolean" }
	},
	isFocusVisible: {
		description:
			"Radio button focus visibility status. By default, the value is `true` if the radio button is focused",
		defaultValue: {
			summary: "true"
		},
		control: { type: "boolean" }
	},
	size: {
		options: ["sm", "md", "lg"],
		description: "Size of each radio button. The default value is `md`",
		control: { type: "radio" },
		defaultValue: {
			summary: "md"
		},
		table: {
			type: {
				summary: "sm | md | lg"
			}
		}
	},
	space: {
		description: "Space between the radio button and the label. The default value is 4",
		control: { type: "number" },
		defaultValue: {
			summary: "3"
		}
	},
	ref: {
		description: "ref to radio button",
		defaultValue: {
			summary: "3"
		},
		table: {
			type: {
				summary: "MutableRefObject<any>"
			}
		},
		control: { disable: true }
	},
	children: {
		description: "Text label for the radio button",
		table: {
			type: {
				summary: "string"
			}
		},
		control: { type: "text" }
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
	},
	accentColor: {
		options: ["blue", "orange", "rose", "amber", "indigo", "emerald", "red"],
		description:
			"**Optional** Allows you to override the accent color to apply a specific accent for this component",
		table: {
			type: {
				summary: "AccentColor"
			}
		},
		control: { type: "radio" }
	}
}

const radioParameters: Parameters = {
	docs: {
		source: {
			code: dedent`
				import { Radio } from "@spirokit/core"
				
				const App = () => {
					return (
						<Radio.Group name="radio-group">
							<Radio value="1">Option 1</Radio>
						</Radio.Group>
					)
				}
			`
		}
	}
}

type RadioArgumentsTableComponentProps = {
	accentColor: AccentColor
	colorMode: ColorMode
	space?: number
	size?: "sm" | "md" | "lg"
	isDisabled: boolean
	isHovered: boolean
	isPressed: boolean
	isFocused: boolean
	isInvalid: boolean
	isFocusVisible: boolean
	children: string
	value: string
}

const RadioArgumentsTableComponent = (props: RadioArgumentsTableComponentProps) => {
	const colorMode = props.colorMode || useDarkMode() ? "dark" : "light"
	const accentColor = props.accentColor || "primary"

	return (
		<Box width={375} padding="4">
			<Radio.Group name="radio-group">
				<Radio
					space={props.space}
					size={props.size}
					isHovered={props.isHovered}
					isPressed={props.isPressed}
					isFocused={props.isFocused}
					isInvalid={props.isInvalid}
					isFocusVisible={props.isFocusVisible}
					isDisabled={props.isDisabled}
					accentColor={accentColor}
					colorMode={colorMode}
					value={props.value}
				>
					{props.children}
				</Radio>
			</Radio.Group>
		</Box>
	)
}

const statusFlagsParameters: Parameters = {
	docs: {
		source: {
			code: dedent`
				import { Radio } from "@spirokit/core"
				
				const App = () => {
					return (
						<Radio.Group name="radio-group">
							{/* isHovered = true */}
							<Radio isHovered={true} value="1">
								Option 1
							</Radio>

							{/* isPressed = true */}
							<Radio isPressed={true} value="2">
								Option 2
							</Radio>

							{/* isFocused = true */}
							<Radio isFocused={true} value="3">
								Option 3
							</Radio>

							{/* isInvalid = true */}
							<Radio isInvalid={true} value="4">
								Option 4
							</Radio>

							{/* isFocusVisible = true */}
							<Radio isFocusVisible={true} value="5">
								Option 5
							</Radio>

							{/* isDisabled = true */}
							<Radio isDisabled={true} value="6">
								Option 6
							</Radio>
						</Radio.Group>
					)
				}
			`
		}
	}
}

const StatusFlagsComponent = () => {
	const colorMode = useDarkMode() ? "dark" : "light"

	return (
		<Box width={375} padding="4">
			<Radio.Group name="radio-group">
				{/* isHovered = true */}
				<Radio isHovered={true} value="1" colorMode={colorMode}>
					Option 1
				</Radio>

				{/* isPressed = true */}
				<Radio isPressed={true} value="2" colorMode={colorMode}>
					Option 2
				</Radio>

				{/* isFocused = true */}
				<Radio isFocused={true} value="3" colorMode={colorMode}>
					Option 3
				</Radio>

				{/* isInvalid = true */}
				<Radio isInvalid={true} value="4" colorMode={colorMode}>
					Option 4
				</Radio>

				{/* isFocusVisible = true */}
				<Radio isFocusVisible={true} value="5" colorMode={colorMode}>
					Option 5
				</Radio>

				{/* isDisabled = true */}
				<Radio isDisabled={true} value="6" colorMode={colorMode}>
					Option 6
				</Radio>
			</Radio.Group>
		</Box>
	)
}

const sizeParameters: Parameters = {
	docs: {
		source: {
			code: dedent`
				import { Radio } from "@spirokit/core"
				
				const App = () => {
					return (
						<Radio.Group name="radio-group">
							{/* Size = "sm" */}
							<Radio value="1" size="sm">
								Option 1
							</Radio>

							{/* Size = "md" */}
							<Radio value="2" size="md">
								Option 2
							</Radio>

							{/* Size = "lg" */}
							<Radio value="3" size="lg">
								Option 3
							</Radio>
						</Radio.Group>
					)
				}
			`
		}
	}
}

const SizeComponent = () => {
	const colorMode = useDarkMode() ? "dark" : "light"

	return (
		<Box width={375} padding="4">
			<Radio.Group name="radio-group">
				{/* Size = "sm" */}
				<Radio value="1" size="sm" colorMode={colorMode}>
					Option 1
				</Radio>

				{/* Size = "md" */}
				<Radio value="2" size="md" colorMode={colorMode}>
					Option 2
				</Radio>

				{/* Size = "lg" */}
				<Radio value="3" size="lg" colorMode={colorMode}>
					Option 3
				</Radio>
			</Radio.Group>
		</Box>
	)
}

const spacingParameters: Parameters = {
	docs: {
		source: {
			code: dedent`
				import { Radio } from "@spirokit/core"
				
				const App = () => {
					return (
						<Radio.Group name="radio-group">
							{/* Space = 2 */}
							<Radio value="1" space={2}>
								Option 1
							</Radio>

							{/* Space = 4 */}
							<Radio value="2" space={4}>
								Option 2
							</Radio>

							{/* Space = 6 */}
							<Radio value="3" space={6}>
								Option 3
							</Radio>
						</Radio.Group>
					)
				}
			`
		}
	}
}

const SpacingComponent = () => {
	const colorMode = useDarkMode() ? "dark" : "light"

	return (
		<Box width={375} padding="4">
			<Radio.Group name="radio-group">
				{/* Space = 2 */}
				<Radio value="1" space={2} colorMode={colorMode}>
					Option 1
				</Radio>

				{/* Space = 4 */}
				<Radio value="2" space={4} colorMode={colorMode}>
					Option 2
				</Radio>

				{/* Space = 6 */}
				<Radio value="3" space={6} colorMode={colorMode}>
					Option 3
				</Radio>
			</Radio.Group>
		</Box>
	)
}

const accentColorParameters: Parameters = {
	docs: {
		source: {
			code: dedent`
				import { Radio } from "@spirokit/core"
				
				const App = () => {
					return (
						<Radio.Group name="radio-group">
							{/* Accent color = "blue" */}
							<Radio value="1" accentColor="blue">
								Option 1
							</Radio>
							
							{/* Accent color = "amber" */}
							<Radio value="2" accentColor="amber">
								Option 2
							</Radio>

							{/* Accent color = "red" */}
							<Radio value="3" accentColor="red">
								Option 3
							</Radio>
						</Radio.Group>
					)
				}
			`
		}
	}
}

const AccentColorComponent = () => {
	const colorMode = useDarkMode() ? "dark" : "light"

	return (
		<Box width={375} padding="4">
			<Radio.Group name="radio-group">
				{/* Accent color = "blue" */}
				<Radio value="1" accentColor="blue" colorMode={colorMode}>
					Option 1
				</Radio>
				{/* Accent color = "amber" */}
				<Radio value="2" accentColor="amber" colorMode={colorMode}>
					Option 2
				</Radio>
				{/* Accent color = "red" */}
				<Radio value="3" accentColor="red" colorMode={colorMode}>
					Option 3
				</Radio>
			</Radio.Group>
		</Box>
	)
}

export {
	radioArgTypes,
	radioParameters,
	RadioArgumentsTableComponent,
	statusFlagsParameters,
	StatusFlagsComponent,
	sizeParameters,
	SizeComponent,
	spacingParameters,
	SpacingComponent,
	accentColorParameters,
	AccentColorComponent
}
