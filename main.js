var Form = document.getElementById('resume-form');
var ResumeOutput = document.getElementById('resume-output');
var personalOutput = document.getElementById('personal-info-output');
var EducationOutput = document.getElementById('education-output');
var ExperienceOutput = document.getElementById('work-experience-output');
var SkillsOutput = document.getElementById('skills-output');
Form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value.split(',');
    var profilePic = (_a = document.getElementById('profile-pic').files) === null || _a === void 0 ? void 0 : _a[0];
    if (profilePic) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            var imgElement = document.createElement('img');
            imgElement.src = reader_1.result;
            personalOutput.innerHTML = '';
            personalOutput.appendChild(imgElement);
        };
        reader_1.readAsDataURL(profilePic);
    }
    personalOutput.innerHTML += "<h2>Personal Information</h2>\n  <p><strong>Name:</strong> ".concat(name, "</p>\n  <p><strong>Email:</strong> ").concat(email, "</p>\n  <p><strong>Phone:</strong> ").concat(phone, "</p>");
    EducationOutput.innerHTML = "<h2>Education</h2>\n  <p>".concat(education, "</p>");
    ExperienceOutput.innerHTML = "<h2>Work Experience</h2\n   <p>".concat(workExperience, "</p>");
    SkillsOutput.innerHTML = "<h2>Skills</h2>\n   <ul>".concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "</ul>");
    ResumeOutput.classList.remove('hidden');
});
