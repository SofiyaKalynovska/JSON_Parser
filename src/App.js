import data from './data/response.json';
import './App.css'
// import ContactCard from './card/card';
import { CsvToHtmlTable } from 'react-csv-to-table';

function App() {

  const dataList = JSON.parse(JSON.stringify(data))
  const dataWithContactName = dataList.contacts.results.filter(contact => contact.name.full !== '')
 
  // To see table with information about all employees please uncomment code below:
  const csvData = [
    [
      "Contact Name",
      "Contact Title",
      "Contact LinkedIn Profile",
      "Contact Location",
      "Company Name",
      "Company City",
      "Company Location"
    ],
    ...dataWithContactName.map(item => [

      item.name.full,
      item.job_title.title,
      item.social_link,
      item.location.country,
      dataList.contacts.unique_companies[item.metadata.company_lid].name,
      [dataList.contacts.unique_companies[item.metadata.company_lid].location.city,
      dataList.contacts.unique_companies[item.metadata.company_lid].location.country]
    ])
  ].map(e => e.join(","))
    .join("\n");
  
  return (
      <CsvToHtmlTable
        data={csvData}
        csvDelimiter=","
        tableClassName="table"
      />
  )
  
  
  // To see cards of employees please uncomment code below:
  // return (

  //   dataWithContactName.map((contact) => {
  //     const companyLidMetadata = contact.metadata.company_lid
  //     const company = dataList.contacts.unique_companies[companyLidMetadata]
  // return (
  //   <ContactCard contact={contact} company={company} />
  //   )
  // })
  // )

}

export default App;
