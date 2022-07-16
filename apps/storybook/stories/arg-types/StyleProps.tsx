import { ArgTypes } from "@storybook/addons"
import { Source } from "@storybook/addon-docs"
import { Pressable, VStack, TitleTwo, Body } from "spirokit"
import dedent from "ts-dedent"

const spaceArgTypes: ArgTypes = {
	margin: {
		description:
			"**Optional**\n\nThe margin property is used to create space around elements, outside of any defined borders.",
		table: {
			type: {
				summary: "number | string | ResponsiveValue<number | string>"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	marginRight: {
		description:
			"**Optional**\n\nThe `marginRight` property is used to create space at the right side of an element, outside of any defined borders.",
		table: {
			type: {
				summary: "number | string | ResponsiveValue<number | string>"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	marginLeft: {
		description:
			"**Optional**\n\nThe `marginLeft` property is used to create space at the left side of an element, outside of any defined borders.",
		table: {
			type: {
				summary: "number | string | ResponsiveValue<number | string>"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	marginTop: {
		description:
			"**Optional**\n\nThe `marginTop` property is used to create space at the top side of an element, outside of any defined borders.",
		table: {
			type: {
				summary: "number | string | ResponsiveValue<number | string>"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	marginBottom: {
		description:
			"**Optional**\n\nThe `marginBottom` property is used to create space at the bottom side of an element, outside of any defined borders.",
		table: {
			type: {
				summary: "number | string | ResponsiveValue<number | string>"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	marginX: {
		description:
			"**Optional**\n\nThe `marginX` property is used to create space at the left and right sides of an element, outside of any defined borders.",
		table: {
			type: {
				summary: "number | string | ResponsiveValue<number | string>"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	marginY: {
		description:
			"**Optional**\n\nThe `marginY` property is used to create space at the top and bottom sides of an element, outside of any defined borders.",
		table: {
			type: {
				summary: "number | string | ResponsiveValue<number | string>"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	padding: {
		description:
			"**Optional**\n\nThe padding property is used to create space around an element's content, inside of any defined borders.",
		table: {
			type: {
				summary: "number | string | ResponsiveValue<number | string>"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	paddingRight: {
		description:
			"**Optional**\n\nThe `paddingRight` property is used to create space at the right side of an element's content, inside of any defined borders.",
		table: {
			type: {
				summary: "number | string | ResponsiveValue<number | string>"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	paddingLeft: {
		description:
			"**Optional**\n\nThe `paddingLeft` property is used to create space at the left side of an element's content, inside of any defined borders.",
		table: {
			type: {
				summary: "number | string | ResponsiveValue<number | string>"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	paddingTop: {
		description:
			"**Optional**\n\nThe `paddingTop` property is used to create space at the top side of an element's content, inside of any defined borders.",
		table: {
			type: {
				summary: "number | string | ResponsiveValue<number | string>"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	paddingBottom: {
		description:
			"**Optional**\n\nThe `paddingBottom` property is used to create space at the bottom side of an element's content, inside of any defined borders.",
		table: {
			type: {
				summary: "number | string | ResponsiveValue<number | string>"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	paddingX: {
		description:
			"**Optional**\n\nThe `paddingX` property is used to create space at the right and left sides of an element's content, inside of any defined borders.",
		table: {
			type: {
				summary: "number | string | ResponsiveValue<number | string>"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	paddingY: {
		description:
			"**Optional**\n\nThe `paddingY` property is used to create space at the top and bottom sides of an element's content, inside of any defined borders.",
		table: {
			type: {
				summary: "number | string | ResponsiveValue<number | string>"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	}
}

const redirectTo = (relativePath: string) => {
	const protocol = window.location.protocol
	const hostname = window.location.hostname
	const port = window.location.port
	const destination = `${protocol}//${hostname}${port ? `:${port}` : ""}${relativePath}`
	window.open(destination, "_blank")
}

const SpaceArgTypesComments = (props: { componentName: string }) => {
	return (
		<VStack space={2}>
			<TitleTwo>What is a ResponsiveValue?</TitleTwo>
			<Body>
				SpiroKit inherits NativeBase's support for responsive styles out of the box. Instead
				of manually adding responsiveness to your apps, you can provide an object to add
				responsive styles.
			</Body>
			<Source
				language="tsx"
				dark={true}
				code={dedent`
                    const breakpoints = {
                        base: 0,
                        sm: 480,
                        md: 768,
                        lg: 992,
                        xl: 1280
                    };

                    {/* You can set a simple value for the margin... */}
                    <${props.componentName} margin={4} {...props}>
                        ...
                    </${props.componentName}>

                    {/* Or set different margin for each breakpoint */}
                    <${props.componentName} margin={{ sm: 1, md: 2, xl: 4 }} {...props}>
                        ...
                    </${props.componentName}>
                `}
			/>
			<Pressable
				onPress={() =>
					redirectTo("?path=/docs/getting-started-design-tokens-size-tokens--spacing")
				}
			>
				<Body color="blue.400">Here's a list of values you can use for these props</Body>
			</Pressable>
		</VStack>
	)
}

const typographyArgTypes: ArgTypes = {
	fontFamily: {
		description: "**Optional**\n\nSpecifies the font for an element",
		table: {
			type: {
				summary: "string"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	textAlign: {
		description: "**Optional**\n\nSpecifies the horizontal alignment of text in an element.",
		table: {
			type: {
				summary: "'auto' | 'left' | 'right' | 'center' | 'justify'"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	fontStyle: {
		description: "**Optional**\n\nSpecifies the font style for a text.",
		table: {
			type: {
				summary: "'normal' | 'italic' | 'oblique' | 'initial' | 'inherit'"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	wordBreak: {
		description:
			"**Optional**\n\nsets whether line breaks appear wherever the text would otherwise overflow its content box.",
		table: {
			type: {
				summary: "'normal' | 'break-all' | 'keep-all' | 'break-word'"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	overflowWrap: {
		description:
			"**Optional**\n\nApplies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.",
		table: {
			type: {
				summary: "'anywhere' | 'break-word' | 'normal'"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	textOverflow: {
		description:
			"**Optional**\n\nSets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('…'), or display a custom string.",
		table: {
			type: {
				summary: "'clip' | 'ellipsis'"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	textTransform: {
		description:
			"**Optional**\n\nSpecifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.",
		table: {
			type: {
				summary:
					"'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' | 'full-size-kana'"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	whiteSpace: {
		description: "**Optional**\n\nSets how white space inside an element is handled.",
		table: {
			type: {
				summary: "'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line' | 'break-spaces'"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	textDecorationLine: {
		description:
			"**Optional**\n\nSets the kind of decoration that is used on text in an element, such as an underline or overline.",
		table: {
			type: {
				summary: "'none' | 'overline' | 'underline' | 'line-through'"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	}
}

const flexItemArgTypes: ArgTypes = {
	flex: {
		description:
			"**Optional**\n\nSets how a flex item will grow or shrink to fit the space available in its flex container.",
		table: {
			type: {
				summary: "ResponsiveValue<number> | number"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	flexGrow: {
		description: "**Optional**\n\nSets the flex grow factor of a flex item's main size.",
		table: {
			type: {
				summary: "ResponsiveValue<number> | number"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	flexShrink: {
		description:
			"**Optional**\n\nSets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink.",
		table: {
			type: {
				summary: "ResponsiveValue<number> | number"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	flexBasis: {
		description:
			"**Optional**\n\nSets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing.",
		table: {
			type: {
				summary: "ResponsiveValue<number | string> | number | string"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	justifySelf: {
		description:
			"**Optional**\n\nSets the way a box is justified inside its alignment container along the appropriate axis.",
		table: {
			type: {
				summary: "'stretch' | 'center' | 'start' | 'end'"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	alignSelf: {
		description:
			"**Optional**\n\nOverrides a grid or flex item's align-items value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.",
		table: {
			type: {
				summary: "'stretch' | 'center' | 'start' | 'end'"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	order: {
		description:
			"**Optional**\n\nSets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending order value and then by their source code order.",
		table: {
			type: {
				summary: "ResponsiveValue<number> | number"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	}
}

const layoutArgTypes: ArgTypes = {
	width: {
		description: "**Optional**\n\nSets an element's width",
		table: {
			type: {
				summary: "ResponsiveValue<number | string> | number | string"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	height: {
		description: "**Optional**\n\nSets an element's height",
		table: {
			type: {
				summary: "ResponsiveValue<number | string> | number | string"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	minWidth: {
		description: "**Optional**\n\nSets an element's min width",
		table: {
			type: {
				summary: "ResponsiveValue<number | string> | number | string"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	minHeight: {
		description: "**Optional**\n\nSets an element's min height",
		table: {
			type: {
				summary: "ResponsiveValue<number | string> | number | string"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	maxWidth: {
		description: "**Optional**\n\nSets an element's max width",
		table: {
			type: {
				summary: "ResponsiveValue<number | string> | number | string"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	},
	maxHeight: {
		description: "**Optional**\n\nSets an element's max height",
		table: {
			type: {
				summary: "ResponsiveValue<number | string> | number | string"
			}
		},
		defaultValue: {
			summary: "undefined"
		},
		control: { disable: true }
	}
}

export {
	spaceArgTypes,
	SpaceArgTypesComments,
	typographyArgTypes,
	flexItemArgTypes,
	layoutArgTypes
}
