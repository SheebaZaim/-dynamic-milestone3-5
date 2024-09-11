
       
const Form = document.getElementById('resume-form') as HTMLFormElement;
const ResumeOutput = document.getElementById('resume-output') as HTMLDivElement;

const personalOutput = document.getElementById('personal-info-output') as HTMLElement;
const EducationOutput = document.getElementById('education-output') as HTMLElement;
const ExperienceOutput = document.getElementById('work-experience-output') as HTMLElement;
const SkillsOutput = document.getElementById('skills-output') as HTMLElement;

Form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLInputElement).value;
  const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
  const profilePic = (document.getElementById('profile-pic') as HTMLInputElement).files?.[0];

  if (profilePic) {
    const reader = new FileReader();
    reader.onload = function () {
      const imgElement = document.createElement('img');
      imgElement.src = reader.result as string;
      personalOutput.innerHTML = '';
      personalOutput.appendChild(imgElement);
    };
    reader.readAsDataURL(profilePic);
  }

  personalOutput.innerHTML += `<h2>Personal Information</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phone}</p>`;

  EducationOutput.innerHTML = `<h2>Education</h2>
  <p>${education}</p>`;

  ExperienceOutput.innerHTML = `<h2>Work Experience</h2
   <p>${workExperience}</p>`;

  SkillsOutput.innerHTML = `<h2>Skills</h2>
   <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>`;

  ResumeOutput.classList.remove('hidden');
});