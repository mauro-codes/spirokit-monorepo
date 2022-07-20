import {
	AspectRatio,
	Body,
	Box,
	Center,
	Container,
	Flex,
	HStack,
	TitleThree,
	VStack,
	ZStack
} from "spirokit"
import dedent from "ts-dedent"
import { Parameters } from "@storybook/addons"

const boxParameters: Parameters = {
	docs: {
		source: {
			code: dedent`
				import { Box, Body } from "@spirokit/core"
													
				const App = () => {
					return (
						<Box backgroundColor={"indigo.500"} borderRadius="lg" padding={4}>
							<Body>The widest street in the world: Avenida 9 de Julio</Body>
						</Box>
					)
				}
			`
		}
	}
}

const BoxComponent = () => {
	return (
		<VStack space={3} width={375}>
			<Box backgroundColor={"indigo.500"} borderRadius="lg" padding={4}>
				<Body color="white">The widest street in the world: Avenida 9 de Julio</Body>
			</Box>
		</VStack>
	)
}

const hStackParameters: Parameters = {
	docs: {
		source: {
			code: dedent`
				import { HStack, Box } from "@spirokit/core"
													
				const App = () => {
					return (
						<HStack alignSelf={"flex-start"} space={4} backgroundColor="indigo.900" padding={4}>
							<Box height={20} width={20} backgroundColor="red.500" borderRadius={"lg"}></Box>
							<Box height={20} width={20} backgroundColor="emerald.500" borderRadius={"lg"}></Box>
							<Box height={20} width={20} backgroundColor="amber.500" borderRadius={"lg"}></Box>
							<Box height={20} width={20} backgroundColor="blue.500" borderRadius={"lg"}></Box>
						</HStack>
					)
				}
			`
		}
	}
}

const HStackComponent = () => {
	return (
		<HStack alignSelf={"flex-start"} space={4} backgroundColor="indigo.900" padding={4}>
			<Box height={20} width={20} backgroundColor="red.500" borderRadius={"lg"}></Box>
			<Box height={20} width={20} backgroundColor="emerald.500" borderRadius={"lg"}></Box>
			<Box height={20} width={20} backgroundColor="amber.500" borderRadius={"lg"}></Box>
			<Box height={20} width={20} backgroundColor="blue.500" borderRadius={"lg"}></Box>
		</HStack>
	)
}

const vStackParameters: Parameters = {
	docs: {
		source: {
			code: dedent`
				import { VStack, Box } from "@spirokit/core"
													
				const App = () => {
					return (
						<VStack alignSelf={"flex-start"} space={4} backgroundColor="indigo.900" padding={4}>
							<Box height={20} width={20} backgroundColor="red.500" borderRadius={"lg"}></Box>
							<Box height={20} width={20} backgroundColor="emerald.500" borderRadius={"lg"}></Box>
							<Box height={20} width={20} backgroundColor="amber.500" borderRadius={"lg"}></Box>
							<Box height={20} width={20} backgroundColor="blue.500" borderRadius={"lg"}></Box>
						</VStack>
					)
				}
			`
		}
	}
}

const VStackComponent = () => {
	return (
		<VStack alignSelf={"flex-start"} space={4} backgroundColor="indigo.900" padding={4}>
			<Box height={20} width={20} backgroundColor="red.500" borderRadius={"lg"}></Box>
			<Box height={20} width={20} backgroundColor="emerald.500" borderRadius={"lg"}></Box>
			<Box height={20} width={20} backgroundColor="amber.500" borderRadius={"lg"}></Box>
			<Box height={20} width={20} backgroundColor="blue.500" borderRadius={"lg"}></Box>
		</VStack>
	)
}

const zStackParameters: Parameters = {
	docs: {
		source: {
			code: dedent`
				import { Ztack, Box } from "@spirokit/core"
													
				const App = () => {
					return (
						<ZStack height={56}>
							<Box height={20} width={20} backgroundColor="red.500" borderRadius={"lg"}></Box>
							<Box
								height={20}
								width={20}
								marginTop={8}
								marginLeft={8}
								backgroundColor="emerald.500"
								borderRadius={"lg"}
							></Box>
							<Box
								height={20}
								width={20}
								marginTop={16}
								marginLeft={16}
								backgroundColor="amber.500"
								borderRadius={"lg"}
							></Box>
							<Box
								height={20}
								width={20}
								marginTop={24}
								marginLeft={24}
								backgroundColor="blue.500"
								borderRadius={"lg"}
							></Box>
						</ZStack>
					)
				}
			`
		}
	}
}

const ZStackComponent = () => {
	return (
		<ZStack height={56}>
			<Box height={20} width={20} backgroundColor="red.500" borderRadius={"lg"}></Box>
			<Box
				height={20}
				width={20}
				marginTop={8}
				marginLeft={8}
				backgroundColor="emerald.500"
				borderRadius={"lg"}
			></Box>
			<Box
				height={20}
				width={20}
				marginTop={16}
				marginLeft={16}
				backgroundColor="amber.500"
				borderRadius={"lg"}
			></Box>
			<Box
				height={20}
				width={20}
				marginTop={24}
				marginLeft={24}
				backgroundColor="blue.500"
				borderRadius={"lg"}
			></Box>
		</ZStack>
	)
}

const flexParameters: Parameters = {
	docs: {
		source: {
			code: dedent`
				import { Flex, VStack, Box } from "@spirokit/core"
													
				const App = () => {
					return (
						<>
							{/* Flex direction = "column" */}
							<VStack space={3} alignSelf="flex-start" padding="4">
								<Flex flexDirection={"column"} backgroundColor="indigo.900" padding={4}>
									<Box
										height={20}
										width={20}
										backgroundColor="red.500"
										marginBottom={2}
										borderRadius={"lg"}
									></Box>
									<Box
										height={20}
										width={20}
										backgroundColor="emerald.500"
										marginBottom={2}
										borderRadius={"lg"}
									></Box>
									<Box
										height={20}
										width={20}
										backgroundColor="amber.500"
										marginBottom={2}
										borderRadius={"lg"}
									></Box>
									<Box
										height={20}
										width={20}
										backgroundColor="blue.500"
										borderRadius={"lg"}
									></Box>
								</Flex>
							</VStack>

							{/* Flex direction = "row" */}
							<VStack space={3} alignSelf="flex-start" padding="4">
								<Flex flexDirection={"row"} backgroundColor="indigo.900" padding={4}>
									<Box
										height={20}
										width={20}
										backgroundColor="red.500"
										marginRight={2}
										borderRadius={"lg"}
									></Box>
									<Box
										height={20}
										width={20}
										backgroundColor="emerald.500"
										marginRight={2}
										borderRadius={"lg"}
									></Box>
									<Box
										height={20}
										width={20}
										backgroundColor="amber.500"
										marginRight={2}
										borderRadius={"lg"}
									></Box>
									<Box
										height={20}
										width={20}
										backgroundColor="blue.500"
										borderRadius={"lg"}
									></Box>
								</Flex>
							</VStack>
						</>
					)
				}
			`
		}
	}
}

const FlexComponent = () => {
	return (
		<VStack space={6}>
			{/* Flex direction = "column" */}
			<VStack space={3} alignSelf="flex-start" padding="4">
				<Flex flexDirection={"column"} backgroundColor="indigo.900" padding={4}>
					<Box
						height={20}
						width={20}
						backgroundColor="red.500"
						marginBottom={2}
						borderRadius={"lg"}
					></Box>
					<Box
						height={20}
						width={20}
						backgroundColor="emerald.500"
						marginBottom={2}
						borderRadius={"lg"}
					></Box>
					<Box
						height={20}
						width={20}
						backgroundColor="amber.500"
						marginBottom={2}
						borderRadius={"lg"}
					></Box>
					<Box
						height={20}
						width={20}
						backgroundColor="blue.500"
						borderRadius={"lg"}
					></Box>
				</Flex>
			</VStack>

			{/* Flex direction = "row" */}
			<VStack space={3} alignSelf="flex-start" padding="4">
				<Flex flexDirection={"row"} backgroundColor="indigo.900" padding={4}>
					<Box
						height={20}
						width={20}
						backgroundColor="red.500"
						marginRight={2}
						borderRadius={"lg"}
					></Box>
					<Box
						height={20}
						width={20}
						backgroundColor="emerald.500"
						marginRight={2}
						borderRadius={"lg"}
					></Box>
					<Box
						height={20}
						width={20}
						backgroundColor="amber.500"
						marginRight={2}
						borderRadius={"lg"}
					></Box>
					<Box
						height={20}
						width={20}
						backgroundColor="blue.500"
						borderRadius={"lg"}
					></Box>
				</Flex>
			</VStack>
		</VStack>
	)
}

const aspectRatioParameters: Parameters = {
	docs: {
		source: {
			code: dedent`
				import { AspectRatio, VStack, Box, Body } from "@spirokit/core"
													
				const App = () => {
					return (
						<VStack space={4} alignSelf={"flex-start"}>
							{/* 16/9 */}
							<AspectRatio alignSelf={"flex-start"} height={24} ratio={16 / 9}>
								<Box justifyContent={"center"} alignItems="center" backgroundColor="indigo.500">
									<Body color="white">16 / 9</Body>
								</Box>
							</AspectRatio>

							{/* 1/1 */}
							<AspectRatio alignSelf={"flex-start"} height={24} ratio={1 / 1}>
								<Box justifyContent={"center"} alignItems="center" backgroundColor="red.500">
									<Body color="white">1 / 1</Body>
								</Box>
							</AspectRatio>

							{/* 24/9 */}
							<AspectRatio alignSelf={"flex-start"} height={24} ratio={24 / 9}>
								<Box justifyContent={"center"} alignItems="center" backgroundColor="emerald.500">
									<Body color="white">24 / 9</Body>
								</Box>
							</AspectRatio>
						</VStack>
					)
				}
			`
		}
	}
}

const AspectRatioComponent = () => {
	return (
		<VStack space={4} alignSelf={"flex-start"}>
			{/* 16/9 */}
			<AspectRatio alignSelf={"flex-start"} height={24} ratio={16 / 9}>
				<Box justifyContent={"center"} alignItems="center" backgroundColor="indigo.500">
					<Body color="white">16 / 9</Body>
				</Box>
			</AspectRatio>

			{/* 1/1 */}
			<AspectRatio alignSelf={"flex-start"} height={24} ratio={1 / 1}>
				<Box justifyContent={"center"} alignItems="center" backgroundColor="red.500">
					<Body color="white">1 / 1</Body>
				</Box>
			</AspectRatio>

			{/* 24/9 */}
			<AspectRatio alignSelf={"flex-start"} height={24} ratio={24 / 9}>
				<Box justifyContent={"center"} alignItems="center" backgroundColor="emerald.500">
					<Body color="white">24 / 9</Body>
				</Box>
			</AspectRatio>
		</VStack>
	)
}

const centerParameters: Parameters = {
	docs: {
		source: {
			code: dedent`
				import { Center, Body } from "@spirokit/core"
													
				const App = () => {
					return (
						<Center backgroundColor={"rose.400"} width={32} height={24}>
							<Body color="white">Center</Body>
						</Center>
					)
				}
			`
		}
	}
}

const CenterComponent = () => {
	return (
		<Center backgroundColor={"rose.400"} width={32} height={24}>
			<Body color="white">Center</Body>
		</Center>
	)
}

const containerParameters: Parameters = {
	docs: {
		source: {
			code: dedent`
				import { Container, Center, TitleThree, Body } from "@spirokit/core"
													
				const App = () => {
					return (
						<Center>
							<Container padding="4">
								<TitleThree>Yerba Mate is the most popular drink in Argentina</TitleThree>
								<Body>
									When it comes to famous South American drinks, you’ll be hard pushed to find
									something more iconic than yerba mate. If you visit Argentina, you’ll constantly
									see people sipping this caffeine-infused drink through a metal straw known as a
									bombilla.
								</Body>
							</Container>
						</Center>
					)
				}
			`
		}
	}
}

const ContainerComponent = () => {
	return (
		<Center>
			<Container padding="4">
				<TitleThree>Yerba Mate is the most popular drink in Argentina</TitleThree>
				<Body>
					When it comes to famous South American drinks, you’ll be hard pushed to find
					something more iconic than yerba mate. If you visit Argentina, you’ll constantly
					see people sipping this caffeine-infused drink through a metal straw known as a
					bombilla.
				</Body>
			</Container>
		</Center>
	)
}

export {
	boxParameters,
	BoxComponent,
	hStackParameters,
	HStackComponent,
	vStackParameters,
	VStackComponent,
	zStackParameters,
	ZStackComponent,
	flexParameters,
	FlexComponent,
	aspectRatioParameters,
	AspectRatioComponent,
	centerParameters,
	CenterComponent,
	containerParameters,
	ContainerComponent
}
