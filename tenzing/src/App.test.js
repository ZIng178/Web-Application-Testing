import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import * as rtl from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect";
import{add } from "./components/Dashboard"

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// Sample testing .
test ("renders sum function",()=>{
 expect(add(1,1)).toBe(2);
})

test("fake test", ()=>{
  expect(true).toBeTruthy;
})

