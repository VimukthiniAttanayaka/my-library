import React from "react";
import { Row, Col, Form, Button, Image } from "react-bootstrap";
import fb from '../../assets/images/fb.jpg';
import whatsapp from '../../assets/images/whatsapp.jpg';
import twitter from '../../assets/images/twitter.jpg';
import linkdin from '../../assets/images/linkdin.jpg';
import { Mail, Phone } from "react-feather";

const Footer: React.FC = () => {
	return (
		<Row className="footer pb-3">
			<Col xs={{span:12, order:2}} md={{span:6, order:1}} className="px-4 py-2 pe-5">
				<Row className="py-2">
					We are Mdmylibrary, if you have a problam or future details , contact us
				</Row>
				<Row>
					<Col xs={11} sm={9}>
						<Form>
							<Form.Group className="mb-3">
								<Form.Label>Name</Form.Label>
								<Form.Control type="text" />
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" />
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>Your Message</Form.Label>
								<Form.Control as="textarea" rows={3} />
							</Form.Group>
							<Button variant="primary" type="submit" className="btn">
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
			</Col>
			<Col xs={{span:12, order:1}} md={{span:6, order:2}} className="px-4 py-3 mt-3">
				<Row>
					<Col xs={1}>
						<Phone />
					</Col>
					<Col xs={10}>
						<p>0727649756</p>
					</Col>
				</Row>
				<Row>
					<Col xs={1}>
						<Mail />
					</Col>
					<Col xs={10}>
						<p>Librarygjfytdthny@gmail.com</p>
					</Col>
				</Row>
				<Row className="social-media mt-4 mb-3">
					<Col xs={12}>
						<p>Follow us on :-</p>
					</Col>
					<Col xs={12} className="ms-5">
						<Image src={fb}></Image>
						<Image src={whatsapp}></Image>
						<Image src={twitter}></Image>
						<Image src={linkdin}></Image>
					</Col>
				</Row>
			</Col>
			<Col xs={{span:12, order:3}}>
				<Row className="mt-3 px-5 copyright">
					© 2020 Copyright: MDmylibrary.com
				</Row>
			</Col>
		</Row>
	)
}
export default Footer;