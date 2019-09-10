declare module '*.css';
declare module '*.svg';

declare namespace jest {
    interface Matchers<R> {
        toBeType(type:string|string[])
    }
}