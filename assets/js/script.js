//jQuery
$(document).ready(function () {
    // Initialize DataTable
    $('#table').DataTable().draw();
    $('#education-table').DataTable().draw();
});

// Sample update function
// function updateFunction() {
//     let rowData = sessionStorage.getItem('userid');
//     console.log(rowData)
//     fetch('https://65ea9247c9bf92ae3d3bb400.mockapi.io/api/CRUD/Student_Details' + rowData, {
//         method: 'GET', // or PATCH
//         headers: { 'content-type': 'application/json' },
//         body: JSON.stringify({ completed: true })
//     }).then(res => {
//         if (res.ok) {
//             return res.json();
//         }
//         // handle error
//     }).then(task => {
//         // Do something with updated task
//         console.log(task);
//     }).catch(error => {
//         // handle error
//     })
//     let modal = $('#exampleModal');
//     modal.show();

//     // var data = JSON.parse(localStorage.getItem("users"));
//     // var user = data[rowData];

//     if (rowData != null) {
//         $("#submit").html("Update").prop("id", "update");
//         $("#fname").val(user.fname);
//         $("#lname").val(user.lname);
//         $("#dob").val(user.dob);
//         $("#email").val(user.email);
//         $("#address").val(user.address);
//         $("#gyear").val(user.gyear);

//         if (user.educationfields && user.educationfields.length > 0) {
//             var formfield = $("#education-details");

//             for (var i = 2; i < user.educationfields.length; i++) {
//                 var newRow = `
//                         <div class="row details" id="details">
//                             <div class="col-lg mt-md-0 mt-3">
//                                 <label>Degree/Board</label>
//                                 <input type="text" class="form-control" id="degree" required placeholder="Enter Degree"/>
//                             </div>
//                             <div class="col-lg mt-md-0 mt-3">
//                                 <label>School/College</label>
//                                 <input type="text" class="form-control" id="school" required placeholder="Enter College/School"/>
//                             </div>
//                             <div class="col-lg mt-md-0 mt-3">
//                                     <label>Start Date</label>
//                                     <input type="date" class="form-control" id="sdate" required placeholder="Enter Start Date"/>
//                             </div>
//                             <div class="col-lg mt-md-0 mt-3">
//                                     <label>Passout Year</label>
//                                     <input type="date" class="form-control" id="pdate" required placeholder="Enter Passout date"/>
//                             </div>
//                             <div class="col-lg mt-md-0 mt-3">
//                                     <label>Percentage</label>
//                                     <input type="number" min="0" max="100" class="form-control" id="percentage" required placeholder="Don't Use % Sign"/>
//                             </div>
//                             <div class="col-lg mt-md-0 mt-3">
//                                     <label>Backlog</label>
//                                     <input type="number" min="0" max="10" class="form-control" id="backlog" required placeholder="Enter Backlog"/>
//                             </div>
//                             <div class="col-lg text-center mt-md-0 mt-3 delete" style="visibility:visible">
//                                     <label>Delete</label><br>
//                                     <button type="button" class="btn btn-danger " onclick ="this.parentNode.parentNode.remove()"><i class="fa fa-minus"></i></button>
//                             </div>
//                         </div>
//                     `;
//                 formfield.append(newRow);
//             }

//             $(".education-details .details").each(function (index) {
//                 var $inputs = $(this).find('input');
//                 $inputs.each(function () {
//                     var fieldName = $(this).attr('id');
//                     $(this).val(user.educationfields[index][fieldName]);
//                 });
//             });
//         } else {
//             console.error("User data or educationFields property is undefined.");
//         }
//     }


// }
function updateFunction() {
    let rowData = sessionStorage.getItem('userid');
    console.log(rowData);
    fetch('https://65ea9247c9bf92ae3d3bb400.mockapi.io/api/CRUD/Student_Details/' + rowData, {
        method: 'GET',
        headers: { 'content-type': 'application/json' }
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    }).then(user => {
        console.log(user);
        let modal = new $('#exampleModal');
        modal.show();

        $("#submit").html("Update").prop("id", "update");
        $("#fname").val(user.fname);
        $("#lname").val(user.lname);
        $("#dob").val(user.dob);
        $("#email").val(user.email);
        $("#address").val(user.address);
        $("#gyear").val(user.gyear);
        console.log(user.educationfields.length)
        if (user.educationfields && user.educationfields.length > 0) {
            var formfield = $("#education-details");
            console.log(1)
            for (var i = 2; i < user.educationfields.length; i++) {
                var newRow = `
                    <div class="row details" id="details">
                        <div class="col-lg mt-md-0 mt-3">
                            <label>Degree/Board</label>
                            <input type="text" class="form-control" id="degree${i}" required placeholder="Enter Degree" value="${user.educationfields[i].degree}"/>
                        </div>
                        <div class="col-lg mt-md-0 mt-3">
                            <label>School/College</label>
                            <input type="text" class="form-control" id="school${i}" required placeholder="Enter College/School" value="${user.educationfields[i].school}"/>
                        </div>
                        <div class="col-lg mt-md-0 mt-3">
                            <label>Start Date</label>
                            <input type="date" class="form-control" id="sdate${i}" required placeholder="Enter Start Date" value="${user.educationfields[i].sdate}"/>
                        </div>
                        <div class="col-lg mt-md-0 mt-3">
                            <label>Passout Year</label>
                            <input type="date" class="form-control" id="pdate${i}" required placeholder="Enter Passout date" value="${user.educationfields[i].pdate}"/>
                        </div>
                        <div class="col-lg mt-md-0 mt-3">
                            <label>Percentage</label>
                            <input type="number" min="0" max="100" class="form-control" id="percentage${i}" required placeholder="Don't Use % Sign" value="${user.educationfields[i].percentage}"/>
                        </div>
                        <div class="col-lg mt-md-0 mt-3">
                            <label>Backlog</label>
                            <input type="number" min="0" max="10" class="form-control" id="backlog${i}" required placeholder="Enter Backlog" value="${user.educationfields[i].backlog}"/>
                        </div>
                        <div class="col-lg text-center mt-md-0 mt-3 delete" style="visibility:visible">
                            <label>Delete</label><br>
                            <button type="button" class="btn btn-danger" onclick="this.parentNode.parentNode.remove()"><i class="fa fa-minus"></i></button>
                        </div>
                    </div>
                `;
                formfield.append(newRow);
            }
            $(".education-details .details").each(function (index) {
                var $inputs = $(this).find('input');
                $inputs.each(function () {
                    var fieldName = $(this).attr('id');
                    $(this).val(user.educationfields[index][fieldName]);
                });
            });
        } else {
            console.error("User data or educationFields property is undefined.");
        }
    }).catch(error => {
        console.error('Error fetching user data:', error);
    });
}






// Function to validate the form inputs
function validateForm() {
    var isvalid = true;
    // Example validation, you can add more checks as needed
    const percentage = $("#percentage").val();
    var lname = $("#lname").val();
    var gyear = $("#gyear").val();
    var dob = $("#dob").val();

    // Extract the year

    // Check if any of the required fields are empty
    // if (fname === "" || lname === "" || email === "" || dob === "") {
    //     alert("Please fill out all required fields.");
    //     console.log("fill properly");
    //     return false; // Validation failed
    // }

    $('.student-details .row').each(function () {
        $(this).find('input').each(function () {
            //console.log(ele);
            if ($(this).val() == null || $(this).val() == '') {
                $(this).css('border', '2px solid red');
                isvalid = false;
            } else {
                $(this).css('border', '2px solid green');
                isvalid = true;
            }
        });

        const emailInput = $("#email");
        const email = emailInput.val().trim();

        if (email === '') {
            emailInput.css('border', '2px solid red');
        }

        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (re.test(email)) {
            emailInput.css('border', '2px solid green');
            isvalid = true;
        } else {
            emailInput.css('border', '2px solid red');
            isvalid = false;
        }
    });

    var gyear = $("#gyear");
    var dob = $("#dob");

    if (gyear && dob) { // Check if both elements exist
        var gyearDate = new Date(gyear.val()); // Assuming gyear is an input element, use .val() to get its value
        var birthDate = new Date(dob.val()); // Assuming dob is an input element, use .val() to get its value
        var currentDate = new Date(); // Get today's date
        var age = gyearDate.getFullYear() - birthDate.getFullYear();
        if (!gyear.val() && !dob.val()) {
            gyear.css("border", "2px solid red");
            dob.css("border", "2px solid red");
            console.log("Graduation year cannot be empty.");
            isvalid = false;
            return; // Exit the function or handle this case accordingly
        } else {
            gyear.css('border', '2px solid green'); // Reset border
            dob.css('border', '2px solid green');

            isvalid = true;
        }
        // Check if birthDate is greater than currentDate
        if (birthDate > currentDate && gyearDate > currentDate) {
            dob.css("border", "2px solid red"); // Apply border to indicate invalid date
            gyear.css("border", "2px solid red");

            console.log(" Date cannot be in the future.");
            isvalid = false;
            return; // Exit the function or handle this case accordingly
        }
        if (gyearDate < birthDate || (age === 0 && gyearDate.getDate() < birthDate.getDate())) {
            age--;
        }

        // Check if age is less than 18
        if (age < 18) {
            gyear.css("border", "2px solid red");
            dob.css("border", "2px solid red");

            alert("Age Must Be Above 18.....");

            isvalid = false;
        } else {
            // Reset border to default or do something else
            gyear.css('border', '2px solid green');

            isvalid = true;// Reset border
        }
    } else {
        gyear.css("border", "2px solid red");
        dob.css("border", "2px solid red");

        isvalid = false;
        // Or handle this case in another appropriate way
    }
    $('.education-details .row').each(function () {
        var rowIsValid = true; // Variable to track the validation status of the current row

        $(this).find('input').each(function () {
            if ($(this).val() == null || $(this).val() == '') {
                $(this).css('border', '2px solid red');

                rowIsValid = false; // Update rowIsValid if any input in the row is empty
            } else {
                $(this).css('border', '2px solid green');


            }
        });

        const percentage = $(this).find("#percentage"); // Find percentage within the current row
        const re = /^[0-9]+$/;
        if (percentage.val() >= 0 && percentage.val() <= 100 && re.test(percentage.val().trim())) {
            percentage.css('border', '2px solid green');

        } else {
            percentage.css('border', '2px solid red');

            rowIsValid = false; // Update rowIsValid based on percentage validation
        }

        const sdate = $(this).find("#sdate"); // Find sdate within the current row
        const pdate = $(this).find("#pdate"); // Find pdate within the current row
        // Check if both fields are not empty
        if (sdate.val() !== "" && pdate.val() !== "") {
            var startDate = new Date(sdate.val());
            var passoutDate = new Date(pdate.val());
            var currentDate = new Date();

            var startYear = startDate.getFullYear();
            var passoutYear = passoutDate.getFullYear();
            var currentYear = currentDate.getFullYear();

            if (passoutYear > startYear && passoutYear <= currentYear && startYear <= currentYear &&
                startDate < currentDate && passoutDate < currentDate) {
                // Both conditions are satisfied
                sdate.css("border", "2px solid green");
                pdate.css("border", "2px solid green");

            } else {
                // One or both conditions are not satisfied
                sdate.css("border", "2px solid red");
                pdate.css("border", "2px solid red");

                rowIsValid = false; // Update rowIsValid based on date validation
            }
        } else {
            // One or both fields are empty
            sdate.css("border", "2px solid red");
            pdate.css("border", "2px solid red");

            rowIsValid = false; // Update rowIsValid if any of sdate or pdate is empty
        }

        // Update isvalid based on rowIsValid
        if (!rowIsValid) {
            isvalid = false;
        }
    });

    // Additional validation checks can be added here

    return isvalid; // Validation passed
}



function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // Validate the form
    if (validateForm() == true) {
        // If validation passes, call the ShowDetails() function
        if ($("#submit").length) {
            ShowDetails();
        } else {
            updateData();
            alert("User Details updated Successfully");
            $("#update").prop("id", "submit");
        }
    }
    else {
        alert("validation Error");

    }
}

// Attach event listener to the form submission using jQuery
$("#form").submit(handleSubmit);



function add() {
    let formfield = $('#education-details');
    let row = $('<div class="row details"></div>');

    let col1 = $('<div class="col-lg mt-md-0 mt-3"></div>');
    let input1 = $('<input type="text" placeholder="Enter Your First Name" id="degree" class="form-control">');
    col1.append(input1);
    row.append(col1);

    let col2 = $('<div class="col-lg mt-md-0 mt-3"></div>');
    let input2 = $('<input type="text" placeholder="Enter Your First Name" id="school" class="form-control">');
    col2.append(input2);
    row.append(col2);

    let col3 = $('<div class="col-lg mt-md-0 mt-3"></div>');
    let input3 = $('<input type="date" placeholder="Enter Your Starting Date" id="sdate" class="form-control">');
    col3.append(input3);
    row.append(col3);

    let col4 = $('<div class="col-lg mt-md-0 mt-3"></div>');
    let input4 = $('<input type="date" placeholder="Enter Your Passout Year" id="pdate" class="form-control">');
    col4.append(input4);
    row.append(col4);

    let col5 = $('<div class="col-lg mt-md-0 mt-3"></div>');
    let input5 = $('<input type="text" placeholder="Don\'t Use % Sign" id="percentage" class="form-control">');
    col5.append(input5);
    row.append(col5);

    let col6 = $('<div class="col-lg mt-md-0 mt-3"></div>');
    let input6 = $('<input type="text" placeholder="Enter Backlog" id="backlog" class="form-control">');
    col6.append(input6);
    row.append(col6);

    let col7 = $('<div class="col-lg text-center mt-md-0 mt-3"></div>');
    let input7 = $('  <button type="button" class="btn btn-danger " onclick ="this.parentNode.parentNode.remove()"><i class="fa fa-minus"></i></button>');
    col7.append(input7);
    row.append(col7);

    input7.on('click', function () {
        row.remove();
    });

    formfield.append(row);

    alert('Added new row');
}


function submit() {
    if ($("#submit").length) {
        $("#submit").html("Submit");
    }
    if ($("#update").length) {
        $("#update").prop("id", "submit");
    }
    //button.setAttribute("onclick", "ShowDetails()");
}


// function updateData() {
//     let userid = sessionStorage.getItem("userid");
//     //alert(userid);
//     let data = [];
//     let educationField = {
//         degree: ' ',
//         school: ' ',
//         sdate: ' ',
//         pdate: ' ',
//         percentage: ' ',
//         backlog: 0
//     }

//     let studentDetails = {
//         fname: '',
//         lname: ' ',
//         dob: ' ',
//         email: ' ',
//         address: ' ',
//         gyear: ' ',
//         educationfields: []
//     }

//     $('.student-details .row').each(function () {
//         $(this).find('input').each(function () {
//             studentDetails[$(this).attr('id')] = $(this).val();
//         });
//     });

//     data.push(studentDetails);

//     $('.education-details .row').each(function () {
//         $(this).find('input').each(function () {
//             educationField[$(this).attr('id')] = $(this).val();
//         });
//         studentDetails.educationfields.push(Object.assign({}, educationField));
//     });

//     var users = JSON.parse(localStorage.getItem("users")) || [];
//     users[userid] = studentDetails;
//     console.log(users[userid])
//     console.log(studentDetails);
//     localStorage.setItem("users", JSON.stringify(users));

//     $('#form')[0].reset();

//     $('#exampleModal').modal('hide');
//     let tableBody = $("#table #data-body");
//     tableBody.empty();
//     const edu = $('.education-details > .row');
//     console.log(edu)
//     for (let i = 2; i < edu.length; i++) {
//         edu[i].remove()
//         // console.log(edu[i])
//     }
//     showdata();
// }
function updateData() {
    let userid = sessionStorage.getItem("userid");

    // Fetch the user data from the API
    fetch('https://65ea9247c9bf92ae3d3bb400.mockapi.io/api/CRUD/Student_Details/' + userid)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Failed to fetch user data');
        })
        .then(userData => {
            // Update user data
            let updatedUserData = { ...userData };

            $('.student-details .row').each(function () {
                $(this).find('input').each(function () {
                    updatedUserData[$(this).attr('id')] = $(this).val();
                });
            });

            let educationFields = [];
            $('.education-details .row').each(function () {
                let educationField = {};
                $(this).find('input').each(function () {
                    educationField[$(this).attr('id')] = $(this).val();
                });
                educationFields.push(educationField);
            });

            updatedUserData.educationfields = educationFields;

            // Update the user data on the API
            return fetch('https://65ea9247c9bf92ae3d3bb400.mockapi.io/api/CRUD/Student_Details/' + userid, {
                method: 'PUT', // or PATCH
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(updatedUserData)
            });
        })
        .then(res => {
            if (res.ok) {
                // Handle success
                $('#form')[0].reset();

                $('#exampleModal').modal('hide');
                let tableBody = $("#table #data-body");
                tableBody.empty();

                const edu = $('.education-details > .row');
                console.log(edu)
                for (let i = 2; i < edu.length; i++) {
                    edu[i].remove()
                    // console.log(edu[i])
                }

                showdata();
                console.log('User data updated successfully');

                return res.json();
            }
            throw new Error('Failed to update user data');
        })
        .then(updatedUserData => {
            // Do something with updated user data
            console.log(updatedUserData);
        })
        .catch(error => {
            // Handle errors
            console.error(error);
        });
}

function ShowDetails() {
    let data = [];
    let educationField = {
        degree: ' ',
        school: ' ',
        sdate: ' ',
        pdate: ' ',
        percentage: ' ',
        backlog: 0
    }

    let studentDetails = {
        fname: '',
        lname: ' ',
        dob: ' ',
        email: ' ',
        address: ' ',
        gyear: ' ',
        educationfields: []
    }


    $('.student-details .row').each(function () {
        var studentRow = {};
        $(this).find('input').each(function () {
            studentRow[$(this).attr('id')] = $(this).val();
        });
        $.extend(studentDetails, studentRow);
    });

    data.push(studentDetails);

    $('.education-details .row').each(function () {
        var educationRow = {};
        $(this).find('input').each(function () {
            educationRow[$(this).attr('id')] = $(this).val();
        });
        studentDetails.educationfields.push($.extend({}, educationField, educationRow));
    });

    console.log(studentDetails);
    console.log(JSON.stringify(studentDetails));
    fetch('https://65ea9247c9bf92ae3d3bb400.mockapi.io/api/CRUD/Student_Details', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(studentDetails)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Nettwork response was not ok');
            }
            $('#form')[0].reset();

            $('#exampleModal').modal('hide');
            let tableBody = $("#table #data-body");
            tableBody.empty();

            showdata();
            alert("User registered successfully!");
        })
        .catch(error => {
            console.error('There was a problem with the POST operation:', error);
        })
    // var users = JSON.parse(localStorage.getItem("users")) || [];
    // users.push(studentDetails);
    // localStorage.setItem("users", JSON.stringify(users));
    // console.log(JSON.stringify(users));




}

function clear() {
    var form = $('.reset')[0];
    const edu = $('.education-details > .row');
    console.log(edu)
    for (let i = 2; i < edu.length; i++) {
        edu[i].remove()
        // console.log(edu[i])
    }
    // .each(function (row, index) {
    //     // if (i > 2) {
    //     //     console.log(row);
    //     // }
    //     console.log(index)
    // });

    $("#submit").html("Submit");
    form.reset();
}

$('.btn-close').on("click", clear);


function showdata() {
    fetch('https://65ea9247c9bf92ae3d3bb400.mockapi.io/api/CRUD/Student_Details')
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON response
            return response.json();
        })
        .then(data => {
            // Do something with the data
            console.log(data);
            // Call a function to process the data
            //processData(data);


            // Retrieve data from localStorage
            // var data = localStorage.getItem("users");
            let tableHeader = $("#table thead");
            let tableBody = $("#table #data-body");

            // // Check if data exists
            if (data) {
                //data = JSON.parse(data); // Parse the data if it's in JSON format

                console.log(data);

                // Loop through the data and create table rows
                data.forEach(function (entry) {
                    console.log(data.indexOf(entry));
                    var row = $("<tr header-level></tr>");
                    var i = $(this).closest('tr');
                    var cell = $("<td text='center' style='cursor:pointer' class='expand' onclick='education(this)'>  <i class='fa fa-plus'></i></td>");

                    console.log(i);
                    row.append(cell);
                    // Iterate over each property in the entry
                    $.each(entry, function (key, value) {
                        if (key !== "educationfields") {
                            var cell = $("<td></td>").text(value);
                            row.append(cell);
                        }
                    });

                    // Append the row to the table body
                    tableBody.append(row);

                    // Append the delete and update buttons to the row
                    var deleteButton = $("<button></button>").text("Delete").addClass("btn btn-danger");
                    deleteButton.on("click", function () {
                        row.remove();
                        var index2 = entry.id;
                        console.log(index2)

                        fetch('https://65ea9247c9bf92ae3d3bb400.mockapi.io/api/CRUD/Student_Details/' + index2, {
                            method: 'DELETE',
                        }).then(res => {
                            if (res.ok) {
                                return res.json();
                            }
                            // handle error
                        }).then(task => {
                            // Do something with deleted task
                            console.log(task);
                            alert("Data of " + index2 + " id record is deleted.");
                        }).catch(error => {
                            console.error('There was a problem with the fetch operation:', error);
                        });
                        //showdata();
                    });
                    var deleteCell = $("<td></td>").append(deleteButton);
                    row.append(deleteCell);

                    var updateButton = $("<button></button>").text("Update").addClass("btn btn-warning");
                    updateButton.attr("data-bs-toggle", "modal");
                    updateButton.attr("data-bs-target", "#exampleModal");
                    updateButton.attr("data-bs-dismiss", "modal");
                    updateButton.on("click", function () {
                        debugger;
                        var index2 = entry.id;
                        sessionStorage.setItem("userid", index2);
                        updateFunction();
                    });
                    var updateCell = $("<td></td>").append(updateButton);
                    row.append(updateCell);

                    // Append the row to the table body
                    tableBody.append(row);


                    // Create a new row for education details
                    var educationRow = $("<tr class='sub-level m-0 table-responsive' style='display:none;width:100%'></tr>");
                    var educationCell = $("<td colspan='10'></td>");

                    // Create a new table for education details
                    var educationTable = $("<table class='education-table' id='education-table'></table>");
                    var headerRow = $("<tr><th>Degree</th><th>School</th><th>Start Date</th><th>Passing Date</th><th>Percentage</th><th>Backlog</th></tr>");
                    educationTable.append(headerRow);

                    // Iterate over each education field object and add data to the table
                    entry.educationfields.forEach(function (field) {
                        var dataRow = $("<tr></tr>");
                        dataRow.append("<td>" + field.degree + "</td>");
                        dataRow.append("<td>" + field.school + "</td>");
                        dataRow.append("<td>" + field.sdate + "</td>");
                        dataRow.append("<td>" + field.pdate + "</td>");
                        dataRow.append("<td>" + field.percentage + "</td>");
                        dataRow.append("<td>" + field.backlog + "</td>");
                        educationTable.append(dataRow);
                    });

                    // Append the education table to the education cell
                    educationCell.append(educationTable);

                    // Append the education cell to the education row
                    educationRow.append(educationCell);

                    // Append the education row below the student row
                    row.after(educationRow);

                    // Attach click event listener to the "plus" button to toggle visibility of education details

                    // });
                    tableBody.append(educationRow);



                });
            } else {
                console.log('No data found');
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

}

function education(button) {
    var row = $(button).closest('tr');
    var educationRow = row.next('.sub-level');
    $('.sub-level').not(educationRow).hide();

    educationRow.toggle();
    // alert("clicked...................");
}