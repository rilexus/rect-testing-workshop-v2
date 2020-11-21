const fetch = () => new Promise(res => setTimeout(() => res(42), 100))
export {fetch}