function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.getElementById("skillsMember");
    var skillsMemberValue = skillsMember.value;
    var skillsMemberText = skillsMember.options[skillsMember.selectedIndex].text;
    var skillsMemberTextValue = skillsMemberText + " : " + skillsMemberValue;
    var skillsMemberTextValueNode = document.createTextNode(skillsMemberTextValue);
    var skillsMemberTextValueNodeBr = document.createElement("br");
    skills.appendChild(skillsMemberTextValueNode);
    skills.appendChild(skillsMemberTextValueNodeBr);
}