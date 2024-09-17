const TrashBinIcon = ({ className, fill, stroke }) => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        opacity="0.12"
        d="M12.3884 42.6022L10.6667 13.3333H53.3334L51.6117 42.6022C51.2791 48.2565 51.1128 51.0837 49.906 53.2292C48.8437 55.118 47.2312 56.6383 45.2834 57.5879C43.0707 58.6666 40.2386 58.6666 34.5745 58.6666H29.4257C23.7615 58.6666 20.9294 58.6666 18.7168 57.5879C16.7689 56.6383 15.1565 55.118 14.0942 53.2292C12.8874 51.0837 12.7211 48.2565 12.3884 42.6022Z"
        fill={stroke || "#605F5F"}
      />
      <path
        d="M10.6666 13.3333L12.3883 42.6022C12.7209 48.2565 12.8872 51.0837 14.094 53.2292C15.1563 55.118 16.7688 56.6383 18.7166 57.5879C20.9293 58.6666 23.7614 58.6666 29.4255 58.6666H34.5743C40.2385 58.6666 43.0706 58.6666 45.2832 57.5879C47.2311 56.6383 48.8435 55.118 49.9059 53.2292C51.1126 51.0837 51.2789 48.2565 51.6116 42.6022L53.3333 13.3333M10.6666 13.3333H5.33325M10.6666 13.3333H53.3333M53.3333 13.3333H58.6666M42.6666 13.3333L41.4586 9.70946C40.9341 8.13582 40.6718 7.349 40.1853 6.76728C39.7558 6.25358 39.2041 5.85596 38.5809 5.61086C37.8752 5.33331 37.0458 5.33331 35.3871 5.33331H28.6128C26.954 5.33331 26.1246 5.33331 25.4189 5.61086C24.7958 5.85596 24.2441 6.25358 23.8145 6.76728C23.328 7.349 23.0658 8.13582 22.5412 9.70946L21.3333 13.3333M26.6666 26.6666V45.3333M37.3333 26.6666V37.3333"
        stroke={stroke || "#605F5F"}
        fill={fill}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TrashBinIcon;