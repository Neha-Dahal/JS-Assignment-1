// Define an object containing information about yourself. The object needs to include 'name', 'address', 'emails', 'interests' and 'education'. The 'education' key needs to be an array of objects containing keys 'name' and 'enrolledDate'.
// Using the object defined previously iterate over the 'education' key and print a list of output in the console as follows:
// Name: ABC School of Schoolery, Date: 2000
// Name: BCD School of Trickery, Date: 2006

const myInformation = {
  name: "Neha Dahal",
  address: "Boudha",
  emails: ["neha.dahal44@gmail.com", "nehadahall57@gmail.com"],
  interests: "Travelling",
  education: [
    { name: "Riviera International Academy", enrolledDate: "2008" },
    { name: "Kathmandu Model College", enrolledDate: "2016" },
    { name: "Pulchowk Campus", enrolledDate: "2018" },
  ],
};

myInformation.education.forEach((x) => {
  console.log(`Name: ${x.name}, Date: ${x.enrolledDate}`);
});
