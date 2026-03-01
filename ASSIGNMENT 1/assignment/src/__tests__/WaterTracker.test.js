import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import WaterTracker from '../pages/WaterTracker';
import CounterDisplay from '../components/CounterDisplay';

// 1. Mock the child component so we can track how many times it renders
jest.mock('../components/CounterDisplay', () => {
  return jest.fn(() => <div data-testid="mock-counter-display">Mocked Display</div>);
});

// 2. Mock fetch to prevent actual network calls during the test
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ slip: { advice: "Drink water!" } }),
  })
);

describe('WaterTracker Performance Optimization', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  it('does NOT re-render CounterDisplay when the unrelated button is clicked', async () => {
    render(<WaterTracker />);

    // Wait for the API fetch to complete so the initial render cycle settles
    await waitFor(() => {
      expect(screen.getByText(/"Drink water!"/i)).toBeInTheDocument();
    });

    // Record how many times the CounterDisplay rendered during setup (mount + API fetch)
    const initialRenderCount = CounterDisplay.mock.calls.length;

    // Find and click the unrelated button 
    const unrelatedButton = screen.getByTestId('unrelated-btn');
    fireEvent.click(unrelatedButton);

    // Assert that the unrelated state changed (button text updates)
    expect(screen.getByText(/Toggle Unrelated State: ON/i)).toBeInTheDocument();

    // PERFORMANCE VERIFICATION: 
    // The render count should remain exactly the same as before the click
    expect(CounterDisplay.mock.calls.length).toBe(initialRenderCount);
  });
});