// ImagePopup.tsx
import React from 'react';
import '@/Styles/ImagePopup.css'; // Make sure this is correctly styled

interface ImagePopupProps {
  imageSrc: string;
  onClose: () => void;
}

const ImagePopup: React.FC<ImagePopupProps> = ({ imageSrc, onClose }) => {
  return (
    <div className="popup" onClick={onClose}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
        <img src={imageSrc} alt="Popup" />
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ImagePopup;
