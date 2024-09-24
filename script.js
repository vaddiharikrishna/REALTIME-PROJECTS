let user = document.getElementById("date");
let result = document.getElementById("result");
// FUTURE DATES DISABLED USED THIS FUNCTION
user.max = new Date().toISOString().split("T")[0];

function Calculateage(){
    // TO TAKE INPUT VALUE STORED THE BIRTHDATE VARIABLE
    let birthdate = new Date(user.value);

    let d1 = birthdate.getDate();
    let m1 = birthdate.getMonth() + 1;
    let y1 = birthdate.getFullYear();

    let todaydate = new Date();
    let d2 = todaydate.getDate();
    let m2 = todaydate.getMonth() + 1;
    let y2 = todaydate.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;
    if(m2 >= m1) {
        // MONTHS DIFFERENCE
        m3 = m2 - m1;
    }
    else {
        y3--;
        m3 = 12 + m2 - m1;
    }
    if(d2 >= d1){
        // DAYS DIFFERENCE
        d3 = d2 - d1;
    }
    else{
        // we are decreasing month y1 and will be negative comes so we use another condition
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if( m3 < 0){
        m3 = 11;
        y3--;
    }
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old.`;
}
// IF THE CONDITION IS NOT TRUE THEN FUNCTION CREATES TO EXACTLY DATE FINDOUT IN PARTICULAR MONTH
function getDaysInMonth(year, month){
    // HEAR WE ARE ADDING THAT MONTH AND YEAR IT IS ZERO SO IT WILL RETURN THE LAST DAY OF  THAT MONTH SO IT WILL EXACTLY GIVE US TE NUMBER OF DAYS AND  THAT MONTH.WE WILL USE THE NUMBER OF DAYS HERE
    return new Date(month, year , 0).getDate();
}