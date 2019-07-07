import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";

// TODO Email and password validation

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div
        className="app flex-row align-items-center"
        style={{ backgroundColor: "#306496" }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.onSubmit}>
                      <h1>Sign in</h1>
                      <p className="text-muted">Login to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fas fa-user" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email"
                          autoComplete="email"
                          name="email"
                          type="email"
                          value={this.state.email}
                          onChange={this.onChange}
                          // error={errors.email}
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fas fa-lock" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          autoComplete="current-password"
                          placeholder="Password"
                          name="password"
                          type="password"
                          value={this.state.password}
                          onChange={this.onChange}
                          // error={errors.password}
                        />
                      </InputGroup>
                      <Row className="mb-4">
                        <Col xs="12">
                          <Button color="secondary" className="px-4 w-100">
                            Sign in
                          </Button>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12" className="text-center">
                          <Button color="link" className="px-0 text-secondary">
                            Forgot password?
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
