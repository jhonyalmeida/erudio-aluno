import React from 'react'
import App from './Core/components/App'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import reducers from './Core/reducers'

Enzyme.configure({ adapter: new Adapter() })

const store = createStore(reducers, applyMiddleware(thunk, promise()))

var localStorage = {
  getItem: () => {}
}

it('renders without crashing', () => {
  expect(shallow(<Provider store={store}><App /></Provider>)).toMatchSnapshot()
});
