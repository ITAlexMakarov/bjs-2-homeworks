// Задание 1
function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);  // boolean
}
/*Описание: сравнение элементов и их позиций массива1 и массива2, 
используя метод every, выступающей функцией высшего порядка по отношению к compareArrays()
Массивы будут одинаковыми, если длины массивов будут одинаковыми И каждый элемент будет совпадать с соответствующим 
элементом другого массива: return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);*/

/*Решение эксперта
function compareArrays(arr1, arr2) {
    return arr1.every((el, idx) => arr1.length === arr2.length && el === arr2[idx]);  
  }*/

// Задание 2
function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, item, index, arr) =>  {
        acc += item;
        if(index === arr.length - 1)    {
            return acc / arr.length;
        }
        return acc;
    }, 0);
    return result; // array
}
/*Описание: новый массив с отобранным гендером, используя метод перебора массива filter,
получение возраста, используя метод преобразования массива map
вычисление среднего возраста, используя аккумулирующий метод reduce*/

/*Решение эксперта
function getUsersNamesInAgeRange(users, gender) {
    return users.
      filter(user => user.gender === gender).
      map(user => user.age).
      reduce((average, userAge, index, array) => average + userAge / array.length, 0);
  }*/