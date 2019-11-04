import React, {Component} from "react";
import { Form, Icon, Input, Button } from 'antd';
import { withRouter } from "react-router";
import { connect } from "react-redux";
import Actions from "../../redux/actions";

class Login extends Component {
   state = {
    name: "",
    error: "",
  }
  
  handleSubmit = e => {
    const {name} = this.state;
    const {setUserName} = this.props;
    e.preventDefault();
    if(name === ""){
      this.setState({error : "Please enter name"});
      return false;
    } else {
      this.setState({error : ""})
      setUserName(name);
      this.props.history.push('/products');
    }
  };

  handleChange = (e) => {
    this.setState({name: e.target.value });
  }

  render() {
    const {error} = this.state;
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              onChange={(e) => this.handleChange(e)}
            />
            <span style={{color: 'red'}}>{error ? error : "" }</span>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default connect(
  state => {
    return {};
  },
  {
    setUserName: Actions.user.setUserName,
  }
)(withRouter(Login));
