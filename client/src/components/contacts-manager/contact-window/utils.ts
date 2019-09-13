export const prepareTime = (time:number):string =>
    (new Date(time)).toLocaleString('en', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    });