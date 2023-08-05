import { LoginData } from '../login.vm';

export const apiLogin = (username: string, password: string): Promise<boolean> => {
    const promise = new Promise<boolean>((resolve, reject) => {
        setTimeout(() => {
            const userIsCorrect = username === 'admin' && password === 'test';
            if (userIsCorrect) {
                const user: LoginData = {
                    id: 1,
                    username,
                    email: 'user@gmail.com',
                };
                window.sessionStorage.setItem('session', JSON.stringify(user));
                resolve(userIsCorrect);
            } else {
                reject({
                    message: 'User is invalid',
                });
            }
        }, 800);
    });

    return promise;
};
