const AddIcon = ({ className }) => {
  return (
    <svg
      width="80"
      height="81"
      viewBox="0 0 80 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect y="0.5" width="80" height="80" rx="40" fill="#A4907C" />
      <path
        d="M23.6667 40.5H40M56.3334 40.5H40M40 40.5V24.1667M40 40.5V56.8333"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AddIcon;
