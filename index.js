
let courseinHtml = [];
function ShowCourses() {
  let ul = document.getElementById("list");
  
  for (i in courseinHtml) {
    courseinHtml[i].setAttribute("class","badge badge-danger badge-pill active");
    courseinHtml[i].setAttribute("onclick", "deleteCourse(" + i + ")");
    ul.appendChild(courseinHtml[i]);
  }
}
function addCoursesToList() {
  let course = document.getElementById("course").value;
  if (course == "") return;
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(course));
  let span = document.createElement("span");
  span.appendChild(document.createTextNode("supprimer"));
  let button = document.createElement("button");
  button.appendChild(document.createTextNode("Rayer"));
  li.appendChild(button);
  li.appendChild(span);
  

  courseinHtml.push(li);
  ShowCourses();
  document.getElementById("course").value = "";
}

function deleteCourse(indice) {
  let confirmation = confirm("do you want to delete ?");
  if (confirmation == false) return;
  let li = document.getElementsByTagName("li");
  let litoDelete = li[indice];
  litoDelete.remove();
  let newCourses = [];

  for (let i = 0; i < courseinHtml.length; i++) {
    if (i != indice) {
      newCourses.push(courseinHtml[i]);
    }
  }
  courseinHtml = newCourses;
  ShowCourses();
}

let test = document.getElementById("list");

test.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.color = "orange";
    event.target.fontStyle = "32px";
    setTimeout(function () {
      event.target.style.color = "";
      event.target.fontStyle = "unset";
    }, 600);
  },
  false
);




