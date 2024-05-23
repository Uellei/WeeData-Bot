import React, { useEffect, useState, useRef } from 'react';

interface ImageComponentProps {
  imageUrl: string; // Renamed to singular for clarity
  headers?: Record<string, string>; // Optional headers
  referrer: string
}

const ImageComponent: React.FC<ImageComponentProps> = ({ imageUrl, headers, referrer}) => {
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchedUrls = useRef(new Set()); // Store fetched URLs

  useEffect(() => {
    const fetchImage = async () => {
      if (imageUrl && !fetchedUrls.current.has(imageUrl)) {
        try {
          const response = await fetch(imageUrl, {
            headers: headers, // Pass headers if provided
            referrer: referrer,
            body: null,
            method: "GET",
            mode: "cors",
            credentials: "omit"
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const imageBlob = await response.blob();
          const imageObjectURL = URL.createObjectURL(imageBlob);
          setImage(imageObjectURL.replace('jpg', 'webp'));
        } catch (error) {
          console.error('Error fetching image:', error);
          console.error("URL ERROR IMAGEM:", imageUrl);
        } finally {
          setIsLoading(false);
          fetchedUrls.current.add(imageUrl); // Mark URL as fetched
        }
      }
    };

    fetchImage();
  }, [imageUrl, headers,referrer]); // Only re-run on imageUrl or headers change

  return (
    <div>
      {isLoading ? (
        <div className="h-48 w-full rounded bg-gray-300 animate-pulse" />
      ) : (
        image && <img src={image} alt="Fetched" className="h-52 w-full rounded object-cover" />
      )}
    </div>
  );
};

export default ImageComponent;
