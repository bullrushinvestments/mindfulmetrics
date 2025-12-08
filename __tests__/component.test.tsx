import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response and other dependencies
jest.mock('./api', () => ({
  fetchContent: jest.fn().mockResolvedValue({
    id: '1',
    title: 'Sample Title',
    content: 'This is a sample content.',
  }),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with initial loading state', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays fetched data after successful API call', async () => {
    const { rerender } = render(<CoreFunctionalityComponent />);

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
      expect(screen.getByText(/sample title/i)).toBeInTheDocument();
      expect(screen.getByText(/this is a sample content./i)).toBeInTheDocument();
    });
  });

  test('handles API error gracefully', async () => {
    (fetchContent as jest.Mock).mockRejectedValue(new Error('API Error'));

    render(<CoreFunctionalityComponent />);
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
      expect(screen.getByText(/api error/i)).toBeInTheDocument();
    });
  });

  test('allows user to interact with component elements', () => {
    render(<CoreFunctioninalityComponent />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    // Add assertions based on expected behavior after click
  });

  test('component is accessible', async () => {
    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByRole('heading')).toHaveAccessibleName(/sample title/i);
    expect(screen.getByText(/this is a sample content./i)).toBeVisible();
    // Add more accessibility checks as needed
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

// Mock API response and other dependencies
jest.mock('./api', () => ({
  fetchContent: jest.fn().mockResolvedValue({
    id: '1',
    title: 'Sample Title',
    content: 'This is a sample content.',
  }),
}));

describe('Core Functionality Component Tests', () => {
  test('renders component with initial loading state', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays fetched data after successful API call', async () => {
    const { rerender } = render(<CoreFunctionalityComponent />);

    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
      expect(screen.getByText(/sample title/i)).toBeInTheDocument();
      expect(screen.getByText(/this is a sample content./i)).toBeInTheDocument();
    });
  });

  test('handles API error gracefully', async () => {
    (fetchContent as jest.Mock).mockRejectedValue(new Error('API Error'));

    render(<CoreFunctionalityComponent />);
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
      expect(screen.getByText(/api error/i)).toBeInTheDocument();
    });
  });

  test('allows user to interact with component elements', () => {
    render(<CoreFunctioninalityComponent />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    // Add assertions based on expected behavior after click
  });

  test('component is accessible', async () => {
    render(<CoreFunctionalityComponent />);
    
    expect(screen.getByRole('heading')).toHaveAccessibleName(/sample title/i);
    expect(screen.getByText(/this is a sample content./i)).toBeVisible();
    // Add more accessibility checks as needed
  });
});