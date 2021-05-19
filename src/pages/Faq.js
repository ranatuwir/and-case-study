import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import FormContainer from '../components/Newsletter/FormContainer'
import style from './Faq.module.css'


const Faq = () => {
    return (
<div className={style.faq}>
  <div className={style.center}>
      <h1 className={style.header}>Frequently Asked Questions</h1>
      <p className={style.center}>Click on the question!</p>
      </div>
  <div className={style.questions}>
<Accordion defaultActiveKey="null">
    <Card className={style.card}>
    <Accordion.Toggle as={Card.Header} className={style.question} eventKey="0">
      Returns information
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>We offer 28 day free returns in store and £4 returns using <a href="https://www.myhermes.co.uk/">Hermes</a></Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card className={style.card}>
    <Accordion.Toggle as={Card.Header} className={style.question} eventKey="1">
      Shipping and Delivery 
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        <p> Items are shipped at 12pm the next day.</p>
        <p> Deliveries can be expected within two weeks</p>
        </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card className={style.card}>
    <Accordion.Toggle as={Card.Header} className={style.question} eventKey="2">
      Ordered the wrong size?
    </Accordion.Toggle>
    <Accordion.Collapse  eventKey="2">
      <Card.Body>
        <p> Visit us in store for an exchange. Alternatively, you can return it and place another order online</p>
        </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</div>
<FormContainer/>
</div>

    )
}

export default Faq
