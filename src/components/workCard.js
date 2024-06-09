import styles from "../styles/workcard.module.css";
function WorkCard({ item }) {
  return (
    <div className={styles.display}>
      <img alt="Head Profile" className={styles.headImg} src={item.headImg} />
      <div className={styles.about}>
        <span className={styles.heading}>{item.heading}</span>
        <span className={styles.by}>by</span>
        <span className={styles.author}>{item.author}</span>
      </div>
      <div className={styles.info}>
        {item.credits ? (
          <>
            <div className={styles.credits}>
              {creditsIcon}
              <span className={styles.amount}>{item.credits}</span>
              <span className={styles.currency}>USDC</span>
            </div>
            <div className={styles.line}></div>
          </>
        ) : (
          ""
        )}
        {item.placement ? (
          <div className={styles.placement}>
            {trophyIcon}
            <span>{item.placement}</span>
          </div>
        ) : (
          ""
        )}
        <div className={styles.categoryDisplay}>
          {item.category.map((element) => {
            let color = {};
            if (element === "Design") {
              color = {
                background: "#f2edff",
                color: "#8948f2",
              };
            } else if (element === "Frontend") {
              color = {
                background: "#EBF3FF",
                color: "#3EA7FF",
              };
            } else if (element === "Backend") {
              color = {
                background: "#FFF2EB",
                color: "#FF8370",
              };
            } else if (element === "Blockchain") {
              color = {
                background: "#FFEBF9",
                color: "#FF3EC9",
              };
            } else if (element === "Content") {
              color = {
                background: "#EFF6F8",
                color: "#5EA8C4",
              };
            }

            return (
              <div className={styles.category} style={color}>
                <div style={color}>{element}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.metaInfo}>
        <div className={styles.date}>{item.date}</div>
        <div className={styles.participants}>
          <span className={styles.count}>{item.participants}</span>
          <span className={styles.subtext}>Participants</span>
        </div>
      </div>
    </div>
  );
}

const creditsIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 18.857C12.9011 18.8592 13.7938 18.6834 14.6267 18.3396C15.4596 17.9958 16.2164 17.4908 16.8536 16.8536C17.4908 16.2164 17.9958 15.4596 18.3396 14.6267C18.6834 13.7938 18.8592 12.9011 18.857 12C18.8592 11.0989 18.6834 10.2062 18.3396 9.37328C17.9958 8.54034 17.4908 7.78354 16.8536 7.14636C16.2164 6.50919 15.4596 6.00419 14.6267 5.66039C13.7938 5.31658 12.9011 5.14075 12 5.143C11.0989 5.14075 10.2062 5.31658 9.37328 5.66039C8.54034 6.00419 7.78354 6.50919 7.14636 7.14636C6.50919 7.78354 6.00419 8.54034 5.66039 9.37328C5.31658 10.2062 5.14075 11.0989 5.143 12C5.14075 12.9011 5.31658 13.7938 5.66039 14.6267C6.00419 15.4596 6.50919 16.2164 7.14636 16.8536C7.78354 17.4908 8.54034 17.9958 9.37328 18.3396C10.2062 18.6834 11.0989 18.8592 12 18.857ZM13.886 13.084C13.886 12.086 13.286 11.743 12.086 11.601C11.229 11.486 11.057 11.258 11.057 10.856C11.057 10.457 11.344 10.2 11.914 10.2C12.429 10.2 12.716 10.371 12.857 10.8C12.887 10.886 12.973 10.941 13.059 10.941H13.513C13.5393 10.9418 13.5654 10.9373 13.5899 10.9277C13.6144 10.9182 13.6367 10.9038 13.6555 10.8854C13.6743 10.867 13.6891 10.8449 13.6992 10.8207C13.7092 10.7964 13.7143 10.7703 13.714 10.744V10.714C13.599 10.084 13.084 9.484 12.429 9.428V8.798C12.429 8.683 12.343 8.597 12.201 8.571H11.824C11.709 8.571 11.601 8.657 11.572 8.798V9.428C10.714 9.544 10.144 10.2 10.144 10.916C10.144 11.858 10.714 12.227 11.914 12.373C12.716 12.514 12.973 12.686 12.973 13.144C12.973 13.598 12.57 13.916 12.03 13.916C11.284 13.916 11.027 13.598 10.942 13.17C10.916 13.058 10.83 12.998 10.744 12.998H10.256C10.2296 12.9977 10.2035 13.0028 10.1791 13.0129C10.1547 13.023 10.1327 13.038 10.1143 13.0568C10.0959 13.0757 10.0815 13.0981 10.072 13.1228C10.0625 13.1474 10.058 13.1736 10.059 13.2V13.23C10.17 13.941 10.629 14.43 11.572 14.571V15.206C11.572 15.321 11.657 15.398 11.799 15.428H12.21C12.321 15.428 12.399 15.351 12.429 15.206V14.571C13.286 14.43 13.886 13.856 13.886 13.084ZM9.114 15.22C9.529 15.6 10.014 15.894 10.543 16.085C10.629 16.145 10.714 16.257 10.714 16.342V16.745C10.714 16.801 10.714 16.831 10.684 16.856C10.659 16.972 10.543 17.028 10.427 16.972C9.38721 16.6409 8.4797 15.9876 7.83571 15.1066C7.19172 14.2257 6.84462 13.1627 6.84462 12.0715C6.84462 10.9803 7.19172 9.9173 7.83571 9.03636C8.4797 8.15541 9.38721 7.50213 10.427 7.171C10.457 7.145 10.513 7.145 10.543 7.145C10.659 7.171 10.714 7.256 10.714 7.372V7.771C10.714 7.916 10.659 8.002 10.543 8.058C9.95862 8.26867 9.42781 8.60548 8.9883 9.04447C8.54879 9.48346 8.21136 10.0139 8 10.598C7.70535 11.3917 7.65387 12.2551 7.8521 13.0782C8.05034 13.9012 8.48931 14.6465 9.113 15.219M13.315 7.285C13.34 7.17 13.456 7.114 13.572 7.17C14.3574 7.42564 15.0705 7.86505 15.6519 8.45171C16.2334 9.03836 16.6664 9.75532 16.915 10.543C17.1202 11.1864 17.1966 11.8639 17.1396 12.5369C17.0827 13.2098 16.8936 13.8649 16.5832 14.4646C16.2727 15.0644 15.8471 15.597 15.3306 16.0321C14.814 16.4671 14.2168 16.796 13.573 17C13.543 17.026 13.487 17.026 13.457 17.026C13.341 17 13.286 16.915 13.286 16.799V16.4C13.286 16.255 13.341 16.169 13.457 16.113C14.0414 15.9023 14.5722 15.5655 15.0117 15.1265C15.4512 14.6875 15.7886 14.1571 16 13.573C16.196 13.0461 16.2856 12.4856 16.2637 11.9238C16.2418 11.3621 16.1089 10.8102 15.8725 10.3001C15.6362 9.79005 15.3011 9.33185 14.8867 8.95199C14.4723 8.57213 13.9867 8.27814 13.458 8.087C13.372 8.027 13.287 7.915 13.287 7.8V7.4C13.287 7.34 13.287 7.314 13.317 7.284"
      fill="#2775CA"
    />
  </svg>
);

const trophyIcon = (
  <svg
    width="11"
    height="12"
    viewBox="0 0 11 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.66642 0.583344C8.00879 0.583353 8.33915 0.693847 8.59433 0.893703C8.84951 1.09356 9.01162 1.36875 9.04966 1.66668H9.83408C10.1058 1.66669 10.3675 1.75614 10.5674 1.9173C10.7672 2.07845 10.8906 2.29951 10.913 2.53659L10.9167 2.61459V4.23959C10.9167 4.68925 10.7202 5.12188 10.3675 5.44872C10.0148 5.77556 9.53269 5.97184 9.01997 5.9973L8.89006 6.00055C8.68375 6.56328 8.29915 7.06314 7.78101 7.44192C7.26288 7.8207 6.63254 8.06284 5.96335 8.14014V8.97918H7.0478C7.56123 8.97929 8.05517 9.15139 8.42831 9.46019C8.80146 9.76899 9.02554 10.1911 9.05461 10.6399L9.05832 10.7396V11.0104C9.0583 11.1087 9.01761 11.2036 8.94379 11.2776C8.86997 11.3516 8.76803 11.3997 8.65684 11.4129L8.59436 11.4167H2.40565C2.29342 11.4168 2.18495 11.3813 2.10032 11.3168C2.0157 11.2522 1.96065 11.163 1.94539 11.0657L1.94168 11.0104V10.7396C1.94164 10.29 2.13803 9.85748 2.49059 9.53065C2.84315 9.20382 3.32515 9.00748 3.83776 8.98188L3.95221 8.97918H5.0348V8.14014C4.36583 8.06264 3.73575 7.82042 3.21785 7.44165C2.69996 7.06288 2.31554 6.56313 2.10933 6.00055L2.09386 6.00001C1.56064 6.00001 1.04925 5.81454 0.672203 5.4844C0.295157 5.15425 0.083334 4.70649 0.083334 4.23959V2.61459C0.083334 2.09134 0.568335 1.66668 1.16592 1.66668H1.95034C1.98839 1.36866 2.15059 1.09339 2.4059 0.893523C2.66122 0.693654 2.99172 0.583219 3.3342 0.583344H7.66642ZM7.0478 9.79168H3.95221C3.7078 9.79157 3.47054 9.86388 3.27903 9.99685C3.08752 10.1298 2.95304 10.3156 2.89745 10.524L2.88013 10.6042H8.11863C8.08376 10.3928 7.96838 10.1979 7.7912 10.0511C7.61402 9.90436 7.38542 9.81427 7.14245 9.79547L7.0478 9.79168ZM7.66642 1.39584H3.33358C3.21053 1.39584 3.09252 1.43864 3.00551 1.51483C2.9185 1.59102 2.86961 1.69435 2.86961 1.80209V5.05155C2.88021 5.6562 3.16196 6.23295 3.65404 6.65726C4.14613 7.08157 4.80906 7.3194 5.49969 7.3194C6.19033 7.3194 6.85326 7.08157 7.34534 6.65726C7.83742 6.23295 8.11918 5.6562 8.12977 5.05155V1.80209C8.12977 1.69435 8.08089 1.59102 7.99388 1.51483C7.90687 1.43864 7.78947 1.39584 7.66642 1.39584ZM9.83346 2.47918H9.0577V5.1783C9.29966 5.14819 9.52286 5.04728 9.69101 4.89199C9.85915 4.73671 9.96234 4.53617 9.98378 4.32301L9.98811 4.23959V2.61459C9.98806 2.58409 9.97623 2.55449 9.95456 2.5306C9.93289 2.50671 9.90265 2.48992 9.86872 2.48297L9.83346 2.47918ZM1.94168 2.47918H1.16592C1.12491 2.47918 1.08557 2.49344 1.05657 2.51884C1.02756 2.54424 1.01127 2.57868 1.01127 2.61459V4.23959C1.01123 4.46803 1.10541 4.68879 1.27647 4.86126C1.44754 5.03374 1.68398 5.14632 1.9423 5.1783L1.94168 2.47918Z"
      fill="#64758B"
    />
  </svg>
);

export default WorkCard;
