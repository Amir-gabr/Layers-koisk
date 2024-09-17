const CartIcon = ({ className }) => {
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
        d="M8.78122 26.2158C9.4382 20.0324 9.76669 16.9407 10.9298 14.4849C12.7618 10.6165 16.0675 7.64351 20.1078 6.23041C22.6727 5.33331 25.7818 5.33331 32 5.33331C38.2182 5.33331 41.3272 5.33331 43.8922 6.23041C47.9325 7.64351 51.2381 10.6165 53.0702 14.4849C54.2333 16.9407 54.5618 20.0324 55.2187 26.2158L55.8492 32.1492C56.7136 40.2852 57.1458 44.3532 56.102 47.5848C54.7042 51.912 51.5311 55.44 47.3758 57.2872C44.2726 58.6666 40.1817 58.6666 32 58.6666C23.8182 58.6666 19.7274 58.6666 16.6241 57.2872C12.4688 55.44 9.29578 51.912 7.898 47.5848C6.85412 44.3532 7.28634 40.2852 8.15079 32.1492L8.78122 26.2158Z"
        fill="#605F5F"
      />
      <path
        d="M24.0003 18.6666V24C24.0003 28.4183 27.582 32 32.0003 32V32C36.4186 32 40.0003 28.4183 40.0003 24V18.6666M32 58.6666V58.6666C40.1817 58.6666 44.2726 58.6666 47.3758 57.2872C51.5311 55.44 54.7042 51.912 56.102 47.5848C57.1458 44.3532 56.7136 40.2852 55.8492 32.1492L55.2187 26.2158C54.5618 20.0324 54.2333 16.9407 53.0702 14.4849C51.2381 10.6165 47.9325 7.64351 43.8922 6.23041C41.3272 5.33331 38.2182 5.33331 32 5.33331V5.33331C25.7818 5.33331 22.6727 5.33331 20.1078 6.23041C16.0675 7.64351 12.7618 10.6165 10.9298 14.4849C9.76669 16.9407 9.4382 20.0324 8.78122 26.2158L8.15079 32.1492C7.28634 40.2852 6.85412 44.3532 7.898 47.5848C9.29578 51.912 12.4688 55.44 16.6241 57.2872C19.7274 58.6666 23.8182 58.6666 32 58.6666Z"
        stroke="#605F5F"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CartIcon;
