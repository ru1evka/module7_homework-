// Выводим функцию которая выдает рандомное число от 0 до 1, где 1 это ВКЛ в розетку, а 0 это нет питания

  class ElectronicDevice{
    constructor(){
      this.onModel = Math.floor(Math.random()*2);
      this.offModel = Math.floor(Math.random()*2);
    } 
  }

/* Устанавливаем делегирующую связь между протатипами функций, а также пишем условия вывода данных. 
Используем слово extends и super*/

  class ElectronicPc extends ElectronicDevice{ 
    constructor(name){
      super();
      this.name = name;
      this.model = 'acer';
      this.cpu = 'i7';
    }

    getInfo(){
      if (this.onModel == 1){
        console.log(`Устроиство ${this.name} подключено к розетке`)
      } else {
        console.log(`Устроиство ${this.name} не имеет источника питания`)
      }
    }

    getVoltag(voltag){
      if (this.onModel == 1){
        console.log(`Напряжение электропитания у ${this.name} составляет: ${voltag}`)
      } else {
          console.log(`Напряжение электропитания у ${this.name} составляет: 0 Вт`)  
      } 
    }
  }

  class ElectronicPrint extends ElectronicDevice{ 
    constructor(name){
      super();
      this.name = name;
      this.model = 'HP';
      this.color = 'black';
    }

    getInfo(){
      if (this.offModel == 1){
        console.log(`Устроиство ${this.name} подключено к розетке`)
      } else {
        console.log(`Устроиство ${this.name} не имеет источника питания`)
      }
    }

    getVoltag(voltag){
      if (this.offModel == 1){
        console.log(`Напряжение электропитания у ${this.name} составляет: ${voltag}`)
      } else {
          console.log(`Напряжение электропитания у ${this.name} составляет: 0 Вт`)  
      } 
    }
  }

// Присваиваем новым переменным значение фунции через тег new 

  const computer = new ElectronicPc('Компьютер');
  const printer = new ElectronicPrint('Принтер');

// Производим вывод данных в консоль

  computer.getInfo();
  computer.getVoltag('220 Вт');
  printer.getInfo();
  printer.getVoltag('55 Вт');