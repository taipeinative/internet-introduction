/**
 * Receive greetings straight from TypeScript!
 * @param {string[]} target - Every target you want to say hello to.
 * @returns {string} A message saying hello to every target.
 */
function greeting(...target: string[]): string {
    return `Hello ${target.join(', ')}`;
}

console.log(greeting('HTML', 'CSS', 'JavaScript', 'TypeScript'));