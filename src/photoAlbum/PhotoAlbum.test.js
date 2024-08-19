import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoAlbum from './PhotoAlbum';

describe('PhotoAlbum Component (with real API data)', () => {
  test('renders photo items after fetching data', async () => {
    render(<PhotoAlbum />);

    // Wait for the photos to be displayed
    const photoItems = await waitFor(() => screen.getAllByRole('img'));
    expect(photoItems.length).toBeGreaterThan(0); 
  });

  test('displays photos with title and links', async () => {
    render(<PhotoAlbum />);

    // Wait for the first photo to be displayed
    const firstPhoto = await waitFor(() => screen.getByRole('img'));
    expect(firstPhoto).toBeInTheDocument();

    // Check that the link has the correct href
    const photoLink = firstPhoto.closest('a');
    expect(photoLink).toHaveAttribute('href');
  });

  test('highlights search term in photo titles', async () => {
    render(<PhotoAlbum />);
    
    const searchInput = screen.getByPlaceholderText('Search photo titles...');
    fireEvent.change(searchInput, { target: { value: 'accusamus' } });

    // Wait for the photos to be filtered
    const highlightedTitle = await waitFor(() => screen.getByText((content, element) => {
      return element.innerHTML.includes('<i>accusamus</i>');
    }));

    expect(highlightedTitle).toBeInTheDocument();
  });

  test('does not highlight incorrect search terms', async () => {
    render(<PhotoAlbum />);
    
    const searchInput = screen.getByPlaceholderText('Search photo titles...');
    fireEvent.change(searchInput, { target: { value: 'nonexistent' } });

    // Wait for the photos to be displayed
    const photoItems = await waitFor(() => screen.getAllByRole('img'));
    photoItems.forEach(photo => {
      expect(photo.nextElementSibling.innerHTML).not.toContain('<i>');
    });
  });
});
