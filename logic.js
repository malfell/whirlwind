// function createPage() {

//     let paraBreak;

//     //Warranty Information
//     let header1 = document.createElement('h1');
//     header1.innerHTML = 'Warranty Information';
//     document.body.appendChild(header1);

//     //First Name
//     let firstName = document.createElement('label');
//     firstName.innerHTML = 'First Name';
//     document.body.appendChild(firstName);
//     paraBreak = document.createElement('br');
//     document.body.appendChild(paraBreak);
//     let firstNameInput = document.createElement('input');
//     firstNameInput.setAttribute('type', 'text');
//     document.body.appendChild(firstNameInput);
//     paraBreak = document.createElement('br');
//     document.body.appendChild(paraBreak);

//     //Last Name
//     let lastName = document.createElement('label');
//     lastName.innerHTML = 'Last Name';
//     document.body.appendChild(lastName);
//     paraBreak = document.createElement('br');
//     document.body.appendChild(paraBreak);
//     let lastNameInput = document.createElement('input');
//     lastNameInput.setAttribute('type', 'text');
//     document.body.appendChild(lastNameInput);
//     paraBreak = document.createElement('br');
//     document.body.appendChild(paraBreak);

//     //Company Name
//     let companyName = document.createElement('label');
//     companyName.innerHTML = 'Company Name';
//     document.body.appendChild(companyName);
//     paraBreak = document.createElement('br');
//     document.body.appendChild(paraBreak);
//     let companyNameInput = document.createElement('input');
//     companyNameInput.setAttribute('type', 'text');
//     document.body.appendChild(companyNameInput);
//     paraBreak = document.createElement('br');
//     document.body.appendChild(paraBreak);

//     //Email
//     let email = document.createElement('label');
//     email.innerHTML = 'Email';
//     document.body.appendChild(email);
//     paraBreak = document.createElement('br');
//     document.body.appendChild(paraBreak);
//     let emailInput = document.createElement('input');
//     emailInput.setAttribute('type', 'text');
//     document.body.appendChild(emailInput);
//     paraBreak = document.createElement('br');
//     document.body.appendChild(paraBreak);
    
//     let label;
//     let fill;

//     //Phone Number
//     label = document.createElement('label');
//     label.innerHTML = 'Phone Number';
//     document.body.appendChild(label);
//     paraBreak = document.createElement('br');
//     document.body.appendChild(paraBreak);
//     fill = document.createElement('input');
//     fill.setAttribute('type', 'text');
//     document.body.appendChild(fill);
//     paraBreak = document.createElement('br');
//     document.body.appendChild(paraBreak);

//      //Fax Number
//      label = document.createElement('label');
//      label.innerHTML = 'Fax Number';
//      document.body.appendChild(label);
//      paraBreak = document.createElement('br');
//      document.body.appendChild(paraBreak);
//      fill = document.createElement('input');
//      fill.setAttribute('type', 'text');
//      document.body.appendChild(fill);
//      paraBreak = document.createElement('br');
//      document.body.appendChild(paraBreak);

// }

let dataArray = ['First Name',
'Last Name',
'Company Name',
'Email',
'Phone Number',
'Fax Number',
'Address',
'City',
'State',
'ZipCode',
'Country',
]

let dataArray2 = [
    'Date of Purchase',
    'Model',
    'Warranty Serial Number',
]

function createPage2(array, array2){
    let label;
    let fill;
    let button;

        //Warranty Information
    let header1 = document.createElement('h1');
    header1.innerHTML = 'Warranty Information';
    document.body.appendChild(header1);

    for(let i = 0; i < array.length; i++){
        label = document.createElement('label');
        label.innerHTML = array[i];
        document.body.appendChild(label);
        paraBreak = document.createElement('br');
        document.body.appendChild(paraBreak);
        fill = document.createElement('input');
        fill.setAttribute('type', 'text');
        document.body.appendChild(fill);
        paraBreak = document.createElement('br');
        document.body.appendChild(paraBreak);
    }

    //Warranty Information
    let header2 = document.createElement('h2');
    header2.innerHTML = 'Device Information';
    document.body.appendChild(header2);

    for(let i = 0; i < array2.length; i++){
        label = document.createElement('label');
        label.innerHTML = array2[i];
        document.body.appendChild(label);
        paraBreak = document.createElement('br');
        document.body.appendChild(paraBreak);
        fill = document.createElement('input');
        fill.setAttribute('type', 'text');
        document.body.appendChild(fill);
        paraBreak = document.createElement('br');
        document.body.appendChild(paraBreak);
    }

    //Save Button
    button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('value', 'Save');
    document.body.appendChild(button);

    //Close Button
    button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('value', 'Close');
    document.body.appendChild(button);

}
