require("@testing-library/jest-dom");

const originalConsoleError = console.error;
console.error = (...args) => {
    if (
        /Warning.*not wrapped in act/.test(args[0]) ||
        /Warning.*ReactDOM.render is no longer supported/.test(args[0]) ||
        /Received `false` for a non-boolean attribute/.test(args[0]) ||
        /The module factory of `jest.mock$$$$` is not allowed/.test(args[0])
    ) {
        require("@testing-library/jest-dom");

        const originalConsoleError = console.error;
        console.error = (...args) => {
        if (
            /Warning.*not wrapped in act/.test(args[0]) ||
            /Warning.*ReactDOM.render is no longer supported/.test(args[0]) ||
            /Received `false` for a non-boolean attribute/.test(args[0]) ||
            /The module factory of `jest.mock/.test(args[0]) ||
            /useInView/.test(args[0])
        ) {
            return;
        }
        originalConsoleError(...args);
        };

        const originalConsoleWarn = console.warn;
        console.warn = (...args) => {
        if (
            /Warning.*useInView/.test(args[0]) ||
            /Warning.*framer-motion/.test(args[0])
        ) {
            return;
        }
        originalConsoleWarn(...args);
        };

        return;
    }
    originalConsoleError(...args);
};
