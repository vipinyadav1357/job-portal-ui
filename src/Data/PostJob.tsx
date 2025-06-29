const fields = [
  { label: "jobTitle", placeholder: "Enter Job Title", options: ['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support'] },
  { label: "company", placeholder: "Enter Company Name", options: ['Google', 'Microsoft', 'Meta', 'Netflix', 'Adobe', 'Facebook', 'Amazon', 'Apple', 'Spotify'] },
  { label: "experience", placeholder: "Enter Experience Level", options: ['Entry Level', 'Intermediate', 'Expert'] },
  { label: "jobType", placeholder: "Enter Job Type", options: ['Full Time', 'Part Time', 'Contract', 'Freelance', 'Internship'] },
  { label: "location", placeholder: "Enter Job Location", options: ['Delhi', 'New York', 'San Francisco', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto'] },
  { label: "packageOffered", placeholder: "Enter Salary", options: ['10', '15', '20', '25', '30', '35', '40', '45'] }
]
const content: string =
  '<h4>About The Job</h4><p>Write description here...</p><h4>Responsibilities</h4><ul><li>Add responsibilities here...</li></ul><h4>Qualifications and Skill Sets</h4><ul><li>Add required qualification and skill set here...</li></ul>';
export { fields, content };