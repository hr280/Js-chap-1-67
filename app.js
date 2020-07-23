      //= = = Chhapter 21-25

                    //TASK..1
// var nameToCheck = prompt("Enter your name");

// var fullNames = ["hassan", "raza", "ali", "jamal", "yousuf"];
// for (var i = 0; i <= 0; i++) {
// if (nameToCheck === fullNames[0]) {
//     alert("Hassan Raza");
// }else
// {(alert("No name"))
// }
// }
                   //TASK...2

// var phoneToCheck = prompt("Enter your favourite Phone ");

// var favPhone = ["Samsung", "Qmobile", "iphone", "infinix"];
// for (var i = 0; i <= 0; i++) {
// if (phoneToCheck === favPhone[0]) {
//    document.write("My favourite phone is : Samsung galaxy S6 Edge Plus")
// }else
// {(alert("Not Favourite"))
// }
// }

                 //Task...3

// var a = "Pakistan";
// document.write(a.charAt(7))


              //Task....4

// var a = "Hello World";
// document.write(a.charAt(9))


           //Task......5

// var a = "Pakistan";
// document.write(a.charAt(3))


                //Task....7
// const a = 'Hyderabad';
// const regex = /Hyder/gi;
// document.write(a.replace(regex, 'Islam'));

            //Task...9


// var text = '472';
// var integer = parseInt(text, 10);
// document.write(integer)
          
          //Task.....8

// const p =  "Ali and Sami are best friends. They play cricket and football together.";
// const regex = /and/gi;     
// document.write(p.replace(regex, '&'));


              //Task.....10

// var cityToCheck = prompt("Enter your Country");
// cityToCheck = cityToCheck.toUpperCase();
// alert(cityToCheck)
// document.write(cityToCheck)

               //Task ......11
// var name = prompt("Enter your Country");
// var firstChar =  name.slice(0,1);
// var firstChar = firstChar.toUpperCase();
// var otherChar = name.slice(1);
// var otherChar = otherChar.toLowerCase();
// var name =  (firstChar+otherChar)
// alert(name)
// document.write(name)


         //Task......12

// var number = 35.36;
// var result = number + '';
// result =result.replace('.', '');
// result = parseInt(result);
// alert(result);
// document.write(result)


     // ....Task13
// var data=prompt("Enter username");
// for(var i=0; i<data.length; i++){
// if(data[i]==='@' || data[i]==='.' || data[i]==='!' ){
//       alert("Enter valid username");
//        break
//   }
// }

            //Task......14

// var items = ["cake", "apple pie", "Cookie" , "chips" ,"patties"];
// var search = prompt("Enter search value");
// if(items.indexOf(search) !== -1){
//               alert("Yes " + search + " is available")
// }else{
//       alert("We are Sorry " + search + " is not available")
// }


               //... Task 15 

// var data=prompt("Enter your password");
// if(data.slice(0,1)===)


      //Task....16

// var university = "Mehran University"
// var split = university.split("")
// document.write(split)

                  //.... Task 17
// var str=prompt("Enter input: ");
// document.write("User input: "+str+"</br>");
// var x=str.length;
// document.write("Last character of input: "+str[x-1]);

                //..... Task18
// var str="The quick brown fox jumps over the lazy dog";
// var str_new=str.toLowerCase();
// var count=0;
// for(var i=0; i<str_new.length; i++){
//     if(str_new.slice(i,i+3)=='the'){
//         count=count+1;
//         continue;
//     }
// }
// document.write("Text: The quick brown fox jumps over the lazy dog"+"</br>");
// document.write("There are "+count+" occurence(s) of word 'the'");
               

                    //====Chap......26-30

            //Task 1

// var num = 3.45214;
// // var round = Math.round(num)
// // var round = Math.ceil(num)
// // var round = Math.floor(num)
// var round = Math.round(num)
// document.write(round)


          //Task....2

// var num = -3.45214;
// // var round = Math.round(num)
// // var round = Math.ceil(num)
// // var round = Math.floor(num)
// var round = Math.round(num)
// document.write(round)

              //Task...3

// var num = -4;
// var round = Math.abs(num)
// document.write(round)

                    //Task...4

// var dice = Math.floor( Math.random() * 6 ) +1;
// document.write('You rolled a ' + dice);

                  //Task...5

// var headUser = prompt("Enter Head user")
// var tailUser = prompt("Enter Tail user")
// var toss = Math.random()*2;
// var floor = Math.floor(toss) 
// if(floor === 0){
//       alert("Heads " + headUser + " win the toss")
// }else{
//       alert("Tails " + tailUser + " win the toss")
// }

                 //Task......6

// var randomValues = Math.floor( Math.random()* 100 ) +1;
// document.write(randomValues);


               //...... Task 8
// var data=prompt("Enter the number between 1 and 10");
// var int=parseInt(data);
// var num=Math.random();
// var round=num*10;
// var result=Math.floor(round);
// if(int===result){
//     alert("Congrats!");
// }
// else{
//     alert("Try again!");
// }
  

                                  //Chap......31-to-34

                  //Task...1

// var a = new Date();
// document.write(a)

                 //Task....2

// var result=new Date();
// var data=result.toString();
// document.write("Current month: "+data.slice(4,7));

             //Task.....3


// var a = new Date();
// var string = a.toString()
// var b = string.slice(0,3)
// document.write("Today is " + b)

                 //Task....4

// var a = new Date();
// var string = a.toString()
// var b = string.slice(0,3)
// document.write(b + "day it's fun day")

                //Task....5

// var result=new Date();
// var date=result.getDate();
// if(date<=15){
//     document.write("First fifteen days of month");
// }
// else if(date>=16){
//     document.write("Last days of month");
// }

                //Task......6


// var a = new Date("jan 1 1970");
// var amili = a.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili - amili;
// var accAge = Math.floor(diff/(1000*60*60*24*12))
// document.write(diff)
// document.write(accAge)

              
                   //Task......7
             
// function timeConvertor(time) {
//       var PM = time.match('PM') ? true : false
      
//       time = time.split(':')
//       var min = time[1]
      
//       if (PM) {
//           var hour = 12 + parseInt(time[0],10)
//           var sec = time[2].replace('PM', '')
//       } else {
//           var hour = time[0]
//           var sec = time[2].replace('AM', '')       
//       }
      
//       alert(hour + ':' + min + ':' + sec)
//   }
  
//   timeConvertor('07:03:15PM'+ "PM");
  
//   timeConvertor('1:53:55AM' + "AM"); 


                       // Task 8

// var result=new Date().toString();
// var seg1=result.slice(0,15);
// var seg2=result.slice(15,25);
// var seg3=result.slice(25);
// var new_seg1=seg1.replace(seg1,"Thu Dec 31 2020");
// var new_seg2=seg2.replace(seg2,"00:00:00 ");
// document.write(result+"</br>");
// document.write("Later date: "+new_seg1+new_seg2+seg3);

// Task 9
// var days=new Date().getUTCDate();
// document.write(days+59+" days have passed since 1st ramadan 2020");





                    //Chap   35-to-38

            //Task....1

// var curday = function(sp){
// today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth()+1; //As January is 0.
// var yyyy = today.getFullYear();
                  
// if(dd<10) dd='0'+dd;
// if(mm<10) mm='0'+mm;
// return (mm+sp+dd+sp+yyyy);
// };
// alert(curday('/'));
// alert(curday('-'));

             //Task.....2

// function greeting(firstname, lastname){
//        var fullname = (firstname + lastname);
//        return fullname;
// }
//        var name = greeting("Hassan ", "Raza")
//        alert(name)

             //Task.....3

// function add(x,y,z){
//       var a = x + y + z;
//       return a;
// }
//  var b = add(3,5,8)
//  alert(b)


           //Task....4

// function calc(num1,opr,num2){
//       if (opr ==="+"){
//             return num1 + num2;
//       }
//       else if(opr ==="-"){
//             return num1 - num2;
//       }
//       else if(opr ==="*"){
//             return num1 * num2;
//       }
//       else if(opr ==="/"){
//             return num1 / num2;
//       }else{
//             return "Incorrect operator"
//       }
// }
// var result = calc(3,"*",5)
// var result1 = calc(9,"+",10)
// var result2 = calc(7,"/",7)
// var result3 = calc(3,"-",6)
// var result4 = calc(3,"%",6)

// alert(result)
// alert(result1)
// alert(result2)
// alert(result3)
// alert(result4)

             //Task......5

// function square(a,b){
//       var c = a*b;
//       return c;
// }
// var d = square(3,3)
// alert(d)

      //Task......6

// function factorial(n){
// let answer = 1;
// if (n == 0 || n == 1){
//       return answer;
// }else{
//  for(var i = n; i >= 1; i--){
//       answer = answer * i;
// }
//       return answer;
// }  
// }
// let n = 4;
// answer = factorial(n)
// alert("The factorial of " + n + " is " + answer);


             // Task 7
// function counting(x,y){
//     let num1=parseInt(x);
//     let num2=parseInt(y);
//     document.write("Counting: "+"</br>");
//     for(var i=num1; i<=num2; i++){
//         document.write(i+"</br>");
//     }
// }
// var data1=prompt("Enter starting point:");
// var data2=prompt("Enter ending point: ");
// counting(data1,data2);   



            // cahpter 38-42

             // Task-1
// function pow_func(a,b){
//     var result=Math.pow(a,b);
//     return result;
// }
// document.write(pow_func(2,3));

            // Task-2
// var found=false;
// var leap_year=["2012","2016","2020"];
// var inp=prompt("Enter the year:");
// for(var i=0; i<leap_year.length; i++){
//     if(inp===leap_year[i]){
//         found=true;
//         alert("found");
//         break;
//     }
// }
// if (found===false){
//     alert("no year found");
// }

          // Task-3
// function area(a,b,c){
//     function s(){
//         var s=(parseInt(a)+parseInt(b)+parseInt(c))/2;
//         return s;
//     }
//     var val=s();
//     var result=(val)*(val-a)*(val-b)*(val-c);
//     return result;
// }
// var a=prompt("Enter value of a: ");
// var b=prompt("Enter value of b: ");
// var c=prompt("Enter value of c: ");
// var a_int=parseInt(a);
// var b_int=parseInt(b);
// var c_int=parseInt(c);
// alert(area(a_int,b_int,c_int));

        // Task-4
// function main_func(m1,m2,m3,t){
//     function percentage(){
//         var sum=m1+m2+m3;
//         var result=(sum*100)/t;
//         return result;
//     }
//     function average(){
//         var result_a=(m1+m2+m3)/3;
//         return result_a;
//     }
//     var p_res=percentage();
//     alert("Calculated Percentage: "+p_res);
//     var a_res=average();
//     alert("Calculated Average: "+a_res);
// }
// var a=prompt("Enter marks of  1st sub:");
// var b=prompt("Enter marks of 2nd sub: ");
// var c=prompt("Enter marks of 3rd sub: ");
// var d=prompt("Enter Total: ");
// var a_int=parseInt(a);
// var b_int=parseInt(b);
// var c_int=parseInt(c);
// var d_int=parseInt(d);  
// main_func(a_int,b_int,c_int,d_int);


        // Task 5

// function find_index(string,index_to_find){
//     for(var i=0; i<string.length; i++){
//         if(string.slice(i,i+1)===index_to_find){
//             alert("The index of "+index_to_find+" is: "+i);
//             break;
//         }
//     }
// }
// var string=prompt("Enter string");
// var index_of=prompt("Enter the character to find the index of: ")
// find_index(string,index_of);

         // Task 6

// function delete_vowels(x){
//     var s_new=x.replace(/[aeiou]/g,"");
//     return s_new;
// }

// var s="hello world pakistan ";
// alert(delete_vowels(s));

           // Task 7

// function consecutive_vowels(str,vowel){
//     var count=0;
//     for(var i=0; i<str.length; i++){
//         if(s.slice(i,i+2)===vowel){        
//             count++;
//             alert("The consecutive vowel "+vowel+" occur "+count+" times");
//             continue;
//         }
        
//     }
// }
// var s=prompt("Enter the string: ");
// var vowels=prompt("Enter any two consecutive vowels which you want to find in string");
// consecutive_vowels(s,vowels);

           // Task 8
// function cal_dis(x){
//     function meters(){
//         var value=parseInt(x);
//         var meters=value*1000;
//         return meters;
//     }
//     var result_m=meters();
//     alert("The distance in meters is: "+result_m);
//     function feet(){
//         var value=parseInt(x);
//         var foot=value*3280.84;
//         return foot;
//     }
//     var result_f=feet();
//     alert("The distance in feet is: "+result_f);
//     function inch(){
//         var value=parseInt(x);
//         var inch=value*39370.1;
//         return inch;
//     }
//     var result_i=inch();
//     alert("The distance in inch is: "+result_i);
//     function cm(){
//         var value=parseInt(x);
//         var cm=value*100000;
//         return cm;
//     }
//     var result_cm=cm();
//     alert("The distance in cm is: "+result_cm);
// }
// var data=prompt("Enter the distance between two cities in kilometers");
// cal_dis(data);

         // Task-9
// function overtime_pay(x){
//     var hrs=parseInt(x);
//     var rate=12;
//     var result=rate*hrs;
//     alert("Your pay is: "+result);
// }
// var data=prompt("Enter your working hours: ");
// overtime_pay(data);

            // Task-10
// var data=prompt("Enter your total amount");
// var amount=parseInt(data);
// var hun=amount/100;
// var hun_v=Math.floor(hun);
// alert("You have "+hun_v+" hundress ruppes note");



