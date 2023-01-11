## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

There are two options to view data:
1) Card about the employee that contains information: name, title, link to LinkedIn profile, contact point, company name and location.
Please put below code as 'return' in App.js:

return (
    dataWithContactName.map((contact) => {
      const companyLidMetadata = contact.metadata.company_lid
      const company = dataList.contacts.unique_companies[companyLidMetadata]
  return (
    <ContactCard contact={contact} company={company} />
    )
  })
  )

2) Table with information about all employees based on data from response.json (only employees with have full names).
Please put below code as 'return' in App.js:

return (
   <CsvToHtmlTable
    data={csvData}
    csvDelimiter=","
    tableClassName="table"
   />
 )
