import ContactForm from './ContactForm';
import React, { Component } from 'react';
import { ScrollView,  Image, View, Alert } from 'react-native'


export default class ContactPage extends React.Component {
  submit = (values) => {
    // Do something with the form values
    console.log(values);
  }
  render() {
    return (
      <View>
        <ContactForm onSubmit={this.submit} />
      </View>
    );
  }
}
