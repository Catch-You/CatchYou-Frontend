export const createDate = (date: string) => {
    const match = date.match(/^(\d{4}-\d{2}-\d{2})/);
    return match && match[1];
}