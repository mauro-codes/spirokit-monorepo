import { Box, ColorMode, VStack } from "native-base"
import React from "react"
import { AccentColor, Radio } from "spirokit"
import { useDarkMode } from "storybook-dark-mode"
import { ArgTypes, Parameters } from "@storybook/addons"
import dedent from "ts-dedent"

const groupArgTypes: ArgTypes = {
	value: {
		description: "Value for the Radio Group",
		defaultValue: {
			summary: "undefined"
		},
		control: { type: "text" }
	},
	defaultValue: {
		description: "Allows you to pre-select a value in the radio group",
		defaultValue: {
			summary: "undefined"
		},
		control: { type: "text" }
	},
	name: {
		description: "Name of the Radio Group. Useful when submitting forms",
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	size: {
		options: ["sm", "md", "lg"],
		description: "Size of each radio button. The default value is `md`",
		control: { type: "radio" },
		defaultValue: {
			summary: "md"
		}
	},
	space: {
		description: "Space between each radio button. The default value is 4",
		control: { type: "number" },
		defaultValue: {
			summary: "4"
		}
	},
	onChange: {
		description: "Triggered every time a radio button is selected.",
		table: {
			type: {
				summary: "(value: string) => any"
			}
		},
		control: { disable: true }
	},
	children: {
		description:
			"One or more `Radio` child components.\n\nPlease check the arguments table for the `Radio` component below",
		table: {
			type: {
				summary:
					"React.ReactComponentElement<typeof Radio> | React.ReactComponentElement<typeof Radio>[]"
			}
		},
		control: { disable: true }
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

const groupParameters: Parameters = {
	docs: {
		source: {
			code: dedent`
				import { Radio } from "@spirokit/core"
				
				const App = () => {
					return (
						<Radio.Group name="radio-group">
							<Radio value="1">Option 1</Radio>
							<Radio value="2">Option 2</Radio>
							<Radio value="3">Option 3</Radio>
						</Radio.Group>
					)
				}
			`
		}
	}
}

type GroupArgumentsTableComponentProps = {
	accentColor: AccentColor
	colorMode: ColorMode
	space?: number
	defaultValue?: string
	value?: string
	size?: "sm" | "md" | "lg"
}

const GroupArgumentsTableComponent = (props: GroupArgumentsTableComponentProps) => {
	const colorMode = props.colorMode || useDarkMode() ? "dark" : "light"
	const accentColor = props.accentColor || "primary"

	return (
		<Box width={375} p="4">
			<Radio.Group
				accentColor={accentColor}
				colorMode={colorMode}
				defaultValue={props.defaultValue}
				value={props.value}
				size={props.size}
				name="radio-group"
				space={props.space}
			>
				<Radio value="1">Option 1</Radio>
				<Radio value="2">Option 2</Radio>
				<Radio value="3">Option 3</Radio>
			</Radio.Group>
		</Box>
	)
}

const valueAndDefaultValueParameters: Parameters = {
	docs: {
		source: {
			code: dedent`
				import { Radio } from "@spirokit/core"
				
				const App = () => {
					return (
						<VStack width={375} space="8">
							{/* value = 2, defaultValue = 1. value takes precedence */}
							<Radio.Group value="2" defaultValue="1" name="radio-group">
								<Radio value="1">Option 1</Radio>
								<Radio value="2">Option 2</Radio>
								<Radio value="3">Option 3</Radio>
							</Radio.Group>
							{/* value = not defined, defaultValue = 3. defaultValue takes precedence */}
							<Radio.Group defaultValue="3" name="radio-group-2">
								<Radio value="1">Option 1</Radio>
								<Radio value="2">Option 2</Radio>
								<Radio value="3">Option 3</Radio>
							</Radio.Group>
						</VStack>
					)
				}
			`
		}
	}
}

const ValueAndDefaultValueComponent = () => {
	const colorMode = useDarkMode() ? "dark" : "light"

	return (
		<VStack width={375} space="8">
			{/* value = 2, defaultValue = 1. value takes precedence */}
			<Radio.Group value="2" defaultValue="1" colorMode={colorMode} name="radio-group">
				<Radio value="1">Option 1</Radio>
				<Radio value="2">Option 2</Radio>
				<Radio value="3">Option 3</Radio>
			</Radio.Group>
			{/* value = not defined, defaultValue = 3. defaultValue takes precedence */}
			<Radio.Group defaultValue="3" colorMode={colorMode} name="radio-group">
				<Radio value="1">Option 1</Radio>
				<Radio value="2">Option 2</Radio>
				<Radio value="3">Option 3</Radio>
			</Radio.Group>
		</VStack>
	)
}

const sizeParameters: Parameters = {
	docs: {
		source: {
			code: dedent`
				import { Radio } from "@spirokit/core"
				import { VStack } from "native-base"
				
				const App = () => {
					return (
						<VStack width={375} space={8}>
							{/* Size = "sm" */}
							<Radio.Group size="sm" name="radio-group">
								<Radio value="1">Option 1</Radio>
								<Radio value="2">Option 2</Radio>
								<Radio value="3">Option 3</Radio>
							</Radio.Group>
							{/* Size = "md" */}
							<Radio.Group size="md" name="radio-group-2">
								<Radio value="1">Option 1</Radio>
								<Radio value="2">Option 2</Radio>
								<Radio value="3">Option 3</Radio>
							</Radio.Group>
							{/* Size = "lg" */}
							<Radio.Group size="lg" name="radio-group-3">
								<Radio value="1">Option 1</Radio>
								<Radio value="2">Option 2</Radio>
								<Radio value="3">Option 3</Radio>
							</Radio.Group>
						</VStack>
					)
				}
			`
		}
	}
}

const SizeComponent = () => {
	const colorMode = useDarkMode() ? "dark" : "light"

	return (
		<VStack width={375} space={8}>
			{/* Size = "sm" */}
			<Radio.Group size="sm" colorMode={colorMode} name="radio-group">
				<Radio value="1">Option 1</Radio>
				<Radio value="2">Option 2</Radio>
				<Radio value="3">Option 3</Radio>
			</Radio.Group>
			{/* Size = "md" */}
			<Radio.Group size="md" colorMode={colorMode} name="radio-group-2">
				<Radio value="1">Option 1</Radio>
				<Radio value="2">Option 2</Radio>
				<Radio value="3">Option 3</Radio>
			</Radio.Group>
			{/* Size = "lg" */}
			<Radio.Group size="lg" colorMode={colorMode} name="radio-group-3">
				<Radio value="1">Option 1</Radio>
				<Radio value="2">Option 2</Radio>
				<Radio value="3">Option 3</Radio>
			</Radio.Group>
		</VStack>
	)
}

const spacingParameters: Parameters = {
	docs: {
		source: {
			code: dedent`
				import { Radio } from "@spirokit/core"
				import { VStack } from "native-base"
				
				const App = () => {
					return (
						<VStack width={375} space={8}>
							{/* Space = 2 */}
							<Radio.Group space={2} name="radio-group">
								<Radio value="1">Option 1</Radio>
								<Radio value="2">Option 2</Radio>
								<Radio value="3">Option 3</Radio>
							</Radio.Group>
							{/* Space = 6 */}
							<Radio.Group space={6} name="radio-group">
								<Radio value="1">Option 1</Radio>
								<Radio value="2">Option 2</Radio>
								<Radio value="3">Option 3</Radio>
							</Radio.Group>
						</VStack>
					)
				}
			`
		}
	}
}

const SpacingComponent = () => {
	const colorMode = useDarkMode() ? "dark" : "light"

	return (
		<VStack width={375} space={8}>
			{/* Space = 2 */}
			<Radio.Group colorMode={colorMode} space={2} name="radio-group">
				<Radio value="1">Option 1</Radio>
				<Radio value="2">Option 2</Radio>
				<Radio value="3">Option 3</Radio>
			</Radio.Group>
			{/* Space = 6 */}
			<Radio.Group colorMode={colorMode} space={6} name="radio-group-2">
				<Radio value="1">Option 1</Radio>
				<Radio value="2">Option 2</Radio>
				<Radio value="3">Option 3</Radio>
			</Radio.Group>
		</VStack>
	)
}
const colorModeParameters: Parameters = {
	docs: {
		source: {
			code: dedent`
				import { Radio } from "@spirokit/core"
				
				const App = () => {
					return (
						<Radio.Group colorMode="light" name="radio-group">
							<Radio value="1">Option 1</Radio>
							<Radio value="2">Option 2</Radio>
							<Radio value="3">Option 3</Radio>
						</Radio.Group>
					)
				}
			`
		}
	}
}

const ColorModeComponent = () => {
	return (
		<Box width={375} bgColor="white" p="4">
			<Radio.Group colorMode="light" name="radio-group">
				<Radio value="1">Option 1</Radio>
				<Radio value="2">Option 2</Radio>
				<Radio value="3">Option 3</Radio>
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
						<Radio.Group accentColor="amber" name="radio-group">
							<Radio value="1">Option 1</Radio>
							<Radio value="2">Option 2</Radio>
							<Radio value="3">Option 3</Radio>
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
		<Box width={375} p="4">
			<Radio.Group colorMode={colorMode} accentColor={"amber"} name="radio-group">
				<Radio value="1">Option 1</Radio>
				<Radio value="2">Option 2</Radio>
				<Radio value="3">Option 3</Radio>
			</Radio.Group>
		</Box>
	)
}

const accentColorAndColorModeParameters: Parameters = {
	docs: {
		source: {
			code: dedent`
				import { Radio } from "@spirokit/core"
				
				const App = () => {
					return (
						<Radio.Group
							defaultValue="2"
							colorMode={"light"}
							accentColor={"blue"}
							name="radio-group">
							<Radio value="1">Option 1</Radio>
							<Radio value="2">Option 2</Radio>
							<Radio value="3">Option 3</Radio>
						</Radio.Group>
					)
				}
			`
		}
	}
}

const AccentColorAndColorModeComponent = () => {
	const colorMode = useDarkMode() ? "dark" : "light"
	return (
		<Box width={375} bgColor="white" p="4">
			<Radio.Group
				defaultValue="2"
				colorMode={"light"}
				accentColor={"blue"}
				name="radio-group"
			>
				<Radio value="1">Option 1</Radio>
				<Radio value="2">Option 2</Radio>
				<Radio value="3">Option 3</Radio>
			</Radio.Group>
		</Box>
	)
}

export {
	groupArgTypes,
	groupParameters,
	GroupArgumentsTableComponent,
	valueAndDefaultValueParameters,
	ValueAndDefaultValueComponent,
	sizeParameters,
	SizeComponent,
	spacingParameters,
	SpacingComponent,
	accentColorParameters,
	AccentColorComponent,
	colorModeParameters,
	ColorModeComponent,
	accentColorAndColorModeParameters,
	AccentColorAndColorModeComponent
}
