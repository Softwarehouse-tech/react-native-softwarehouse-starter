import * as React from 'react'

import { StatusBar, StyleSheet, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from 'react-query'

import Navigation from './src/navigation/navigation'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true
        }
    }
})

// use https://www.npmjs.com/package/react-native-global-props if need more default props
Text.defaultProps = Text.defaultProps || {}
Text.defaultProps.allowFontScaling = false

const QueryProvider = () => {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    const errorFallbackRender = () => <></>

    return (
        <QueryClientProvider client={queryClient}>
            <QueryErrorResetBoundary>
                {({ reset }) => (
                    <React.Suspense fallback={errorFallbackRender}>
                        <App />
                    </React.Suspense>
                )}
            </QueryErrorResetBoundary>
        </QueryClientProvider>
    )
}

const App = () => (
    <SafeAreaProvider style={styles.safeArea}>
        <StatusBar barStyle='dark-content' backgroundColor='#ffffff' />
        <Navigation />
    </SafeAreaProvider>
)

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#fff'
    }
})

export default QueryProvider
