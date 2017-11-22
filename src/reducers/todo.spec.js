import reducer from './todo';

// this is a test to check that when we use the reducer for the fisrst time and the state is undefined,
// it uses the initial state
describe('Todo Reducer', () => {
    test('returns a state object', () => {
        const result = reducer(undefined, { type: 'ANYTHING' })
        expect(result).toBeDefined();
    });

    test('Adds a todo', () => {
        const startState = {
            todos: [
                { id: 1, name: 'Create Static UI', isCompleted: true },
                { id: 2, name: 'Create Initial State', isCompleted: false },
                { id: 3, name: 'Use State to Render UI', isCompleted: false }

            ]
        };

        const expectedState = {
            todos: [
                { id: 1, name: 'Create Static UI', isCompleted: true },
                { id: 2, name: 'Create Initial State', isCompleted: false },
                { id: 3, name: 'Use State to Render UI', isCompleted: false },
                { id: 4, name: 'Added Todo', isCompleted: false }
            ]
        };

        const action = { type: 'ADD', payload: { id: 4, name: 'Added Todo', isCompleted: false } };
        const result = reducer(startState, action);
        expect(result).toEqual(expectedState);
    });
});