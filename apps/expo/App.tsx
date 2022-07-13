import React from "react"
import {
	Button,
	SpiroKitProvider,
	useSpiroKitTheme,
	Box,
	VStack,
	AspectRatio
} from "@spirokit/core"

import { MapIcon } from "react-native-heroicons/outline"

const myTheme = useSpiroKitTheme()

export default function App() {
	return (
		<SpiroKitProvider theme={myTheme}>
			{/* <Container> */}
			<Box safeAreaTop>
				<VStack space={2}></VStack>
				<AspectRatio></AspectRatio>
				<Button IconLeftComponent={MapIcon}>Hello from spirokit</Button>
			</Box>
			{/* </Container> */}
		</SpiroKitProvider>
	)
}
