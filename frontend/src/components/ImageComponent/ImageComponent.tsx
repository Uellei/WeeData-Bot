import React, { useEffect, useState, useRef, useMemo } from 'react';

interface ImageComponentProps {
  imageUrl: string;
  headers?: Headers;
  referrer: string;
}

const normalizeImageUrl = (url: string): string => {
  if (url.startsWith('//')) {
    return `https:${url}`;
  } else if (url.startsWith('http')) {
    return url;
  } else if (url.startsWith('data:image/')) {
    return url;
  } else {
    // Fallback to handle unexpected formats, you can customize it as needed
    return `https://${url}`;
  }
};

const ImageComponent = ({ imageUrl, headers, referrer }: ImageComponentProps) => {
  console.log(imageUrl)
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchedUrls = useRef(new Map<string, string>()); // Store fetched URLs and their object URLs

  const normalizedImageUrl = useMemo(() => normalizeImageUrl(imageUrl), [imageUrl]);
  const proxyUrl = useMemo(() => `http://localhost:3001/proxy?url=${encodeURIComponent(normalizedImageUrl)}`, [normalizedImageUrl]);

  const fetchImage = useMemo(() => {
    return async () => {
      if (fetchedUrls.current.has(normalizedImageUrl)) {
        setImage(fetchedUrls.current.get(normalizedImageUrl) as string);
        setIsLoading(false);
        return;
      }

      try {
        // const response = await fetch(proxyUrl, {
        //   headers: headers,
        //   referrer: referrer,
        //   method: "GET",
        // });

        // if (!response.ok) {
        //   throw new Error('Network response was not ok');
        // }

        // const imageBlob = await response.blob();
        // const imageObjectURL = URL.createObjectURL(imageBlob);
        
        // fetchedUrls.current.set(normalizedImageUrl, imageObjectURL); // Cache the URL
        setImage(proxyUrl);
      } catch (error) {
        console.error('Error fetching image:', error);
      } finally {
        setIsLoading(false);
      }
    };
  }, [proxyUrl, headers, referrer, normalizedImageUrl]);

  useEffect(() => {
    fetchImage();
  }, [fetchImage]);

  return (
    <div>
      {isLoading ? (
        <div className="h-48 w-full rounded-t-xl bg-gray-300" />
      ) : (
        image && <img src={image} alt="Fetched" height="192px" className={`${imageUrl.includes("adidas") ? "h-48" : "max-h-full"} max-w-full object-contain`} />
      )}
    </div>
  );
};

export default ImageComponent;
// max-h-full max-w-full object-contain
// {`h-full max-h-52 w-full rounded-t-xl object-cover object-bottom`}