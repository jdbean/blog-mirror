---
layout: post
title: React Lifecycle Methods
subtitle:  #add subtitle (optional)
date: '2018-10-22'
description: Considering React lifecycle methods #(optional)
tags:
  - React
  - Frontend
  - Javascript
img: marco-secchi-549646-unsplash.jpg
fig-caption: # Add figcaption for img (optional)
---
React lifecycle methods might seem a little intimidating at first glance but mastering them is crucial.
<!-- more -->
The React framework is incredibly powerful and its notorious ease of use has a tendency to obscure just how complicated things can get under the hood. The React framework was created with the goal of enabling developers to easily and efficiently create complex and highly *reactive* UIs. With React, site components are able  quickly adapt to changes from user interactions or updates in the application. In order to enable this, React components go through what are known as a "component lifecycle". This lifecycle can be broadly divided into three parts: mounting, updating, and unmounting.

As of React 16.4 the lifecycle methods, are as follows:

**Mounting** --
*creating a compontent and inserting it into the DOM*:

  * `constructor()`
  * `static getDerivedStateFromProps()`
  * `render()`
  * `componentDidMount()`
  * *`UNSAFE_componentWillMount()`*

**Updating** --
*Re-rendering a component in response to a change in props or state.*:

  * `static getDerivedStateFromProps()`
  * `shouldComponentUpdate()`
  * `render()`
  * `getSnapshotBeforeUpdate()`
  * `componentDidUpdate()`
  * *`UNSAFE_componentWillUpdate()`*
  * *`UNSAFE_componentWillReceiveProps()`*

**Unmounting** --
*Removing a component from the DOM*:

  * `componentWillUnmount()`

If, like myself, you're a visual learner, you might appreciate this chart which I like to keep on hand for quick reference:

![React Lifecycle Methods](/assets/img/react-lifecycle-methods.png)

# constructor

The `constructor()` method is often where we initialize local state with an object. For example if we wanted to make a stopwatch timer component we would want it to mount with an initial state of zero time elapsed and the timer set not to run.
This could look something like this:

```javascript
constructor(props) {
  super(props);
  this.state = {
    running: false,
    time: 0,
  };
}
```
# componentDidMount

One of the most commonly used React lifecycle methods is `compontentDidMount()`. Like `constructor()`, this is another method that is run only once, in the early stages of a component's life cycle. Because `componentDidMount()` occurs after `render()` it is useful for setting up things that require DOM nodes. This an extremely common method to use for firing off asynchronous actions to load data from a remote API endpoint. Here is an example from my Ex-Static project where I use `componentDidMount()` to grab the route params from props and use those params to fetch the data for a specific collection from my backend:

```javascript
componentDidMount() {
  const { fetchCollection } = this.props;
  const { params } = this.props.match;
  fetchCollection(params.collection_name, params.splat);
}
```

# shouldComponentUpdate

`shouldComponentUpdate()` is a useful method for optimization purposes. It helps to cut down on unnecessary updates to components. The default behavior of React is to re-render whenever there is a change to state. With the help of `shouldComponentUpdate()` we can have React avoid updates except in the situations we specify. The `shouldComponentUpdate()` method accepts two arguments, `nextProps` and `nextState` and it returns a boolean value. Like any React method, it has access to the component's state and props objects so it can prepare the "next" state/props with the current state/props to determine if an update needs to occur. Here is an example from my Ex-Static project where I use `shouldComponentUpdate()` to update a component only if a specific key in state has changed:

```javascript
shouldComponentUpdate(nextProps) {
  return nextProps.title !== this.props.title;
}
```

# componentDidUpdate()

`componentDidUpdate()` is often used to interact with the DOM or with Javascript libraries that are not built with the React ecosystem in mind. Here is an example of a simple component for scaling the size of a DOM element up and down:

```jsx
import React from 'react';

class Scaler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 100
    };
  }

  componentDidUpdate() {
      this.resizeImage();
  }

  resizeImage = () => {
    const imageForScaling = document.getElementById("image-for-scaling");
    imageForScaling.height = this.state.size;
    imageForScaling.width = this.state.size;
  }

  makeBigger = () => {
    this.setState({
      size: this.state.size + 10
    });
  }

  makeSmaller = () => {
    this.setState({
      size: this.state.size - 10
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.makeBigger}>Bigger</button>
        <button onClick={this.makeSmaller}>Smaller</button>
      </div>
    );
  }
}
export default Scaler;
```

# componentDidUnMount

`componentDidUnMount()` exsists purely for clean-up purposes. This method is run just before the componenet unmounts and is the ideal place to do such critical tasks as canceling network requests, unsubsribing from subscriptions, and disposing of timers.

# Conclusion

The react lifecycle methods do take a bit of time to get used to but understanding each of them and their various uses is absolutely necessary to unlocking the full potential of React.
