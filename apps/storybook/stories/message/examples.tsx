import React from "react"
import { Message, Box, VStack } from "spirokit"
import { ArgTypes, Parameters } from "@storybook/addons"
import dedent from "ts-dedent"

const argTypes: ArgTypes = {
	type: {
		options: ["info", "error", "success"],
		description: "Type of message. The default value is `info`",
		control: { type: "radio" },
		defaultValue: {
			summary: "info"
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

const typesOfMessagesParameters: Parameters = {
	docs: {
		source: {
			code: dedent`
				import { Message } from "@spirokit/core"
													
				const App = () => {
					return (
						<>
							{/* Info messages */}
							<Message type="info">Info message</Message>
							
							{/* Error messages */}
							<Message type="error">Error message</Message>

							{/* Info messages */}
							<Message type="success">Success message</Message>
						</>
					)
				}
			`
		}
	}
}

const TypesOfMessagesComponent = () => {
	return (
		<VStack space={3} width={375} padding="4">
			<Message type="info">Info message</Message>
			<Message type="error">Error message message</Message>
			<Message type="success">Success message</Message>
		</VStack>
	)
}

const colorModeParameters: Parameters = {
	docs: {
		source: {
			code: dedent`
				import { Message } from "@spirokit/core"
														
				const App = () => {
					return (
						<Message colorMode="light">Info message</Message>
					)
				}
			`
		}
	}
}

const ColorModeComponent = () => {
	return (
		<Box width={375} backgroundColor="white" padding="4">
			<Message colorMode="light">Info message</Message>
		</Box>
	)
}

export {
	argTypes,
	typesOfMessagesParameters,
	TypesOfMessagesComponent,
	colorModeParameters,
	ColorModeComponent
}
