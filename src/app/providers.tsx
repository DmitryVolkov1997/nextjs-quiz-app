"use client"
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react"
import {ReactNode} from "react"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import theme from "@/theme"

export function Providers({children}: { children: ReactNode }) {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
            <ReactQueryDevtools initialIsOpen={false}/>
            <ChakraProvider>{children}</ChakraProvider>
        </QueryClientProvider>
    )
}
