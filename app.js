let appName = localStorage.getItem('appName');
const insertion = document.getElementById('textBanniere');

if (appName === null) {
    appName = prompt("Nommer votre app");
    localStorage.setItem('appName', appName);
}

insertion.innerText = appName;

// ----------------------------------------------
//     ADD.HTML
// ----------------------------------------------
/* This code snippet is adding an event listener
to the element with the id 'addCategoryBtn'. When this
element is clicked, the function provided as the second
argument will be executed. */
document.getElementById('addCategoryBtn').addEventListener('click', function() {
    let newCategoryInput = document.getElementById('newCategory')
    let newCategoryValue = newCategoryInput.value.trim()

    if (newCategoryValue) {
        let categorySelect = document.getElementById('itemCategory')
        let newOption = document.createElement('option')
        newOption.value = newCategoryValue
        newOption.textContent = newCategoryValue
        categorySelect.appendChild(newOption)
        
        // Optionally set the new option as selected
        categorySelect.value = newCategoryValue
    }
    
    // Clear the input field after adding the category
    newCategoryInput.value = ''
});