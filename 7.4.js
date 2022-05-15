// Обьявляем функции-конструктор

  function ElectronicVKL(){}   

  function ElectronicVIKL(){} 
  
  function ElectronicPc(){
      this.name = 'Компьютер';
      this.model = 'acer';
      this.cpu = 'i7';
  }
  
  function ElectronicPrint(){
      this.name = 'Принтер';
      this.model = 'HP';
      this.color = 'black';
  }

// Выводим функцию которая выдает рандомное число от 0 до 1, где 1 это ВКЛ в розетку, а 0 это нет питания

  function ElectronicDevice() {
    this.onModel = randomOne = Math.floor(Math.random()*2);
    this.offModel = randomTwo = Math.floor(Math.random()*2);

    if (this.onModel == 1){
        console.log(`Устроиство Компьютер подключено к розетке`)
    } else {
        console.log(`Устроиство Компьютер не имеет источника питания`)
    }

    if (this.offModel == 1){
        console.log(`Устроиство Принтер подключено к розетке`)
    } else {
        console.log(`Устроиство Принтер не имеет источника питания`)
    }
  } 

// Устанавливаем делегирующую связь между протатипами функций

  ElectronicVKL.prototype = new ElectronicDevice();
  ElectronicVIKL.prototype = new ElectronicVKL();
  ElectronicPc.prototype = new ElectronicVKL();
  ElectronicPrint.prototype = new ElectronicVIKL();
 
// Выводим функцию, которая показывает напряжение электро-прибора 

  ElectronicVKL.prototype.getVoltag = function (voltag){
      if (this.onModel == 1){
      console.log(`Напряжение электропитания у ${this.name} составляет: ${voltag}`)
      } else {
        console.log(`Напряжение электропитания у ${this.name} составляет: 0 Вт`)  
      }
  }
  ElectronicVIKL.prototype.getVoltag = function (voltag){
      if (this.offModel == 1){
        console.log(`Напряжение электропитания у ${this.name} составляет: ${voltag}`)
        } else {
          console.log(`Напряжение электропитания у ${this.name} составляет: 0 Вт`)  
        }
  }

// Присваиваем новым переменным значение фунции через тег new  

  const computer = new ElectronicPc();
  const printer = new ElectronicPrint();

// Производим вывод данных в консоль

  computer.getVoltag('220 Вт');
  printer.getVoltag('55 Вт');