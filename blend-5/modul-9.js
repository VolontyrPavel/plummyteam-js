//TODO:====================01==========================
/**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */

//function greet() {
//    return 'hello world';
//}

//function greet2() {
//    new Promise((resolve, reject) => {
//        setTimeout(() => resolve('hello world'), 2000);
//    }).then(console.log)
//}

//greet2();

//TODO:====================02==========================

/**

 * Перероби код так, щоб усі дані збиралися
 * одноразово і приходили у вигляді масиву
 */

//const getData = () =>
//    new Promise((res) => {
//    setTimeout(() => {
//        const data = 1;
//        
//        res(data);
//    }, 1000);
//});

//const getNewData = () =>
//    new Promise((res) => {
//    setTimeout(() => {
//        const data = 2;
//        
//        res(data);
//    }, 1000);
//});

//const getAnotherData = () =>
//    new Promise((res) => {
//    setTimeout(() => {
//        const data = 3;
//        
//        res(data);
//    }, 1000);
//});

//const getLastData = () =>
//    new Promise((res) => {
//    setTimeout(() => {
//        const data = 4;
//        
//        res(data);
//    }, 1000);
//});

//const newArrey = [];

//getData()
//.then((data) => {
//    newArrey.push(data);
//    return getNewData();
//})
//.then((data) => {
//    newArrey.push(data);
//    return getAnotherData();
//})
//.then((data) => {
//    newArrey.push(data);
//    return getLastData();
//})
//.then((data) => {
//    newArrey.push(data);
//    console.log(newArrey);
//})

//const data = await Promise.all([getData(), getNewData(), getAnotherData(), getLastData()]);
//console.log(data);

//TODO:====================03==========================
/**
 * Функція countWithDelay приймає 3 аргументи:
 * 1) кількість секунд перед тим як спрацює ф-ція logCount
 * 2) скільки разів має відпрацювати logCount
 * 3) затримка між викликами ф-ції
 *
 * logCount повинна логувати кількість викликів
 */


//function logCount(allSeconds, allTray, interval) {
//    for (let i = 1; i <= allTray; i += 1) {
//        madePromice (allSeconds, allTray, interval);
//        allSeconds += interval;
//        console.log(allSeconds, allTray, interval);
//    }
//}

//function madePromice(timeout) {
//    setTimeout(() => {
//        return new Promise((resolve, reject) => {
//        })
//    }, timeout);
//}

//logCount (1000, 2, 500);


const countWithDelay = (delay = 0, times = 0, interval = 0) => {
    let count = 0;

    const logCount = () => {
        count += 1;
        if (count === times) return;
        setTimeout(logCount, interval);
    console.log(count);
    };

    new Promise((res) => {
        setTimeout(() => res(), delay);
    }).then(() => {
        logCount();
    });
};

countWithDelay(3000, 5, 1000);