import Todo from './../interfaces/Todo';

const TODO_STORE = 'todos';

export const get = (): Todo[] => {
    const data = localStorage.getItem(TODO_STORE) || '';

    try {
        const result = JSON.parse(data) as Todo[];
        console.log('get Full');
        return result;
    } catch (err) {
        console.log(err);
        return [];
    }
}

export const save = (data: Todo[]): any => {
    localStorage.setItem(TODO_STORE, JSON.stringify(data));
    console.log('saved');
    return;
}