window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
    
    });
    
    // Template literal ES6 feature
    
    const createInnerHtml = () => { 

         const innerHtml =`
    <tr>
          <th>Profile</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Department</th> 
          <th>Salary</th>
          <th>Start Date</th> 
          <th>Actions</th>
    </tr>
    
    <tr>
    
    <td>
    <img class="profile" src="../assets/profile-images/Ellipse -2.png"  alt ="profile">
    <img class="profile" src = "FS HTML_CSS LP02 Employee Payroll App Assets\assets\profile-images\Ellipse -2.png"alt ="profile">
   
    </td>
    
    <td>kirti madan</td> <td>Male</td>
    
    <td><div class='dept-label">HR</div><div class='dept-label'>Finace</div></td>
    
    <td>3000000</td>
   
    <td>1 Nov 2020</td>
    <td>
    <img name="1" onclick="remove(this)" src="FS HTML_CSS LP02 Employee Payroll App Assets\assets\icons\delete-black-18dp.svg" alt="delete"> 
    <img name="1" onclick="update(this)" src="FS HTML_CSS LP02 Employee Payroll App Assets\assets\icons\create-black-18dp.svg" alt="edit">
    </td>

    </tr>
    `;

    document.querySelector('#table-display').innerHTML = innerHtml;
    }