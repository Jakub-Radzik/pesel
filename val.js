  /*
             Deklaracja tablic przechowujących lata, miesiace, dni, płcie
            */
            var tabYear = []; 
            var tabMonth = [];
            var tabDay = [];
            var tabGender = ["Męska","Żeńska"];

                //10. cyfra numeru pesel oznacza płeć
                var femaleTabSign=[0,2,4,6,8];//Parzyste- female
                var maleTabSign=[1,3,5,7,9];//Nieparzyste- male
            
            
            /*Najniższe wartości*/
            var yearStart = 1900;
            var monthStart = 1;
            var dayStart = 1;
            
            /*Puste zmienne gdzie wpiszemy kod HTML 
            <option>Rok|Miesiesiac|Dzien|Płci</option> i 
            wpiszemy do znacznikow <select>*/
            var yearOptions="";
            var monthOptions="";
            var dayOptions="";
            var genderOptions="";

            /*
            Wpisywanie lat/miesiecy/dni do tablic
            i do opcij <option>
            */
            for (let i = 0; yearStart <= 2099; i++) {
                tabYear[i]=yearStart;
                yearOptions+=`<option>${tabYear[i]}</option>`
                yearStart++;
            }

            for (let i = 0; monthStart <= 12; i++) {
               tabMonth[i]=monthStart;
               monthOptions+=`<option>${tabMonth[i]}</option>`
               monthStart++;
            }

             for (let i = 0; dayStart <= 31; i++) {
                tabDay[i]=dayStart;
                dayOptions+=`<option>${tabDay[i]}</option>`
                dayStart++;
            }

             for (let i = 0; i < tabGender.length; i++) {
                
                genderOptions+=`<option>${tabGender[i]}</option>`
               
            }
            
            /*
            Wyswietlanie zmiennych ze znacznikami
            <option></option> w <select>
            */
                
            var yearElement=document.getElementById("year");
            var monthElement= document.getElementById("month")
            var dayElement = document.getElementById("day")
            var genderElement = document.getElementById("gender")

            yearElement.innerHTML+=yearOptions;
            monthElement.innerHTML+=monthOptions;
            dayElement.innerHTML+=dayOptions;
            genderElement.innerHTML+=genderOptions;

            // 002902 071 9 8
              
            var txt="";
            var PESEL="";
            var numbers = [];
            var controlNumber=0;
            var tabNumb=[];


            function generateNumber(){

                genderElement = document.getElementById("gender")
                yearElement=document.getElementById("year");
                monthElement= document.getElementById("month")
                dayElement = document.getElementById("day")
            
                var quantity = document.getElementById("qua").value;
                var reg = new RegExp('^[0-9]+$');
                
                if(reg.test(quantity)==true){
                    var repeatPesel = quantity;
                }


                
                for(let s = 0; s < repeatPesel ; s++){ 
                
                numbers.length=0;               
                PESEL="";
              
               
               numbers[0]=  yearElement.value.toString().charAt(2);
               numbers[1]=  yearElement.value.toString().charAt(3);
               
               //console.log(PESEL)
                
                var one = yearElement.value.toString().charAt(0);
                var two = yearElement.value.toString().charAt(1);
                var txt1 = parseInt(`${one}${two}`);

                var secondPart= monthElement.value.toString().substring(0,2);
                      

                switch(txt1){

                    case 19:
                        if(secondPart<10)
                        {
                            numbers[2]="0"+secondPart;
                        }
                        else
                            numbers[2]=secondPart;

                    break;

                    case 20:
                            numbers[2]=parseInt(secondPart)+20;
                    break;


                }
                
                if(dayElement.value.toString()<10){
                numbers[3]="0"+dayElement.value.toString()
                }else
                {numbers[3]=dayElement.value.toString()
                }     
                
                var randomPart = Math.floor((Math.random() * 999) + 1);
                
                if(randomPart < 10){numbers[4]="00"+randomPart;}
                else if(randomPart >= 10 && randomPart < 100){numbers[4]="0"+randomPart;}
                else{numbers[4]=randomPart;}

             
                if(genderElement.value=="Male" || genderElement.value=="Męska" || genderElement.value=="Männlich" || genderElement.value=="мужчина" || genderElement.value=="чоловік")
                {   
                    numbers[5]= maleTabSign[Math.floor(Math.random() * 5)]
                    console.log("facet!!!")
                }else if(genderElement.value!="Male" || genderElement.value!="Męska" || genderElement.value!="Männlich" || genderElement.value!="мужчина" || genderElement.value!="чоловік")
      
                {
                    numbers[5]= femaleTabSign[Math.floor(Math.random() * 5)]
                    console.log("baba!!!")
                }

                //LICZENIE SUMY KONTROLNEJ
                tabNumb=[];
                var tabWeights=[1,3,7,9,1,3,7,9,1,3]//wagi liczb
                controlNumber=0;

               




                 
                for (let i = 0; i < numbers.length; i++) {
                    PESEL+= numbers[i];
                }


                 for (let i = 0; i < 10; i++) {
                    tabNumb[i]=PESEL.charAt(i);  
                }

               for (let i = 0; i < tabNumb.length; i++) {
                   controlNumber+=tabNumb[i]*tabWeights[i];
               }
                controlNumber=controlNumber%10;

                if(controlNumber !=0){
                    controlNumber=10 - controlNumber;
                }else{}
                PESEL+=controlNumber;
                txt+=`${PESEL}\n`;

                }
                
            

if
(
reg.test(yearElement.value)==false || 
reg.test(monthElement.value)==false || 
reg.test(monthElement.value)==false || 
genderElement.value=="Gender" || 
genderElement.value=="Płeć" || 
genderElement.value=="Geschlecht" ||
genderElement.value=="мужчина" ||
genderElement.value=="чоловік"
 )


{
document.getElementById("result").innerHTML=" ";
}else
{
document.getElementById("result").innerHTML=txt;
txt="";
}
                
                
            }
