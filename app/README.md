# Phone App for Lesbok

## Components

We are using Ui kitten for precreated components everywere we can!
https://akveo.github.io/react-native-ui-kitten/docs/getting-started/what-is-ui-kitten#what-is-ui-kitten



## Fix for React-Native-Numeric-Input

In file /app/node_modules/react-native-numeric-input/NumericInput/NumericInput.js

change ComponentDidUpdate in line 23 to match

```js
componentDidUpdate(prevProps) {
  const initSent = !(this.props.initValue !== 0 && !this.props.initValue);

  // compare the new value (props.initValue) with the existing/old one (this.state.value)
  if (this.props.initValue !== this.state.value && initSent) {
    this.setState({
      value: this.props.initValue,
      lastValid: this.props.initValue,
      stringValue: this.props.initValue.toString()
    });
  }

  if (prevProps.value !== this.props.value) {
    this.setState({
      value: this.props.value,
      lastValid: this.props.value,
      stringValue: this.props.value.toString()
    });
  }
}
```
