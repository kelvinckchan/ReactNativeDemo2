import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { ScrollView,  Image, View, Alert } from 'react-native'
import {Form,Container,Item, Input, Label, Header, Title, Content, Left, Right, Body, Icon, Text, Card, CardItem, Thumbnail, Button, Text as NBText ,List, ListItem} from 'native-base'

class ContactForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit}>

          <Label htmlFor="firstName">First Name</Label>
          <Field name="firstName" component="input" type="text"/>

          <Label htmlFor="lastName">Last Name</Label>
          <Field name="lastName" component="input" type="text"/>

          <Label htmlFor="email">Email</Label>
          <Field name="email" component="input" type="email"/>

        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}


// Decorate the form component
ContactForm = reduxForm({
  form: 'contact' // a unique name for this form
})(ContactForm);

export default ContactForm;
