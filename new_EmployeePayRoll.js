
window.addEventListener('DOMContentLoaded', (event) => { 
     const name = document.querySelector('#name'); 
     console.log(name);
     const textError = document.querySelector('.text-error');
     name.addEventListener('input', function() {
      if (name.value.length == 0) {
     textError.textContent = "";
     return;
     }
     try {
     (new EmployeePayrollData()).name = name.value;
     textError.textContent = " ";
     } catch (e) {
     textError.textContent = e;
     }
     });
     });
 

const salary = document.querySelector('#salary'); 
console.log(salary);
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() 
{
     output.textContent = salary.value;
});

const save = () => { 
     try {
          let employeePayrollData = createEmployeePayroll();
          console.log(employeePayrollData)
          createAndUpdateStorage(employeePayrollData);
      } catch (e) {
           return;
      }
     }

     function createAndUpdateStorage (employeePayrollData) {

          let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
          
          if (employeePayrollList != undefined) {
          
          employeePayrollList.push(employeePayrollData);
          
          }else{
          
          employeePayrollList = [employeePayrollData]
          
          }
          
          alert(employeePayrollList.toString());
          
          localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))

     }


     
     const createEmployeePayroll = () => {
          let employeePayrollData = new EmployeePayrollData();
          try {
               employeePayrollData.name = getInputValueById('#name');
           }
            catch (e) {
               setTextValue('.text-error', e);
               throw e;
          }
     
     

     employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop(); 
     console.log(employeePayrollData._profilePic);
     employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
     console.log(employeePayrollData.gender);
      employeePayrollData.department = getSelectedValues('[name=department]');
      console.log(employeePayrollData._department);
        employeePayrollData.salary = getInputValueById('#salary');
        console.log(employeePayrollData._salary);
      employeePayrollData.note = getInputValueById('#notes'); 
      console.log(employeePayrollData._note);
      let date= getInputValueById('#day')+" "+getInputValueById('#month')+" "+
      getInputValueById('#year') ;
     
     employeePayrollData.date = Date.parse(date); 
     console.log(employeePayrollData.date);
     alert(employeePayrollData.toString());
     return employeePayrollData;
}


     const getSelectedValues = (propertyValue) => {
     let allItems = document.querySelectorAll(propertyValue); 
     let selitems= [];
          allItems.forEach(item => {
               if(item.checked) selitems.push(item.value);
          });
               return selitems;
     }

     

     const getInputValueById = (id) => { 
          let value = document.querySelector(id).value;

          return value;
     }

          const getInputElementValue = (id) => { 
               let value = document.getElementById(id).value; 
               return value;

          }



          const resetForm = () => {

               setValue('#name', '');
               
               unsetSelectedValues('[name=profile]');
               
               unsetSelectedValues('[name=gender]');
               
               unsetSelectedValues('[name=department]'); 
               setValue('#salary','');
               
               setValue('#notes','');
               
               setValue('#day', '1');
               
               setValue('#month', 'January'); 
               setValue('#year', '2020');
               
               }
               
               const unsetSelectedValues = (propertyValue) => { 
                    
                    let allItems = document.querySelectorAll(propertyValue); 
                    allItems.forEach(item => {
                   item. checked = false;
                    });
               }
               
               const setTextValue = (id, value) => {
               
               const element = document.querySelector(id); 
               element.textContent = value;
               }

               const setValue = (id, value) => {
               
                    const element = document.querySelector(id); 
                    element.value = value;
                    }


                   