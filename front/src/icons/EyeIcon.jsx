function EyeIcon({color = "black", width = "20", height = "20", className = ""}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      className = {className}
    >
      <path
        d="M18.75 15C18.75 15.9946 18.3549 16.9484 17.6517 17.6517C16.9484 18.3549 15.9946 18.75 15 18.75C14.0054 18.75 13.0516 18.3549 12.3483 17.6517C11.6451 16.9484 11.25 15.9946 11.25 15C11.25 14.0054 11.6451 13.0516 12.3483 12.3483C13.0516 11.6451 14.0054 11.25 15 11.25C15.9946 11.25 16.9484 11.6451 17.6517 12.3483C18.3549 13.0516 18.75 14.0054 18.75 15Z"
        stroke={color}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.07031 15C4.66281 9.92875 9.40156 6.25 14.9978 6.25C20.5953 6.25 25.3328 9.92875 26.9253 15C25.3328 20.0713 20.5953 23.75 14.9978 23.75C9.40156 23.75 4.66281 20.0713 3.07031 15Z"
        stroke={color}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default EyeIcon;
