function checkHandler(){
    // const checkbox = document.getElementsByClassName('myCheckbox');
    //check-box
    const checkbox = document.getElementById('check-box');

    console.log(!checkbox.checked, 'checkbox');
    if (!checkbox.checked == true) {
      console.log('success');
    } else {
      console.log('error');
    }
}