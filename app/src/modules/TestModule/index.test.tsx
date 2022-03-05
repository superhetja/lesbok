import TestModule from ".";

test('Name of test module', () => {
    expect(TestModule(1, 5)).toBe(6)
})