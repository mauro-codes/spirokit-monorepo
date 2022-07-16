import React from "react"
import { Button, SpiroKitProvider, useSpiroKitTheme, VStack, usePoppins } from "spirokit"

import { MapIcon } from "react-native-heroicons/outline"

const myTheme = useSpiroKitTheme()

export default function App() {
	const fontsLoaded = usePoppins()
	if (!fontsLoaded) return <></>

	return (
		<SpiroKitProvider theme={myTheme}>
			<VStack padding={4} space={2} safeAreaTop>
				<Button IconLeftComponent={MapIcon}>Hello from spirokit</Button>
			</VStack>
		</SpiroKitProvider>
	)
}
