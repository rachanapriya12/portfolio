import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "../components/theme/ThemeProvider"
import Hero from "../components/Hero"

// Importing mock components 
jest.mock("../components/content/Skills", () => {
return {
__esModule: true,
default: () => (
    <section id="skills">
    <h2>
        My <span>Skills</span>
    </h2>
    <h3>Frontend Development</h3>
    <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
    </ul>
    </section>
),
}
})

jest.mock("../components/content/Projects", () => {
return {
__esModule: true,
default: () => (
    <section id="projects">
    <h2>
        My <span>Projects</span>
    </h2>
    <div>
        <h3>E-commerce Website</h3>
        <span>React</span>
    </div>
    </section>
),
}
})

// Now import the mocked components
import Skills from "../components/content/Skills"
import Projects from "../components/content/Projects"

// Mock IntersectionObserver
class IntersectionObserverMock {
constructor(callback) {
this.callback = callback
}
observe = jest.fn()
unobserve = jest.fn()
disconnect = jest.fn()
}
global.IntersectionObserver = IntersectionObserverMock

// Mock matchMedia
global.matchMedia = jest.fn().mockImplementation((query) => ({
matches: false,
media: query,
onchange: null,
addListener: jest.fn(),
removeListener: jest.fn(),
addEventListener: jest.fn(),
removeEventListener: jest.fn(),
dispatchEvent: jest.fn(),
}))

describe("Component Tests", () => {
test("Hero component renders correctly", () => {
render(
    <ThemeProvider>
    <Hero />
    </ThemeProvider>,
)

expect(screen.getByText(/Rachana Priya Martha/i)).toBeInTheDocument()
expect(screen.getByText(/Full Stack Developer/i)).toBeInTheDocument()
})

test("Skills component renders correctly", () => {
render(
    <ThemeProvider>
    <Skills />
    </ThemeProvider>,
)

expect(screen.getByText(/My/i)).toBeInTheDocument()
expect(screen.getByText(/Skills/i)).toBeInTheDocument()
expect(screen.getByText(/Frontend Development/i)).toBeInTheDocument()
expect(screen.getByText(/HTML5/i)).toBeInTheDocument()
})

test("Projects component renders correctly", () => {
render(
    <ThemeProvider>
    <Projects />
    </ThemeProvider>,
)

expect(screen.getByText(/My/i)).toBeInTheDocument()
expect(screen.getByText(/Projects/i)).toBeInTheDocument()
expect(screen.getByText(/E-commerce Website/i)).toBeInTheDocument()
expect(screen.getByText(/React/i)).toBeInTheDocument()
})
})
