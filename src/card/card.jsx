import { nanoid } from "nanoid";
import Card from "react-bootstrap/Card";
import './card.css'

function ContactCard({ contact, company }) {
  
  return (
    <Card class="card" key={nanoid()}>
      <Card.Body class="card-body">
        <div class="rowWrapper">
          <Card.Title class="card-title">Contact Name:</Card.Title>
          <Card.Text class="card-text">{contact.name.full}</Card.Text>
        </div>
        <div class="rowWrapper">
          <Card.Title class="card-title">Contact Title:</Card.Title>
          <Card.Text class="card-text">{contact.job_title.title}</Card.Text>
        </div>
        <div class="rowWrapper">
          <Card.Text class="card-title">Contact LinkedIn Profile:</Card.Text>
          <a href={contact.social_link} class="card-text">
            LinkedIn
          </a>
        </div>
        <div class="rowWrapper">
          <Card.Title class="card-title">Contact Location:</Card.Title>
          <Card.Text class="card-text">{contact.location.country}</Card.Text>
        </div>
        <div class="rowWrapper">
          <Card.Title class="card-title">Company Name:</Card.Title>
          <Card.Text class="card-text">{company.name}</Card.Text>
        </div>
        <div class="rowWrapper">
          <Card.Title class="card-title">Company Location</Card.Title>
          <Card.Text class="card-text">{contact.location.country}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
//       const el = `<li>
  //   <p><b>Contact Name</b>: ${contact.name.full}</p>
  //   <p><b>Contact Title</b>: ${contact.job_title.title}</p>
  //   <p><b>Contact LinkedIn Profile</b>: ${contact.social_link}</p>
  //   <p><b>Contact Location</b>: ${contact.location.country}</p>
  //   <p> <b>Company Name</b>: ${company.name}</ >
  //   <p><b>Company Website</b>: ${company.domains.homepage}</p>
  //   <p><b>Company Size</b>: ${company.company_size.min} - ${company.company_size.max}</p>
  //   <p><b>Revenue</b>: ${company.revenue_range.min} - ${company.revenue_range.max}</p>
  //   <p><b>Company LinkedIn</b>: ${company.social.linkedin}</p>
  // </li>`