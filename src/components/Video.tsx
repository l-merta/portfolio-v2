import { useEffect, useRef } from 'react';

interface VideoProps {
  source: string
}

const Video = ({ source }: VideoProps) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video: any = videoRef.current;

    if (video) {
      video.playbackRate = 0.8;

      // Prevent pausing the video
      video.addEventListener('pause', () => {
        video.play();
      });

      // Autoplay fail-safe
      video.play();
    }

    // Cleanup function to remove event listeners
    return () => {
      if (video) {
        video.removeEventListener('pause', () => {
          video.play();
        });
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={source} type="video/mp4" />
    </video>
  );
};

export default Video;
