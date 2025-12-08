import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

// Mock API response and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: {
      architectureDiagramUrl: 'https://example.com/diagram.png',
      description: 'Description of the design architecture'
    }
  })
}));

describe('DesignArchitectureComponent', () => {
  test('renders loading state when fetching data', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce(Promise.resolve()).mockResolvedValue({
      data: {
        architectureDiagramUrl: 'https://example.com/diagram.png',
        description: 'Description of the design architecture'
      }
    });

    render(<DesignArchitectureComponent />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders error message when fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));

    render(<DesignArchitectureComponent />);

    await waitFor(() => screen.getByText(/failed/i));
  });

  test('displays architecture diagram and description on successful data fetch', async () => {
    render(<DesignArchitectureComponent />);
    
    const imgElement = await screen.findByAltText(/architecture diagram/i);
    expect(imgElement).toHaveAttribute('src', 'https://example.com/diagram.png');
    
    const descriptionElement = screen.getByRole('heading', { name: /Description of the design architecture/i });
    expect(descriptionElement).toBeInTheDocument();
  });

  test('handles accessibility features properly', () => {
    render(<DesignArchitectureComponent />);
    
    const imgElement = screen.getByAltText(/architecture diagram/i);
    expect(imgElement).toHaveAttribute('aria-label', 'Diagram of the design architecture');
    
    const descriptionElement = screen.getByRole('heading', { name: /Description of the design architecture/i });
    expect(descriptionElement).toBeVisible();
  });

  test('handles user interactions such as clicking on a button to toggle more details', async () => {
    render(<DesignArchitectureComponent />);
    
    fireEvent.click(screen.getByText(/Toggle Details/i));
    
    await waitFor(() => screen.getByText(/More detailed description of the design architecture/i));
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

// Mock API response and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: {
      architectureDiagramUrl: 'https://example.com/diagram.png',
      description: 'Description of the design architecture'
    }
  })
}));

describe('DesignArchitectureComponent', () => {
  test('renders loading state when fetching data', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce(Promise.resolve()).mockResolvedValue({
      data: {
        architectureDiagramUrl: 'https://example.com/diagram.png',
        description: 'Description of the design architecture'
      }
    });

    render(<DesignArchitectureComponent />);
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders error message when fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));

    render(<DesignArchitectureComponent />);

    await waitFor(() => screen.getByText(/failed/i));
  });

  test('displays architecture diagram and description on successful data fetch', async () => {
    render(<DesignArchitectureComponent />);
    
    const imgElement = await screen.findByAltText(/architecture diagram/i);
    expect(imgElement).toHaveAttribute('src', 'https://example.com/diagram.png');
    
    const descriptionElement = screen.getByRole('heading', { name: /Description of the design architecture/i });
    expect(descriptionElement).toBeInTheDocument();
  });

  test('handles accessibility features properly', () => {
    render(<DesignArchitectureComponent />);
    
    const imgElement = screen.getByAltText(/architecture diagram/i);
    expect(imgElement).toHaveAttribute('aria-label', 'Diagram of the design architecture');
    
    const descriptionElement = screen.getByRole('heading', { name: /Description of the design architecture/i });
    expect(descriptionElement).toBeVisible();
  });

  test('handles user interactions such as clicking on a button to toggle more details', async () => {
    render(<DesignArchitectureComponent />);
    
    fireEvent.click(screen.getByText(/Toggle Details/i));
    
    await waitFor(() => screen.getByText(/More detailed description of the design architecture/i));
  });
});