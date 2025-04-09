
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/store/slices/counterSlice';
import Counter from './Counter';

// Create a test store with the counter reducer
const createTestStore = () => 
  configureStore({
    reducer: {
      counter: counterReducer,
    },
  });

describe('Counter Component', () => {
  test('renders counter with initial value 0', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    
    expect(screen.getByText('0')).toBeInTheDocument();
  });
  
  test('increments value when + button is clicked', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    
    fireEvent.click(screen.getByTestId('increment-button'));
    expect(screen.getByText('1')).toBeInTheDocument();
  });
  
  test('decrements value when - button is clicked', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    
    fireEvent.click(screen.getByTestId('increment-button')); // First make it 1
    fireEvent.click(screen.getByTestId('decrement-button')); // Then back to 0
    expect(screen.getByText('0')).toBeInTheDocument();
  });
  
  test('adds amount when Add Amount button is clicked', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    
    const input = screen.getByTestId('increment-input');
    fireEvent.change(input, { target: { value: '5' } });
    fireEvent.click(screen.getByTestId('add-amount-button'));
    
    expect(screen.getByText('5')).toBeInTheDocument();
  });
  
  test('resets to zero when reset button is clicked', () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
    
    fireEvent.click(screen.getByTestId('increment-button'));
    fireEvent.click(screen.getByTestId('increment-button'));
    expect(screen.getByText('2')).toBeInTheDocument();
    
    fireEvent.click(screen.getByTestId('reset-button'));
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
