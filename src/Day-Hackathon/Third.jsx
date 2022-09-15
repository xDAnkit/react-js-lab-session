const data = {
  name: "Ankit",
  email: "xdankitjain@gmail.com",
  phoneNumber: "9977092455",
  hrData: [
    {
      name: "ANC",
      email: "asdf",
    },
  ],
};

// Save User Data
HRModel.save(userPayload);

// Save HR Data
HRDataModel.insertMany(hrData);

const data2 = {
  name: "Ankit",
  email: "xdankitjain@gmail.com",
  phoneNumber: "9977092455",
  hrData: [
    {
      name: "ANC",
      email: "a@b.com",
    },
    {
      name: "ANC2",
      email: "a@b2.com",
    },
    {
      name: "ANC3",
      email: "a@b2.com",
    },
  ],
};

const { name, email, phoneNumber, hrData, template } = data;

// First verify & store user
const userPayload = {
  name,
  email,
  phoneNumber,
};

for (let i = 0; i < hrData.length; i++) {
  const emailPayload = {
    formattedTemplate: formatTemplate(template, hrData[i].name),
    email: hrData[i].email,
    subject: "",
  };

  // Call Sanidhya API to dispatch Email (emailPayload)
}

const formatTemplate = (template, name) => {
  // Logic to update name with name variable

  const updatedTemplate = template.replace("HR_FIRST_NAME", name);
  var doc = new DOMParser().parseFromString(updatedTemplate, "text/xml");
  return doc;
};
