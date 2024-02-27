function GraphicIcon({color = "#02C502", width="27", height="25"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 27 25"
      fill="none"
    >
      <path
        d="M7.21202 17.5C7.72908 17.5 8.22497 17.3025 8.59059 16.9508C8.95622 16.5992 9.16162 16.1223 9.16162 15.625C9.16796 15.5626 9.16796 15.4999 9.16162 15.4375L12.7879 11.95H13.0868H13.3858L15.4783 13.9625C15.4783 13.9625 15.4783 14.025 15.4783 14.0625C15.4783 14.5598 15.6837 15.0367 16.0494 15.3883C16.415 15.74 16.9109 15.9375 17.4279 15.9375C17.945 15.9375 18.4409 15.74 18.8065 15.3883C19.1721 15.0367 19.3775 14.5598 19.3775 14.0625V13.9625L24.1086 9.375C24.4942 9.375 24.8711 9.26503 25.1917 9.05901C25.5123 8.85298 25.7622 8.56014 25.9098 8.21753C26.0573 7.87492 26.0959 7.49792 26.0207 7.13421C25.9455 6.77049 25.7598 6.4364 25.4871 6.17417C25.2145 5.91195 24.8671 5.73337 24.4889 5.66103C24.1107 5.58868 23.7187 5.62581 23.3625 5.76773C23.0062 5.90964 22.7018 6.14996 22.4875 6.45831C22.2733 6.76665 22.159 7.12916 22.159 7.5C22.1526 7.56235 22.1526 7.62515 22.159 7.6875L17.4669 12.2H17.259L15.0104 10C15.0104 9.50272 14.805 9.02581 14.4394 8.67417C14.0738 8.32254 13.5779 8.125 13.0608 8.125C12.5438 8.125 12.0479 8.32254 11.6822 8.67417C11.3166 9.02581 11.1112 9.50272 11.1112 10L7.21202 13.75C6.69495 13.75 6.19906 13.9475 5.83344 14.2992C5.46782 14.6508 5.26242 15.1277 5.26242 15.625C5.26242 16.1223 5.46782 16.5992 5.83344 16.9508C6.19906 17.3025 6.69495 17.5 7.21202 17.5ZM24.7584 22.5H2.66295V1.25C2.66295 0.918479 2.52601 0.600537 2.28226 0.366116C2.03852 0.131696 1.70792 0 1.36321 0C1.0185 0 0.687908 0.131696 0.44416 0.366116C0.200412 0.600537 0.0634766 0.918479 0.0634766 1.25V23.75C0.0634766 24.0815 0.200412 24.3995 0.44416 24.6339C0.687908 24.8683 1.0185 25 1.36321 25H24.7584C25.1031 25 25.4337 24.8683 25.6775 24.6339C25.9212 24.3995 26.0582 24.0815 26.0582 23.75C26.0582 23.4185 25.9212 23.1005 25.6775 22.8661C25.4337 22.6317 25.1031 22.5 24.7584 22.5Z"
        fill={color}
      />
    </svg>
  );
}

export default GraphicIcon;