gsap.to("img", {scale: 1.5, repeat: -1, repeatDelay: 1, duration: 2 })

const button = document.querySelector(".btn"); //Доступ к кнопке

button.addEventListener("click", calculateResult); //Расчет при нажатии на кнопку

function calculateResult(e) {
   e.preventDefault(); //Отмена перезагрузки страницы
   //Доступ к данным, введенным пользователем
    const userSalary = document.querySelector("#salary").value; 
    const time = document.querySelector("#time").value;
    const userHoursPerWeek = document.querySelector("#hoursPerWeek").value;
    const userDaysPerWeek = document.querySelector("#daysPerWeek").value;
   // Определение новых переменных
    let hourly;
    let daily;
    let weekly;
    let mounthly;
    let quarterly;
    let annual;
   //Если пользователь выбрал "в час", расчет
 if (time == "Hour") {
    hourly = userSalary;
    daily = hourly * userHoursPerWeek / userDaysPerWeek;
    weekly = hourly * userHoursPerWeek;
    mounthly = weekly * (52 / 12);
    quarterly = mounthly * 3;
    annual = quarterly * 4;
 }
  //Если пользователь выбрал "в день", расчет
 else if ( time == "Day") {
    daily = userSalary;
    hourly = daily / (userHoursPerWeek / userDaysPerWeek);
    weekly = daily * userDaysPerWeek;
    mounthly = weekly * (52 / 12);
    quarterly = mounthly * 3;
    annual = quarterly * 4;
 }
  //Если пользователь выбрал "в неделю", расчет
 else if ( time == "Week") {
    weekly = userSalary;
    daily = weekly / userDaysPerWeek;
    hourly =  daily / (userHoursPerWeek / userDaysPerWeek);
    mounthly = weekly * (52 / 12);
    quarterly = mounthly * 3;
    annual = quarterly * 4;
 }
  //Если пользователь выбрал "в месяц", расчет
 else if ( time == "Mounth") {
    mounthly = userSalary;
    weekly =  mounthly / (52 / 12);
    daily = weekly / userDaysPerWeek;
    hourly =  daily / (userHoursPerWeek / userDaysPerWeek);
    quarterly = mounthly * 3;
    annual = quarterly * 4;
 }
  //Если пользователь выбрал "в квартал", расчет
 else if ( time == "Quarter") {
    quarterly = userSalary;
    mounthly = quarterly / 3;
    weekly =  mounthly / (52 / 12);
    daily = weekly / userDaysPerWeek;
    hourly =  daily / (userHoursPerWeek / userDaysPerWeek);
    annual = quarterly * 4;
 }
  //Если пользователь выбрал кроме "в час, в день, в неделю, в месяц, в квартал", т.е. "за год", расчет
 else {
    annual = userSalary;
    quarterly = annual / 4;
    mounthly = quarterly / 3;
    weekly =  mounthly / (52 / 12);
    daily = weekly / userDaysPerWeek;
    hourly =  daily / (userHoursPerWeek / userDaysPerWeek);
 }
//Присвоение переменным типа данных Number и отражение 2 знаков после запятой
   let numHourly = Number (hourly).toFixed(2);
   let numDaily = Number (daily).toFixed(2);
   let numWeekly = Number (weekly).toFixed(2);
   let numMounthly = Number (mounthly).toFixed(2);
   let numQuarterly = Number (quarterly).toFixed(2);
   let numAnnual = Number (annual).toFixed(2);
//Отражение рассчитанных значений в таблице
   document.querySelector("#hour").textContent = "$ " + numHourly;
   document.querySelector("#day").textContent = "$ " + numDaily;
   document.querySelector("#week").textContent = "$ " + numWeekly;
   document.querySelector("#mounth").textContent = "$ " + numMounthly;
   document.querySelector("#qurter").textContent = "$ " + numQuarterly;
   document.querySelector("#year").textContent = "$ " + numAnnual;
//Если пользователь не ввел значения или ввел отрицательные значения - сообщение об ошибке
if (userSalary == "" || userHoursPerWeek == "" || userDaysPerWeek == "" || userSalary < 1 || userHoursPerWeek < 1 || userDaysPerWeek < 1) {
   Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'Please enter your information!',
    })
    document.querySelector("#hour").textContent = "";
    document.querySelector("#day").textContent =  "";
    document.querySelector("#week").textContent =  "";
    document.querySelector("#mounth").textContent =  "";
    document.querySelector("#qurter").textContent =  "";
    document.querySelector("#year").textContent =  "";
}
}
    