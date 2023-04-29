// 1. Создание функции-конструктора
function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  }
  
 new Student("Василиса", "женский", 22);
 new Student("Иванна", "женский", 21);
  
  //2. Устанавка поля предмет `subject` экземпляра в `subjectName`
  Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  }
  
  //3. Добавление студенту оценку `mark` в свойство (массив) `marks` объекта
  Student.prototype.addMark = function (mark) {
    if(this.marks === undefined) { 
      this.marks = [mark];  // добавить первую оценку 
      } else {
        this.marks.push(mark);   // добавить вторую и последующие оценки в массив
      }
  }
  
  //4. Добавлять студенту сразу несколько оценок
  Student.prototype.addMarks = function (...marks) {
        return this.marks ? this.marks.push(...marks) : "stud expelled"
  }
  
  //5. Среднее арифметическое оценок студента
  Student.prototype.getAverage = function () {
    return this.marks && this.marks.length ?
        this.marks.reduce   (
            (counter,value) => counter + value, 0
        ) / this.marks.length : 0;
  }
  
  //6. Исключение студента из учебного процесса и устанавливение причины исключения, а также удаление свойств subject и marks
  Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }