import { Provider } from "react-redux"
import { store } from "../store/index"
import { ThemeProvider } from "../src/components/theme/ThemeProvider"

export function Providers({ children }) {
return (
<Provider store={store}>
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
    {children}
    </ThemeProvider>
</Provider>
)
}
