const setItem = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(`Item set: ${key} = ${JSON.stringify(value)}`);
    // You can also add error handling here if needed
}

const getItem = (key: string): any => {
    return JSON.parse(localStorage.getItem(key) as string);

};
const removeItem = (key: string): void => {
    localStorage.removeItem(key);
}
export { setItem, getItem, removeItem };