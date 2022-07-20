import { AccentColor, Body, Caption, TabBar, Box, ColorMode, VStack } from "spirokit"
import React from "react"
import { useState } from "react"
import {
	DotsHorizontalIcon,
	HeartIcon,
	HomeIcon,
	SearchIcon,
	StarIcon
} from "react-native-heroicons/outline"
import { SvgProps } from "react-native-svg"

type Props = {
	accentColor?: AccentColor
	colorMode?: ColorMode
}

const tabs: {
	label?: string
	icon: (props: SvgProps) => JSX.Element
	accentColor?: AccentColor
}[] = [
	{
		label: "Discover",
		icon: HomeIcon,
		accentColor: "blue"
	},
	{
		label: "Browse",
		icon: SearchIcon,
		accentColor: "amber"
	},
	{
		label: "Favorites",
		icon: HeartIcon,
		accentColor: "emerald"
	},
	{
		label: "More",
		icon: DotsHorizontalIcon,
		accentColor: "red"
	}
]

const longTabs: {
	label?: string
	icon?: (props: SvgProps) => JSX.Element
	accentColor?: AccentColor
}[] = [
	{
		label: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
		icon: HomeIcon,
		accentColor: "blue"
	},
	{
		label: "Browse",
		icon: SearchIcon,
		accentColor: "amber"
	},
	{
		label: "Favorites",
		icon: HeartIcon,
		accentColor: "emerald"
	},
	{
		label: "More",
		icon: DotsHorizontalIcon,
		accentColor: "red"
	}
]

const ArgumentsTableComponent: React.FC<Props> = (props) => {
	const { accentColor, colorMode } = props

	const [activeTab, setActiveTab] = useState<number>(0)

	return React.useMemo(() => {
		return (
			<TabBar accentColor={accentColor} colorMode={colorMode}>
				{tabs.map((tab, index) => (
					<TabBar.Tab
						key={`arguments-table-tab-${index}`}
						LabelComponent={<Caption>{tab.label}</Caption>}
						IconComponent={tab.icon}
						onPress={() => setActiveTab(index)}
						isFocused={activeTab === index}
					></TabBar.Tab>
				))}
			</TabBar>
		)
	}, [activeTab, accentColor, colorMode])
}

const OverrideColorModeComponent: React.FC = () => {
	const [activeTab, setActiveTab] = useState<number>(0)

	return React.useMemo(() => {
		return (
			<TabBar colorMode="light">
				{tabs.map((tab, index) => (
					<TabBar.Tab
						key={`override-color-mode-tab-${index}`}
						LabelComponent={<Caption>{tab.label}</Caption>}
						IconComponent={tab.icon}
						onPress={() => setActiveTab(index)}
						isFocused={activeTab === index}
					></TabBar.Tab>
				))}
			</TabBar>
		)
	}, [activeTab])
}

const OverrideAccentColorComponent: React.FC = () => {
	const [activeTabOne, setActiveTabOne] = useState<number>(0)
	const [activeTabTwo, setActiveTabTwo] = useState<number>(0)

	return React.useMemo(() => {
		return (
			<VStack space={8} width={375} padding="4">
				<VStack space={2}>
					<Body>Accent color override at the Tab Bar level</Body>
					<TabBar accentColor={"emerald"}>
						{tabs.map((tab, index) => (
							<TabBar.Tab
								key={`tab-bar-accent-color-override-${index}`}
								LabelComponent={<Caption>{tab.label}</Caption>}
								IconComponent={tab.icon}
								onPress={() => setActiveTabOne(index)}
								isFocused={activeTabOne === index}
							></TabBar.Tab>
						))}
					</TabBar>
				</VStack>
				<VStack space={2}>
					<Body>Accent color override at the Tab level</Body>
					<TabBar>
						{tabs.map((tab, index) => (
							<TabBar.Tab
								key={`tab-accent-color-override-${index}`}
								LabelComponent={<Caption>{tab.label}</Caption>}
								IconComponent={tab.icon}
								onPress={() => setActiveTabTwo(index)}
								isFocused={activeTabTwo === index}
								accentColor={tab.accentColor}
							></TabBar.Tab>
						))}
					</TabBar>
				</VStack>
			</VStack>
		)
	}, [activeTabOne, activeTabTwo])
}

const OverrideColorModeAndAccentColorComponent: React.FC = () => {
	const [activeTab, setActiveTab] = useState<number>(0)

	return React.useMemo(() => {
		return (
			<Box width={375} padding="4">
				<TabBar colorMode="light">
					{tabs.map((tab, index) => (
						<TabBar.Tab
							key={`tab-color-mode-and-accent-color-override-${index}`}
							LabelComponent={<Caption>{tab.label}</Caption>}
							IconComponent={tab.icon}
							onPress={() => setActiveTab(index)}
							isFocused={activeTab === index}
							accentColor={tab.accentColor}
						></TabBar.Tab>
					))}
				</TabBar>
			</Box>
		)
	}, [activeTab])
}

const IconOnlyAndLabelOnlyComponent: React.FC = () => {
	const [activeTabOne, setActiveTabOne] = useState<number>(0)
	const [activeTabTwo, setActiveTabTwo] = useState<number>(0)

	return React.useMemo(() => {
		return (
			<VStack space={4} width={375} padding="4">
				{/* Icon only */}
				<TabBar>
					{tabs.map((tab, index) => (
						<TabBar.Tab
							key={`icon-only-tab-${index}`}
							IconComponent={tab.icon}
							onPress={() => setActiveTabOne(index)}
							isFocused={activeTabOne === index}
						></TabBar.Tab>
					))}
				</TabBar>
				{/* Label only */}
				<TabBar>
					{tabs.map((tab, index) => (
						<TabBar.Tab
							key={`label-only-tab-${index}`}
							LabelComponent={<Caption>{tab.label}</Caption>}
							onPress={() => setActiveTabTwo(index)}
							isFocused={activeTabTwo === index}
						></TabBar.Tab>
					))}
				</TabBar>
			</VStack>
		)
	}, [activeTabOne, activeTabTwo])
}

const LongLabelInTabComponent: React.FC = () => {
	const [activeTab, setActiveTab] = useState<number>(0)

	return React.useMemo(() => {
		return (
			<Box width={375} padding="4">
				<TabBar>
					{longTabs.map((tab, index) => (
						<TabBar.Tab
							key={`long-label-tab-${index}`}
							IconComponent={tab.icon}
							LabelComponent={<Caption>{tab.label}</Caption>}
							onPress={() => setActiveTab(index)}
							isFocused={activeTab === index}
						></TabBar.Tab>
					))}
				</TabBar>
			</Box>
		)
	}, [activeTab])
}

const CustomIconSizeComponent: React.FC = () => {
	const [activeTab, setActiveTab] = useState<number>(0)

	return React.useMemo(() => {
		return (
			<Box width={375} padding="4">
				<TabBar>
					{longTabs.map((tab, index) => (
						<TabBar.Tab
							key={`custom-icon-size-tab-${index}`}
							IconComponent={tab.icon}
							iconSize={12}
							LabelComponent={<Caption>{tab.label}</Caption>}
							onPress={() => setActiveTab(index)}
							isFocused={activeTab === index}
						></TabBar.Tab>
					))}
				</TabBar>
			</Box>
		)
	}, [activeTab])
}

type TabArgumentsTableComponentProps = {
	label: string
	accentColor: AccentColor
	isFocused: boolean
	iconSize: number
	colorMode: ColorMode
}
const TabArgumentsTableComponent: React.FC<TabArgumentsTableComponentProps> = (props) => {
	const { label, accentColor, isFocused, iconSize, colorMode } = props

	return React.useMemo(() => {
		return (
			<Box width={375} padding="4">
				<TabBar>
					<TabBar.Tab
						colorMode={colorMode}
						accentColor={accentColor}
						isFocused={isFocused}
						iconSize={iconSize}
						LabelComponent={<Caption>{label}</Caption>}
						IconComponent={StarIcon}
					></TabBar.Tab>
				</TabBar>
			</Box>
		)
	}, [label])
}

export {
	ArgumentsTableComponent,
	OverrideColorModeComponent,
	OverrideAccentColorComponent,
	OverrideColorModeAndAccentColorComponent,
	IconOnlyAndLabelOnlyComponent,
	LongLabelInTabComponent,
	CustomIconSizeComponent,
	TabArgumentsTableComponent
}
