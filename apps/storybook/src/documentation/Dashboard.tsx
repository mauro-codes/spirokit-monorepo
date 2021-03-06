import React from "react"
import {
	AccentColor,
	SpiroKitProvider,
	useSpiroKitTheme,
	TitleOne,
	TitleTwo,
	Box,
	HStack,
	Image,
	Pressable,
	VStack,
	usePoppins
} from "spirokit"
import { ImageSourcePropType } from "react-native"
const AlertIcon = require("../../assets/dashboard/alert.png")
const AvatarIcon = require("../../assets/dashboard/avatar.png")
const AvatarGroupIcon = require("../../assets/dashboard/avatar-group.png")
const BadgeIcon = require("../../assets/dashboard/badge.png")
const ButtonIcon = require("../../assets/dashboard/button.png")
const HorizontalCardIcon = require("../../assets/dashboard/horizontal-card.png")
const InputIcon = require("../../assets/dashboard/input.png")
const ModalIcon = require("../../assets/dashboard/modal.png")
const PortraitCardIcon = require("../../assets/dashboard/portrait-card.png")
const SearchBoxIcon = require("../../assets/dashboard/search-box.png")
const SwitchIcon = require("../../assets/dashboard/switch.png")
const VerticalCardIcon = require("../../assets/dashboard/vertical-card.png")
const SelectIcon = require("../../assets/dashboard/select.png")
const TextAreaIcon = require("../../assets/dashboard/text-area.png")
const TabBarIcon = require("../../assets/dashboard/tab-bar.png")
const RadioButtonIcon = require("../../assets/dashboard/radio-button.png")
const LayoutIcon = require("../../assets/dashboard/layout.png")
import { useDarkMode } from "storybook-dark-mode"

const myTheme = useSpiroKitTheme({
	gradients: true
})

type DashboardItemProps = {
	id: number
	type?: "primary" | "secondary"
	name: string
	url: string
	icon?: ImageSourcePropType
	accentColor: AccentColor
}

const componentItems: DashboardItemProps[] = [
	{
		id: 17,
		name: "Layout",
		url: "/?path=/docs/components-layout--box",
		accentColor: "indigo",
		icon: LayoutIcon
	},
	{
		id: 1,
		name: "Alert",
		url: "/?path=/docs/components-alert--basic-example",
		accentColor: "emerald",
		icon: AlertIcon
	},
	{
		id: 2,
		name: "Avatar",
		url: "/?path=/docs/components-avatar--basic-example",
		accentColor: "red",
		icon: AvatarIcon
	},
	{
		id: 3,
		name: "Avatar Group",
		url: "/?path=/docs/components-avatar-group--basic-example",
		accentColor: "blue",
		icon: AvatarGroupIcon
	},
	{
		id: 4,
		name: "Badge",
		url: "/?path=/docs/components-badge--basic-example",
		accentColor: "orange",
		icon: BadgeIcon
	},
	{
		id: 5,
		name: "Horizontal Card",
		url: "/?path=/docs/components-horizontal-card--basic-example",
		accentColor: "indigo",
		icon: HorizontalCardIcon
	},
	{
		id: 6,
		name: "Button",
		url: "/?path=/docs/components-button--basic-example",
		accentColor: "rose",
		icon: ButtonIcon
	},
	{
		id: 7,
		name: "Modal",
		url: "/?path=/docs/components-modal--basic-example",
		accentColor: "emerald",
		icon: ModalIcon
	},
	{
		id: 8,
		name: "Input",
		url: "/?path=/docs/components-input--basic-example",
		accentColor: "red",
		icon: InputIcon
	},
	{
		id: 9,
		name: "Portrait Card",
		url: "/?path=/docs/components-portrait-card--basic-example",
		accentColor: "amber",
		icon: PortraitCardIcon
	},
	{
		id: 10,
		name: "Search Box",
		url: "/?path=/docs/components-search-box--basic-example",
		accentColor: "blue",
		icon: SearchBoxIcon
	},
	{
		id: 11,
		name: "Vertical Card",
		url: "/?path=/docs/components-vertical-card--basic-example",
		accentColor: "orange",
		icon: VerticalCardIcon
	},
	{
		id: 12,
		name: "Switch",
		url: "/?path=/docs/components-switch--basic-example",
		accentColor: "indigo",
		icon: SwitchIcon
	},
	{
		id: 13,
		name: "Select",
		url: "/?path=/docs/components-select--basic-example",
		accentColor: "amber",
		icon: SelectIcon
	},
	{
		id: 14,
		name: "Text Area",
		url: "/?path=/docs/components-text-area--basic-example",
		accentColor: "rose",
		icon: TextAreaIcon
	},
	{
		id: 15,
		name: "Tab Bar",
		url: "/?path=/docs/components-tab-bar--tab-bar-basic-example",
		accentColor: "blue",
		icon: TabBarIcon
	},
	{
		id: 16,
		name: "Radio Button",
		url: "/?path=/docs/components-radio-button-group--basic-example",
		accentColor: "emerald",
		icon: RadioButtonIcon
	}
]

const typographyItems: DashboardItemProps[] = [
	{
		id: 1,
		name: "Scale",
		url: "/?path=/docs/getting-started-typography-scale--page",
		accentColor: "amber"
	},
	{
		id: 2,
		name: "Components",
		url: "/?path=/docs/getting-started-typography-components--large-title",
		accentColor: "indigo"
	}
]

const themeItems: DashboardItemProps[] = [
	{
		id: 1,
		name: "Theme",
		url: "/?path=/docs/getting-started-theme--setup-accent-color",
		accentColor: "rose",
		type: "secondary"
	},
	{
		id: 2,
		name: "Design tokens",
		url: "/?path=/docs/getting-started-design-tokens-color-tokens--accent-colors",
		accentColor: "emerald",
		type: "secondary"
	}
]

export const Dashboard: React.FC = () => {
	const colorMode = useDarkMode() ? "dark" : "light"

	return (
		<SpiroKitProvider theme={myTheme}>
			<Box width="full">
				<TitleOne marginBottom={2} colorMode={colorMode}>
					Customization
				</TitleOne>
				<HStack marginBottom={4} maxWidth={"1280px"} flexWrap="wrap">
					{themeItems.map((item) => (
						<DashboardItem key={item.id} {...item} />
					))}
				</HStack>
				<TitleOne marginBottom={2} colorMode={colorMode}>
					Typography
				</TitleOne>
				<HStack marginBottom={4} maxWidth={"1280px"} flexWrap="wrap">
					{typographyItems.map((item) => (
						<DashboardItem key={item.id} {...item} />
					))}
				</HStack>
				<TitleOne marginBottom={2} colorMode={colorMode}>
					Components
				</TitleOne>
				<HStack marginBottom={4} maxWidth={"1280px"} flexWrap="wrap">
					{componentItems.map((item) => (
						<DashboardItem key={item.id} {...item} />
					))}
				</HStack>
			</Box>
		</SpiroKitProvider>
	)
}

const DashboardItem: React.FC<DashboardItemProps> = (props) => {
	const { name, url, accentColor, icon, id } = props
	usePoppins()

	return (
		<Box
			testID={id.toString()}
			width={{
				base: "full",
				md: "1/2",
				xl: "1/3"
			}}
			padding={2}
		>
			<Pressable onPress={() => window.open(url, "_top")}>
				{({ isPressed }) => {
					return (
						<VStack
							paddingX={12}
							paddingY={8}
							space={6}
							alignItems={"center"}
							backgroundColor={{
								linearGradient: {
									colors: [
										`${accentColor}.${isPressed ? 500 : 700}`,
										`${accentColor}.${isPressed ? 400 : 500}`,
										`${accentColor}.${isPressed ? 300 : 400}`
									],
									start: [0, 0],
									end: [1, 1]
								}
							}}
							borderRadius="lg"
							justifyContent={"center"}
						>
							{icon ? (
								<Image resizeMode="contain" w="full" h={32} source={icon}></Image>
							) : null}
							<Box
								backgroundColor={`${accentColor}.900:alpha.50`}
								paddingX={4}
								paddingY={2}
								borderRadius="3xl"
							>
								<TitleTwo
									fontSize={{
										base: "sm",
										md: "md",
										lg: "2xl"
									}}
									color={`${accentColor}.100`}
									textAlign={"center"}
								>
									{name}
								</TitleTwo>
							</Box>
						</VStack>
					)
				}}
			</Pressable>
		</Box>
	)
}
