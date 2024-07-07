const company = {
    name: "Big Company",
    type: "Main Company",
    platform: "Ticket Sales Platform",
    sellsSolution: "Ticket Sales Solution",
    clients: [
      {
        name: "Client 1",
        type: "subCompany",
        uses: "Ticket Sales Software",
        sells: "Ticket Sales Solution",
        partners: [
          {
            name: "Client 1.1",
            type: "subSubCompany",
            uses: "Ticket Sales Solution",
            sells: "Ticket Sales Solution",
          },
          {
            name: "Client 1.2",
            type: "subSubCompany",
            uses: "Ticket Sales Solution",
            sells: "Ticket Sales Solution",
            partners: [
              {
                name: "Client 1.2.3",
                type: "subSubCompany",
                uses: "Ticket Sales Solution",
                sells: "Ticket Sales Solution",
              }
            ]
          }
        ]
      },
      {
        name: "Client 2",
        type: "subCompany",
        uses: "Ticket Sales Software",
        sells: "Ticket Sales Solution"
      }
    ]
  };
  
  function findValueByKey(companyObject, companyName) {
    if (companyObject.name === companyName) {
      return companyObject;
    }
    if (companyObject.clients) {
      for (let client of companyObject.clients) {
        let result = findValueByKey(client, companyName);
        if (result) {
          return result;
        }
      }
    }
    if (companyObject.partners) {
      for (let partner of companyObject.partners) {
        let result = findValueByKey(partner, companyName);
        if (result) {
          return result;
        }
      }
    }
    return null;
  }
  
  console.log(findValueByKey(company, "Client 1.2"));
  console.log(findValueByKey(company, "Client 3"));