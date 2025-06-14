const setItem = (key: string, value: any): void => {

}

const getItem = (key: string): any => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
};
export { setItem, getItem };