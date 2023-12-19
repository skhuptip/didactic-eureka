const database = [
    {
      name: "George",
      height: `6'1`,
      weight: "230lbs",
      pets: ["dog", "cat"],
    },
    {
      name: "Carl",
      height: `6'1`,
      weight: "230lbs",
      pets: ["mouse"],
    },
    {
      _id: "XtZMaD2s28",
      author: "Thomas Edison",
      content:
        "If we all did the things we are capable of doing, we would literally astound ourselves.",
      tags: ["Inspirational", "Motivational"],
      authorSlug: "thomas-edison",
      length: 87,
      dateAdded: "2023-04-14",
      dateModified: "2023-04-14",
    },
    {
      _id: "R1DmP1kYtW",
      author: "Charles Dickens",
      content:
        "Reflect on your present blessings, of which every man has many; not on your past misfortunes, of which all men have some.",
      tags: ["Gratitude"],
      authorSlug: "charles-dickens",
      length: 121,
      dateAdded: "2023-04-14",
      dateModified: "2023-04-14",
    },
  ];
  
  
  
  let filteredResults = database.filter(object => {
    return customIncludes(object, "pets", "cat"); 
  });
  
  /* Takes a single object  and checks it to 
     see if it has a 'property' with a specific 'value'. 
     Returns false if the value and/or property does not exist. */
  function customIncludes(obj, property, value) {
    if (!obj.hasOwnProperty(property)) {
      return false;
    }
  
    if (Array.isArray(obj[property])) {
      if (obj[property].includes(value)) {
        return true;
      }
    } else if (obj[property] === value) {
      return true;
    } else {
      return false;
    }
  }
  
  
  console.log(filteredResults);